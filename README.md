# BlockPharma IQ
Blockchain-Enabled Demand Forecasting & Inventory Optimization for Drug Stores  

---

## Overview
**BlockPharma IQ** is an AI-driven pharmaceutical inventory management platform that integrates **blockchain technology** for data security and transparency.  

It empowers **drug stores and suppliers** to:  
- Predict drug demand with AI-driven insights  
- Optimize inventory and reduce wastage  
- Securely track supply chain transactions using blockchain  

This project combines **Machine Learning, Blockchain, and Web Technologies** to deliver:  
- Real-time analytics  
- Smart contracts  
- Seamless pharmacy operations  

---

## Features
- **AI-Powered Demand Forecasting** → Accurate drug demand predictions using time-series analysis.  
- **Inventory Optimization** → Automated stock level management and reduction of wastage.  
- **Blockchain Integration** → Uses **Ethereum & Polygon** for secure, immutable transaction records.  
- **Multi-role Authentication** → Role-based dashboards for pharmacists, suppliers, and admins.  
- **Real-Time Analytics Dashboard** → Visual insights into sales, stock, and order trends.  
- **RESTful APIs** → For communication between frontend, backend, and blockchain.  

---

## Tech Stack

| Layer          | Technologies |
|----------------|--------------------------------------|
| **Frontend**   | React.js, Redux Toolkit, Tailwind CSS, TypeScript |
| **Backend**    | Node.js, Express.js, Prisma ORM |
| **Database**   | PostgreSQL |
| **Blockchain** | Ethereum, Polygon, Foundry |
| **ML/AI**      | Time-Series Forecasting (Scikit-learn, TensorFlow) |
| **Auth**       | JWT |
| **Version Control** | Git, GitHub |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## Project Structure

```
BlockPharma-IQ/
├── Backend/                # Server-side application, APIs, Smart Contracts
│   ├── prisma/             # Database schema & seeders
│   ├── src/                # Core backend code: controllers, services, routes
│   ├── Contract/           # Smart contract implementation & ABIs
│   ├── .env.example        # Env variables template
│   └── README.md           # Backend-specific documentation
│
├── Frontend/               # Client-side application
│   ├── src/                # React + Next.js components, pages & hooks
│   ├── public/             # Static assets & SVGs
│   └── .env.example        # Env variables template
```

---

## Installation & Setup

### 1. Clone the Repository
```
git clone https://github.com/Ashishbhatt97/BlockPharma-IQ.git
cd BlockPharma-IQ
```

---

### 2. Setup the Backend
```
cd Backend
npm install
```

#### Configure Environment Variables
Rename `.env.example` → `.env` and update:
```
PORT=5000
DATABASE_URL=your_postgres_connection_url
SECRET_KEY=your_secret_key
```

#### Run Database Migrations
```
npx prisma migrate dev
```

#### Seed Initial Data (Optional)
```
npx prisma db seed
```

#### Start the Backend Server
```
npm run build
npm run dev
```

---

### 3. Setup the Frontend
```
cd Frontend
npm install --force
```

#### Configure Environment Variables
Rename `.env.example` → `.env` and update:
```
VITE_BASE_URL="http://localhost:5173"
VITE_API_URL="http://localhost:5000/api"
VITE_AI_API_URL="http://localhost:8000/"
```

#### Start the Frontend Server
```
npm run dev
```
