import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; //import2

function ReactQuillEditor({ style, value, onChange }) {
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "underline"],
      ],
    },
  };
  return (
    <>
      <ReactQuill
        style={style}
        modules={modules}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export default ReactQuillEditor;
