import React, { useState } from "react";
import Modal from "../components/forms/Modal";
import Button from "../components/forms/Button";
import { useAddPostMutation } from "../store";
import ReactQuillEditor from "../components/forms/ReactQuillEditor";

function Create() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addPost, result] = useAddPostMutation();

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCreate = () => {
    const today = new Date();
    const post = {
      title,
      content,
      date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
    };

    addPost(post);

    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleCreate}>
        생성하기
      </Button>
    </div>
  );

  const modalContent = (
    <div>
      <h3>제목 : {title}</h3>
      <h4>생성하시겠습니까?</h4>
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleFormSubmit} className="w-[calc(100vw-160px)] h-100">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="주제"
          className="px-5 py-10 text-4xl w-[calc(100vw-160px)]"
        />
        <ReactQuillEditor value={content} onChange={handleEditorChange} />
        <Button primary>만들기</Button>
      </form>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default Create;
