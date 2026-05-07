import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Plus, 
  Settings, 
  HelpCircle 
} from '../icons';

export default function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: Briefcase, label: 'Payments', path: '/payments' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
  ];

  return (
    <aside className="fixed h-full w-[280px] left-0 top-0 glass-sidebar flex flex-col p-8 overflow-y-auto z-50">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <div className="w-7 h-7 border-2 border-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">HobbyHub</h2>
          <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Admin Portal</p>
        </div>
      </div>

      <nav className="flex-grow space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300
              ${isActive 
                ? 'bg-white/10 text-white border-white/10 shadow-lg backdrop-blur-md' 
                : 'text-white/50 hover:bg-white/5 hover:text-white'}
            `}
          >
            <item.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-10 border-t border-white/5 space-y-2">
        <button className="w-full bg-primary text-white font-bold py-4 px-4 rounded-2xl shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all mb-10 flex items-center justify-center gap-2">
          <Plus size={20} />
          Add New Class
        </button>
        
        <NavLink
            to="/settings"
            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Settings size={20} />
            <span className="font-semibold">Settings</span>
          </NavLink>
          
          <NavLink
            to="/help"
            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors"
          >
            <HelpCircle size={20} />
            <span className="font-semibold">Help Center</span>
          </NavLink>
      </div>
    </aside>
  );
}
