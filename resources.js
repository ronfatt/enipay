/**
 * ENIPAY Official Media & Resource Hub Controller
 * Supporting live search, category filtering, lightbox modals, and multi-language
 */

// Current Filter State
let currentCategory = 'all';

// Category Filtering
function filterCategory(category, buttonElement) {
  currentCategory = category;
  
  // Update button active state
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  // Filter sections and cards
  const sections = document.querySelectorAll('.resource-section');
  const cards = document.querySelectorAll('.res-card');
  const searchVal = document.getElementById('resource-search').value.toLowerCase().trim();

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();
    
    const matchesCategory = (category === 'all' || cardCat === category);
    const matchesSearch = !searchVal || keywords.includes(searchVal);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  // Hide empty sections if all cards within are hidden
  sections.forEach(sec => {
    const visibleCards = sec.querySelectorAll('.res-card[style*="display: flex"], .res-card:not([style*="display: none"])');
    // Check if section itself matches filter
    const secId = sec.id;
    let shouldShowSec = false;
    if (category === 'all') {
      shouldShowSec = true;
    } else if (category === 'docs' && secId === 'sec-docs') {
      shouldShowSec = true;
    } else if (category === 'videos' && secId === 'sec-videos') {
      shouldShowSec = true;
    } else if (category === 'posters' && secId === 'sec-posters') {
      shouldShowSec = true;
    } else if (category === 'brand' && secId === 'sec-brand') {
      shouldShowSec = true;
    }

    if (shouldShowSec) {
      sec.style.display = 'block';
    } else {
      sec.style.display = 'none';
    }
  });
}

// Live Search Handling
function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.res-card');

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();

    const matchesCategory = (currentCategory === 'all' || cardCat === currentCategory);
    const matchesSearch = !q || keywords.includes(q);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Video Lightbox Modal
function openVideoModal(videoUrl, title) {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('modal-video-player');
  const titleElem = document.getElementById('video-modal-title');

  if (titleElem) titleElem.innerHTML = `<span>🎬</span> <span>${title || '官方视频'}</span>`;
  if (player) {
    player.src = videoUrl;
    player.play().catch(() => {});
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const player = document.getElementById('modal-video-player');
  if (player) {
    player.pause();
    player.src = '';
  }
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Image Lightbox Modal
function openImageModal(imgUrl, title) {
  const modal = document.getElementById('image-modal');
  const preview = document.getElementById('modal-image-preview');
  const titleElem = document.getElementById('image-modal-title');
  const downloadBtn = document.getElementById('modal-image-download-btn');

  if (titleElem) titleElem.innerText = title || '海报预览';
  if (preview) preview.src = imgUrl;
  if (downloadBtn) {
    downloadBtn.href = imgUrl;
    downloadBtn.download = (title || 'ENIPAY-Image') + '.png';
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// PDF Preview Modal
function openPdfModal(pdfUrl, title) {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  const titleElem = document.getElementById('pdf-modal-title');
  const downloadBtn = document.getElementById('pdf-modal-download-btn');

  if (titleElem) titleElem.innerHTML = `<span>📑</span> <span>${title || 'PDF 预览'}</span>`;
  if (iframe) iframe.src = pdfUrl;
  if (downloadBtn) {
    downloadBtn.href = pdfUrl;
    downloadBtn.download = (title || 'ENIPAY-Document') + '.pdf';
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  if (iframe) iframe.src = '';
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Copy & Share
function copyAddress(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ 已成功复制到剪贴板！');
    if (btnElement) {
      const orig = btnElement.innerHTML;
      btnElement.innerHTML = '✓ 已复制';
      setTimeout(() => { btnElement.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    showToast('已复制：' + text);
  });
}

function shareLink(url, btnElement) {
  const fullUrl = window.location.origin + window.location.pathname.replace('resources.html', '') + url.replace('./', '');
  navigator.clipboard.writeText(fullUrl).then(() => {
    showToast('✓ 素材分享直达链接已复制！');
  }).catch(() => {
    showToast('链接：' + fullUrl);
  });
}

function showToast(msg) {
  const toast = document.getElementById('res-toast');
  const msgElem = document.getElementById('res-toast-msg');
  if (toast && msgElem) {
    msgElem.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
  }
}

// Generate & Download Logo SVG
function downloadLogoPack() {
  const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" rx="100" fill="#050811"/>
    <rect x="25" y="25" width="450" height="450" rx="85" fill="none" stroke="#00ffb2" stroke-width="12" stroke-opacity="0.8"/>
    <text x="50%" y="58%" font-family="Courier, monospace, sans-serif" font-size="280" font-weight="900" fill="#00ffb2" text-anchor="middle" dominant-baseline="middle">E</text>
  </svg>`;
  const blob = new Blob([svgData], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ENIPAY-Official-Logo-Vector.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('✓ 官方矢量 Logo SVG 已开始下载！');
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVideoModal();
    closeImageModal();
    closePdfModal();
  }
});

// Initialize i18n for resources.html
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('enipay_lang') || 'zh';
  if (typeof setAppLanguage === 'function') {
    setAppLanguage(savedLang);
  }
});
