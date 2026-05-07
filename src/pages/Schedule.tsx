import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  CheckCircle2 as Wellness, 
  Music, 
  Calendar, 
  CheckCircle2, 
  MoreVertical, 
  Mail, 
  ChevronRight,
  Filter
} from '../icons';

export default function Schedule() {
  const classes = [
    {
      id: 1,
      title: 'Oil Painting for Beginners',
      term: 'Spring 2024',
      schedule: 'Mondays, 18:00 - 20:00',
      enrollment: { current: 12, max: 15 },
      teacher: { name: 'Elena Rossi', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3_GwNWclLImK9JRdnq4mpHQP5mVcGPstBZwpujDSAiCOg3nlI3rPTxJrGQidq9DAGhRy5kO57pnHt7Vi87kHx-GW1Wy0BeNj0SgJ7A90llYRbXtdfMYDUc54PNPN22oc65RRq7lRsYZ7I1PzS3NO3C-bNbDing40b1gDpWp4mHChBLRaH0uGQmN3pqrZpNLB6HIWDX2tGL93aVo7PJkQfz_oyeQrGSDSZ43zzz9FXAuOjzcngojuA6Tmr68q8e4T6jdnxGmBivOM5" },
      fee: '$320.00',
      category: 'CREATIVE ARTS',
      icon: Palette,
      color: 'primary'
    },
    {
      id: 2,
      title: 'Vinyasa Flow Yoga',
      term: 'Annual 2024',
      schedule: 'Wed & Fri, 07:30 - 08:30',
      enrollment: { current: 20, max: 20 },
      teacher: { name: 'Marcus Chen', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtTVRCc32847Fvhxqk9l2WigQbk_ia1RpdbQu_oLAK5mBCPfVCazPfPy4Xz76oYkAlhx3kZv_1JYE9RTqNPvA13XOHfjswOfhl0ABb2BPMA0jFQtOBMM9qis4CuzsVK8RPyuFZim4dctbd6KxGUTrEpPLsEV7bFn_N5Yd0Ssi5uPkn30RZNRHL_MIN4v0LmPTK5WIuzfHuPi5HXagnbEVwqiHgivak4y6e0nIcUGYk3ozGWorgGIqiRaDR8Yb9g_JI1zIW23UX5beP" },
      fee: '$180.00',
      category: 'WELLNESS',
      icon: CheckCircle2, // Using a wellness icon placeholder
      color: 'secondary'
    },
    {
      id: 3,
      title: 'Introductory Piano',
      term: 'Spring 2024',
      schedule: 'Saturdays, 10:00 - 11:30',
      enrollment: { current: 6, max: 8 },
      teacher: { name: 'Sarah Jenkins', avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgCFwSQvfxL1qDfGkHVG0hnvh2gajH0wlCD1qpQpmNecfu7IcdyKCMHggOpoaX4RFrxpnjvpmFxn0XHziG83268vpv9hZzrYrsEO0GLxB7OYIfUGqCer-kAq0DaIfRFLA5eJgvhQiRbBWMXHaa4_QCAjDJi3t_pRn6YFFojJg8qcN_vOumgz4wJ-MTMTXm7QACYqgYh-0nUsmjU_E4ltNafTkdVl0iINpkATz8o-D9w3YwG8biFUNJJssINwC_1pixvx7LWI5shRi8" },
      fee: '$450.00',
      category: 'MUSIC',
      icon: Music,
      color: 'tertiary'
    }
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xl:col-span-8 space-y-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Active Classes</h2>
            <p className="text-sm text-white/40 font-medium">Currently running terms and schedules</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl glass-panel text-white font-bold transition-all hover:bg-white/10 active:scale-95 border border-white/10 shadow-lg shadow-black/20">
            <Filter size={18} /> Filter
          </button>
        </div>

        <div className="space-y-4">
          {classes.map((c) => (
            <motion.div 
              key={c.id}
              whileHover={{ y: -4, x: 4 }}
              className="glass-panel p-8 shadow-xl hover:shadow-primary/5 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-8 items-center">
                  <div className={`p-5 rounded-2xl ${
                    c.color === 'primary' ? 'bg-primary/20 text-primary' :
                    c.color === 'secondary' ? 'bg-secondary/20 text-secondary' :
                    'bg-tertiary/20 text-tertiary'
                  }`}>
                    <c.icon size={36} />
                  </div>
                  <div>
                    <span className={`inline-block px-4 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-3 ${
                      c.color === 'primary' ? 'bg-white/10 text-primary' :
                      c.color === 'secondary' ? 'bg-white/10 text-secondary' :
                      'bg-white/10 text-tertiary'
                    }`}>
                      {c.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{c.title}</h3>
                    <p className="text-sm text-white/40 flex items-center gap-2 mt-2 font-medium">
                      <Calendar size={14} className="text-primary" /> {c.schedule}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-12 text-right">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">ENROLLMENT</p>
                    <p className="text-2xl font-bold text-white">
                      {c.enrollment.current} <span className="text-white/20 font-medium text-lg">/ {c.enrollment.max}</span>
                    </p>
                    <div className="w-28 bg-white/5 h-2 rounded-full mt-3 ml-auto overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          c.color === 'primary' ? 'bg-primary' :
                          c.color === 'secondary' ? 'bg-secondary' :
                          'bg-tertiary'
                        }`} 
                        style={{ width: `${(c.enrollment.current / c.enrollment.max) * 100}%` }} 
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">TEACHER</p>
                    <div className="flex items-center gap-3 justify-end">
                      <span className="text-sm font-bold text-white">{c.teacher.name}</span>
                      <img src={c.teacher.avatar} className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2">TERM FEE</p>
                    <p className="text-2xl font-bold text-secondary">{c.fee}</p>
                  </div>
                </div>
                <ChevronRight size={28} className="text-white/10 group-hover:text-primary transition-all ml-6 group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="col-span-12 xl:col-span-4">
        <div className="glass-panel h-full flex flex-col overflow-hidden sticky top-[120px]">
          <div className="bg-primary/20 p-10 text-white relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-transparent" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <Palette size={28} className="text-primary" />
                <button className="text-white/40 hover:text-white transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-1 tracking-tight">Oil Painting for Beginners</h2>
              <p className="text-sm text-white/50 font-medium">Term: Spring 2024 • Monday 18:00</p>
            </div>
          </div>

          <div className="flex-1 p-10 overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30">ENROLLED STUDENTS (12)</h3>
              <button className="text-primary font-bold text-sm flex items-center gap-2 hover:brightness-110">
                <Mail size={16} /> Message All
              </button>
            </div>

            <div className="space-y-8">
              {[
                { name: "Alice Thompson", date: "Joined Jan 15", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvj0cqCcniQSDj9ht9AnDBfw_WgnVPrcv0aqNcbMBoBa3vdZQO55lud9aAYCDqYpvjqAWFZZbN5xeS5xON6U7vsgyWUrIIbCrpR_RVn3zGDlMj2ncDVRcg3QR93oqxFkvQugYyL2WJ78mL9-6KLwveFzF6CVp5fznaGfO7v96bosu-vLtSCA5j9A0K38dnlXM7Z-SjwitzZxW8JB3alPE3SITU_YlPiYK08KDV0rnCTt5CMl0byNDVc5HK5TgqfJ769B2hJi-vPU0" },
                { name: "David Wilson", date: "Joined Jan 12", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTGX3ZFnSqs86HSU7wHmhFoYr4McQUn-plL6tux81CR94ZSoCo6IahF5GflLRsJ1B1NPcH_a44fD7L7ORKQn3uRlvKR7dBAWw86ZQ0JIqABKu-eMUobUBhn-XorpZf30ce8FL5tEde1TTzbDi2N7QewxOx00YvtFdnKKxXvKYxVDef80UW1oIzBsh6CPBgDiLThhojRBc40o1fE8x95ctLnimwkRLaCsZj55nCYhNg4Y9PMe0Cv_KbyMMWR76Hve_z_YDqEeZc-lhR" },
                { name: "Grace Kim", date: "Joined Feb 02", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRoY_BYR_9AJCeIjAtIS-SOMxwH8lS4_bxgz4qRcjz_CAwhEjnWHH-FnOX2Tm9_HqBhkFs9aJYL1RGp6rfylamMdx1JEWCyaIIbCzEluNZK14WjZfFsgx1g7J5Hj0FeHcJTcbWoI8N3XQ1jYRK6ylEM6UbOy1vV9JfC7CqpSjPC9XMKSK3_ehkv1y3B_i4bGztGjbIySz_wUK2DgL6_ShPsVAjav8hsf-dAilwGIuOimSQkgXYLcQqjW57lh7_cYocGgkkPM6uUSr" }
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <img src={s.img} className="w-12 h-12 rounded-2xl shadow-lg shadow-black/20 object-cover ring-2 ring-white/5 transition-transform group-hover:scale-105" />
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5">{s.name}</p>
                      <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.05em]">{s.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 1, 1, 0, 1].map((p, j) => (
                      <div 
                        key={j} 
                        className={`w-2.5 h-2.5 rounded-full shadow-sm transition-transform ${p ? 'bg-emerald-500 scale-110' : 'bg-rose-500/30'}`} 
                        title={p ? 'Present' : 'Absent'} 
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/5 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-sm text-white/50 italic font-medium relative z-10">Next Session: Monday, Oct 23rd @ 18:00</p>
              <button className="mt-6 w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all relative z-10">
                Take Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
