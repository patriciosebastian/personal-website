import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { createClient } from '../utils/supabase/client'
import { Button } from './ui/button'

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
  isThoughts
}) {
  const editorRef = useRef(null);
  const supabase = createClient();

  const handlePublish = async () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getContent();

    const { data, error } = await supabase
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
      return;
    }
    alert("Post published successfully! 🎉 Pubslished post 'data' has been logged in the console");
    console.log('Published post:', data);
  };

  // Keep this log for personal use
  const logContent = async () => {
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
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          height: 600,
          menubar: true,
          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          paste_data_images: true,
          image_advtab: true,
          images_upload_handler: async (blobInfo, success, failure) => {
            try {
              const file = blobInfo.blob();
              const fileName = blobInfo.filename();
              const filePath = `tinymce-images/${Date.now()}-${fileName}`;

              const { data: uploadData, error: uploadError } = await supabase
                .storage
                .from('personal-website')
                .upload(filePath, file, {
                  contentType: file.type,
                });

              if (uploadError) {
                console.error('Error uploading image:', uploadError.message);
                failure('Error uploading image');
                throw uploadError;
              }

              const { data: { publicUrl } } = supabase.storage.from('personal-website').getPublicUrl(filePath);

              if (!publicUrl) {
                console.log('No "publicURL" found for image:', filePath);
              }

              console.log('Image uploaded successfully:', publicUrl);
              success(publicUrl);
            } catch (error) {
              failure(error.message);
            }
          },
        }}
      />
      <Button
        onClick={handlePublish}
        className="mt-4 mr-2"
        disabled
      >
        Publish
      </Button>
      <Button
        onClick={logContent}
        className="mt-4 text-secondary"
        variant="ghost"
      >
        Log Content
      </Button>
    </>
  );
}
