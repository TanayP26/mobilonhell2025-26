// Create fire particles for background
function createFireParticles() {
    const fireBg = document.getElementById('fireBackground');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('fire-particle');
        
        // Random properties
        const size = Math.random() * 120 + 40;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        fireBg.appendChild(particle);
    }
}

// Initialize fire particles
window.addEventListener('load', createFireParticles);

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});
// office member data
const officeMembers = [
    {
        name: "Moksh",
        role: "GENERAL SECRETARY",
        img: "moksh.jpg",
        desc: "Responsible for managing operations, coordinating members, and maintaining discipline."
    },
    {
        name: "Vasu Bhatia",
        role: "PRESIDENT",
        img: "vasu bhatia.jpg",
        desc: "Oversees all club operations, leads strategic decisions and maintains the brand vision."
    },
    {
        name: "Lalit",
        role: "VICE PRESIDENT",
        img: "ll.jpg",
        desc: "Supports President, manages teams, and ensures successful execution of events."
    }
];

// open modal on click
document.querySelectorAll(".circle-photo").forEach((photo, index) => {
    photo.addEventListener("click", () => {
        const data = officeMembers[index];

        document.getElementById("modalPhoto").src = data.img;
        document.getElementById("modalName").innerText = data.name;
        document.getElementById("modalRole").innerText = data.role;
        document.getElementById("modalDesc").innerText = data.desc;

        document.getElementById("fireModal").style.display = "flex";
    });
});

// close modal
document.getElementById("closeModal").onclick = () => {
    document.getElementById("fireModal").style.display = "none";
};

// close when clicking outside
window.onclick = (e) => {
    if (e.target.id === "fireModal") {
        document.getElementById("fireModal").style.display = "none";
    }
};
