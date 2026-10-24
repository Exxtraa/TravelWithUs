import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, MessageCircle, Share2, Compass, CheckCircle2 } from 'lucide-react';
import { BLOGS } from '../data/blogs';
import CamelLogo from '../components/CamelLogo';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import NewsletterFooter from '../components/NewsletterFooter';

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = BLOGS.find((b) => b.slug === slug) || BLOGS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${blog.title} — Roam Rajasthan Blog`;
  }, [slug, blog.title]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(`Hi Roam Rajasthan, I just read your travel guide on "${blog.title}". Could you please help me plan a tour experience covering these highlights?`);
    window.open(`https://wa.me/919024772664?text=${text}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const otherBlogs = BLOGS.filter(b => b.slug !== blog.slug);

  return (
    <div className="blog-page-container">
      {/* Top Navigation */}
      <nav className="detail-top-nav">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        <div className="brand-logo-two" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span>Roam Rajasthan</span>
          <CamelLogo size={22} color="#163627" />
        </div>

        <div className="detail-nav-actions">
          <button onClick={handleShare} className="btn-share-tour" aria-label="Share story">
            <Share2 size={15} />
            <span>Share</span>
          </button>
          <button 
            className="btn-price-whatsapp detail-nav-whatsapp"
            onClick={handleWhatsAppInquiry}
          >
            <MessageCircle size={16} />
            <span>Plan This Tour</span>
          </button>
        </div>
      </nav>

      {/* Main Blog Article */}
      <article className="blog-article-wrapper">
        <header className="blog-article-header">
          <div className="blog-article-badge">{blog.category}</div>
          <h1 className="blog-article-title">{blog.title}</h1>
          <p className="blog-article-lead">{blog.excerpt}</p>

          <div className="blog-author-strip">
            <div className="blog-author-info">
              <User size={16} />
              <span>{blog.author}</span>
            </div>
            <span>•</span>
            <div className="blog-author-info">
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="blog-author-info">
              <Clock size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="blog-cover-wrapper">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="blog-cover-image"
            onError={(e) => {
              e.target.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Udaipur_Lake_India.JPG/1280px-Udaipur_Lake_India.JPG';
            }}
          />
        </div>

        {/* Article Body */}
        <div className="blog-article-body">
          <p className="blog-intro-paragraph">{blog.content.lead}</p>

          {blog.content.sections.map((sec, i) => (
            <section key={i} className="blog-section-block">
              <h2 className="blog-section-heading">{sec.heading}</h2>
              <p className="blog-section-text">{sec.body}</p>
              {sec.highlight && (
                <div className="blog-highlight-quote">
                  <Compass size={20} color="#b08110" />
                  <span>{sec.highlight}</span>
                </div>
              )}
            </section>
          ))}

          {/* Insider Tips Card */}
          {blog.content.insiderTips && (
            <div className="blog-insider-box">
              <h3 className="insider-box-title">
                <CheckCircle2 size={18} color="#1b8543" />
                <span>Insider Tips from Roam Rajasthan Chauffeurs & Guides</span>
              </h3>
              <ul className="insider-tips-list">
                {blog.content.insiderTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Plan Tour WhatsApp Banner */}
          <div className="blog-plan-cta-box">
            <div className="cta-left-text">
              <h3>Inspired to experience this journey in person?</h3>
              <p>
                Our coordinators craft private, customized itineraries with verified AC chauffeurs, 
                heritage havelis, and zero broker commissions.
              </p>
            </div>
            <button className="btn-cta-whatsapp" onClick={handleWhatsAppInquiry}>
              <MessageCircle size={18} />
              <span>Plan on WhatsApp (+91 9024772664)</span>
            </button>
          </div>
        </div>

        {/* Read Next Section */}
        {otherBlogs.length > 0 && (
          <div className="blog-read-next-section">
            <h3 className="read-next-title">More Travel Stories & Guides</h3>
            <div className="blog-grid" style={{ marginTop: '1.2rem' }}>
              {otherBlogs.map((b) => (
                <Link 
                  key={b.slug} 
                  to={`/blog/${b.slug}`}
                  className="blog-card blog-card-link"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="blog-image-wrap">
                    <img src={b.image} alt={b.title} className="blog-image" />
                    <span className="blog-category-badge">{b.category}</span>
                  </div>
                  <div className="blog-body">
                    <h4 className="blog-title">{b.title}</h4>
                    <p className="blog-excerpt">{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Global Footer & WhatsApp */}
      <NewsletterFooter />
      <FloatingWhatsApp />
    </div>
  );
}
