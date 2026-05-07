import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Students from './pages/Students';
import Messages from './pages/Messages';

// Placeholder for screens that aren't fully detailed in the prompt but are in the nav
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[calc(100vh-200px)]">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
      <p className="text-on-surface-variant">This feature is coming soon to the HobbyHub Admin Portal.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payments" element={<PlaceholderPage title="Payments" />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
