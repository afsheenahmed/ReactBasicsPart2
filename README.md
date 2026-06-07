# ⚛️ React App — Core Concepts Practice

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Learning_Repo-58A6FF?style=for-the-badge)

> Part of my **public learning journey** — learning React.js by building components that cover all core React concepts: Hooks, Routing, Mapping, Conditional Rendering, and Re-rendering.

## 🎯 Purpose

After mastering vanilla JavaScript and Ajax, this is where I started **React.js** — understanding how modern frontend frameworks work through hands-on component building.

## 🧩 Components Built

| Component | What It Covers |
|-----------|---------------|
| `Test.js` | `useState` counter — increment button, state re-render |
| `Todo.js` | `useState` + `useEffect` + `localStorage` + mapping tasks + conditional rendering |
| `Navbar` | React Router navigation — `<Link>` between pages |
| `Cards` | Props-driven reusable card — mapping array data |
| `Contact` | Controlled form inputs with `useState` |
| `Footer` | Reusable layout component |
| `APIComponent` | `useEffect` + `fetch()` + `.map()` to render API data |

## 💡 What I Learned

**React Hooks:**
- `useState` — managing and updating component state
- `useEffect` — running side effects (API calls, localStorage on mount)
- Dependency array `[]` — run once on mount vs run on every change

**Mapping in React:**
- `.map()` to loop over arrays and render lists of JSX elements
- `key` prop — why every mapped element needs a unique key
- Rendering dynamic lists from state arrays and API responses
- How `.map()` in React replaces `forEach` loops from vanilla JS

**Conditional Rendering:**
- Ternary operator — `{condition ? <p>Show this</p> : ''}`
- Short circuit — `{condition && <Component />}`
- Showing error messages, empty states, loading indicators
- Hiding/showing UI based on state values

**Re-rendering:**
- How React re-renders a component when `useState` value changes
- Why direct mutation (`array.push()`) does NOT trigger re-render
- Spread operator `[...prev, newItem]` — creating new array to trigger re-render
- Understanding the React render cycle — state change → re-render → updated UI

**State Management:**
- Updating arrays in state without mutation
- Persisting state to `localStorage` with `JSON.stringify` / `JSON.parse`
- Loading saved data on mount with `useEffect`

**React Router:**
- `<BrowserRouter>`, `<Routes>`, `<Route>` structure
- `<Link>` for navigation without page reload
- Single Page Application (SPA) concept

**Props & Components:**
- Passing data parent → child via props
- Building reusable components driven by props
- Component composition — building pages from small pieces

**Part of my public learning journey · [github.com/afsheenahmed](https://github.com/afsheenahmed)**
