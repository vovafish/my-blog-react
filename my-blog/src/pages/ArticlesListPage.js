import articles from "./article-content";
import ArticlePage from "../components/ArticlesList";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlePage articles={articles} />
    </>
  );
};

export default ArticlesListPage;
