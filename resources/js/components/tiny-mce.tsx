import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createClient } from '@/lib/utils'
import { Button } from './ui/button'
import { setupOptions, type TinyMCEEditor } from '@/lib/tinyMce'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import { ChevronsUpDown } from 'lucide-react'

interface TinyMCEProps {
    title: string;
    subTitle: string;
    preview: string;
    isFreelance: boolean;
    isWebDevelopment: boolean;
    slug: string;
    isTech: boolean;
    isLife: boolean;
    isEntrepreneurship: boolean;
    isSideProject: boolean;
    isProductReview: boolean;
    isThoughts: boolean;
    onClearContent?: () => void;
}

export default function TinyMCE({
    title,
    subTitle,
    preview,
    isFreelance,
    isWebDevelopment,
    slug,
    isTech,
    isLife,
    isEntrepreneurship,
    isSideProject,
    isProductReview,
    isThoughts,
    onClearContent
}: TinyMCEProps) {
    const [isPublishing, setIsPublishing] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const supabase = createClient();

    const clearContent = () => {
        if (editorRef.current) {
            editorRef.current.setContent('');
        }

        if (onClearContent) {
            onClearContent();
        }
    };

    const handlePublish = async () => {
        if (!window.confirm("Are you sure you want to publish this post?")) {
            return;
        }

        setIsPublishing(true);

        if (!editorRef.current) {
            alert("Editor is not initialized. Please wait a moment and try again.");
            setIsPublishing(false);
            return;
        }

        const content = editorRef.current.getContent();

        const { error } = await supabase
            .from('blogs')
            .insert([{
                title: title,
                body: content,
                sub_title: subTitle,
                preview: preview,
                slug: slug,
                is_freelance: isFreelance,
                is_web_development: isWebDevelopment,
                is_tech: isTech,
                is_life: isLife,
                is_entrepreneurship: isEntrepreneurship,
                is_side_project: isSideProject,
                is_product_review: isProductReview,
                is_thoughts: isThoughts,
            }]);

        if (error) {
            console.error('Error publishing post:', error.message);
            alert("Failed to publish post. Please check the console for errors.");
            setIsPublishing(false);
            return;
        }

        logContent();
        clearContent();

        alert("Post published successfully! 🎉");
        setIsPublishing(false);
    };

    const logContent = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log('Title:', title);
            console.log(content);
            console.log('Other post properties:', {
                'sub title': subTitle,
                'preview': preview,
                'is freelance': isFreelance,
                'is web development': isWebDevelopment,
                'slug': slug,
                'is tech': isTech,
                'is life': isLife,
                'is entrepreneurship': isEntrepreneurship,
                'is side project': isSideProject,
                'is product review': isProductReview,
                'is thoughts': isThoughts,
            });
        }
    };

    return (
        <>
            <Editor
                apiKey={import.meta.env.VITE_PUBLIC_TINYMCE_API_KEY}
                onInit={(_evt, editor) => editorRef.current = editor}
                init={{
                    height: 600,
                    menubar: true,
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | addAsideClass | addHeading2Class | addHeading3Class | addMb2Class | add!Mb0Class',
                    setup: (editor: TinyMCEEditor) => setupOptions(editor),
                    paste_data_images: true,
                    image_advtab: true,
                    content_css: 'dark',
                    body_class: 'tinymce-rte',
                    browser_spellcheck: true,
                    skin: 'oxide-dark',
                    line_height_formats: '1 1.1 1.2 1.3 1.4 1.5 1.75 2',
                    images_upload_handler: async (blobInfo: {blob: () => File; filename: () => string}) => {
                        const file = blobInfo.blob();
                        const fileName = blobInfo.filename();
                        const filePath = `tinymce-images/${Date.now()}-${fileName}`;

                        try {
                            const { error } = await supabase
                                .storage
                                .from('personal-website')
                                .upload(filePath, file, {
                                  contentType: file.type,
                                });

                            if (error) {
                                console.error('Error uploading image:', error);
                                throw new Error('Error uploading image');
                            }

                            const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/personal-website/' + filePath;

                            console.log('Image uploaded successfully:', publicUrl);
                            return publicUrl;
                        } catch (error) {
                            console.error('Error uploading image:', error);
                            throw error;
                        }
                    },
                }}
            />
            <div className="flex justify-center items-center space-x-4 mr-auto">
                <Button
                    onClick={handlePublish}
                    className="hover:cursor-pointer"
                    disabled={isPublishing}
                >
                    Publish
                </Button>
                <Button
                    onClick={logContent}
                    className="text-secondary hover:cursor-pointer"
                    variant="ghost"
                    disabled={isPublishing}
                >
                    Log Content
                </Button>
            </div>
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="absolute top-1/4 -left-3/4 hidden lg:block text-muted text-base leading-none hover:text-black dark:hover:text-white"
            >
                <h4 className="text-base text-muted-foreground">Publish Notes</h4>
                <CollapsibleTrigger>
                    <ChevronsUpDown />
                    <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="text-primary rounded p-4 bg-secondary">
                        <ul>
                            <li>Add title, and slug</li>
                            <li>Select applicable tags</li>
                            <li>Add optimized images</li>
                            <li>Add text-2xl to H2&apos;s</li>
                            <li>Add text-xl to H3&apos;s</li>
                            <li>Add .aside class where needed</li>
                            <li>Underline links</li>
                            <li>P tags above UL&apos;s will get margin</li>
                            <li>Log and inspect content before publishing</li>
                            <li>Confirm post and media uploads in supabase</li>
                        </ul>
                        <div className="text-xs mt-6">
                            <hr />
                            <div className="mt-5">
                                <div>- p el&apos;s have &apos;mb&apos; of 1.5rem (mobile) and 1.75rem (desktop)</div>
                                <div>- H2&apos;s, H3&apos;s, and img&apos;s are the same</div>
                                <div>- Apply mb-0! to p tags above ul&apos;s if the margin is not desired</div>
                            </div>
                        </div>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
}
