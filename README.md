
# 🤖 React RoboFriends

A small React application built with **Vite** and **Functional Components** to strengthen core React concepts — component structure, props, and one-way data flow.  
This project focuses on writing clean, modular, and reusable code while understanding how React works under the hood.


## Tech Stack

- **React.js** (Functional Components)
- **Vite** (Build Tool)
- **JavaScript (ES6+)**
- **Tachyons CSS**
- **JSONPlaceholder API** (mock user data)
- **RoboHash** (dynamic robot avatars)


## What I Learned

- Component-based architecture  
- Passing and destructuring props  
- Rendering lists with `.map()`  
- Managing state and lifecycle methods `(componentDidMount)`
- Performing HTTP requests with `fetch()`
- One-way data flow in React  
- Handling loading states and conditional rendering
- Clean and readable JSX structure  

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
┣ comtainers/                      # Smart components (with state and lifecycle)
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

- Component-based and scalable architecture

- Instant reload with Vite


## Author

Pedro Teixeira — Full-Stack Developer (C#, .NET & React)
[GitHub](https://github.com/PedroTeixeira2308) | [LinkedIn](https://www.linkedin.com/in/pedro-teixeira-967615347
)


## License

[MIT](https://choosealicense.com/licenses/mit/)

