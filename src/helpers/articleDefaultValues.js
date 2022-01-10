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

export const getArticleDefaultValues = (type) => {
    switch (type) {
        case 'new':
            return {
                "Title": '',
                "Short description": '',
                "Text": '',
                ...tagsDefaultValues
            }

        case 'edit':
            return {
                "Title": '',
                "Short description": '',
                "Text": '',
                ...tagsDefaultValues
            }
    }
};


