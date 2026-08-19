(() => {
  try {
    const saved = localStorage.getItem('agent-journey-theme');
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (dark ? 'dark' : 'light');
  } catch {
    // System colors remain the fallback when storage or media queries are unavailable.
  }
})();
