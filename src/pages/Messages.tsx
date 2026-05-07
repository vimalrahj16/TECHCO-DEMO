import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  MessageSquare, 
  Mail, 
  ChevronRight, 
  MoreVertical, 
  TrendingUp,
  Mail as MailIcon,
  WhatsAppIcon,
  Search,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Briefcase,
  Edit
} from '../icons';

export default function Messages() {
  const templates = [
    { title: 'Attendance Reminder', desc: 'Last used 2h ago', icon: Calendar, color: 'bg-primary-container' },
    { title: 'Fee Due Notice', desc: 'Auto-send enabled', icon: Briefcase, color: 'bg-secondary-container' },
    { title: 'Progress Update', desc: 'Personalized metrics', icon: TrendingUp, color: 'bg-tertiary-container' },
    { title: 'Class Cancellation', desc: 'Emergency alert', icon: AlertCircle, color: 'bg-error', emergency: true },
  ];

  const history = [
    { name: 'Marianne Walker', class: 'Advanced Pottery', type: 'Attendance Reminder', status: 'Delivered', time: 'Today, 10:42 AM', initials: 'MW' },
    { name: 'James Sterling', class: 'Beginner Guitar', type: 'Fee Due Notice', status: 'Pending', time: 'Today, 09:15 AM', initials: 'JS' },
    { name: 'Anita Lopez', class: 'Oil Painting', type: 'Class Cancellation', status: 'Failed', time: 'Yesterday, 04:30 PM', initials: 'AL', error: true },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Parent Communication</h1>
          <p className="text-sm text-white/40 font-medium mt-1">Engage with your community through professional, templated messaging.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-8 py-3.5 glass-panel text-white rounded-2xl font-bold transition-all hover:bg-white/10 shadow-xl border border-white/5">
            <MailIcon size={20} /> View Drafts
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
            <Plus size={20} /> Compose Message
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">Templates</h3>
              <Plus className="text-primary cursor-pointer hover:scale-110 transition-transform" size={20} />
            </div>
            <div className="space-y-4">
              {templates.map((t, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 4 }}
                  className={`p-5 bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-2xl cursor-pointer transition-all group ${t.emergency ? 'bg-rose-500/10 border-rose-500/20 hover:border-rose-500/40' : ''}`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${t.color}`}>
                      <Calendar size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg">{t.title}</p>
                      <p className={`text-xs font-bold uppercase tracking-wider ${t.emergency ? 'text-rose-400' : 'text-white/30'}`}>{t.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-10 rounded-3xl shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-white/40 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">MONTHLY REACH</h4>
              <div className="flex items-end gap-2 text-white">
                <span className="text-5xl font-black">1,248</span>
                <span className="text-xs font-bold mb-2 text-white/50">messages sent</span>
              </div>
              <div className="mt-10 flex gap-6">
                <div className="flex items-center gap-2 text-white text-xs font-bold">
                  <div className="p-1.5 bg-white/10 rounded-lg"><MailIcon size={14} /></div>
                  85% Open Rate
                </div>
                <div className="flex items-center gap-2 text-white text-xs font-bold">
                  <div className="p-1.5 bg-white/10 rounded-lg"><MessageSquare size={14} /></div>
                  98% Delivered
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
               <Plus size={180} />
            </div>
          </div>
        </section>

        <section className="col-span-12 lg:col-span-8">
          <div className="glass-panel p-10 h-full flex flex-col shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="flex items-center justify-between border-b border-white/5 pb-8 mb-10 relative z-10">
              <div className="flex items-center gap-5">
                <div className="h-12 w-12 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                  <Edit size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Drafting Message</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-white/5 text-primary rounded-xl text-xs font-bold uppercase tracking-widest">Autosaved</span>
                <button className="p-2.5 hover:bg-white/10 rounded-xl transition-colors text-white/40 hover:text-white"><MoreVertical size={20} /></button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10 relative z-10">
              <div>
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Recipient Type</label>
                <select className="w-full glass-panel bg-white/5 p-4 rounded-2xl text-sm text-white focus:bg-white/10 outline-none border-white/5 transition-all appearance-none cursor-pointer">
                  <option className="bg-[#0a0d14]">All Parents</option>
                  <option selected className="bg-[#0a0d14]">Specific Class</option>
                  <option className="bg-[#0a0d14]">Individual</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Target Group</label>
                <div className="flex items-center gap-3 p-3 glass-panel bg-white/5 rounded-2xl border-white/5 group-focus-within:border-primary/50 transition-all">
                  <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-inner">
                    Advanced Pottery <Plus size={14} className="rotate-45" />
                  </span>
                  <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-white/20" placeholder="Add more..." type="text" />
                </div>
              </div>
            </div>

            <div className="flex-1 glass-panel bg-white/[0.02] rounded-3xl p-8 border-white/5 flex flex-col gap-8 relative z-10 min-h-[400px]">
              <div className="flex gap-5 border-b border-white/5 pb-6">
                <button className="p-2.5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl transition-all"><Plus size={20} /></button>
                <button className="p-2.5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-xl transition-all font-serif italic text-xl px-4">I</button>
                <div className="w-px bg-white/5 mx-2" />
                <button className="flex items-center gap-2 px-6 py-2.5 bg-primary/20 rounded-2xl text-[11px] font-black uppercase tracking-widest text-primary hover:bg-primary/30 transition-all shadow-inner border border-primary/20">
                  Insert Placeholder
                </button>
              </div>
              <textarea 
                className="flex-1 bg-transparent border-none focus:ring-0 text-xl text-white/80 resize-none font-medium leading-relaxed placeholder:text-white/10 custom-scrollbar" 
                defaultValue={`Dear {parent_name}, \n\nThis is a friendly reminder that your upcoming session for Advanced Pottery is scheduled for {class_time} tomorrow. \n\nPlease ensure {student_name} brings their clay kit. We look forward to seeing the progress on the latest wheel-throwing projects!\n\nBest,\nHobbyHub Team`}
              />
            </div>

            <div className="mt-10 flex items-center justify-between relative z-10">
              <div className="flex gap-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input defaultChecked className="peer appearance-none w-6 h-6 border-2 border-white/10 rounded-lg checked:bg-primary checked:border-primary transition-all cursor-pointer" type="checkbox" />
                    <CheckCircle2 size={14} className="absolute left-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">WhatsApp</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input defaultChecked className="peer appearance-none w-6 h-6 border-2 border-white/10 rounded-lg checked:bg-primary checked:border-primary transition-all cursor-pointer" type="checkbox" />
                    <CheckCircle2 size={14} className="absolute left-1 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors">Email</span>
                </label>
              </div>
              <div className="flex gap-4">
                <button className="px-10 py-4 glass-panel text-primary font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary/5 border border-primary/20 transition-all active:scale-95">Schedule</button>
                <button className="px-12 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">Send Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-12">
          <div className="glass-panel p-10 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-10">Communication History</h3>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Recipient</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Type</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Status</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Channel</th>
                    <th className="pb-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Timestamp</th>
                    <th className="pb-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {history.map((item, i) => (
                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="py-8">
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-lg ${item.error ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                            {item.initials}
                          </div>
                          <div>
                            <p className="text-[15px] font-bold text-white mb-0.5">{item.name}</p>
                            <p className="text-xs text-white/30 font-bold uppercase tracking-wider">{item.class}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-8 text-[13px] font-bold text-white/50">{item.type}</td>
                      <td className="py-8">
                        <span className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] px-4 py-2 rounded-xl w-fit shadow-inner ${
                          item.status === 'Delivered' ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/10' : 
                          item.status === 'Failed' ? 'text-rose-400 bg-rose-500/10 border border-rose-500/10' : 
                          'text-white/40 bg-white/5 border border-white/5'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                             item.status === 'Delivered' ? 'bg-emerald-500 animate-pulse' : 
                             item.status === 'Failed' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]' : 
                             'bg-white/20'
                          }`} /> 
                          {item.status}
                        </span>
                      </td>
                      <td className="py-8">
                        <div className="flex gap-3 text-white/20">
                          <div className={`p-2 rounded-lg bg-white/5 ${!item.error ? 'text-[#25D366]/60' : 'text-rose-500/60'}`}>
                            <WhatsAppIcon size={18} />
                          </div>
                          <div className={`p-2 rounded-lg bg-white/5 ${!item.error ? 'text-blue-500/60' : 'text-rose-500/60'}`}>
                            <MailIcon size={18} />
                          </div>
                        </div>
                      </td>
                      <td className="py-8 text-[13px] font-bold text-white/30">{item.time}</td>
                      <td className="py-8 text-right">
                        {item.error ? (
                          <button className="px-6 py-2 bg-primary/20 text-primary border border-primary/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10">Retry</button>
                        ) : (
                          <button className="p-3 glass-panel text-white/20 hover:text-white hover:bg-white/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"><MoreVertical size={20} /></button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
