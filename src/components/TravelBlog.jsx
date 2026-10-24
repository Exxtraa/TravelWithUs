import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs';

export default function TravelBlog() {
  return (
    <section id="travel-blog" className="blog-section">
      <div className="section-header-centered">
        <h3 className="section-title">Travel Blog</h3>
        <p className="section-subtitle">
          Stories, heritage insights, and expert travel advice from our local guides in Rajasthan.
        </p>
      </div>

      <div className="blog-grid">
        {BLOGS.map((b) => (
          <Link 
            key={b.slug} 
            to={`/blog/${b.slug}`}
            className="blog-card blog-card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label={`Read full article: ${b.title}`}
          >
            <div className="blog-image-wrap">
              <img 
                src={b.image} 
                alt={b.title} 
                className="blog-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Udaipur_Lake_India.JPG/1280px-Udaipur_Lake_India.JPG';
                }}
              />
            </div>
            <div className="blog-body">
              <h4 className="blog-title">{b.title}</h4>
              <p className="blog-excerpt">{b.excerpt}</p>
              <div className="blog-footer-row">
                <div className="blog-meta">
                  <Clock size={13} />
                  <span>{b.date} • {b.readTime}</span>
                </div>
                <span className="blog-read-more">
                  <span>Read Story</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
