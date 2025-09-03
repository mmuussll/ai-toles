import { categories, tools } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const sidebar = document.getElementById('sidebar');
    const searchInput = document.getElementById('searchInput');
    const mainLayout = document.getElementById('main-layout');

    if (!contentArea || !sidebar || !searchInput || !mainLayout) {
        console.error('Essential layout elements not found!');
        return;
    }

    const fuse = new Fuse(tools, {
        includeScore: true,
        keys: ['name', 'description', 'tags'],
        threshold: 0.35,
        minMatchCharLength: 2,
    });

    const toolCardMap = new Map(tools.map(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.toolName = tool.name;
        if(Array.isArray(tool.tags)) card.dataset.tags = tool.tags.join(' ');
        
        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer">افتح الأداة</a>
            <a href="?tool=${encodeURIComponent(tool.name)}" class="details-link">التفاصيل</a>
        `;
        return [tool.name, card];
    }));

    const toolsByCategory = categories.reduce((acc, cat) => {
        if (cat.type !== 'header') acc[cat.id] = [];
        return acc;
    }, {});
    tools.forEach(tool => {
        if (toolsByCategory[tool.category]) {
            toolsByCategory[tool.category].push(tool);
        }
    });

    const mainGrid = document.createElement('div');
    mainGrid.className = 'tools-grid';

    function displayTools(toolList) {
        mainGrid.innerHTML = '';
        if (toolList.length === 0) {
            mainGrid.innerHTML = '<p class="no-results-message">لا توجد نتائج.</p>';
        } else {
            toolList.forEach(tool => mainGrid.appendChild(toolCardMap.get(tool.name)));
        }
    }
    
    function showSingleTool(tool) {
        mainLayout.classList.add('single-view'); // Add class to hide sidebar and adjust layout
        
        const similarTools = fuse.search(tool.name)
            .map(res => res.item)
            .filter(t => t.name !== tool.name)
            .slice(0, 5);

        contentArea.innerHTML = `
            <div class="tool-details-view">
                <div class="tool-details-header">
                    <a href="/" class="back-link">← العودة إلى الكل</a>
                    <h1>${tool.name}</h1>
                    <p class="tool-details-desc">${tool.description}</p>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="primary-action-btn">زيارة الموقع الرسمي</a>
                </div>
                ${tool.tags && tool.tags.length > 0 ? `
                <div class="tool-tags-container">
                    <h4>الوسوم:</h4>
                    ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>` : ''}

                ${tool.details ? `
                <div class="tool-extra-details">
                    ${tool.details.pricingSummary ? `
                        <div class="detail-section">
                            <h5>ملخص التسعير</h5>
                            <p>${tool.details.pricingSummary}</p>
                        </div>
                    ` : ''}
                    ${tool.details.keyFeatures && tool.details.keyFeatures.length > 0 ? `
                        <div class="detail-section">
                            <h5>أبرز الميزات</h5>
                            <ul>
                                ${tool.details.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${tool.details.idealFor ? `
                        <div class="detail-section">
                            <h5>مثالي لـ:</h5>
                            <p>${tool.details.idealFor}</p>
                        </div>
                    ` : ''}
                </div>
                ` : ''}

                ${similarTools.length > 0 ? `
                <div class="similar-tools-container">
                    <h2>أدوات مشابهة</h2>
                    <div class="tools-grid">
                        ${similarTools.map(t => toolCardMap.get(t.name).outerHTML).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    }

    let firstCategoryId = null;
    const tabNav = document.createElement('div');
    tabNav.className = 'tab-nav';
    categories.forEach(category => {
        if (category.type === 'header') {
            tabNav.innerHTML += `<h4 class="sidebar-header">${category.title}</h4>`;
        } else {
            if (!firstCategoryId) firstCategoryId = category.id;
            tabNav.innerHTML += `<button class="tab-button" data-category-id="${category.id}">${category.title}</button>`;
        }
    });
    sidebar.appendChild(tabNav);
    
    const tabs = document.querySelectorAll('.tab-button');
    
    function showCategory(categoryId) {
        mainLayout.classList.remove('single-view');
        contentArea.innerHTML = '';
        contentArea.appendChild(mainGrid);
        
        const categoryTools = toolsByCategory[categoryId] || [];
        displayTools(categoryTools);

        tabs.forEach(t => t.classList.toggle('active', t.dataset.categoryId === categoryId));
    }
    
    let searchTimeout;
    function handleSearch() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            mainLayout.classList.remove('single-view');
            if(!mainGrid.isConnected) {
                contentArea.innerHTML = '';
                contentArea.appendChild(mainGrid);
            }

            const query = searchInput.value.trim();
            if (!query) {
                const activeTab = document.querySelector('.tab-button.active');
                showCategory(activeTab ? activeTab.dataset.categoryId : firstCategoryId);
                return;
            }

            tabs.forEach(t => t.classList.remove('active'));
            const searchResultItems = fuse.search(query).map(result => result.item);
            displayTools(searchResultItems);

        }, 250);
    }
    
    searchInput.addEventListener('input', handleSearch);

    sidebar.addEventListener('click', (e) => {
        if(e.target.matches('.tab-button')) {
            if (searchInput.value) searchInput.value = '';
            showCategory(e.target.dataset.categoryId);
        }
    });

    // --- Initial Page Load Router ---
    const params = new URLSearchParams(window.location.search);
    const toolNameFromQuery = params.get('tool');
    const toolToShow = toolNameFromQuery ? tools.find(t => t.name === toolNameFromQuery) : null;
    
    if (toolToShow) {
        showSingleTool(toolToShow);
    } else {
        if (firstCategoryId) showCategory(firstCategoryId);
        else displayTools(tools);
    }

    // Theme and stats remain the same
    const themeSwitcher = document.getElementById('theme-switcher-checkbox');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') themeSwitcher.checked = true;
    }
    themeSwitcher.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme', this.checked);
        localStorage.setItem('theme', this.checked ? 'dark-theme' : 'light-theme');
    });

    document.getElementById('tool-count').textContent = tools.length;
    document.getElementById('category-count').textContent = categories.filter(c => c.type !== 'header').length;
});