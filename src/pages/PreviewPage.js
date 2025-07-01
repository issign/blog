import DOMPurify from "dompurify";

function PreviewPage({ title, content }) {
  const cleanHtml = DOMPurify.sanitize(content);

  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </div>
  );
}

export default PreviewPage;
