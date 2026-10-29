'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, UserPlus, CheckCircle2, ChevronDown, ArrowUpRight } from 'lucide-react';

const dataset = {
  monthly: {
    label: 'Monthly',
    points: [
      { label: 'Jan', val: 200, leads: 200, newLeads: 85, qualLeads: 32, bookings: 21 },
      { label: 'Feb', val: 350, leads: 350, newLeads: 120, qualLeads: 48, bookings: 33 },
      { label: 'Mar', val: 550, leads: 550, newLeads: 195, qualLeads: 72, bookings: 49 },
      { label: 'Apr', val: 800, leads: 800, newLeads: 245, qualLeads: 96, bookings: 64 },
      { label: 'May', val: 1050, leads: 1050, newLeads: 298, qualLeads: 112, bookings: 75 },
      { label: 'Jun', val: 1284, leads: 1284, newLeads: 342, qualLeads: 128, bookings: 86 }
    ],
    trends: {
      newLeads: '+18% vs last month',
      qualLeads: '+24% vs last month',
      bookings: '+20% vs last month'
    }
  },
  weekly: {
    label: 'Weekly',
    points: [
      { label: 'W1', val: 180, leads: 180, newLeads: 55, qualLeads: 24, bookings: 16 },
      { label: 'W2', val: 320, leads: 320, newLeads: 78, qualLeads: 32, bookings: 22 },
      { label: 'W3', val: 510, leads: 510, newLeads: 94, qualLeads: 41, bookings: 28 },
      { label: 'W4', val: 740, leads: 740, newLeads: 110, qualLeads: 49, bookings: 35 },
      { label: 'W5', val: 980, leads: 980, newLeads: 135, qualLeads: 58, bookings: 42 },
      { label: 'W6', val: 1284, leads: 1284, newLeads: 165, qualLeads: 68, bookings: 51 }
    ],
    trends: {
      newLeads: '+12% vs last week',
      qualLeads: '+16% vs last week',
      bookings: '+14% vs last week'
    }
  }
};

export default function GrowthDashboard() {
  const [timeframe, setTimeframe] = useState('monthly');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(5); // Default to latest (Jun / W6)

  const currentData = dataset[timeframe];
  const points = currentData.points;
  const activePoint = points[activeIdx] || points[points.length - 1];

  // SVG Dimension & Coordinate Math
  const svgWidth = 520;
  const svgHeight = 240;
  const padLeft = 45;
  const padRight = 25;
  const padTop = 20;
  const padBottom = 30;
  const graphWidth = svgWidth - padLeft - padRight;
  const graphHeight = svgHeight - padTop - padBottom;
  const maxY = 1500;

  const getX = (i) => padLeft + (i / (points.length - 1)) * graphWidth;
  const getY = (val) => padTop + (1 - val / maxY) * graphHeight;

  // Build SVG path string with smooth bezier curve
  const coords = points.map((p, i) => ({ x: getX(i), y: getY(p.val) }));
  
  let linePath = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const p0 = coords[i];
    const p1 = coords[i + 1];
    const cpX1 = p0.x + (p1.x - p0.x) / 2;
    const cpY1 = p0.y;
    const cpX2 = p0.x + (p1.x - p0.x) / 2;
    const cpY2 = p1.y;
    linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
  }

  const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${padTop + graphHeight} L ${coords[0].x} ${padTop + graphHeight} Z`;

  const yLevels = [1500, 1250, 1000, 750, 500, 250, 0];

  return (
    <div style={{ width: '100%', maxWidth: '580px' }}>
      {/* Title & Subtitle */}
      {/* <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#ffffff',
          fontFamily: 'var(--font-heading)',
          marginBottom: '0.25rem',
          letterSpacing: '-0.5px'
        }}>
          Growth Dashboard
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Track your performance and grow your business.
        </p>
      </div> */}

      {/* Main Graph Card */}
      <div
        className="glass-panel"
        style={{
          background: 'linear-gradient(180deg, rgba(13, 20, 32, 0.85) 0%, rgba(8, 12, 20, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '1.75rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          position: 'relative'
        }}
      >
        {/* Card Header with Dropdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Leads this month
            </h4>
          </div>

          {/* Timeframe Selector Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span>{currentData.label}</span>
              <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '110%',
                    background: '#0d1522',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '4px',
                    zIndex: 20,
                    minWidth: '110px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                >
                  {['monthly', 'weekly'].map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTimeframe(t);
                        setDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '6px 10px',
                        background: timeframe === t ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                        color: timeframe === t ? '#10b981' : 'var(--text-primary)',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        fontWeight: timeframe === t ? 600 : 400
                      }}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive SVG Chart */}
        <div style={{ position: 'relative', width: '100%', userSelect: 'none' }}>
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            style={{ width: '100%', height: 'auto', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.38" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Horizontal Grid Lines & Y-Axis Labels */}
            {yLevels.map((lvl) => {
              const y = getY(lvl);
              return (
                <g key={lvl}>
                  <text
                    x={padLeft - 10}
                    y={y + 4}
                    textAnchor="end"
                    fill="rgba(255, 255, 255, 0.45)"
                    fontSize="11"
                    fontFamily="monospace"
                  >
                    {lvl.toLocaleString()}
                  </text>
                  <line
                    x1={padLeft}
                    y1={y}
                    x2={svgWidth - padRight}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="1"
                  />
                </g>
              );
            })}

            {/* Area Fill */}
            <path d={areaPath} fill="url(#growthAreaGradient)" />

            {/* Growth Curve Line */}
            <path
              d={linePath}
              fill="none"
              stroke="#10b981"
              strokeWidth="3.2"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* Interactive Data Points and X Labels */}
            {coords.map((c, i) => {
              const isSelected = activeIdx === i;
              return (
                <g key={i}>
                  {/* Click/Hover Target Area */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="18"
                    fill="transparent"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                  />

                  {/* Pulsing ring for selected point */}
                  {isSelected && (
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="10"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      opacity="0.6"
                    />
                  )}

                  {/* Outer circle */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isSelected ? 6 : 4.5}
                    fill="#0a121e"
                    stroke={isSelected ? '#34d399' : '#10b981'}
                    strokeWidth={isSelected ? 2.5 : 2}
                    style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                    onMouseEnter={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                  />

                  {/* Inner dot */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isSelected ? 3 : 2}
                    fill={isSelected ? '#ffffff' : '#10b981'}
                    pointerEvents="none"
                  />

                  {/* X Axis Month Label */}
                  <text
                    x={c.x}
                    y={padTop + graphHeight + 20}
                    textAnchor="middle"
                    fill={isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'}
                    fontWeight={isSelected ? 600 : 400}
                    fontSize="12"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveIdx(i)}
                  >
                    {points[i].label}
                  </text>
                </g>
              );
            })}

            {/* Hover Tooltip Box */}
            {coords[activeIdx] && (
              <g
                transform={`translate(${coords[activeIdx].x}, ${coords[activeIdx].y - 58})`}
                style={{ pointerEvents: 'none' }}
              >
                {/* Tooltip Background Card */}
                <rect
                  x="-48"
                  y="0"
                  width="96"
                  height="44"
                  rx="8"
                  fill="#0a101d"
                  stroke="rgba(16, 185, 129, 0.45)"
                  strokeWidth="1"
                  filter="drop-shadow(0 8px 16px rgba(0,0,0,0.6))"
                />
                {/* Pointer Tip */}
                <polygon
                  points="0,49 -6,44 6,44"
                  fill="#0a101d"
                  stroke="rgba(16, 185, 129, 0.45)"
                  strokeWidth="1"
                />
                {/* Hide border overlap */}
                <rect x="-5" y="42" width="10" height="3" fill="#0a101d" />

                {/* Tooltip Month */}
                <text
                  x="0"
                  y="16"
                  textAnchor="middle"
                  fill="rgba(255, 255, 255, 0.65)"
                  fontSize="11"
                  fontWeight="500"
                >
                  {activePoint.label}
                </text>
                {/* Tooltip Leads Value */}
                <text
                  x="0"
                  y="34"
                  textAnchor="middle"
                  fill="#10b981"
                  fontSize="13"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  {activePoint.leads.toLocaleString()} Leads
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* 3 Metric Summary Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.85rem',
          marginTop: '1.25rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {/* Card 1: New Leads */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '0.9rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.2rem'
            }}>
              <TrendingUp size={16} color="#10b981" />
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              New Leads
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>
              {activePoint.newLeads}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
              <ArrowUpRight size={12} /> {currentData.trends.newLeads}
            </span>
          </div>

          {/* Card 2: Qualified Leads */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '0.9rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.2rem'
            }}>
              <UserPlus size={16} color="#10b981" />
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Qualified Leads
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>
              {activePoint.qualLeads}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
              <ArrowUpRight size={12} /> {currentData.trends.qualLeads}
            </span>
          </div>

          {/* Card 3: Completed Bookings */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '0.9rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.2rem'
            }}>
              <CheckCircle2 size={16} color="#10b981" />
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Completed Bookings
            </span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'monospace' }}>
              {activePoint.bookings}
            </span>
            <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
              <ArrowUpRight size={12} /> {currentData.trends.bookings}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}