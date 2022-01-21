export const tagsDefaultValues = (tagList = ['tag']) =>
  tagList.reduce((acc, curr, i) => {
    acc[`tag${i + 1}`] = curr;
    return acc;
  }, {});

export const articleDefaultValues = {
  Title: '',
  'Short description': '',
  Text: '',
  ...tagsDefaultValues,
};

export const getArticleDefaultValues = (type, article) => {
  switch (type) {
    case 'new':
      return {
        Title: '',
        'Short description': '',
        Text: '',
        ...tagsDefaultValues,
      };

    case 'edit':
      return {
        Title: article?.title,
        'Short description': '',
        Text: '',
        ...tagsDefaultValues,
      };

    default:
      return {
        Title: '',
        Text: '',
        ...tagsDefaultValues,
      };
  }
};
