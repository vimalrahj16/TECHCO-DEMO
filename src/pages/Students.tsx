import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  History, 
  CheckCircle2, 
  Edit,
  WhatsAppIcon,
  Plus
} from '../icons';

export default function Students() {
  const students = [
    {
      id: 1,
      name: 'Leo Thompson',
      class: 'Watercolor Basics',
      status: 'PAID',
      attendance: '94%',
      parent: 'Sarah Thompson',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-CzMvMyUyC714LyvbTVYwWNAzG5S8GiCB6pymUyKsn-YLe6kOqLKWHfFJ9UPM7gR_uFvtSP_sjc_OnSk2UJ93oATDClujID_D1f662ydAMXdPPeB9i4tk_DqXpxeKZfK8bFBsxvfXh6Eu_ozG3m4WtoqhJa9vkeLyctXy5pliErGRE5OwgSDYqeoPBGkgJjj_B0za5aICPNyqNs9Hto-YplcrZ-_OosPqOQITtiNTlh2qPj_znZ4c8J4W4LRkd-Ya_i97-mw23x3"
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      class: 'Advanced Violin',
      status: 'OVERDUE',
      attendance: '82%',
      parent: 'Marc Rodriguez',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_mi4SgHc7xa50CH3iWknVipnUwk3rcR2POQXSf2rwbqf2QUvni7DLMQ5egq7M6mOwShspFVFDz758a22Uxtxfgr2H_ketv72ecaw3Ynv3-H0yIOICb9oRjVRU2BYBqLQD6oxGjqDbJLIOqoj9ei9kgy5XxlOhGsJ5PcM7fvf9PMinzUjX1jupy2FosVvH5vKI2PgSpwNRi3xGOGN6nOZeSkEeRpqh9uvON12GmFl9uk4Q2NxKdh9ZvejqSy9OsSgGjWuS-o0rqMH"
    },
    {
      id: 3,
      name: 'Mia Chen',
      class: 'Intro to Ballet',
      status: 'PARTIAL',
      attendance: '100%',
      parent: 'David Chen',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI2N68TWse1_wAQMjhgqnlv47SncSyNbOC203xSV-FLOi0aw5qcWbeALz9b8mulk03pOunHqptl62J5wOT98uglf_XLwhmAUpvYeyCDzNKOHfTOv-cKGrvJugwyByZskGOC2ATnMEnHrx2jhcqQdykSPqEW6S3xK3yXkIvZchtJqaSClWUboMpBlz7ZhXS7jVwRob0_zPU1MjiuxL4Z0_IuQh2zS1DR5i69OjF0aOzgj4Ab-Y044Tut-XcbQpxmviZaqHGbIhKigxy"
    },
    {
      id: 4,
      name: 'Noah Wilson',
      class: 'Junior Chess',
      status: 'PAID',
      attendance: '88%',
      parent: 'Linda Wilson',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYzJ-rb0vNA1qSIcyczntQrhO77aWI4jhYeYuxCHuH2BiVZLH69LEoZYi7RvNCCt-Z4sr8wEG6qE8IeVKjEhYSLFmXsrBJxfTmf9ioG745S8rMwIGisow2a1Ynaftn1sO3w4T3VJSooH2azfnGSidA0j_RRDRcHB66tPOD6TfOqX5IPQtmDBvxNrTiCB3mBUNIzJuspVbOKypy_7a8NGCf10xboZlzKBtbp4s5FHkdWzKn38g8Sq8xRYgkrQbDcToGcs7zR2YWc5OA"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Student Directory</h1>
          <p className="text-sm text-white/40 font-medium mt-1">Managing 42 active learners across 8 hobby categories.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3.5 glass-panel text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 active:scale-95 transition-all border border-white/5 shadow-xl">
            <Filter size={20} /> Filters
          </button>
          <button className="px-8 py-3.5 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
            <Plus size={20} /> New Student
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {students.map((s, i) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="flex items-center gap-5">
                    <img src={s.avatar} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg" />
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{s.name}</h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-white/5 text-primary rounded-lg text-[10px] font-bold uppercase tracking-widest">{s.class}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                    s.status === 'PAID' ? 'bg-emerald-500/20 text-emerald-400' :
                    s.status === 'OVERDUE' ? 'bg-rose-500/20 text-rose-400' :
                    'bg-amber-500/20 text-amber-400'
                  }`}>
                    {s.status}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-bold uppercase text-white/20 tracking-widest mb-2">ATTENDANCE</p>
                    <p className="text-2xl font-bold text-primary">{s.attendance}</p>
                  </div>
                  <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-bold uppercase text-white/20 tracking-widest mb-2">PARENT</p>
                    <p className="text-sm font-bold text-white truncate pr-2">{s.parent}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                  <button className="text-primary font-bold text-sm hover:brightness-125 transition-all">View Full Profile</button>
                  <div className="flex gap-3">
                    <button className="p-2.5 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"><Mail size={20} /></button>
                    <button className="p-2.5 rounded-xl bg-white/5 text-[#25D366] hover:bg-[#25D366]/10 hover:scale-110 transition-all"><WhatsAppIcon size={20} /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4">
          <div className="glass-panel p-10 h-full flex flex-col sticky top-[120px]">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-primary/20 mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdDRylsjsaXCt9KajTL-x-jmZOohAkYFDqCsVLFHD9y4B-mz4z9dtR1Khx3ztv1eRGJObUEPRY0djIDjb2ioUJLz1L4JvLwPdaEIipofI-dE7eDNxY2MOkEVwGKcbOVK_TeqmZHzbdjAWHP7-141jdQh1oZYAlYtg6KFb547DnreqHRcI8jD-lOlhBtoEuDwMp3x7Z4n8atIKh5hjEI3pRkX1wHrVVVObLzIlf8sia_cgdWHopyMUdkFTElTAe7J8hvjSa9Zds8-RH" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-1">Leo Thompson</h2>
              <p className="text-white/40 text-sm font-medium">Student since Oct 2023</p>
              <div className="flex gap-4 mt-10 w-full">
                <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                  <Edit size={18} /> Edit
                </button>
                <button className="flex-1 glass-panel text-[#25D366] py-4 rounded-2xl font-bold flex items-center justify-center gap-2 border border-[#25D366]/20 hover:bg-[#25D366]/10 hover:scale-[1.02] active:scale-95 transition-all">
                  <WhatsAppIcon size={18} /> WhatsApp
                </button>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8 flex items-center justify-between">
                  PROGRESS NOTES
                  <History className="text-primary" size={16} />
                </h4>
                <div className="space-y-8 border-l-2 border-white/5 ml-1 pl-8 relative">
                  {[
                    { title: "Excellent use of shading", date: "Mar 12, 2024", desc: "Leo successfully applied wet-on-wet technique for sky rendering today.", active: true },
                    { title: "Color mixing mastery", date: "Mar 05, 2024", desc: "Focused on creating skin tones from primary colors. High engagement.", active: false }
                  ].map((note, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full ring-8 ring-[#0a0d14] ${note.active ? 'bg-primary shadow-[0_0_12px_rgba(107,63,160,0.8)]' : 'bg-white/10'}`} />
                      <p className="text-[15px] font-bold text-white mb-0.5">{note.title}</p>
                      <p className="text-[11px] text-white/30 font-bold uppercase tracking-wider mb-2">{note.date}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{note.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">ATTENDANCE TREND</h4>
                <div className="flex items-end gap-2 h-24 px-2">
                  <div className="flex-1 bg-white/5 rounded-t-xl h-[80%] hover:bg-primary/20 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t-xl h-[100%] hover:bg-primary/20 transition-colors" />
                  <div className="flex-1 bg-white/5 rounded-t-xl h-[60%] hover:bg-primary/20 transition-colors" />
                  <div className="flex-1 bg-primary rounded-t-xl h-[95%] shadow-lg shadow-primary/30" />
                </div>
                <div className="flex justify-between mt-3 px-1 text-[10px] font-bold text-white/20">
                  <span>WK1</span><span>WK2</span><span>WK3</span><span className="text-primary font-black">TODAY</span>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">PAYMENT HISTORY</h4>
                <div className="space-y-3">
                  {['March Term $120.00', 'Feb Term $120.00'].map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-emerald-500" size={20} />
                        <span className="text-sm font-bold text-white/80">{p.split(' ')[0]} {p.split(' ')[1]}</span>
                      </div>
                      <span className="text-sm font-black text-white">{p.split(' ').pop()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
