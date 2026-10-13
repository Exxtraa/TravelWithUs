import React from 'react';

export default function TestimonialsRow() {
  const reviews = [
    {
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      headline: "Exceptional service!",
      sub: "Ritu & Kunal • Jaipur & Udaipur 5-Day Tour"
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      headline: "Unforgettable desert night!",
      sub: "David & Sophie • Jaisalmer Luxury Camp"
    },
    {
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      headline: "Seamless booking.",
      sub: "Vikram Rathore & Family • 7-Day Royal Circuit"
    }
  ];

  return (
    <section className="testimonials-row">
      {reviews.map((r, i) => (
        <div key={i} className="testimonial-pill">
          <img 
            src={r.avatar} 
            alt={r.headline} 
            className="testimonial-avatar"
            loading="lazy"
          />
          <div>
            <h5 className="testimonial-headline">{r.headline}</h5>
            <p className="testimonial-sub">{r.sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
