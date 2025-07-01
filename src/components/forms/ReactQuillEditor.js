import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function ReactQuillEditor({ value, onChange }) {
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ align: ["", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
  };
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={onChange}
      style={{ color: "black", backgroundColor: "white", height: "65vh" }}
    />
  );
}
export default ReactQuillEditor;
