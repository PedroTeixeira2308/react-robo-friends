
# 🤖 React RoboFriends (v2 — Hooks Edition)

![React](https://img.shields.io/badge/React-Hooks-blue?logo=react)
![Version](https://img.shields.io/badge/version-2.0-green)
![Vite](https://img.shields.io/badge/Built%20with-Vite-orange?logo=vite)
![License](https://img.shields.io/badge/License-MIT-lightgrey)


A modernized version of the original RoboFriends app — now built with **React Hooks** and **Functional Components**.  
This project demonstrates how to migrate from class-based components to hooks, applying **`useState`**, **`useEffect`** to manage state and side effects in a clean, declarative way.


**Live Demo:** [View Project Here ↗](https://pedroteixeira2308.github.io/react-robo-friends/)

## Tech Stack

- **React.js** (Hooks + Functional Components)
- **Vite** (Build Tool)
- **JavaScript (ES6+)**
- **Tachyons CSS**
- **JSONPlaceholder API** (mock user data)
- **RoboHash** (dynamic robot avatars)


## Version History

| Version | Description |
|----------|--------------|
| **v1.0** | Initial version using **Class Components** and `componentDidMount()` |
| **v2.0** | Full refactor to **Hooks** (`useState`, `useEffect`), better state separation, cleaner architecture |

---

## What I Learned

- Rewriting **class components** into **functional components with Hooks**
- Using **`useState`** to manage local state
- Implementing **`useEffect`** to handle side effects (data fetching, lifecycle equivalents)
- Avoiding **infinite re-renders** with dependency arrays
- Understanding **component reactivity** and dependency management
- Creating cleaner, smaller, and more **reusable components**
- Comparing lifecycle methods vs hooks equivalents (`componentDidMount` → `useEffect`)


## Setup

```bash
git clone https://github.com/PedroTeixeira2308/react-robo-friends.git

cd react-robo-friends

npm install
npm run dev
```
## Project Structure
```markdown
src/
┣ assets/
┣ components/                      # Pure components (stateless)
┃ ┣ Card.jsx
┃ ┣ CardList.jsx
┃ ┣ Scroll.jsx
┃ ┗ SearchBox.jsx
┣ comtainers/                      # Smart components (stateful with hooks)
┃ ┣ App.css
┃ ┣ App.jsx
┃ ┗ SEGA.woff
┣ data/
┃ ┗ robots.js
┣ index.css
┗ main.jsx
```

## Features

- Search robots by name

- Fetch user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

- State management with **`useState`**

- Side effects with **`useEffect`** (replacing **`componentDidMount`**)

- Clean, modular, and scalable architecture

- Instant reload with Vite


## Author

Pedro Teixeira — Full-Stack Developer (C#, .NET & React)
[GitHub](https://github.com/PedroTeixeira2308) | [LinkedIn](https://www.linkedin.com/in/pedro-teixeira-967615347
)


## License

[MIT](https://choosealicense.com/licenses/mit/)

