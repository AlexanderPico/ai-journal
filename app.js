(() => {
  'use strict';

  const data = globalThis.AGENT_JOURNEY;
  if (!data) throw new Error('AGENT_JOURNEY data is missing.');

  // This page renders only the local canonical dataset. Every interpolated
  // value is escaped before the small static templates are assigned.

  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function renderStats() {
    const months = new Set(data.entries.map((entry) => entry.date.slice(0, 7))).size;
    $('#stats').innerHTML = [
      [data.entries.length, 'milestones'],
      [data.eras.length, 'turns'],
      [months, 'active months']
    ].map(([value, label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join('');
  }

  function renderArc() {
    $('#arcList').innerHTML = data.eras.map((era) => `
      <li><div><strong>${escapeHtml(era.title)}</strong><span>${escapeHtml(era.short)}</span></div></li>
    `).join('');
  }

  function renderTrends() {
    $('#trendGrid').innerHTML = data.publicTrends.map((trend) => `
      <article class="trend-card">
        <span class="date">${escapeHtml(trend.date)}</span>
        <h3>${escapeHtml(trend.title)}</h3>
        <p>${escapeHtml(trend.summary)}</p>
        <a href="${escapeHtml(trend.url)}" target="_blank" rel="noreferrer">Official source ↗</a>
      </article>
    `).join('');
  }

  function renderTimeline() {
    const grouped = new Map(data.eras.map((era) => [era.id, []]));
    data.entries.forEach((entry) => grouped.get(entry.era).push(entry));

    $('#eraNav').innerHTML = data.eras.map((era, index) => `
      <button class="era-link" type="button" data-target="era-${escapeHtml(era.id)}"><span>0${index + 1}</span>${escapeHtml(era.title)}</button>
    `).join('');

    $('#timelineEntries').innerHTML = data.eras.map((era, eraIndex) => `
      <section class="era-block" id="era-${escapeHtml(era.id)}" data-era="${escapeHtml(era.id)}">
        <header class="era-marker">
          <span class="era-number">TURN 0${eraIndex + 1}</span>
          <h3>${escapeHtml(era.title)}</h3>
          <p>${escapeHtml(era.description)}</p>
        </header>
        ${grouped.get(era.id).map(renderEntry).join('')}
      </section>
    `).join('');

    document.querySelectorAll('.era-link').forEach((button) => {
      button.addEventListener('click', () => document.getElementById(button.dataset.target).scrollIntoView());
    });
  }

  function renderEntry(entry) {
    return `
      <article class="entry">
        <time class="entry-date" datetime="${escapeHtml(entry.date)}">${escapeHtml(entry.displayDate)}</time>
        <div class="entry-body">
          <div class="entry-kicker">
            <span class="entry-stage">${escapeHtml(entry.stage)}</span>
            <span class="confidence">${escapeHtml(entry.confidence)} confidence</span>
          </div>
          <h4>${escapeHtml(entry.title)}</h4>
          <p class="summary">${escapeHtml(entry.summary)}</p>
          <p class="turning-point"><strong>The turn:</strong> ${escapeHtml(entry.turn)}</p>
          <div class="entry-tags">${entry.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
      </article>
    `;
  }

  function renderLessons() {
    $('#lessonGrid').innerHTML = data.lessons.map((lesson, index) => `
      <article class="lesson"><span class="num">0${index + 1}</span><h3>${escapeHtml(lesson.title)}</h3><p>${escapeHtml(lesson.body)}</p></article>
    `).join('');
  }

  function updateThemeButton() {
    const button = $('#toggleTheme');
    const dark = document.documentElement.dataset.theme === 'dark';
    button.textContent = dark ? 'Light' : 'Dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  }

  function setupTheme() {
    const button = $('#toggleTheme');
    updateThemeButton();
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('agent-journey-theme', next); } catch { /* Theme still applies for this page load. */ }
      updateThemeButton();
    });

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    try {
      systemTheme.addEventListener('change', (event) => {
        if (!localStorage.getItem('agent-journey-theme')) {
          document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
          updateThemeButton();
        }
      });
    } catch { /* Older browsers keep the current theme. */ }
  }

  function setupProgress() {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      $('#progressBar').style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function setupEraObserver() {
    const links = [...document.querySelectorAll('.era-link')];
    const blocks = [...document.querySelectorAll('.era-block')];
    const observer = new IntersectionObserver((items) => {
      const visible = items.filter((item) => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle('active', link.dataset.target === visible.target.id));
    }, { rootMargin: '-15% 0px -65% 0px', threshold: [0, .2, .6] });
    blocks.forEach((block) => observer.observe(block));
  }

  renderStats();
  renderArc();
  renderTrends();
  renderTimeline();
  renderLessons();
  setupTheme();
  setupProgress();
  setupEraObserver();
  $('#updatedAt').textContent = `Edition updated ${data.meta.updated} · Living journal`;
})();
