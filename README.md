# FinTrack

**FinTrack** is a financial tracking application where users can input their budgets and expenses, which are then analyzed with the **Gemini API** to generate actionable, AI-driven insights for better financial management.

## ✨ Features

- **Custom Budgeting**: Track and manage your expenses and budgets.
- **AI Insights**: Leverage Gemini's API to gain personalized suggestions for optimizing your spending habits.
- **Interactive Charts**: Dynamic visualization of financial data using **Recharts**.
- **Secure Authentication**: Integrated with **Clerk Auth** for secure and seamless user login.
- **Modern UI**: Built with **Tailwind CSS**, **Aceternity UI**, and **shadcn** for a sleek, responsive, and accessible design.
- **Fun Personalization**: Use an emoji picker to categorize transactions with ease.

## 🛠️ Dependencies

| Dependency | Purpose |
|-----------|---------|
| **Next.js App Router** | Framework for building the app with server-side rendering, file-based routing, and API handling. |
| **TypeScript** | Ensures code maintainability with static typing. |
| **Tailwind CSS** | Utility-first CSS framework for consistent and efficient styling. |
| **Aceternity UI** | Provides a modern and responsive component library. |
| **shadcn** | Styled components for creating custom UI designs. |
| **Drizzle ORM** | Simplified and type-safe database interaction. |
| **Neon** | A scalable, serverless PostgreSQL database solution. |
| **Clerk Auth** | Authentication library for secure user login and session management. |
| **Recharts** | Enables dynamic and responsive data visualizations. |
| **Gemini API** | Processes financial data to deliver AI-powered insights. |
| **Lucide-react** | Icon library for clean and sharp visuals. |
| **Emoji Picker** | Provides users with an intuitive emoji selection feature. |

## 📂 Project Structure

```plaintext
.
├── app             # App Router structure for routes and layouts
├── components      # Reusable UI components
├── styles          # Tailwind CSS and Aceternity custom styles
├── utils           # Helper functions and utilities
├── lib             # Database, API integrations, and shared libraries
├── public          # Static assets like images and icons
└── .env.local      # Environment variables
```

## 📊 Budget and Insight Tracking

FinTrack provides users with an efficient way to manage finances:

- **Manual Inputs**: Users input their budgets and expenses directly.
- **Analysis**: Financial data is fed into the Gemini API, which generates insights tailored to user behavior.
- **Visualization**: Users can track financial trends and spending patterns via dynamic, interactive charts built with Recharts.

## 🖼️ UI and Design

The application combines several design frameworks to deliver a seamless and aesthetically pleasing experience:

- **Tailwind CSS**: Ensures a responsive and consistent design across devices.
- **Aceternity UI**: Modern, lightweight components for a polished interface.
- **shadcn**: Customizable, styled components for cohesive branding.
- **Lucide-react**: Intuitive icons to enhance the user experience.

## 🔗 Gemini API Integration

The Gemini API provides the backbone for FinTrack's AI insights. Its capabilities include:

- **Data Analysis**: Processes user input to identify spending patterns.
- **Personalized Insights**: Suggests actionable steps to improve financial management.

The integration ensures users receive relevant, AI-driven suggestions for optimizing their budgets.

## 👥 Authentication

Authentication is handled via Clerk Auth, offering:

- **Social Login**: Users can log in using Google, GitHub, and other providers.
- **Session Persistence**: Secure and seamless session management for users.
- **Multi-Factor Authentication**: Enhances security for sensitive financial data.

## 🤝 Contributing

We welcome contributions to improve FinTrack!

### Steps to Contribute

1. Fork the repository:
   ```bash
   git clone https://github.com/your-username/fintrack.git
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:
   ```bash
   git commit -m "Add: Your feature description"
   ```

4. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Submit a pull request and wait for review.

## 🚀 Deployment

### Steps for Deployment

1. **Connect to Vercel**:
   - Link your GitHub repository to Vercel.

2. **Set Environment Variables**:
   Configure the following in Vercel's dashboard:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   DATABASE_URL=<your-neon-database-url>
   GEMINI_API_KEY=<your-gemini-api-key>
   GEMINI_API_SECRET=<your-gemini-api-secret>
   ```

3. **Run Deployments**:
   - Deploy your application directly via Vercel.

## 📧 Support

If you encounter any issues or have suggestions, feel free to reach out:

- Open an issue in this repository.
- Email us at support@fintrack.com.

## ⚖️ License

This project is licensed under the MIT License.

**Built with ❤️ using Next.js (App Router), Tailwind CSS, Aceternity UI, Gemini API, and more!**
