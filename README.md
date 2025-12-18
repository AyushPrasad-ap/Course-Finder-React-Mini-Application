# 🚀 Course Finder — React Mini Application

Web developer intern assignment - Marketing Mojito

A **space / interstellar–themed Course Finder mini app** built with **React** as part of a **Web Developer Intern assignment**.

The application allows users to search and filter a list of courses by name and category, while showcasing clean UI design, component-based architecture, and modern React practices.

---

## ✨ Features

* 🔍 **Search Courses** by name or keywords
* 🗂️ **Filter Courses by Category** (custom glass-style dropdown)
* 📚 **Course Cards** with title, category, level, and duration
* 🌌 **Interstellar / Glassmorphism UI** with dark theme
* 💬 **Motivational Quote** fetched from a public API
* ⚛️ **Component-Based Architecture** using React Hooks
* 📱 **Fully Responsive** (Desktop & Mobile)

---

## 🛠 Tech Stack

* **React (Vite)** – Frontend framework
* **JavaScript (ES6+)**
* **Plain CSS** (No Tailwind / UI libraries)
* **Public API** – `quotable.io` (for motivational quotes)

---

## 📁 Project Structure

```
course-finder/
│
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── CustomSelect.jsx
│   │   ├── CourseList.jsx
│   │   └── CourseCard.jsx
│   │
│   ├── data/
│   │   └── courses.js
│   │
│   └── api/
│       └── quoteApi.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd course-finder
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will run locally at:

```
http://localhost:5173
```

---

## 🌐 Deployment

This project can be deployed using any free hosting platform such as:

* **Vercel** (Recommended)
* **Netlify**

### Build Command

```bash
npm run build
```

### Output Directory

```
dist/
```

Ensure the deployed link is publicly accessible.

---

## 🎨 Design Highlights

* Dark **space-inspired background** with nebula gradients
* **Glassmorphism cards** using backdrop blur
* Custom **glass dropdown component** (no native `<select>`)
* Smooth hover and focus states
* Clean typography with good contrast

---

## 📱 Responsiveness

The UI is optimized and tested for:

* 🖥️ Desktop: `1600 × 900`
* 📱 Mobile: `414 × 749`

---

## 🧠 Learning Outcomes

* Building reusable React components
* Managing state using `useState`, `useEffect`, and `useMemo`
* Creating custom UI components without external libraries
* Implementing modern UI design with plain CSS
* Handling UI layering, z-index, and overflow correctly

---

## 📌 Assignment Context

This project was built as part of a **Web Developer Intern technical assignment**, focusing on:

* React fundamentals
* Clean component structure
* UI/UX quality
* Responsiveness
* Deployment readiness

---

## 👤 Author

**Ayush Prasad**
Aspiring Software Developer | Frontend & React Enthusiast

---

## 📄 License

This project is for educational and evaluation purposes only.

---

⭐ If you like this project, feel free to star the repository!
