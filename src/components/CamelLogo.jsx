import React from 'react';

export default function CamelLogo({ size = 26, color = 'currentColor', className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-label="Roam Rajasthan Camel Emblem"
    >
      {/* Royal Sun / Halo background ring */}
      <circle cx="32" cy="32" r="30" fill="rgba(198, 146, 20, 0.12)" stroke="#c69214" strokeWidth="1.5" strokeDasharray="3 2" />
      
      {/* Camel Silhouette */}
      <path 
        d="M14 48V42C14 40.5 15 39 16.5 38.5C18 38 19 36 19 34C19 32 18 30 18 28C18 24 21 21 24 21C26.5 21 28.5 22.5 29.5 24.5C31 22 34 20 37.5 20C42.5 20 46.5 24 46.5 29C46.5 30 46 31 45.5 32C47.5 33 49 35 49 37.5V48H45V38C45 36.5 44 35.5 42.5 35.5H39V48H35V35H29V48H25V37C23.5 37 22.5 38 22.5 39.5V48H14Z" 
        fill={color === 'currentColor' ? '#c69214' : color} 
        opacity="0"
      />
      {/* High-detail refined camel path */}
      <path
        d="M17 50 L17 41 C17 38 18 36.5 20 36 C20 34 19 31 19 28 C19 23 22 20 25.5 20 C28 20 30 21.5 31 23.5 C33 21 36.5 19.5 40 19.5 C45.5 19.5 50 24 50 29.5 C50 31 49.5 32.5 48.5 33.5 C50.5 35 52 37.5 52 40.5 L52 50 L48 50 L48 41 C48 39 47 38 45 38 L42 38 L42 50 L38 50 L38 37 L31 37 L31 50 L27 50 L27 39 C25 39 24 40 24 42 L24 50 Z"
        fill={color === 'currentColor' ? '#c69214' : color}
        opacity="0"
      />
      {/* Accurate Desert Camel Vector */}
      <g fill={color === 'currentColor' ? '#c69214' : color}>
        {/* Head and muzzle */}
        <path d="M49 14.5 C49 13.7 48.2 13 47 13 C45.8 13 44 14.2 43 15.5 C42.2 16.5 41 18.5 41 20.5 C41 23 42.5 25.5 44 28 C44.8 29.3 45.2 31 45.2 32.5 C45.2 34 44.5 35.2 43.5 36 C42.2 37 40.5 37.5 38.5 37.5 L38.5 34 C38.5 30 36 26.5 32 26.5 C29.5 26.5 27.5 28 26.2 30 C25.5 28.5 23.8 27.5 21.8 27.5 C18.8 27.5 16.5 29.8 16.5 32.8 C16.5 34 17 35.2 17.8 36.2 C16.2 37.8 15 40.2 15 43 L15 51 L18.5 51 L18.5 43.5 C18.5 41.5 19.8 40 21.5 40 L23 40 L23 51 L26.5 51 L26.5 40 L34.5 40 L34.5 51 L38 51 L38 41 C39.5 41 40.8 40.2 41.5 39 C42.2 40.2 43.5 41 45 41 L45 51 L48.5 51 L48.5 41 C49.8 39.8 50.8 37.8 50.8 35.5 C50.8 33.2 50.2 31.5 49 30 C47.8 28.5 47 26.5 47 24.5 C47 22.8 47.8 21 48.5 19.8 C49.2 18.5 50.5 17.2 50.5 15.8 C50.5 15 49.8 14.5 49 14.5 Z" />
        {/* Eye dot */}
        <circle cx="47" cy="15.8" r="0.9" fill="#ffffff" />
        {/* Tail */}
        <path d="M15 41 C13.5 42.5 13 45 13 48" stroke={color === 'currentColor' ? '#c69214' : color} strokeWidth="1.8" strokeLinecap="round" />
        {/* Royal decorative saddle ornament */}
        <path d="M28 32 Q32 35 36 32" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="32" cy="35" r="1.2" fill="#e53e3e" />
      </g>
    </svg>
  );
}
