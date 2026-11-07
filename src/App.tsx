import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';

// Placeholder pages — replaced with full implementations in Phase 2
function Placeholder({ title }: { title: string }) {
  return (
    <div className="container section" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <h1 style={{ fontSize: 'var(--fs-3xl)', marginBottom: 'var(--space-4)' }}>{title}</h1>
      <p className="text-grey">This page is planned for Phase 2 of the Invest Smart roadmap.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<Placeholder title="About Invest Smart" />} />
          <Route path="/company" element={<Placeholder title="About Rayar Web Studio" />} />
          <Route path="/courses" element={<Placeholder title="Courses" />} />
          <Route path="/courses/:id" element={<Placeholder title="Course Details" />} />
          <Route path="/education" element={<Placeholder title="Financial Education" />} />
          <Route path="/market-learning" element={<Placeholder title="Market Learning" />} />
          <Route path="/simulator" element={<Placeholder title="Virtual Investment Simulator" />} />
          <Route path="/pricing" element={<Placeholder title="Pricing" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/faq" element={<Placeholder title="FAQ" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
          <Route path="/risk-disclosure" element={<Placeholder title="Risk Disclosure" />} />
          <Route path="/login" element={<Placeholder title="Login" />} />
          <Route path="/register" element={<Placeholder title="Register" />} />
          <Route path="/forgot-password" element={<Placeholder title="Password Recovery" />} />
          <Route path="/dashboard" element={<Placeholder title="User Dashboard" />} />
          <Route path="/profile" element={<Placeholder title="User Profile" />} />
          <Route path="/my-courses" element={<Placeholder title="My Courses" />} />
          <Route path="/progress" element={<Placeholder title="Learning Progress" />} />
          <Route path="/portfolio" element={<Placeholder title="My Virtual Portfolio" />} />
          <Route path="/notifications" element={<Placeholder title="Notifications" />} />
          <Route path="/settings" element={<Placeholder title="Account Settings" />} />
          <Route path="/admin" element={<Placeholder title="Master Admin Dashboard" />} />
          <Route path="/admin/users" element={<Placeholder title="User Management" />} />
          <Route path="/admin/courses" element={<Placeholder title="Course Management" />} />
          <Route path="/admin/lessons" element={<Placeholder title="Lesson Management" />} />
          <Route path="/admin/pricing" element={<Placeholder title="Pricing Management" />} />
          <Route path="/admin/content" element={<Placeholder title="Content Management" />} />
          <Route path="/admin/analytics" element={<Placeholder title="Platform Analytics" />} />
          <Route path="/admin/simulator" element={<Placeholder title="Simulator Management" />} />
          <Route path="/admin/partners" element={<Placeholder title="Partner Management" />} />
          <Route path="/admin/settings" element={<Placeholder title="Company Settings" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
