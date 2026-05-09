# News Explorer

A responsive React application that allows users to search for news articles and save their favorites to a personal account.

## About the Project

News Explorer is a full-stack web application built as part of the TripleTen web development program. The frontend allows users to search for news articles using the News API, view results in a card grid, and save articles to their personal account. Users can also view and manage their saved articles on a dedicated page.

## Project Status

This repository contains the **Stage 1 frontend**. Authentication and article persistence are wired through stub functions in `src/utils/auth.js` and `src/utils/api.js` that return Promises resolving to fake data. This allows the full UI flow to be exercised end-to-end without a live backend. In Stage 2/3 the internals of these stubs will be replaced with real `fetch` calls to an Express backend — components will not need to change.

## Features

- Search for news articles by keyword (NewsAPI integration)
- View search results in a responsive card grid
- User registration and sign-in (stub auth)
- Persistent login across page refresh (token stored in `localStorage`)
- Save articles to a personal account
- View saved articles with keyword tags
- Delete saved articles
- Logout
- Submit-button locking to prevent double-submits while a Promise is in flight
- Dynamic keyword display on the saved-articles page
- Fully responsive design for desktop, tablet, and mobile

## Live Demo

[promotion video](https://drive.google.com/uc?id=1JxLSrq4r20btVjYJVcV3zsnJOvZAL0rB&export=download)

## Technologies

- React 19
- React Router DOM (client-side routing)
- Vite (build tool)
- CSS Modules with BEM naming convention
- CSS custom properties (design tokens)
- Custom fonts via @font-face (Inter, Roboto, Roboto Slab)
- News API

## Project Structure

```
src/
  components/
    App/
    Header/
    Navigation/
    Hero/
    SearchForm/
    Main/
    NewsCard/
    NewsCardList/
    SavedNews/
    About/
    Footer/
    Preloader/
    NothingFound/
    ModalWithForm/
    LoginModal/
    RegisterModal/
    SignupSuccessModal/
  images/
  utils/
    auth.js          // Stage 1 auth stubs (register, authorize, checkToken)
    api.js           // Stage 1 article stubs (getSavedArticles, saveArticle, deleteArticle)
    newsApi.js       // NewsAPI integration
    mockData.js      // Sample article data for development
  vendor/
    fonts/
    fonts.css
  index.css
  root.css
  main.jsx
```

## Pages

- `/` — Home page with search form and results
- `/saved-news` — Saved articles page (requires login)

## Stage 1 Stub Architecture

To preserve the same component API across stages, all backend interactions are wrapped in Promise-returning functions. For example:

```js
// src/utils/auth.js
export const authorize = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        if (!email || !password)
            return reject(new Error("Missing email or password"));
        resolve({ token: "fake-jwt-token-12345" });
    });
};
```

Components consume these stubs identically to how they will consume real `fetch`-based versions in Stage 2:

```js
auth.authorize({ email, password })
    .then((data) => localStorage.setItem("jwt", data.token))
    .catch((err) => console.error(err));
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Responsive Design

The application is fully responsive and supports the following breakpoints:

- Desktop: 1440px and above
- Tablet: 768px
- Mobile: 320px

## Deployment

The frontend is deployed to GitHub Pages.

## Future Plans (Stage 2 & 3)

- Replace stub functions in `auth.js` and `api.js` with real `fetch` calls to an Express backend
- User registration and authentication via JWT against a live MongoDB database
- Persist saved articles to the backend so they survive across devices and sessions
- Refactor `currentUser` and `isLoggedIn` from prop drilling to React Context
- Add form validation using `useFormWithValidation` custom hook
- Deploy backend to Google Cloud
