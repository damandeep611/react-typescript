import React from 'react';
import { motion } from 'framer-motion';

const StockTile: React.FC = () => {
  const horizontalLines = 10;
  const verticalLines = 20;

  // Fluctuating trendline points
  const trendLinePoints = [
    { x: 0, y: 80 },
    { x: 10, y: 70 },
    { x: 20, y: 75 },
    { x: 30, y: 60 },
    { x: 40, y: 65 },
    { x: 50, y: 55 },
    { x: 60, y: 50 },
    { x: 70, y: 40 },
    { x: 80, y: 45 },
    { x: 90, y: 30 },
    { x: 100, y: 35 },
  ];

  const trendLinePath = `M ${trendLinePoints.map(p => `${p.x},${p.y}`).join(' L ')}`;

  // Function to create candlestick with opacity
  const Candlestick = ({ x, y, height, isGreen }: { x: number, y: number, height: number, isGreen: boolean }) => (
    <rect
      x={x}
      y={y}
      width="1.5"
      height={height}
      fill={isGreen ? "#2ECC71" : "#E74C3C"}
      fillOpacity="0.4"
      stroke={isGreen ? "#2ECC71" : "#E74C3C"}
      strokeWidth="0.03"
      strokeOpacity="0.05"
    />
  );

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Grid lines */}
      {Array.from({ length: horizontalLines }, (_, i) => (
        <line 
          key={`grid-h-${i}`} 
          x1="0" 
          y1={i * (100 / (horizontalLines - 1))} 
          x2="100" 
          y2={i * (100 / (horizontalLines - 1))} 
          stroke="#2C3E50" 
          strokeWidth="0.05"
        />
      ))}
      {Array.from({ length: verticalLines }, (_, i) => (
        <line 
          key={`grid-v-${i}`} 
          x1={i * (100 / (verticalLines - 1))} 
          y1="0" 
          x2={i * (100 / (verticalLines - 1))} 
          y2="100" 
          stroke="#2C3E50" 
          strokeWidth="0.05"
        />
      ))}
      
      {/* Fluctuating trend line */}
      <motion.path
        d={trendLinePath}
        fill="none"
        stroke="#2ECC71"
        strokeWidth="0.3"
        strokeOpacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Horizontal support line */}
      {/* <line x1="0" y1="70" x2="100" y2="70" stroke="#E67E22" strokeWidth="0.2" strokeOpacity="0.5" strokeDasharray="1,1" /> */}

      {/* Candlestick-like elements with opacity */}
      <Candlestick x={5} y={75} height={10} isGreen={true} />
      <Candlestick x={15} y={65} height={15} isGreen={false} />
      {/* <Candlestick x={25} y={70} height={10} isGreen={true} /> */}
      {/* <Candlestick x={35} y={55} height={15} isGreen={false} />
      <Candlestick x={45} y={60} height={10} isGreen={true} />
      <Candlestick x={55} y={50} height={10} isGreen={false} />
      <Candlestick x={65} y={45} height={15} isGreen={true} />
      <Candlestick x={75} y={35} height={20} isGreen={false} /> */}
      {/* <Candlestick x={85} y={40} height={10} isGreen={true} /> */}
      <Candlestick x={95} y={30} height={15} isGreen={false} />
    </motion.svg>
  );
};

export default StockTile;