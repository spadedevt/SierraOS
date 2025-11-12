// Navbar blur on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const links = document.querySelectorAll('nav a');
  const logo = document.querySelector('.logo img');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    links.forEach(link => link.style.color = '#67896bff'); // lighter color when dark bg
    logo.style.filter = 'drop-shadow(0 0 30px rgba(154, 236, 154, 0.8))'; // subtle glow shadow
  } else {
    navbar.classList.remove('scrolled');
    links.forEach(link => link.style.color = '#274434'); // default color
    logo.style.filter = 'none'; // remove shadow when background is light
  }
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll reveal for team members
const members = document.querySelectorAll('.member');
function checkMembersVisibility() {
  const triggerBottom = window.innerHeight * 0.8;
  members.forEach(member => {
    const boxTop = member.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      member.classList.add('visible');
    } else {
      member.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', checkMembersVisibility);
window.addEventListener('load', checkMembersVisibility);

// Scroll reveal for sections and hero content
const sections = document.querySelectorAll('.section, .hero-content');

function revealSections() {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < trigger) {
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible'); // fade out when scrolling up
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

//about us section scroll reveal
// Toggle About Us card
const aboutBtn = document.querySelector('.about-btn');
const aboutCard = document.querySelector('.about-card');

aboutBtn.addEventListener('click', () => {
  aboutCard.classList.toggle('open');
  
  // Optional: smooth scroll to reveal content
  if(aboutCard.classList.contains('open')) {
    aboutCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
