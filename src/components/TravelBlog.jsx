import React from 'react';

export default function TravelBlog() {
  const blogs = [
    {
      title: "Hidden Gems of Rajasthan",
      excerpt: "Step off the beaten path into the fresco-adorned havelis of Shekhawati and the peaceful red stone alleys of Bikaner.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg/1280px-The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg",
      date: "October 2026",
      readTime: "5 min read"
    },
    {
      title: "Sustainable Desert Travel",
      excerpt: "How mindful tourism protects fragile Thar ecosystems, promotes water harvesting traditions, and supports local Kalbeliya dancers.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Thar_desert_Rajasthan_India.jpg/1280px-Thar_desert_Rajasthan_India.jpg",
      date: "September 2026",
      readTime: "6 min read"
    },
    {
      title: "Royal Lake Palaces & Dinners",
      excerpt: "Inside the timeless royal banquets, Mewar heritage cuisine, and tranquil evening boat cruises on Lake Pichola in Udaipur.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Udaipur_Lake_Palace.jpg/1280px-Udaipur_Lake_Palace.jpg",
      date: "August 2026",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="travel-blog" className="blog-section">
      <div className="section-header-centered">
        <h3 className="section-title">Travel Blog</h3>
        <p className="section-subtitle">
          Stories, heritage insights, and expert travel advice from our local guides in Rajasthan.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((b, idx) => (
          <article key={idx} className="blog-card">
            <div className="blog-image-wrap">
              <img 
                src={b.image} 
                alt={b.title} 
                className="blog-image"
                loading="lazy"
              />
            </div>
            <div className="blog-body">
              <h4 className="blog-title">{b.title}</h4>
              <p className="blog-excerpt">{b.excerpt}</p>
              <div className="blog-meta">
                <span>{b.date}</span> • <span>{b.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
