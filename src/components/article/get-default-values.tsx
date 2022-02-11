export const getDefaultValues = (slug, article) => {

    const storageTitle = () => localStorage.getItem('Title');
    const storageDescription = () => localStorage.getItem('Short description');
    const storageText = () => localStorage.getItem('Text');

    return (
        {
            Title: slug ? storageTitle() || article?.title : storageTitle() || '',
            'Short description': slug ? storageDescription() || article?.description : storageDescription() || '',
            Text: slug ? storageText() || article?.body : storageText() || '',
        }
    );
}