import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import aiImg from "../assets/img/ai.png"
const videosViewsData = [
  { name: '', value: 60 },
  { name: '', value: 65 },
  { name: '', value: 62 },
  { name: '', value: 70 },
  { name: '', value: 75 },
  { name: '', value: 80 },
  { name: '', value: 78 },
  { name: '', value: 85 },
  { name: '', value: 90 },
  { name: '', value: 95 },
  { name: '', value: 100 },
];

const subscribersData = [
  { name: '10', value: 40 },
  { name: '20', value: 90 },
  { name: '30', value: 150 },
  { name: '40', value: 200 },
  { name: '50', value: 160 },
  { name: '60', value: 190 },
];

const retentionData = [
  { name: '', value: 70 },
  { name: '', value: 80 },
  { name: '', value: 75 },
  { name: '', value: 85 },
  { name: '', value: 78 },
  { name: '', value: 90 },
  { name: '', value: 82 },
  { name: '', value: 88 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#0f172a',
        border: '1px solid #334155',
        borderRadius: 6,
        padding: '4px 10px',
      }}>
        <p style={{ color: '#fff', fontSize: 13, fontWeight: 600, margin: 0 }}>
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 90 },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 90 },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 90 },
  },
};

const fromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 90 },
  },
};

const titleDrop = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut', type: 'spring', stiffness: 100 },
  },
};

const card = {
  background: 'rgba(30,41,59,0.85)',
  border: '1px solid rgba(71,85,105,0.45)',
  borderRadius: 16,
  padding: '16px',
};

const Dashboard = () => {
  return (
    <div style={{
      background: '',
      minHeight: '80vh',
      padding: '20px 16px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }} className="md:px-8 md:py-10 lg:px-8 lg:py-10">
      {/* Page title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
      
         
        }}
        className="md:text-3xl md:mb-9 font-bold text-center mb-10 section-title italic"
      >
        Case Study
      </motion.h2>

      {/* Outer 2-column layout - Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-10  gap-6 md:gap-8 lg:gap-8 max-w-6xl mx-auto md:items-start">

        {/* LEFT — charts + KPI cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ borderRadius: 16, padding: '16px' }}
          className="md:col-span-6 bg-gradient-to-r  from-[#3396a1] to-[#016179]  flex flex-col  gap-4 md:gap-5"
        >
          {/* Charts row - Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

            {/* Area chart — Videos Views Growth */}
            <motion.div variants={fadeUp} style={card} className="md:col-span-2">
              <motion.div variants={titleDrop} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
                  Performance
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 20 }}>
                  Videos Views Growth
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ResponsiveContainer width="100%" height={127}>
                  <AreaChart data={videosViewsData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.85} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
                    <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorViews)"
                      dot={{ fill: '#3b82f6', r: 4, strokeWidth: 0 }}
                      animationDuration={1200}
                      isAnimationActive
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>

            {/* Bar chart — Monthly Subscribers */}
            <motion.div variants={fadeUp} style={card} className="md:col-span-1">
              <motion.div variants={titleDrop} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', marginBottom: 16 }}>
                  Monthly Subscribers
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ResponsiveContainer width="100%" height={127}>
                  <BarChart data={subscribersData} margin={{ left: 0, right: 0, top: 5, bottom: 0 }}>
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 10 }} />
                    <YAxis stroke="#64748b" tick={{ fontSize: 10 }} hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="value"
                      fill="url(#barGrad)"
                      radius={[5, 5, 0, 0]}
                      animationDuration={1000}
                      isAnimationActive
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </div>

          {/* KPI row - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

            {/* Revenue */}
            <motion.div variants={fromLeft} style={card}>
              <p style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Revenue
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: '#f1f5f9' }} className="md:text-4xl">100%</span>
                <div style={{
                  background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                  borderRadius: 8, padding: '7px 13px',
                  fontSize: 12, fontWeight: 700, color: '#fff',
                }} className="md:text-sm">
                  $700
                </div>
              </div>
            </motion.div>

            {/* Engagement Rate */}
            <motion.div variants={fromBottom} style={card}>
              <p style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Engagement Rate
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: '#f1f5f9' }} className="md:text-4xl">100%</span>
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  borderRadius: 8, padding: '7px 13px',
                  fontSize: 12, fontWeight: 700, color: '#fff',
                }} className="md:text-sm">
                  100%
                </div>
              </div>
            </motion.div>

            {/* Audience Retention */}
            <motion.div variants={fromRight} style={card}>
              <motion.div variants={titleDrop} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: '#f1f5f9', marginBottom: 12 }}>
                  Audience Retention
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ResponsiveContainer width="100%" height={66}>
                  <LineChart data={retentionData} margin={{ left: 0, right: 0, top: 5, bottom: 0 }}>
                    <defs>
                      <linearGradient id="retentionFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 9 }} />
                    <YAxis stroke="#64748b" tick={{ fontSize: 9 }} domain={[60, 100]} hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', r: 3, strokeWidth: 0 }}
                      animationDuration={1200}
                      isAnimationActive
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — testimonial */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:col-span-4 flex py-20 flex-col   pt-2 md:pt-1"
        >
          <h3 className="font-semibold mt-20 md:mb-5 lg:text-[1.8rem]">
            How Agentic Arc Helped a Creator 4X Their Views in 90 Days
          </h3>
          <p  className="md:text-sm md:mb-6 lg:text-sm italic">
            "Agentic Arc didn't just give us tools; they gave us our time back. We increased our weekly output by
            400% while maintaining the quality our audience expects. Our cost per article dropped from $85 to $12."
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            paddingTop: 16,
            borderTop: '1px solid rgba(71,85,105,0.4)',
            justifyContent: 'start',
          }} className="md:gap-3   md:pt-5">
            <div  style={{
              width: 44, height: 44, borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
              flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 600, color: '#fff',
            }}className="md:w-11 md:h-11 md:text-sm">
                          <img src={aiImg} alt="img"  />

            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9', margin: 0 }} className="md:text-sm">John Doe</p>
              <p style={{ fontSize: 11, color: '#64748b', marginTop: 2 }} className="md:text-xs">CEO/Founder Of Elite House</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;