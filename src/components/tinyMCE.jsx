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
    // 
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
