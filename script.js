// Dropdown logic for Sign Up
function toggleDropdown() {
    document.getElementById('signupDropdown').classList.toggle('open');
}
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
}

// Slider logic
let currentSlide = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initialize slider
showSlide(0);
