import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      {/* Mesh Background */}
      <div className="mesh-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Sidebar />
      <div className="ml-[280px]">
        <TopBar />
        <main className="pt-24 p-10 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
