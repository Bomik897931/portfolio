# 🚀 Mobile & Microservices Developer Portfolio

A modern, high-performance portfolio tailored for **Full-Stack Mobile Engineers (Flutter)** and **Backend Engineers (Java Spring Boot Microservices)**. Built with **React 19, Vite, and Tailwind CSS (Cyber Dark Theme)**.

Ready to deploy **100% free on GitHub Pages** with automated GitHub Actions CI/CD.

---

## ⚡ Quick Start (Local Development)

To run the portfolio on your local machine:

```powershell
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ How to Personalize Your Information

All portfolio content is decoupled and stored in a single easy-to-edit file:

📁 **`src/data/portfolioData.js`**

You can update:
- **Personal Details:** Name, job title, tagline, bio, location, and status.
- **Socials & Contact:** GitHub, LinkedIn, Email, and Resume link.
- **Key Metrics:** Years of experience, apps shipped, microservices deployed.
- **Skills Matrix:** Flutter, Bloc/Riverpod, Java 17/21, Spring Boot, Spring Cloud, Docker, Kafka, PostgreSQL, etc.
- **Projects:** Showcase your mobile apps and microservice architectures with live links, tags, and performance metrics.
- **Work History:** Past roles, companies, and achievements.

---

## 🌐 How to Deploy for Free on GitHub Pages

This project is pre-configured with a GitHub Actions workflow in `.github/workflows/deploy.yml` and a relative asset base in `vite.config.js`.

### Step 1: Initialize Git and Commit
```powershell
git init
git add .
git commit -m "Initial commit of Flutter & Java microservices portfolio"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new) (e.g., `portfolio` or `<your-username>.github.io`).
2. Run:
```powershell
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, navigate to your repository's **Settings** tab.
2. Click **Pages** in the left sidebar (under "Code and automation").
3. Under **Build and deployment > Source**, choose **GitHub Actions**.

### Step 4: That's It!
Every time you push a change to the `main` branch, GitHub Actions will automatically build and publish your site at:
```
https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/
```

---

## 🛠️ Tech Stack & Features
- **Frontend Core:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 + Custom Cyber Dark Glassmorphism
- **Icons:** Lucide Icons & Custom Brand SVGs
- **Theme:** Option A — Deep Cyber Dark Mode, glowing neon cyan/indigo accents, and responsive layout
- **Interactive Features:**
  - 4-Tier Architecture Diagram (Flutter Client ↔ Spring Cloud Gateway ↔ Microservices ↔ Distributed DB)
  - Interactive Live Simulated API Terminal
  - Filterable Skills Matrix & Project Showcase
  - 1-Click Clipboard Email Copy
  - Built-in GitHub Pages Deployment Modal Guide
