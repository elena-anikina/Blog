const deleteLocalStorageValues = () => {
  localStorage.removeItem('Title');
  localStorage.removeItem('Short description');
  localStorage.removeItem('Text');
};

export default deleteLocalStorageValues;
