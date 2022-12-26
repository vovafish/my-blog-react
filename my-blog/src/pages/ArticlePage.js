import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticalInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticalInfo();
  }, [articleId]);

  //const { articleId } = params;
  const article = articles.find((article) => article.name === articleId);

  return !article ? (
    <NotFoundPage />
  ) : (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvotes</p>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
