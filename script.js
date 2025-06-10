AOS.init({
  once: true,
  offset: 200,
  duration: 1500,
  delay: 100,
});

const gameIcons = document.querySelectorAll('.game-icon-container');

gameIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const gameId = icon.getAttribute('data-game');
    if (gameId === 'man-of-medan') window.location.href = 'man-of-medan.html';
    if (gameId === 'little-hope') window.location.href = 'little-hope.html';
    if (gameId === 'house-of-ashes') window.location.href = 'house-of-ashes.html';
  });
});

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const logo = document.querySelector('.logo');
  logo.style.transform = `translateY(${scrolled * 0.08}px)`;
});