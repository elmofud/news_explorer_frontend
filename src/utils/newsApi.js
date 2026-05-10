import mockArticles from "./mockData.js";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

export const getNewsArticles = async (keyword) => {
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);
    const url = `${BASE_URL}?q=${keyword}&from=${weekAgo.toISOString()}&to=${today.toISOString()}&pageSize=100&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`News API error: ${response.status}`);
        }

        const data = await response.json();
        return data.articles.map((article, index) => ({
            id: `article-${index}`,
            title: article.title,
            info: article.description,
            imageUrl: article.urlToImage,
            date: new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            source: article.source.name,
            url: article.url,
            keyword: "",
        }));
    } catch (error) {
        console.warn("News API unavailable, using mock data:", error.message);
        return mockArticles;
    }
};
