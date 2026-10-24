import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LANGUAGES } from '../data/languages';

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(() => {
    try {
      const saved = localStorage.getItem('roam_selected_lang');
      if (saved && LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Initialize Google Translate script once
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: LANGUAGES.map(l => l.code).join(','),
              autoDisplay: false
            },
            'google_translate_hidden_element'
          );
        }
      };

      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    try {
      localStorage.setItem('roam_selected_lang', langCode);
      const hostname = window.location.hostname;
      const cookieValue = `/en/${langCode}`;

      document.cookie = `googtrans=${cookieValue}; path=/;`;
      if (hostname !== 'localhost') {
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${hostname};`;
      }

      const selectEl = document.querySelector('.goog-te-combo');
      if (selectEl) {
        selectEl.value = langCode;
        selectEl.dispatchEvent(new Event('change'));
      } else {
        window.location.reload();
      }
    } catch (err) {
      console.warn('Language translate trigger:', err);
    }
  };

  const currentLang = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div className="language-selector-wrapper" ref={dropdownRef}>
      {/* Hidden container for Google Translate widget */}
      <div id="google_translate_hidden_element" style={{ display: 'none' }} />

      <button 
        type="button"
        className="lang-selector-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code-text">{currentLang.name}</span>
        <ChevronDown size={14} className={`lang-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="lang-dropdown-menu">
          <div className="lang-dropdown-header">
            <Globe size={14} />
            <span>Select Language / भाषा चुनें</span>
          </div>
          <div className="lang-options-list">
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === selectedLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  className={`lang-option-item ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectLanguage(lang.code)}
                >
                  <span className="lang-opt-flag">{lang.flag}</span>
                  <div className="lang-opt-text">
                    <span className="lang-opt-name">{lang.name}</span>
                    <span className="lang-opt-native">{lang.native}</span>
                  </div>
                  {isSelected && <Check size={16} className="lang-opt-check" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
