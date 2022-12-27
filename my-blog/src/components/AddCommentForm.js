import axios from "axios";
import { useState } from "react";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const response = axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });
    const updatedArticle = (await response).data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        {/* This is a two-way binding between input and value of the state*/}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          row="4"
          cols="50"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
