let currentCategoryIndex = 0;
let currentItemIndex = 0;
let categories = [];
let isBooting = true;
let isInfoOpen = false;

const categoryBar = document.getElementById('category-bar');
const itemBar = document.getElementById('item-bar');
const infoPanel = document.getElementById('info-panel');
const infoContent = document.getElementById('info-content-body');
const bootScreen = document.getElementById('boot-screen');
const clockEl = document.getElementById('clock');

window.onload = () => {
    initClock();
    setTimeout(() => {
        isBooting = false;
        renderXMB();
    }, 4500);
}

function initClock() {
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
        clockEl.innerText = `${dateString} ${timeString}`;
    };
    updateTime();
    setInterval(updateTime, 60000);
}

function renderXMB() {
    categories = Object.keys(cvData);
    
    categoryBar.innerHTML = '';
    categories.forEach((key, index) => {
        const cat = cvData[key];
        const el = document.createElement('div');
        el.className = `category-item ${index === currentCategoryIndex ? 'active' : ''}`;
        el.id = `cat-${index}`;
        el.innerHTML = `
            <i class="${cat.icon} category-icon"></i>
            <span class="category-label">${cat.label}</span>
        `;
        el.onclick = () => {
            currentCategoryIndex = index;
            currentItemIndex = 0;
            updateUI();
        };
        categoryBar.appendChild(el);
    });

    renderItems();
    updateUI();
}

function renderItems() {
    const catKey = categories[currentCategoryIndex];
    const items = cvData[catKey].items;

    itemBar.innerHTML = '';
    items.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = `content-item ${index === currentItemIndex ? 'active' : ''}`;
        el.id = `item-${index}`;
        el.innerHTML = `
            <div class="item-icon"><i class="${item.icon}"></i></div>
            <div class="item-info">
                <div class="item-title">${item.title}</div>
                <div class="item-desc">${item.content}</div>
            </div>
        `;
        el.onclick = () => {
            currentItemIndex = index;
            updateUI();
            openInfo();
        };
        itemBar.appendChild(el);
    });
}

function updateUI() {
    const catItems = document.querySelectorAll('.category-item');
    catItems.forEach((el, idx) => {
        if(idx === currentCategoryIndex) el.classList.add('active');
        else el.classList.remove('active');
    });

    const CAT_WIDTH = 120; 
    categoryBar.style.transform = `translateX(-${currentCategoryIndex * CAT_WIDTH}px)`;


    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach((el, idx) => {
        if(idx === currentItemIndex) el.classList.add('active');
        else el.classList.remove('active');
    });

    const ITEM_HEIGHT = 86; 
    itemBar.style.transform = `translate(-50%, -${currentItemIndex * 85}px)`; 
    
    if(isInfoOpen) {
        fillInfoPanel();
    }
}

function fillInfoPanel() {
    const cat = cvData[categories[currentCategoryIndex]];
    const item = cat.items[currentItemIndex];
    if(!item || !item.details) return;

    let html = `<h3>${item.title}</h3>`;
    
    if(item.details.type === 'text') {
        item.details.lines.forEach(line => html += `<p>${line}</p>`);
    } else if (item.details.type === 'list') {
        html += `<ul>`;
        item.details.lines.forEach(line => html += `<li>${line}</li>`);
        html += `</ul>`;
    } else if (item.details.type === 'contact') {
        item.details.lines.forEach(c => {
            if(c.link) html += `<p><strong>${c.label}:</strong> <a href="${c.link}" target="_blank">${c.value}</a></p>`;
            else html += `<p><strong>${c.label}:</strong> ${c.value}</p>`;
        });
    } else if (item.details.type === 'project') {
        html += `<p><a href="${item.details.link}" target="_blank">View on GitHub <i class="fa-brands fa-github"></i></a></p>`;
        html += `<ul>`;
        item.details.lines.forEach(line => html += `<li>${line}</li>`);
        html += `</ul>`;
    }

    infoContent.innerHTML = html;
}

function openInfo() {
    isInfoOpen = true;
    fillInfoPanel();
    infoPanel.classList.add('visible');
}

function closeInfo() {
    isInfoOpen = false;
    infoPanel.classList.remove('visible');
}

document.addEventListener('keydown', (e) => {
    if(isBooting) return;

    switch(e.key) {
        case 'ArrowLeft':
            if(isInfoOpen) return;
            if(currentCategoryIndex > 0) {
                currentCategoryIndex--;
                currentItemIndex = 0;
                renderItems();
                updateUI();
            }
            break;
        case 'ArrowRight':
            if(isInfoOpen) return;
            if(currentCategoryIndex < categories.length - 1) {
                currentCategoryIndex++;
                currentItemIndex = 0;
                renderItems();
                updateUI();
            }
            break;
        case 'ArrowUp':
            if(isInfoOpen) return;
            if(currentItemIndex > 0) {
                currentItemIndex--;
                updateUI();
            }
            break;
        case 'ArrowDown':
            if(isInfoOpen) return;
            const cat = cvData[categories[currentCategoryIndex]];
            if(currentItemIndex < cat.items.length - 1) {
                currentItemIndex++;
                updateUI();
            }
            break;
        case 'Enter':
        case ' ':
            if(!isInfoOpen) openInfo();
            else closeInfo();
            break;
        case 'Escape':
        case 'Backspace':
            if(isInfoOpen) closeInfo();
            break;
    }
});

const canvas = document.createElement('canvas');
canvas.id = 'bg-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let width, height;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

let time = 0;
function animate() {
    ctx.clearRect(0, 0, width, height);
    
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#050505');
    grad.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        for(let x = 0; x < width; x+=10) {
            const y = height/2 + Math.sin(x * 0.005 + time + i) * (50 + i * 20) + (i * 20);
            if(x===0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    time += 0.03;
    requestAnimationFrame(animate);
}
animate();
