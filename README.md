# 🛒 ShopKaro E-Commerce App

A fully responsive, modern, and feature-rich **E-Commerce Web Application** built using **React**, **Redux Toolkit**, and **Tailwind CSS**. It supports product browsing, category filtering, search, cart management, dark/light mode, and error handling — all wrapped in a clean and scalable folder structure.

---

## 🚀 Features

- 🌓 **Dark / Light Mode Toggle**  
  Switch between light and dark themes, saved in `localStorage`.

- 🔍 **Smart Search Functionality**  
  Instantly search products by name using dynamic route filtering.

- 🛍️ **Category-Based Browsing**  
  Browse products based on category from the home or menu.

- 🧾 **Detailed Product View**  
  View complete information about a selected product.

- 🛒 **Add to Cart / Remove from Cart**  
  Fully functional cart with quantity control and local state.

- ➕ **Quantity Increment / Decrement**  
  Easily adjust quantity from the cart interface.

- 🔔 **Toast Notifications**  
  User feedback for actions like add/remove using `react-toastify`.

- 🧭 **Sidebar Navigation**  
  Toggle sidebar menu for navigation (especially mobile-friendly).

- 🔝 **Auto Scroll-To-Top**  
  Automatically scrolls to top on route change for smooth UX.

- 💅 **Framer Motion Animations**  
  Smooth entrance/exit animations using `framer-motion`.

- 💯 **Fully Responsive Design**  
  Mobile-first layout using TailwindCSS for seamless device support.

- 🧩 **Reusable UI Components**  
  Modular design with `ProductCard`, `Skeleton`, `Carousel`, etc.

- 🧠 **Redux Toolkit Integration**  
  Global state management for cart and products using modern Redux.

---

## 📁 Folder Structure

```
/src
│
├── api/                    # API handling (axios setup, product APIs)
│   ├── axiosInstance.js
│   └── productApi.js
│
├── app/                    # Redux store and global setup
│   └── store.js
│
├── components/             # Shared layout components like Navbar, Footer
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ScrollToTop.jsx
│   └── Sidebar.jsx
│
├── data/                   # Static JSON/category data
│   ├── categories.json
│   └── categoriesObj.json
│
├── features/               # Redux slice (cart, etc.)
│   └── cartSlice.js
│
├── pages/                  # Route-based pages (Home, Cart, Products)
│   ├── cart/
│   │   └── Cart.jsx
│   │
│   ├── home/
│   │   ├── Home.jsx
│   │   └── Home-Components/
│   │       ├── Category.jsx
│   │       ├── ProductCarousel.jsx
│   │       └── ProductsList.jsx
│   │
│   └──  products/
│        ├── ProductDetails.jsx
│        ├── ProductsByCategory.jsx
│        └── ProductsBySearch.jsx
│
│
├── ui/                     # Reusable UI components and skeletons
│   ├── ProductCard.jsx
│   ├── ProductCardSkeletonList.jsx
│   ├── ProductCarouselSkeleton.jsx
│   ├── ProductDetailsSkeleton.jsx
│   └── ProductsByCategorySkeleton.jsx
│
│
├── utils/                  # Helper functions (e.g., localStorage, price)
│   ├── localStorage.js
│   └── price.js
│
├── App.jsx                # Main app component with routing
├── App.css                # App-wide styles
├── index.css              # Tailwind + base styles
├── main.jsx                # Entry point for rendering the app
```

---

## 🛠️ Tech Stack

| Technology         | Purpose / Usage                               |
| ------------------ | --------------------------------------------- |
| **React**          | Frontend library for building UI components   |
| **Vite**           | Fast dev server and build tool                |
| **Redux Toolkit**  | Global state management (e.g. cart, products) |
| **React Router**   | Client-side routing and navigation            |
| **Tailwind CSS**   | Utility-first CSS framework for styling       |
| **Framer Motion**  | Animations and transitions for UI/UX          |
| **React Toastify** | Toast notifications for user feedback         |

---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone  https://github.com/Kunal-Kumar-Soni/E-commerce-website.git

# Go into the folder
cd E-commerce

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🙋‍♂️ Author

> Designed & developed with ❤️ by Kunal Kumar Soni

# E_commerce
