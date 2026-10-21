import React from 'react';
import { Award, Bed, Headphones, ShieldCheck } from 'lucide-react';

export default function PerksBar() {
  const perks = [
    {
      icon: <Award size={24} />,
      title: "Best Price Guarantee",
      desc: "Direct booking without agency broker markups"
    },
    {
      icon: <Bed size={24} />,
      title: "Handpicked Hotels",
      desc: "Verified royal havelis & desert camps"
    },
    {
      icon: <Headphones size={24} />,
      title: "24/7 Dedicated Support",
      desc: "Direct support by Aspak Ali & Shazad Ansari"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Safe & Secure",
      desc: "Sanitized private AC cars & verified guides"
    }
  ];

  return (
    <section className="perks-strip">
      {perks.map((p, idx) => (
        <div key={idx} className="perk-item">
          <div className="perk-icon-circle">
            {p.icon}
          </div>
          <div>
            <h4 className="perk-title">{p.title}</h4>
            <p className="perk-desc">{p.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
