window.onload = function () {
    // Disable browser scroll restoration if supported
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo(0, 0);
    // Clear URL hash to prevent scrolling to #certificate
    history.replaceState(null, '', window.location.pathname);
};

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#intro').classList.toggle('dark-mode'); // Add for intro
    document.querySelectorAll('.projects').forEach(section => section.classList.toggle('dark-mode')); // Add for all projects sections
    document.querySelector('#certificate').classList.toggle('dark-mode'); // Add for certificate
    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');

    const button = document.querySelector('#intro button');
    button.textContent = isDarkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙';
}

window.onscroll = function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("✅ Thank you! Your message has been sent.");
        form.reset();
    } else {
        alert("❌ Oops! Something went wrong. Please try again.");
    }
});

// animate skill bars when section enters viewport
(function () {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const bars = skillsSection.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach(bar => {
                    const level = bar.dataset.level || '0';
                    const inner = bar.querySelector('.progress-bar');
                    const label = bar.querySelector('.progress-label');
                    // set width (animate via CSS transition)
                    inner.style.width = level + '%';
                    // update numeric label (in case you want to animate numbers later)
                    label.textContent = level + '%';
                });
                obs.unobserve(entry.target); // animate once
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
})();

let apkLink = "";

// 🎥 VIDEO
function openVideo(url) {
    window.open(url, '_blank');
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoFrame").src = "";
}

// 📥 DOWNLOAD FLOW
function downloadApk(link) {
    apkLink = link;
    document.getElementById("downloadModal").style.display = "block";
}

function closeDownload() {
    document.getElementById("downloadModal").style.display = "none";
}

// Confirm download
document.getElementById("confirmDownload").onclick = function () {
    window.open(apkLink, "_blank");
    closeDownload();
};
function swapImage(img, hover) {
    if (hover) {
        img.src = "image/olegario_caricature.png";
    } else {
        img.src = "image/olegario_formal.png";
    }
}

const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Optional: close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});