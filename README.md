# 🛒 MERN E-Commerce Web Application

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse products, view product details, and place orders seamlessly.

---

## 🚀 Features

- 🛍️ View all products (fetched from backend API)
- 🔍 Product details page with dynamic routing
- 🛒 Buy Now functionality with order placement flow
- 📦 Order creation with stock validation
- 🔄 Automatic stock update after order placement
- ⏳ Loading states for better user experience
- 🌐 Fully integrated frontend and backend
- 📡 REST API-based architecture

---

## 🧠 Tech Stack

### Frontend:
- React.js
- React Router
- Fetch API / Axios
- CSS / Inline Styling

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)

### Deployment:
- Backend: Render
- Frontend: (Vercel / Netlify)

---

## 📂 Project Structure
## 📂 Project Structure


client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.jsx

server/
├── models/
├── routes/
├── server.js



---

## 🔗 API Endpoints

### 🛍️ Products
- `GET /product` → Get all products
- `GET /product/:id` → Get single product

### 📦 Orders
- `POST /order/buy/:productId` → Place order
- `GET /order` → Get all orders

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash`
git clone https://github.com/your-username/your-repo-name.git

2️⃣ Backend setup
cd server
npm install
npm start

3️⃣Frontend setup
cd client
npm install
npm run dev

🌍 Live Demo
🔗 Backend: https://mern-backend-0zvk.onrender.com
🔗 Frontend: https://e-commerce-shopping-rho.vercel.app/


📌 Future Improvements
🔐 User Authentication (JWT)
💳 Payment Gateway Integration (Razorpay/Stripe)
🛒 Cart System
📍 Address Management
📦 Order Tracking

👨‍💻 Author
Yashraj Singh Thakur

GitHub: https://github.com/Yashraj595
LinkedIn: https://www.linkedin.com/in/yashraj-singh-thakur-7b3b05331/
