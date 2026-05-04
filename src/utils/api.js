export const getSavedArticles = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) return reject(new Error("Not authorized"));
        resolve({ data: [] });
    });
};

export const saveArticle = (article, token) => {
    return new Promise((resolve, reject) => {
        if (!token) return reject(new Error("Not authorized"));
        resolve({
            data: {
                ...article,
                _id: "saved-" + Date.now(),
            },
        });
    });
};

export const deleteArticle = (id, token) => {
    return new Promise((resolve, reject) => {
        if (!token) return reject(new Error("Not authorized"));
        resolve({ data: { _id: id } });
    });
};
