// Main application logic
(function() {
  'use strict';

  // ═══════════════════════════════════════════════════
  // NAVIGATION & SIDEBAR
  // ═══════════════════════════════════════════════════
  function initNavigation() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('sidebar-close');

    function openSidebar() {
      sidebar?.classList.add('open');
      overlay?.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('visible');
      document.body.style.overflow = '';
    }

    menuBtn?.addEventListener('click', openSidebar);
    closeBtn?.addEventListener('click', closeSidebar);
    overlay?.addEventListener('click', closeSidebar);

    // Nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        const section = document.querySelector(target);
        
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeSidebar();
          
          // Track navigation
          if (window.Analytics) {
            window.Analytics.navClick(target.replace('#', ''));
          }
        }
      });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();
  }

  // ═══════════════════════════════════════════════════
  // HERO WATER RIPPLE EFFECT
  // ═══════════════════════════════════════════════════
  function initHeroRipple() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    hero.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'water-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 1000);
    });
  }

  // ═══════════════════════════════════════════════════
  // LEADERSHIP / TEAM
  // ═══════════════════════════════════════════════════
  function initTeam() {
    const teamData = [
      {
        name: 'Pastor John Smith',
        role: 'Lead Pastor & Founder',
        image: '/assets/team/pastor-john.jpg',
        bio: 'Serving faithfully for over 25 years, Pastor John leads with wisdom, compassion, and a heart for God\'s Word.',
        social: { email: 'pastor.john@mahanaim.org' }
      },
      {
        name: 'Pastor Sarah Johnson',
        role: 'Associate Pastor',
        image: '/assets/team/pastor-sarah.jpg',
        bio: 'Pastor Sarah oversees worship, women\'s ministry, and community outreach with grace and dedication.',
        social: { email: 'pastor.sarah@mahanaim.org' }
      },
      {
        name: 'David Lee',
        role: 'Youth Ministry Leader',
        image: '/assets/team/david-lee.jpg',
        bio: 'David brings energy and vision to our youth programs, mentoring the next generation in faith.',
        social: { email: 'david@mahanaim.org' }
      }
    ];

    const grid = document.getElementById('leadership-grid');
    if (!grid) return;

    grid.innerHTML = teamData.map(member => `
      <div class="team-card fade-in">
        <div class="team-card-image" style="background-image:url('${member.image}')" 
             onerror="this.style.backgroundImage='url(/assets/team/placeholder.jpg)'"></div>
        <div class="team-card-content">
          <h3 class="team-card-name">${member.name}</h3>
          <div class="team-card-role">${member.role}</div>
          <p class="team-card-bio">${member.bio}</p>
          ${member.social.email ? `
            <a href="mailto:${member.social.email}" class="team-card-contact">
              <i data-lucide="mail" style="width:14px;height:14px;"></i> Contact
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // ═══════════════════════════════════════════════════
  // TESTIMONIES / STORIES
  // ═══════════════════════════════════════════════════
  function initTestimonies() {
    const testimonies = [
      {
        title: 'A Life Transformed',
        summary: 'How God brought me from darkness into His marvelous light through this church family.',
        author: 'Maria G.',
        image: '/assets/testimonies/testimony-1.jpg'
      },
      {
        title: 'Healing and Hope',
        summary: 'After years of struggle, I found peace and purpose in Christ at Mahanaim.',
        author: 'James T.',
        image: '/assets/testimonies/testimony-2.jpg'
      },
      {
        title: 'Restored Marriage',
        summary: 'God used the prayers and support of this community to restore our family.',
        author: 'The Johnsons',
        image: '/assets/testimonies/testimony-3.jpg'
      }
    ];

    const grid = document.getElementById('testimony-grid');
    if (!grid) return;

    grid.innerHTML = testimonies.map(t => `
      <div class="testimony-card fade-in">
        <div class="testimony-image" style="background-image:url('${t.image}')"
             onerror="this.style.backgroundImage='url(/assets/testimonies/placeholder.jpg)'"></div>
        <div class="testimony-content">
          <h3 class="testimony-title">${t.title}</h3>
          <p class="testimony-summary">${t.summary}</p>
          <div class="testimony-author">— ${t.author}</div>
        </div>
      </div>
    `).join('');
  }

  // ═══════════════════════════════════════════════════
  // EVENTS / CONFERENCE
  // ═══════════════════════════════════════════════════
  function initEvents() {
    const events = [
      {
        title: 'Annual Faith Conference 2025',
        date: 'July 15-17, 2025',
        time: 'All Day',
        location: 'Main Campus',
        description: 'Three days of worship, teaching, and fellowship. Guest speakers from around the nation.'
      },
      {
        title: 'Sunday Worship Service',
        date: 'Every Sunday',
        time: '9:00 AM - 12:00 PM',
        location: 'Main Sanctuary',
        description: 'Join us for Spirit-filled worship, powerful preaching, and communion with believers.'
      },
      {
        title: 'Midweek Prayer Meeting',
        date: 'Every Wednesday',
        time: '6:00 PM - 8:00 PM',
        location: 'Prayer House',
        description: 'Corporate prayer, intercession, and seeking God\'s presence together.'
      },
      {
        title: 'Youth Night',
        date: 'Every Friday',
        time: '5:00 PM - 7:00 PM',
        location: 'Youth Center',
        description: 'Games, worship, Bible study, and mentorship for teens and young adults.'
      }
    ];

    const grid = document.getElementById('events-grid');
    if (!grid) return;

    grid.innerHTML = events.map(event => `
      <div class="event-card fade-in">
        <div class="event-date">
          <i data-lucide="calendar" style="width:16px;height:16px;"></i>
          ${event.date}
        </div>
        <h3 class="event-title">${event.title}</h3>
        <div class="event-meta">
          <span><i data-lucide="clock" style="width:14px;height:14px;"></i> ${event.time}</span>
          <span><i data-lucide="map-pin" style="width:14px;height:14px;"></i> ${event.location}</span>
        </div>
        <p class="event-desc">${event.description}</p>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // ═══════════════════════════════════════════════════
  // REGISTRATION FORM
  // ═══════════════════════════════════════════════════
  function initForm() {
    const form = document.getElementById('reg-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      const formData = new FormData(form);
      const endpoint = 'https://formspree.io/f/mnjokoon';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          const formSection = document.getElementById('registration-form-section');
        if (formSection) {
          formSection.innerHTML = `
            <div class="form-success" style="text-align:center;padding:var(--space-10);">
              <i data-lucide="check-circle" style="width:48px;height:48px;color:var(--color-success);margin:0 auto var(--space-4);display:block;"></i>
              <h3 style="font-size:var(--text-2xl);margin-bottom:var(--space-3);">Registration Received!</h3>
              <p>Thank you for registering. We'll be in touch soon with more details.</p>
            </div>
          `;
        }
          if (window.lucide) window.lucide.createIcons();
          if (window.Analytics) window.Analytics.formSubmit('registration', true);
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        alert('There was an error submitting your registration. Please try again or contact us directly.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        if (window.Analytics) window.Analytics.formSubmit('registration', false);
      }
    });
  }

  // ═══════════════════════════════════════════════════
  // YOUTUBE MEDIA
  // ═══════════════════════════════════════════════════
  function initMedia() {
    const videos = [
      { id: 'dQw4w9WgXcQ', title: 'Sunday Sermon: Walking in Faith' },
      { id: 'dQw4w9WgXcQ', title: 'Worship Night Highlights' },
      { id: 'dQw4w9WgXcQ', title: 'Testimony: God\'s Faithfulness' },
      { id: 'dQw4w9WgXcQ', title: 'Youth Conference 2024' }
    ];

    const featured = document.getElementById('featured-video');
    const playlist = document.getElementById('video-list');

    if (featured && videos.length > 0) {
      featured.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videos[0].id}" 
                title="${videos[0].title}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      `;
    }

    if (playlist) {
      playlist.innerHTML = videos.map(v => `
        <div class="video-card" onclick="loadVideo('${v.id}', '${v.title}')" role="listitem">
          <div class="video-thumb" style="background-image:url('https://img.youtube.com/vi/${v.id}/mqdefault.jpg');"></div>
          <div class="video-card-content">
            <div class="video-card-title">${v.title}</div>
          </div>
        </div>
      `).join('');
    }
  }

  window.loadVideo = function(videoId, title) {
    const featured = document.getElementById('featured-video');
    if (featured) {
      featured.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" 
                title="${title}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      `;
      featured.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (window.Analytics) window.Analytics.videoClick(videoId, title);
    }
  };

  // ═══════════════════════════════════════════════════
  // FAQ
  // ═══════════════════════════════════════════════════
  function initFAQ() {
    const faqs = [
      {
        question: 'What time are Sunday services?',
        answer: 'Our main Sunday worship service is from 9:00 AM to 12:00 PM. We also have a midweek prayer meeting on Wednesdays at 6:00 PM.'
      },
      {
        question: 'Is there parking available?',
        answer: 'Yes, we have ample free parking on-site for all attendees. Accessible parking spaces are available near the main entrance.'
      },
      {
        question: 'What should I wear to church?',
        answer: 'Come as you are! We welcome everyone regardless of attire. Some dress casually, others more formally—what matters is your heart.'
      },
      {
        question: 'Do you have programs for children?',
        answer: 'Absolutely! We have Sunday School, children\'s church, and youth ministry programs for all ages. Our team is background-checked and trained.'
      },
      {
        question: 'How can I get involved?',
        answer: 'We\'d love to have you serve! Opportunities include worship team, ushering, children\'s ministry, outreach, and more. Contact us to learn more.'
      },
      {
        question: 'What translation of the Bible do you use?',
        answer: 'We primarily use the NKJV (New King James Version), but we welcome and respect all translations as tools for understanding God\'s Word.'
      }
    ];

    const list = document.getElementById('faq-list');
    if (!list) return;

    list.innerHTML = faqs.map((faq, idx) => `
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${idx}">
          <span>${faq.question}</span>
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div class="faq-answer" id="faq-answer-${idx}">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    // Toggle FAQ
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isOpen);
        btn.parentElement.classList.toggle('open');
      });
    });
  }

  // ═══════════════════════════════════════════════════
  // INTERSECTION OBSERVER (Fade-in animations)
  // ═══════════════════════════════════════════════════
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Track section views
          if (entry.target.hasAttribute('id') && window.Analytics) {
            window.Analytics.sectionView(entry.target.id);
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  // ═══════════════════════════════════════════════════
  // CTA TRACKING
  // ═══════════════════════════════════════════════════
  function initCTATracking() {
    document.querySelectorAll('[data-cta]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ctaName = btn.getAttribute('data-cta');
        const location = btn.closest('section')?.id || 'unknown';
        if (window.Analytics) window.Analytics.ctaClick(ctaName, location);
      });
    });
  }

  // Global CTA tracking function
  window.trackCTA = function(ctaName) {
    if (window.Analytics) window.Analytics.ctaClick(ctaName, 'hero');
  };

  // ═══════════════════════════════════════════════════
  // HERO CANVAS (optional animated background)
  // ═══════════════════════════════════════════════════
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Simple particle animation
    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(201, 169, 97, 0.1)';
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // ═══════════════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════════════
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroCanvas();
    initHeroRipple();
    initTeam();
    initTestimonies();
    initEvents();
    initForm();
    initMedia();
    initFAQ();
    initAnimations();
    initCTATracking();

    // Initialize modules
    if (window.BibleModule) window.BibleModule.init();
    if (window.MapModule) window.MapModule.init();
    if (window.GalleryModule) window.GalleryModule.init();
  });
})();
