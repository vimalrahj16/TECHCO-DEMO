import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  AlertCircle, 
  TrendingUp, 
  Plus, 
  ChevronRight, 
  Palette, 
  Code, 
  Music, 
  Fitness,
  Mail,
  AlertCircle as AlertStepInto
} from '../icons';

export default function Dashboard() {
  const metrics = [
    { 
      label: 'Total Students', 
      value: '142', 
      change: '+12% from last month', 
      icon: Users,
      badge: 'Active',
      color: 'primary'
    },
    { 
      label: 'Pending Payments', 
      value: '08', 
      change: 'Requires immediate attention', 
      icon: AlertCircle,
      badge: 'Critical',
      color: 'error',
      pulse: true
    },
    { 
      label: 'Absent Today', 
      value: '04', 
      icon: Users, // Using same icon but different color
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMrD9OeD1pwmjflQkbTl9DWK3uRwKYJ9MfGgPdaYNuxEP0BFmM2bIcBnld1KXQXHYxODlg4ltfn7DnQVpMKQjKSVo2w7W_8w5sF2UZA4QwiQcGLUWRL30-kkA683n7Wj_lGThD2SeZZKg_xvIQFzoF21bxkYSKaETupRt1zsiEBVXgWqpNdryHjBVEf6tGkrgdB01xdM8J4uYBCG_Z4tMOnFqsHhV4smXh8_XwZyU3tJO_RfKxvFcXrxcZjJ0HP17ZAFQaGZtwMly_",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDteskt95yNqoFaxBX1EA7KoEwKpnGQo4F9-c6kpBfEIPItvde0M96my0qQAXqPAwJrPRbZtwVEdYyb1upqtmoIK4fDz0_bIoF3D__MLZsEq34HYkaL12746_EQFChJ1wY34Ak6t4WZ1NIVvB5QZB6NWj-o8qVuQq16w_8hPomPWozF6SNt8BC-jboH4lefbNY54wMraMB2OsNSU_dkjZX8UXuCbvSEPirOCguuTPawlQXj2ewaDH1HTPio66v7oKHizV6-RvvZKBW5"
      ]
    }
  ];

  const actions = [
    { label: 'Mark Attendance', icon: Plus },
    { label: 'Send Parent Update', icon: Mail },
    { label: 'Add New Student', icon: Users, featured: true }
  ];

  const schedule = [
    { time: '09:00', title: 'Watercolor Basics', details: 'Studio A • 12 Students', tag: 'Art', icon: Palette, color: 'blue' },
    { time: '10:30', title: 'Junior Python Devs', details: 'Lab 02 • 8 Students', tag: 'Coding', icon: Code, color: 'purple' },
    { time: '13:00', title: 'Intro to Piano', details: 'Music Wing • 4 Students', tag: 'Music', icon: Music, color: 'amber' },
    { time: '15:00', title: 'Youth Yoga & Flow', details: 'Main Hall • 20 Students', tag: 'Fitness', icon: Fitness, color: 'emerald', past: true },
  ];

  return (
    <div className="space-y-10">
      {/* Metrics Grid */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${m.color === 'error' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'}`}>
                  <m.icon size={24} />
                </div>
                {m.badge && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${m.color === 'error' ? 'bg-error text-white animate-pulse' : 'bg-primary/20 text-primary'}`}>
                    {m.badge}
                  </span>
                )}
              </div>
              <div className="mt-6">
                <p className="text-sm text-on-surface-variant">{m.label}</p>
                <h3 className={`text-4xl font-bold mt-1 ${m.color === 'error' ? 'text-error' : 'text-on-background'}`}>{m.value}</h3>
              </div>
              {m.change && (
                <p className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${m.color === 'error' ? 'text-error' : 'text-primary'}`}>
                  {m.color !== 'error' && <TrendingUp size={14} />} {m.change}
                </p>
              )}
              {m.avatars && (
                <div className="mt-4 flex -space-x-2">
                  {m.avatars.map((url, j) => (
                    <img key={j} src={url} className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  ))}
                  <div className="w-6 h-6 rounded-full bg-surface-variant border-2 border-white flex items-center justify-center text-[8px] font-bold">+2</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="col-span-12 lg:col-span-4 bg-primary p-7 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24" />
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Quick Actions</h3>
            <p className="text-white/60 text-sm mt-1">Manage your daily tasks efficiently</p>
          </div>
          <div className="space-y-3 mt-8">
            {actions.map((act, i) => (
              <button 
                key={i} 
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${act.featured ? 'bg-white text-primary' : 'bg-white/10 hover:bg-white/20 hover:scale-[1.02]'}`}
              >
                <span className="flex items-center gap-3">
                  <act.icon size={20} />
                  <span className="font-bold">{act.label}</span>
                </span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-12 gap-6">
        {/* Timeline View */}
        <div className="col-span-12 xl:col-span-8 glass-panel p-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Class Schedule</h2>
              <p className="text-sm text-white/40 font-medium">Monday, October 24, 2023</p>
            </div>
            <div className="flex gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5">
              <button className="px-5 py-2 rounded-xl text-sm font-bold bg-white text-primary shadow-lg">Day</button>
              <button className="px-5 py-2 rounded-xl text-sm font-bold text-white/50 hover:text-white transition-colors">Week</button>
            </div>
          </div>

          <div className="relative pl-16 space-y-12 custom-scrollbar max-h-[600px] overflow-y-auto pr-4">
            <div className="absolute left-12 top-0 h-full w-[1px] bg-white/10" />
            
            {schedule.map((item, i) => (
              <div key={i} className={`relative flex gap-4 ${item.past ? 'opacity-30' : ''}`}>
                <div className="absolute -left-16 text-xs font-bold text-white/30 py-2">{item.time}</div>
                <motion.div 
                  whileHover={{ scale: 1.01, x: 4 }}
                  className={`flex-grow p-6 rounded-2xl border border-white/5 shadow-sm group cursor-pointer backdrop-blur-sm ${
                    item.color === 'blue' ? 'bg-blue-500/5 hover:bg-blue-500/10' :
                    item.color === 'purple' ? 'bg-purple-500/5 hover:bg-purple-500/10' :
                    item.color === 'amber' ? 'bg-amber-500/5 hover:bg-amber-500/10' :
                    'bg-emerald-500/5 hover:bg-emerald-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                        item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                        item.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-primary transition-colors text-lg">{item.title}</h4>
                        <p className="text-sm text-white/40">{item.details}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                      item.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                      item.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                      item.color === 'amber' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {item.tag}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
            
            {/* Current Time Indicator */}
            <div className="relative -mx-6 h-0 z-20" style={{ top: '-140px' }}>
              <div className="absolute -left-16 top-0 flex items-center w-[calc(100%+16px)]">
                <span className="text-[10px] font-bold text-white bg-primary px-2 py-0.5 rounded-lg shadow-lg shadow-primary/20">12:15</span>
                <div className="flex-grow h-[2px] bg-primary/30 border-t border-primary/50 border-dashed ml-2" />
                <div className="w-3 h-3 rounded-full bg-primary -ml-1.5 shadow-[0_0_12px_rgba(59,130,246,0.8)] border border-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts & Insights */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white tracking-tight">Payment Alerts</h3>
              <AlertStepInto className="text-error" size={20} />
            </div>
            <div className="space-y-4">
              {[
                { name: "Liam O'Brien", class: "Piano Lessons • Oct 15", amount: "$120.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjgjNW8KgM3VMDux2Eko6wdm628m0DM9lbDbMz9ZkF7kjlJurnSZIFZXNGEPuoOKhLZmOdkLnz4ZBBQNWkih-EapMglOP-gOVgO11JlHnIjh8XQEcpw-jz3BO3cxUrV8vYBxkNz9mRk_s-LJn36eBUoTZl3AGop5u3z1EBkQtwFBkZqm6FfaymrQ9iu2y28h6Zq_qUiSAWtBNgM1QevYR1yeZa-Id3Gz5gM2HMo4ITVhh0k0cgVY0wPjdEa-TTOdBWM0Ro-2FFl_Dp" },
                { name: "Maya Patel", class: "Art Workshop • Oct 20", amount: "$85.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXpnrK7jqMZ4VhkwE5wvCaeEliVL6IaAb9qi5W_WVtME6YWhlzxTmBHe9Sknrf_hz0MaPSL3HAT7Jc3qSU1yKyhOrDM0QnhpdAonMoMBOLv7SeJ7BDt4f9Ta23prkrZzk5vTlJ0U6onmQT_-Mn36HxTaR28DT61bfyI4M72_uDWjgcgk-gWG2DvyH5btNaMvvhudRs2rAD1lwayd08g53lsnFTEdywA7YLnodRpPQzPln8EIy--jbg-5vs2MgKwV4xJTbpWEVoNoa" }
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <img src={p.img} className="w-10 h-10 rounded-xl object-cover ring-1 ring-white/10" />
                    <div>
                      <p className="text-sm font-bold text-white">{p.name}</p>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{p.class}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-error">{p.amount}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 text-primary font-bold py-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/20">
              Manage All Payments
            </button>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden h-56 flex flex-col justify-end">
            <div className="absolute inset-0 z-0 opacity-40">
              <div className="w-full h-full bg-gradient-to-t from-primary/30 to-transparent" />
              <svg className="absolute bottom-0 w-full h-24 stroke-primary fill-none stroke-[3]" viewBox="0 0 400 100">
                <path d="M0,80 Q50,70 100,50 T200,40 T300,60 T400,20" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Growth Forecast</p>
              <h4 className="text-2xl font-bold text-white tracking-tight">+18% This Quarter</h4>
              <p className="text-sm text-white/40 font-medium">42 potential students on waitlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
