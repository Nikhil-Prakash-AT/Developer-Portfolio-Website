document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return; 

    e.preventDefault();
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
