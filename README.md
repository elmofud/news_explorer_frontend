# News Explorer

A responsive React application that allows users to search for news articles and save their favorites to a personal account.

## About the Project

News Explorer is a full-stack web application built as part of the TripleTen web development program. The frontend allows users to search for news articles using the News API, view results in a card grid, and save articles to their personal account. Users can also view and manage their saved articles on a dedicated page.

## Features

- Search for news articles by keyword
- View search results in a responsive card grid
- Save articles to a personal account
- View saved articles with keyword tags
- Delete saved articles
- User authentication (Sign In / Sign Up)
- Fully responsive design for desktop, tablet, and mobile

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
  vendor/
    fonts/
    fonts.css
  utils/
    mockData.js
  index.css
  root.css
  main.jsx
```

## Pages

- `/` — Home page with search form and results
- `/saved-news` — Saved articles page (requires login)

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

- Connect to a backend API for user authentication and article saving
- Add bookmark/save functionality
- Add hamburger menu for mobile navigation
- Deploy backend to Google Cloud
