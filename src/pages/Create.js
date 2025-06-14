import React, { useState } from "react";
import ReactQuillEditor from "../components/forms/ReactQuillEditor";

function Create() {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value); // 상태 업데이트
  };

  const handleCreate = () => {
    console.log(content);
  };

  return (
    <div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>

      <ReactQuillEditor
        value={content}
        onChange={handleEditorChange}
        style={{ width: "100%", height: "100%" }}
      />

      <div onClick={handleCreate}>Create</div>
    </div>
  );
}

export default Create;
