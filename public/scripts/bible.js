// Bible module - NKJV API integration
const BibleModule = (() => {
  const API_BASE = 'https://bible-api.com';
  let recentlyRead = []; // In-memory only, clears on refresh
  let currentBook = 'John';
  let currentChapter = 1;

  const books = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
    '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
    'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
    'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
    'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah',
    'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians',
    '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians',
    '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
    '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'
  ];

  function showLoading() {
    const panel = document.getElementById('bible-content');
    if (panel) panel.innerHTML = '<div class="bible-loading"><i data-lucide="loader-circle" class="spin" style="width:32px;height:32px;"></i><p>Loading Scripture...</p></div>';
  }

  function showError(message) {
    const panel = document.getElementById('bible-content');
    if (panel) panel.innerHTML = `<div class="bible-error" style="text-align:center;padding:var(--space-8);color:var(--color-text-muted);">${message}</div>`;
  }

  async function fetchPassage(reference) {
    try {
      showLoading();
      const response = await fetch(`${API_BASE}/${encodeURIComponent(reference)}?translation=kjv`);
      if (!response.ok) throw new Error('Passage not found');
      const data = await response.json();
      displayPassage(data);
      addToRecentlyRead(reference);
      if (window.Analytics) window.Analytics.bibleNavigation('read', currentBook, currentChapter);
    } catch (error) {
      showError('Unable to load passage. Please try again.');
      console.error('Bible API error:', error);
    }
  }

  function displayPassage(data) {
    const panel = document.getElementById('bible-content');
    const refDisplay = document.getElementById('current-ref');
    if (!panel) return;

    if (refDisplay) refDisplay.textContent = data.reference || '';

    const verses = data.verses || [];
    let html = '<div class="bible-verses">';
    
    verses.forEach(v => {
      html += `<p class="bible-verse">
        <span class="verse-number">${v.verse}</span>
        <span class="verse-text">${v.text}</span>
      </p>`;
    });
    
    html += '</div>';
    panel.innerHTML = html;
  }

  function addToRecentlyRead(reference) {
    recentlyRead = recentlyRead.filter(r => r !== reference);
    recentlyRead.unshift(reference);
    if (recentlyRead.length > 5) recentlyRead.pop();
    updateRecentlyReadUI();
  }

  function updateRecentlyReadUI() {
    const list = document.getElementById('recently-read-list');
    if (!list) return;
    
    if (recentlyRead.length === 0) {
      list.innerHTML = '<div class="empty-state">No recent readings yet</div>';
      return;
    }

    list.innerHTML = recentlyRead.map(ref => 
      `<button class="recent-item" onclick="BibleModule.loadPassage('${ref}')">${ref}</button>`
    ).join('');
  }

  function populateBookSelector() {
    const select = document.getElementById('book-select');
    if (!select) return;
    
    select.innerHTML = books.map(book => 
      `<option value="${book}" ${book === currentBook ? 'selected' : ''}>${book}</option>`
    ).join('');
  }

  function updateChapterSelector() {
    const select = document.getElementById('chapter-select');
    if (!select) return;
    
    // Default to 50 chapters (will adjust based on actual book)
    const maxChapters = 50;
    select.innerHTML = Array.from({ length: maxChapters }, (_, i) => 
      `<option value="${i + 1}" ${(i + 1) === currentChapter ? 'selected' : ''}>${i + 1}</option>`
    ).join('');
  }

  function init() {
    populateBookSelector();
    updateRecentlyReadUI();
    loadPassage(`${currentBook} ${currentChapter}`);

    // Book selector
    const bookSelect = document.getElementById('book-select');
    if (bookSelect) {
      bookSelect.addEventListener('change', (e) => {
        currentBook = e.target.value;
        currentChapter = 1;
        loadPassage(`${currentBook} ${currentChapter}`);
        if (window.Analytics) window.Analytics.bibleNavigation('book-select', currentBook);
      });
    }

    // Chapter selector
    const chapterSelect = document.getElementById('chapter-select');
    if (chapterSelect) {
      chapterSelect.addEventListener('change', (e) => {
        const ch = parseInt(e.target.value) || 1;
        currentChapter = ch;
        loadPassage(`${currentBook} ${currentChapter}`);
      });
    }

    // Go button
    const goBtn = document.getElementById('go-to-passage');
    if (goBtn) {
      goBtn.addEventListener('click', () => {
        loadPassage(`${currentBook} ${currentChapter}`);
      });
    }

    // Search
    const searchInput = document.getElementById('bible-search');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            loadPassage(query);
            if (window.Analytics) window.Analytics.bibleSearch(query);
          }
        }
      });
    }

    // Navigation
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentChapter = Math.max(1, currentChapter - 1);
        loadPassage(`${currentBook} ${currentChapter}`);
        if (window.Analytics) window.Analytics.bibleNavigation('prev', currentBook, currentChapter);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentChapter++;
        loadPassage(`${currentBook} ${currentChapter}`);
        if (window.Analytics) window.Analytics.bibleNavigation('next', currentBook, currentChapter);
      });
    }

    // Populate chapter selector with initial chapters
    updateChapterSelector();
  }

  function loadPassage(reference) {
    fetchPassage(reference);
  }

  return { init, loadPassage };
})();

window.BibleModule = BibleModule;
