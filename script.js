/* Srikant Kharat — portfolio. No dependencies. */

// ---- edit this when your start date or the counter changes ----
const CAREER_START = new Date(2022, 1, 1);   // Feb 2022 (month is 0-indexed)

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- theme ---------- */
$('#theme-btn').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* ---------- mobile menu ---------- */
const links = $('#links'), menuBtn = $('#menu-btn');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});

/* ---------- auto dates ---------- */
const now = new Date();
$('#year').textContent = now.getFullYear();
const months = (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
const years = Math.floor(months / 12);
$$('[data-exp-short]').forEach(el => el.textContent = years + '+');
$$('[data-exp-long]').forEach(el => el.textContent = years + '+ Years');

/* ---------- drop images that aren't there yet ---------- */
const flagMissing = img => {
  const fig = img.closest('figure');
  if (fig) fig.classList.add('missing'); else img.remove();
};
$$('img').forEach(img => {
  img.addEventListener('error', () => flagMissing(img));
  // lazy images that already failed before this script ran
  if (img.complete && img.naturalWidth === 0) flagMissing(img);
});

/* ---------- reveal on scroll, staggered ---------- */
const revealables = $$('[data-reveal]');
if (calm) {
  revealables.forEach(el => el.classList.add('in'));
} else {
  const seen = new WeakSet();
  const io = new IntersectionObserver((entries, obs) => {
    // stagger only within the batch that became visible together
    entries.filter(e => e.isIntersecting).forEach((e, i) => {
      e.target.style.transitionDelay = (i * 60) + 'ms';
      e.target.classList.add('in');
      seen.add(e.target);
      obs.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: .08 });
  revealables.forEach(el => io.observe(el));
}

/* ---------- 0 -> 5000 counter ---------- */
$$('.counter').forEach(el => {
  const target = +el.dataset.count;
  if (calm) { el.textContent = target.toLocaleString(); return; }
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    const t0 = performance.now(), dur = 1600;
    const step = t => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, { threshold: .4 }).observe(el);
});

/* ---------- nav scroll-spy ---------- */
const navLinks = $$('#links a');
const sections = navLinks.map(a => $(a.getAttribute('href'))).filter(Boolean);
const spy = () => {
  const y = scrollY + 140;
  let current = sections[0];
  for (const s of sections) if (s.offsetTop <= y) current = s;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
};
addEventListener('scroll', spy, { passive: true });
spy();
