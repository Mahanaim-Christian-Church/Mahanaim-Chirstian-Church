(function () {
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');

  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      window.Analytics?.navClick(link.getAttribute('href')?.replace('#', '') || link.textContent.trim());
    });
  });

  document.querySelectorAll('[data-cta]').forEach(link => {
    link.addEventListener('click', () => {
      const section = link.closest('section')?.id || 'unknown';
      window.Analytics?.ctaClick(link.dataset.cta, section);
      if (link.href && link.hostname !== window.location.hostname) window.Analytics?.outboundLink(link.href);
    });
  });

  document.querySelectorAll('[data-ministry]').forEach(card => {
    card.addEventListener('click', () => window.Analytics?.ministryCardClick(card.dataset.ministry));
  });

  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) window.Analytics?.sectionView(entry.target.id);
    });
  }, { threshold: 0.35 });
  sections.forEach(section => observer.observe(section));

  window.initChurchMap?.();
})();
