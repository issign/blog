import React, { useState } from "react";
import axios from "axios";
import ReactQuillEditor from "../components/forms/ReactQuillEditor";

function Create() {
  const [content, setContent] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleCreate = async () => {
    const res = await axios.post("http://localhost:3001/posts", {
      content,
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <ReactQuillEditor value={content} onChange={handleEditorChange} />
      </div>

      <div onClick={handleCreate}>Create</div>
    </div>
  );
}

export default Create;
