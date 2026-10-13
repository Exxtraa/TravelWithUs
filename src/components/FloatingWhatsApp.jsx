import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent("HiUs, I am interested in planning a Rajasthan tour package with TravelWith Us. Could you please share the details and pricing options?");
    window.open(`https://wa.me/919024772664?text=${text}`, "_blank");
  };

  return (
    <button
      className="floating-whatsapp-trigger"
      onClick={handleClick}
      aria-label="Chat on WhatsApp withUs (+91 9024772664)"
      title="Direct WhatsApp withUs (+91 9024772664)"
    >
      <MessageCircle size={22} />
      <span>Chat with Us</span>
    </button>
  );
}
