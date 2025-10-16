document.addEventListener('DOMContentLoaded', () => {
    // --- DATA (Simulates an API call) ---
    const londonData = [
        // ... (use the same data object array from the previous examples)
        { id: 1, image: 'https://images.unsplash.com/photo-1529655683826-1c5c1e6971b8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'Tower Bridge', description: 'An iconic symbol of London, this combined bascule and suspension bridge crosses the River Thames.' },
        { id: 2, image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'City of London at Night', description: 'The financial heart of the city, featuring a stunning mix of modern skyscrapers and historic landmarks.' },
        { id: 3, image: 'https://images.unsplash.com/photo-1505761671935-60b3a742750f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'The London Eye', description: 'A cantilevered observation wheel offering breathtaking 360-degree views of the city.' },
        { id: 4, image: 'https://images.unsplash.com/photo-1533929736458-ca5889121fe2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'Westminster Abbey', description: 'A historic, Gothic church and a traditional place of coronation and burial for English monarchs.' },
        { id: 5, image: 'https://images.unsplash.com/photo-1542317144-762d14064567?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'Classic Red Bus', description: 'The famous double-decker bus, an unmistakable icon of London\'s public transport.' },
        { id: 6, image: 'https://images.unsplash.com/photo-1520052305373-f9378c3d79a2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'Notting Hill', description: 'Famous for its colorful houses, Portobello Road Market, and the annual Notting Hill Carnival.' },
        { id: 7, image: 'https://images.unsplash.com/photo-1600456899121-68eda5705257?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600', title: 'The Shard', description: 'Western Europe\'s tallest building, offering unparalleled views from its observation deck.' }
    ];

    const grid = document.getElementById('gridContainer');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    let first, last, deltaX, deltaY, deltaW, deltaH;

    // --- DYNAMICALLY CREATE & LOAD CARDS ---
    londonData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 100}ms`;
        card.dataset.id = item.id;
        card.innerHTML = `
            <div class="image-container">
                <img data-src="${item.image}" alt="${item.title}">
                <h3 class="card-title">${item.title}</h3>
            </div>
        `;
        grid.appendChild(card);
    });

    // --- LAZY LOADING IMAGES with Intersection Observer ---
    const images = document.querySelectorAll('[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: "0px 0px 100px 0px" }); // Load images 100px before they enter viewport
    images.forEach(img => observer.observe(img));

    // --- FLIP ANIMATION LOGIC ---
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;

        // 1. FIRST: Get the initial position of the card's image
        const cardImage = card.querySelector('img');
        first = cardImage.getBoundingClientRect();

        // Populate and show the modal
        populateModal(card.dataset.id);
        modal.classList.remove('hidden');

        // 2. LAST: Get the final position of the modal's image
        const modalImage = modal.querySelector('img');
        last = modalImage.getBoundingClientRect();

        // 3. INVERT: Calculate the difference and apply the inverse transform
        deltaX = first.left - last.left;
        deltaY = first.top - last.top;
        deltaW = first.width / last.width;
        deltaH = first.height / last.height;

        modalImage.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
        modalImage.style.transition = 'none'; // Disable transition for the initial set

        // 4. PLAY: Animate back to the original state (0,0,1,1)
        requestAnimationFrame(() => {
            modalImage.style.transition = 'transform 0.4s var(--ease-out-quint)';
            modalImage.style.transform = 'none'; // This triggers the animation
        });
    });

    const populateModal = (id) => {
        const item = londonData.find(d => d.id == id);
        modal.querySelector('img').src = item.image;
        modal.querySelector('h2').textContent = item.title;
        modal.querySelector('p').textContent = item.description;
    };

    // --- CLOSE MODAL ---
    const closeModal = () => {
        modal.classList.add('hidden');
    };

    modal.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
    // Prevent modal from closing when clicking on the content
    modal.querySelector('.modal-content').addEventListener('click', (e) => e.stopPropagation());
});