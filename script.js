// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
}

// Fade animation
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.style.animationDelay = '0s';
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

window.addEventListener('load', () => {
    let delay = 0;
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.animationDelay = `${delay}s`;
            el.classList.add('show');
            delay += 0.15;
        } else {
            observer.observe(el);
        }
    });
});

// Board generation
const boardGrid = document.getElementById("boardGrid");

const boardMembers = [
    { name: "Osric King",                  position: "President",                  linkedin: "https://www.linkedin.com/in/osric-king-jr-b492ab330/" },
    { name: "Alejandra Holgate",           position: "Vice President",             linkedin: "https://www.linkedin.com/in/alejandra-holgate" },
    { name: "Kiana Gardner",               position: "Treasurer",                  linkedin: "https://www.linkedin.com/in/kiana-gardner-2a5599196/" },
    { name: "Jonathan Stewart",            position: "Event Coordinator",          linkedin: "https://www.linkedin.com/in/jonathan-stewart-5bb5a52b5/" },
    { name: "Selinam Asuo",                position: "Secretary",                  linkedin: "https://www.linkedin.com/in/selinam-asuo" },
    { name: "Johnny Hanson",               position: "Public Relations",           linkedin: "https://www.linkedin.com/in/johnny-hanson-13470a1a9/" },
    { name: "Tristian Canfor-Dumas",       position: "Membership Chair",           linkedin: "https://www.linkedin.com/in/tristiancanfordumas" },
    { name: "Victoria Alapa",              position: "Community Outreach Chair",   linkedin: "https://www.linkedin.com/in/connect-with-victoria/" },
    { name: "Chiagoziem (Mikel) Nzewi",    position: "Senator",                    linkedin: "https://www.linkedin.com/in/mcnzewi" },
    { name: "Tobenna Okoli",               position: "Senator",                    linkedin: "https://www.linkedin.com/in/tobenna-okoli-1001-tao/" },
    { name: "Clive Murungi",               position: "Fundraising Chair",          linkedin: "https://www.linkedin.com/in/clive-murungi" },
    { name: "Christopher Chery",           position: "Academic Excellence Chair",  linkedin: "https://www.linkedin.com/in/christopher-chery-205213359/" },
];

boardMembers.forEach(member => {
    const card = document.createElement("div");
    card.className = "board-card";

    const imgFile = member.name
        .replace(/\s+/g, "")
        .replace(/-/g, "") + ".png";

    card.innerHTML = `
        <img src="${imgFile}" alt="${member.name}" style="width:100%; border-radius:10px; aspect-ratio:1/1; object-fit:cover;">
        <h4>${member.name}</h4>
        <p>${member.position}</p>
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="connect-btn">Connect</a>
    `;

    boardGrid.appendChild(card);
});
