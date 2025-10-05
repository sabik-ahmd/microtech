# 📱 MicroTech Website

**MicroTech** — *iPhone & Android Service Experts*  
A modern, responsive website built with **React**, **Vite**, and **TailwindCSS**.  
It showcases the professional services, repaired projects, and certificates of MicroTech Service Center located in Puttur, Karnataka.

---

## 🌐 Live Website

🔗 [https://microtech1.netlify.app/](https://microtech1.netlify.app/)

---

## 🧰 Tech Stack

- ⚛️ **React 18** — Component-based UI
- ⚡ **Vite** — Fast development build tool
- 🎨 **Tailwind CSS** — Utility-first styling framework
- 🌍 **Netlify** — Deployment and hosting

---

## 📁 Folder Structure

microtech-website/
│
├── public/
│ ├── repaired/ # Images for repaired phones
│ ├── favicon.ico
│ └── index.html
│
├── src/
│ ├── assets/ # Posters and other static images
│ ├── components/ # Reusable UI components (Header, Footer, etc.)
│ ├── pages/ # Website pages (Home, Services, Projects, Contact, Certificates)
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css # Tailwind + custom styles
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
---

## ⚙️ Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/sabik-ahmd/microtech.git
   cd microtech

2. Install dependencies
 npm install

3. Start the development server
   npm run dev

4.  Open in your browser
   http://localhost:5173/

🧩 Build for Production

To create an optimized production build:
npm run build

🖼️ Adding Images

Store posters or brand images in:
src/assets/

Store repaired phone images in:
public/repaired/

Reference public images like:
<img src="/repaired/phone1.jpg" alt="Repaired Phone" />

Or import local images like:
import Poster from "../assets/poster.png";
<img src={Poster} alt="Poster" />;
📞 Contact

MicroTech - iPhone & Android Service Expert
📍 Ground Floor, Hindustan Building, Puttur, Karnataka 574201
📞 +91 96637 58588 / +91 91132 35714
📧 sabik.mh@gmail.com

🧑‍💻 Author

Developed by: Ahammad Sabik
📦 GitHub Repository: https://github.com/sabik-ahmd/microtech

📝 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute it.





