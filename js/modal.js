const backdrop = document.querySelector(".backdrop");
const openModalWindow = document.querySelector(".hero-btn");
const closeModalWindow = document.querySelector(".modal-btn");

// Open Modal Window 
openModalWindow.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

// Close modal window 
closeModalWindow.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

// Close modal window click on the Backdrop
backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
        backdrop.classList.remove('is-open');
        document.body.style.overflow = '';
    }
});

// Close modal window on the Esc button 
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
        backdrop.classList.remove('is-open');
        document.bode.style.overflow = '';
    }
});