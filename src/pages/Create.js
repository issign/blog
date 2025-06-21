import React, { useState } from "react";
import axios from "axios";
import Modal from "../components/forms/Modal";
import ReactQuillEditor from "../components/forms/ReactQuillEditor";

function Create() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleCreate = async () => {
    const res = await axios.post("http://localhost:3001/posts", {
      content,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleFormSubmit} className="w-[calc(100vw-160px)]">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="주제"
          className="px-5 py-10 text-4xl w-[calc(100vw-160px)]"
        />
        <ReactQuillEditor value={content} onChange={handleEditorChange} />
        <div onClick={handleCreate}>Create</div>
      </form>
    </div>
  );
}

export default Create;
