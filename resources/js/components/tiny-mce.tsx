import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createClient } from '@/lib/utils'
import { Button } from './ui/button'
import { setupOptions, type TinyMCEEditor } from '@/lib/tinyMce'
import { router } from '@inertiajs/react'
import { useRoute } from 'ziggy-js'

interface TinyMCEProps {
    title: string;
    subtitle: string;
    content: string;
    preview: string;
    isFreelance: boolean;
    isWebDevelopment: boolean;
    slug: string;
    status: string;
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
    subtitle,
    content,
    preview,
    isFreelance,
    isWebDevelopment,
    slug,
    status,
    isTech,
    isLife,
    isEntrepreneurship,
    isSideProject,
    isProductReview,
    isThoughts,
    onClearContent
}: TinyMCEProps) {
    const [isPublishing, setIsPublishing] = useState(false);
    const editorRef = useRef<TinyMCEEditor | null>(null);
    const supabase = createClient();
    const route = useRoute();
    const editingDraft = route().params.post as string | undefined;
    const titleOrSlugNotSet = title.trim() === '' || slug.trim() === '';

    const clearContent = () => {
        if (editorRef.current) {
            editorRef.current.setContent('');
        }

        if (onClearContent) {
            onClearContent();
        }
    };

    const handlePublish = async () => {
        if (titleOrSlugNotSet) {
            alert("Please fill in all required fields.");
            setIsPublishing(false);
            return;
        }

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

        router.visit(route('dashboard.posts.store'), {
            method: 'post',
            data: {
                title: title,
                subtitle: subtitle,
                preview_text: preview,
                content: content,
                slug: slug,
                status: status,
                published_at: status === 'published' ? new Date() : null,
                is_freelance: isFreelance,
                is_web_development: isWebDevelopment,
                is_tech: isTech,
                is_life: isLife,
                is_entrepreneurship: isEntrepreneurship,
                is_side_project: isSideProject,
                is_product_review: isProductReview,
                is_thoughts: isThoughts,
            },
            preserveState: true,
            preserveScroll: true,
        });

        logContent();
        clearContent();

        alert("Post published successfully! 🎉");
        setIsPublishing(false);

        const { error } = await supabase
            .from('blogs')
            .insert([{
                title: title,
                body: content,
                sub_title: subtitle,
                preview: preview,
                slug: slug,
                status: status,
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
            alert("Failed to publish post to Supabase. Please check the console for errors.");
            setIsPublishing(false);
            return;
        }

        alert("Post published to Supabase successfully! 🎉");
    };

    const handleUpdate = async () => {
        if (titleOrSlugNotSet) {
            alert("Please fill in all required fields.");
            setIsPublishing(false);
            return;
        }

        if (!window.confirm("Are you sure you want to update this post?")) {
            return;
        }

        setIsPublishing(true);

        if (!editorRef.current) {
            alert("Editor is not initialized. Please wait a moment and try again.");
            setIsPublishing(false);
            return;
        }

        const content = editorRef.current.getContent();

        router.visit(route('dashboard.posts.update', { post: editingDraft }), {
            method: 'patch',
            data: {
                title: title,
                subtitle: subtitle,
                preview_text: preview,
                content: content,
                slug: slug,
                status: status,
                published_at: status === 'published' ? new Date() : null,
                is_freelance: isFreelance,
                is_web_development: isWebDevelopment,
                is_tech: isTech,
                is_life: isLife,
                is_entrepreneurship: isEntrepreneurship,
                is_side_project: isSideProject,
                is_product_review: isProductReview,
                is_thoughts: isThoughts,
            },
            preserveState: true,
            preserveScroll: true,
        });

        logContent();
        clearContent();

        alert("Post updated successfully! 🎉");
        setIsPublishing(false);

        const { error } = await supabase
            .from('blogs')
            .update({
                title: title,
                body: content,
                sub_title: subtitle,
                preview: preview,
                slug: slug,
                status: status,
                is_freelance: isFreelance,
                is_web_development: isWebDevelopment,
                is_tech: isTech,
                is_life: isLife,
                is_entrepreneurship: isEntrepreneurship,
                is_side_project: isSideProject,
                is_product_review: isProductReview,
                is_thoughts: isThoughts,
            })
            .eq('slug', editingDraft);

        if (error) {
            console.error('Error updating post:', error.message);
            alert("Failed to update post in Supabase. Please check the console for errors.");
            setIsPublishing(false);
            return;
        }

        alert("Post updated in Supabase successfully! 🎉");
    };

    const logContent = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log('Title:', title);
            console.log(content);
            console.log('Other post properties:', {
                'subtitle': subtitle,
                'preview': preview,
                'slug': slug,
                'status': status,
                'published_at': status === 'published' ? new Date() : null,
                'is_freelance': isFreelance,
                'is_web_development': isWebDevelopment,
                'is_tech': isTech,
                'is_life': isLife,
                'is_entrepreneurship': isEntrepreneurship,
                'is_side_project': isSideProject,
                'is_product_review': isProductReview,
                'is_thoughts': isThoughts,
            });
        }
    };

    return (
        <>
            <Editor
                apiKey={import.meta.env.VITE_PUBLIC_TINYMCE_API_KEY}
                onInit={(_evt, editor) => editorRef.current = editor}
                value={content}
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

                            const publicUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/personal-website/' + filePath;

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
                {!editingDraft ? (
                    <Button
                        onClick={handlePublish}
                        className="hover:cursor-pointer"
                        disabled={isPublishing || titleOrSlugNotSet}
                    >
                        Publish
                    </Button>
                ) : (
                    <Button
                        onClick={handleUpdate}
                        className="hover:cursor-pointer"
                        disabled={isPublishing || titleOrSlugNotSet}
                    >
                        Update
                    </Button>
                )}
                <Button
                    onClick={logContent}
                    className="text-secondary hover:cursor-pointer"
                    variant="ghost"
                    disabled={isPublishing || titleOrSlugNotSet}
                >
                    Log Content
                </Button>
            </div>
        </>
    );
}
