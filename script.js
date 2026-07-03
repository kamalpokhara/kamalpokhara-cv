// Photo fallback: if photo.jpg is missing, show initials instead.
(function () {
  const img = document.getElementById('profile-photo');
  const fallback = document.querySelector('.photo-fallback');

  img.addEventListener('error', function () {
    img.classList.add('hidden');
    fallback.classList.add('show');
  }, { once: true });
})();

// Footer year, kept current automatically.
document.getElementById('year').textContent = new Date().getFullYear();

// Gentle scroll reveal for sections — one technique, used consistently.
(function () {
  const targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
})();
