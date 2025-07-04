import React, { useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../components/forms/Modal";
import Button from "../components/forms/Button";
import Dropdown from "../components/forms/Dropdown";
import Panel from "../components/ui/Panel";
import PreviewPage from "./PreviewPage";
import { useAddPostMutation } from "../store";
import ReactQuillEditor from "../components/forms/ReactQuillEditor";

function CreatePage({ categories, subCategories }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [addPost, result] = useAddPostMutation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);

  // For tracking changed inputs
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  // After choosing a category, sub-categories will be filterd
  const handleSelectCategory = (option) => {
    setSelectedCategory(option);
    const updatedSubCategories = subCategories.filter(
      (subCategory) => subCategory.categoryID == option.id
    );
    setFilteredSubCategories(updatedSubCategories);
  };

  const handleSelectSubCategory = (option) => {
    setSelectedSubCategory(option);
  };

  // Validate the inputs before post request
  const validate = (title, content, selectedCategory, selectedSubCategory) => {
    if (!title) {
      alert("제목을 작성해주세요.");
      return;
    } else if (!content) {
      alert("내용을 작성해주세요.");
      return;
    } else if (!selectedCategory) {
      alert("카테고리를 정해주세요.");
      return;
    } else if (!selectedSubCategory) {
      alert("하위 카테고리를 정해주세요.");
      return;
    } else {
      return true;
    }
  };

  // Open the modal for creating a new post
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validate(
      title,
      content,
      selectedCategory,
      selectedSubCategory
    );

    if (isValid) setShowModal(true);
  };

  // Close the modal
  const handleClose = () => {
    setShowModal(false);
  };

  // POST request for a new post
  const handleCreate = () => {
    const today = new Date();
    const post = {
      title,
      content,
      date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      categoryID: selectedCategory.id,
      subCategoryID: selectedSubCategory.id,
      path: nanoid(),
    };

    addPost(post);

    setShowModal(false);
  };

  // Button for the modal
  const actionBar = (
    <div>
      <Button primary onClick={handleCreate}>
        생성하기
      </Button>
    </div>
  );

  const modalContent = (
    <div>
      <p className="text-2xl mb-5">제목 : {title}</p>
      <p>생성하시겠습니까?</p>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <form onSubmit={handleFormSubmit} className="w-1/2 bg-[#4d4d4d] px-10">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="제목을 작성해주세요"
          className="py-10 text-4xl focus:outline-none"
        />
        <Panel className="justify-start mb-5">
          <div className="mr-2">
            <Dropdown
              options={categories}
              selection={selectedCategory}
              placeholder="카테고리"
              onSelect={handleSelectCategory}
            />
          </div>

          {selectedCategory && (
            <Dropdown
              options={filteredSubCategories}
              selection={selectedSubCategory}
              placeholder="하위 카테고리"
              onSelect={handleSelectSubCategory}
            />
          )}
        </Panel>
        <ReactQuillEditor value={content} onChange={handleEditorChange} />
        <div className="mt-15 mb-5 flex justify-end">
          <Button primary>만들기</Button>
        </div>
      </form>
      <div className="w-1/2 px-10 py-10">
        <PreviewPage title={title} content={content}></PreviewPage>
      </div>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default CreatePage;
