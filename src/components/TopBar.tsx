import React from 'react';
import { Search, Bell } from '../icons';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-20 px-10 glass-topbar flex justify-between items-center z-40">
      <div className="flex items-center gap-10">
        <nav className="flex gap-8">
          <button className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary py-2">Overview</button>
          <button className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all py-2">Reports</button>
          <button className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all py-2">Activity</button>
        </nav>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="relative w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          <input 
            className="w-full pl-12 pr-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm placeholder:text-white/20 focus:bg-white/10 focus:border-primary/50 outline-none transition-all" 
            placeholder="Search students, classes..." 
            type="text"
          />
        </div>
        
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors relative">
          <Bell className="text-white/60" size={20} />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-error rounded-full ring-2 ring-[#05070a]" />
        </button>
        
        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
          <div className="text-right">
            <p className="text-sm text-white font-bold">Sarah Jenkins</p>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">Lead Instructor</p>
          </div>
          <img 
            alt="Sarah Jenkins" 
            className="w-10 h-10 rounded-full object-cover border-2 border-white/10 shadow-lg" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvFHEjPf2UqbjZPh8SHdvovdNbf8eU8YCVW1eZpNCqyEqceUqs4htVhzsH-azsqA86NrKOGMi34EnRYhyCIkLlYmRbADgicOrSy39N98k3_W7CDDwa-AjHbKFJ5Kmn5q-oYtpxiI6rVD41QPVFOcbFu0JgssLDc7LZrf-X7piAGqGwcGFG0Jfr2SswouDZo04-HUsEQ2h9sbrJji3fB482W3TvfYi5sUiGYBqm6JkbwiaBBOE1xAMfLf0UszQ3oHaoVfAtOd_KuiO0" 
          />
        </div>
      </div>
    </header>
  );
}
