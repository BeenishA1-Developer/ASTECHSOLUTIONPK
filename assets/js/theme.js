/* AS Tech Solution PK — light/dark theme toggle (V3)
   Default: light (Sample B). The visitor's choice is saved on
   their own device and applied on the next visit too. */
(() => {
  const root = document.documentElement;
  const btn = document.getElementById('thm');
  const paint = () => { if (btn) btn.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙'; };
  paint();
  if (!btn) return;
  btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('astheme', root.dataset.theme); } catch (e) {}
    paint();
  });
})();
