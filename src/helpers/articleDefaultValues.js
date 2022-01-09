export const tagsDefaultValues = Array.from({length: 2}).reduce((acc, curr, i) => {
    acc[`tag${i+1}`] = 'meow';
    return acc;
}, {});

export const articleDefaultValues = {
    "Title": '',
    "Short description": '',
    "Text": '',
    ...tagsDefaultValues
};


