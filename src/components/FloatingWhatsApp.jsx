import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, X, ChevronUp } from 'lucide-react';
import { CONTACTS, openEmailQuote } from '../data/destinations';

export default function FloatingWhatsApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsApp = (number, name) => {
    const text = encodeURIComponent(`Hi ${name}, I am interested in planning a Rajasthan tour package with Roam Rajasthan. Could you please share the details and pricing options?`);
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <div style={{ position: 'fixed', bottom: '1.8rem', right: '1.8rem', zIndex: 1000 }}>
      {/* Expanded Quick Contact Popover */}
      {menuOpen && (
        <div 
          style={{
            background: '#ffffff',
            borderRadius: '18px',
            boxShadow: '0 12px 36px rgba(18, 42, 30, 0.25)',
            border: '1.5px solid #e6dcce',
            padding: '1.2rem',
            marginBottom: '0.8rem',
            width: '290px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#163627', textTransform: 'uppercase' }}>
              Roam Rajasthan Support
            </span>
            <button 
              onClick={() => setMenuOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
              aria-label="Close contact popup"
            >
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.4 }}>
            Direct local pricing without middlemen. Choose your preferred coordinator:
          </p>

          {/* Contact 1: Aspak Ali */}
          <button
            onClick={() => handleWhatsApp(CONTACTS.aspak.cleanPhone, "Aspak")}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#25d366',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 0.9rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <MessageCircle size={16} />
              <span>Aspak Ali</span>
            </div>
            <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>+91 9024772664</span>
          </button>

          {/* Contact 2: Shazad Ansari */}
          <button
            onClick={() => handleWhatsApp(CONTACTS.shazad.cleanPhone, "Shazad")}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#128c7e',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 0.9rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'transform 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <MessageCircle size={16} />
              <span>Shazad Ansari</span>
            </div>
            <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>+91 9929250220</span>
          </button>

          {/* Contact 3: Direct Email */}
          <button
            onClick={() => {
              setMenuOpen(false);
              openEmailQuote('General Rajasthan Tour');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: '#f4ede1',
              color: '#163627',
              border: '1px solid #d4c7b2',
              padding: '0.55rem 0.9rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer'
            }}
          >
            <Mail size={15} />
            <span>Email: roamrajasthan@gmail.com</span>
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        className="floating-whatsapp-trigger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Contact Aspak Ali & Shazad Ansari on WhatsApp"
        title="Direct WhatsApp & Email Support"
        style={{ position: 'static' }}
      >
        <MessageCircle size={22} />
        <span>Chat & Enquiry</span>
        <ChevronUp size={16} style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
      </button>
    </div>
  );
}
