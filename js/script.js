function initClock() {
    const clockEl = document.getElementById('nav-clock');
    const update = () => {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    update();
    setInterval(update, 60000);
}

function buildCard(item) {
    const card = document.createElement('div');
    card.className = 'card';

    let html = `<div class="card-icon"><i class="${item.icon}"></i></div>`;
    html += `<div class="card-title">${item.title}</div>`;
    html += `<div class="card-desc">${item.content}</div>`;

    if (item.details) {
        const d = item.details;

        if (d.type === 'book') {
            card.className = 'card card-book';
            html = `
                <div class="book-cover-wrap">
                    <img class="book-cover" src="${d.cover}" alt="Book cover" loading="lazy">
                </div>
                <div class="book-info">
                    <div class="card-icon"><i class="${item.icon}"></i></div>
                    <div class="card-title">${item.title}</div>
                    <div class="card-desc">${item.content}</div>
                    <ul class="card-lines">
                        ${d.lines.map(l => `<li>${l}</li>`).join('')}
                    </ul>
                </div>`;

        } else if (d.type === 'text' || d.type === 'list') {
            html += `<ul class="card-lines">`;
            d.lines.forEach(line => html += `<li>${line}</li>`);
            html += `</ul>`;

        } else if (d.type === 'contact') {
            d.lines.forEach(c => {
                html += `<div class="contact-item">
                    <span class="contact-label">${c.label}</span>
                    <span class="contact-value">`;
                if (c.link) html += `<a href="${c.link}" target="_blank">${c.value}</a>`;
                else html += c.value;
                html += `</span></div>`;
            });

        } else if (d.type === 'project') {
            html += `<ul class="card-lines">`;
            d.lines.forEach(line => html += `<li>${line}</li>`);
            html += `</ul>`;
            html += `<a href="${d.link}" target="_blank" class="card-link">
                View on GitHub &nbsp;<i class="fa-brands fa-github"></i>
            </a>`;

        } else if (d.type === 'download') {
            html += `<a href="${d.link}" download="${d.fileName}" class="download-btn">
                <i class="fa-solid fa-download"></i> Download CV
            </a>`;

        } else if (d.type === 'info') {
            html += `<ul class="card-lines">`;
            d.lines.forEach(line => html += `<li>${line}</li>`);
            html += `</ul>`;
        }
    }

    card.innerHTML = html;
    return card;
}

function renderSection(sectionKey, containerId) {
    const section = cvData[sectionKey];
    const container = document.getElementById(containerId);
    if (!container || !section) return;

    section.items.forEach(item => {
        container.appendChild(buildCard(item));
    });
}

function initScrollObserver() {
    const sections = document.querySelectorAll('.section');
    const dots     = document.querySelectorAll('.nav-dot');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                const id = entry.target.id;
                dots.forEach(dot => {
                    dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(s => observer.observe(s));
}

window.onload = () => {
    initClock();
    renderSection('settings',   'system-body');
    renderSection('skills',     'skills-body');
    renderSection('education',  'education-body');
    renderSection('projects',   'projects-body');
    renderSection('reading',    'reading-body');
    renderSection('experience', 'experience-body');
    initScrollObserver();
};
