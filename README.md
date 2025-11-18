# CrowdImport - Crowdfunding Import Platform

Crowdfunding platform for importing products from China. Users can show interest in products and when a minimum number of participants is reached (e.g., 10 people), the import proceeds by sharing shipping costs.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## 📁 Project Structure

```
crowd-import/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Main pages
│   ├── hooks/          # Custom hooks
│   ├── services/       # API types and services
│   ├── utils/          # Utilities
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main component
│   └── main.tsx        # Entry point
├── public/             # Static files
└── package.json
```

## 🎯 Main Features

- 📦 List of available products to import
- 👥 Interest registration system per product
- 📊 Management dashboard for administrators
- 💰 Automatic calculation of shared costs
- 🔔 Notifications when minimum participants is reached

## 🛠️ Technologies

- React 19
- TypeScript
- Vite
- React Router DOM
