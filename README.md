# Simple Client-side Authentication (Next.js + TypeScript + Tailwind + shadcn)

A simple login/dashboard flow built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
This project was created as part of a coding task.

## 🚀 Features

- 📱 Login with Iranian mobile number validation
- 🔐 Client-side authentication using localStorage
- 🌐 Random user data fetched from [randomuser.me](https://randomuser.me)
- 🏠 Dashboard with user profile (name, email, picture)
- 🚪 Logout functionality
- 🎨 Responsive UI with Tailwind + shadcn/ui components

## 📂 Project Structure

project-root/
├── app/
│ ├── layout.tsx  
│ ├── page.tsx  
│ ├── dashboard/
│ │ └── page.tsx  
│
├── components/
│ ├── ui/  
│ ├── login-form.tsx  
│
├── lib/
│ ├── utils.ts  
│ ├── storage.ts  
│
├── styles/
│ └── globals.css  
├── types/
│ └── user.ts  
│
├── README.md  
├── tsconfig.json
├── package.json

## ⚙️ Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/RezaFarmani-task/repo-name.git
cd repo-name

pnpm install
# or
npm install
# or
yarn install

## Start development server

pnpm dev
# or
npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

1. Push the project to GitHub
2. Go to Vercel → Import Project
3. Select the GitHub repo → click Deploy
4. Get your live project link ✨
```

## Developer

Reza Farmani
