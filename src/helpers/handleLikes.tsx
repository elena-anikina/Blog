const handleLikes = (articles, article) => {
  const idx = [...articles].findIndex((el) => el.slug === article.slug);
  const newArticles = [...articles.slice(0, idx), article, ...articles.slice(idx + 1)];

  return newArticles;
};

export default handleLikes;
