# News App 📰

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-success)

---

## 📄 Description

**News App** is a **responsive news viewer application** built using **React** and **Vite**, powered by a **third-party News API**.  
Users can browse current news headlines and search for articles by keyword or category.

The app uses **Netlify Functions** as a proxy to keep your **API key secure**, so it is **never exposed in the frontend**.

---

## 📋 Table of Contents

- [Preview](#preview)
- [Screenshot](#screenshot)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Build](#build)
- [Deployment](#deployment)
- [License](#license)

---

## Preview
- https://news-app-reactjs-project.netlify.app/

---

## Screenshot
<img width="3840" height="2046" alt="News App" src="https://github.com/user-attachments/assets/0c86be75-4b59-4eeb-a1ba-c449eb5460d9" />

---

## Features

* 🗞️ **News Fetching** — Latest news from the API
* 🔍 **Search Functionality** — Find articles by keyword
* 📱 **Responsive UI** — Works well on mobile & desktop
* ⚡ **Fast Dev UX** — Built with Vite for hot reloads
* 🔒 **Secure API Keys** — Using Netlify Functions and `.env`
* 🚀 **Hosted on Netlify** — Automatic deploys from GitHub

---

## Technologies Used

* **React** – UI library  
* **Vite** – Build tool  
* **JavaScript (ES6+)**  
* **Fetch API** – For HTTP requests  
* **CSS** – Styling  
* **Netlify Functions** – Serverless proxy for API  
* **Netlify** – Hosting

---

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd new-news-api-app
````

2. **Install dependencies**

```bash
npm install
```

---

## Environment Variables

1. Create a `.env` file in the project root with your News API key:

```
VITE_NEWS_API_KEY=your_api_key_here
```

2. Replace `your_api_key_here` with your actual News API key.

> ⚠️ Do **not** commit your `.env` file — it should remain local and private.

---

## Usage

After setup, start the development server:
### Run locally with Netlify Functions:

```bash
netlify dev
```

* Runs the Vite frontend on `http://localhost:8888`
* Runs the Netlify Functions proxy on `http://localhost:8888/.netlify/functions/gnews-proxy`

Now, the app fetches news securely through the proxy instead of exposing your API key.

---

## Project Structure

```
new-news-api-app/
│
├── netlify/
│   └── functions/        # Netlify serverless functions
│       └── gnews-proxy.js
├── public/               # Static assets (index.html, favicon)
├── src/                  # React source code
│   ├── components/       # Reusable components
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Vite entrypoint
│   └── index.css         # CSS/SCSS styles
│
├── .env                  # Local environment variables
├── package.json          # Scripts & dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This documentation
```

---

## Build

For production:

```bash
npm run build
```

The optimized build is output to the `dist/` folder.

---

## Deployment

1. Push your changes to GitHub:

```bash
git add .
git commit -m "Update news app"
git push origin main
```

2. Netlify automatically builds and deploys the site.

**Settings for Netlify deployment:**

| Setting        | Value               |
| -------------- | ------------------- |
| Build command  | `npm run build`     |
| Publish folder | `dist`              |
| Functions dir  | `netlify/functions` |

---

## License

This project is open source and free to use for personal or educational purposes.

---

## Notes

* Make sure your News API supports CORS or use the Netlify Functions proxy.
* Use `netlify dev` for **local development with serverless functions**.
