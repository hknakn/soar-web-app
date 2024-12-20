<div align="center">
  <img src="public/soar-logo.png" alt="Soar Logo" width="80" height="80" />

  # Soar Web App - Financial Dashboard

  A modern financial dashboard built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The application features a responsive design, smooth transitions, and interactive data visualizations using Chart.js.

  [Live Demo](https://soar-web-app.vercel.app)
</div>

---

## ✨ Features

- 📱 Responsive design optimized for both mobile and desktop
- 🎨 Modern UI with smooth transitions and animations
- 📊 Interactive charts and data visualizations
- 🔄 Mock data integration with simulated API delays
- 🎭 Dark and light mode credit cards
- 👤 Profile management with image upload
- 🔍 Search functionality
- 📱 Mobile-friendly navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Charts**: Chart.js with react-chartjs-2
- **Forms**: React Hook Form with Zod validation
- **Date Picker**: React Datepicker
- **Icons**: Custom SVG icons

## 📋 Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hknakn/soar-web-app
cd soar-web-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Deployment

### Deploying to Vercel

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Configure the build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

### Important Notes for Deployment

- The project uses pnpm as the package manager
- A `.npmrc` file is included for proper dependency hoisting
- TypeScript and ESLint checks are disabled during build for smoother deployment
- The project uses Next.js standalone output mode

## 📁 Project Structure

```
app/
├── components/         # Reusable UI components
│   ├── dashboard/     # Dashboard-specific components
│   ├── layout/        # Layout components
│   ├── settings/      # Settings-related components
│   └── icons/         # SVG icons
├── lib/
│   └── mock/          # Mock data and API simulation
├── (routes)/          # App router pages
└── globals.css        # Global styles
```

## 🧩 Key Components

- **DashboardLayout**: Main layout wrapper with sidebar and top navigation
- **PageTransition**: Handles smooth transitions between pages
- **CardsAndTransactions**: Displays credit cards and recent transactions
- **Statistics**: Shows weekly activity and expense statistics
- **TransferAndHistory**: Quick transfer functionality and balance history
- **Settings**: Profile management with tabs for different settings

## 🤔 Design Decisions & Assumptions

### 1. API Integration

- All data is currently mocked with simulated API delays
- API endpoints can be easily integrated by replacing mock functions

### 2. State Management

- Local React state is used as the application doesn't require complex state management
- Context API is used for layout-related state

### 3. Performance

- Images are optimized using Next.js Image component
- Charts are loaded lazily with loading skeletons
- Animations are hardware-accelerated

### 4. Responsive Design
- Mobile-first approach
- Different layouts for mobile and desktop views
- Scrollable content on mobile with hidden scrollbars
