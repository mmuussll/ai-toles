import { categories, tools } from './updated_data.js';

/**
 * رفيق الطالب - تطبيق لعرض أدوات الذكاء الاصطناعي
 * 
 * هذا الملف يحتوي على المنطق الرئيسي للتطبيق، بما في ذلك:
 * - عرض الأدوات حسب الفئات
 * - البحث في الأدوات
 * - عرض تفاصيل أداة محددة
 * - التنقل بين الفئات والأدوات
 * - إدارة سمة التطبيق (فاتح/داكن)
 */

document.addEventListener('DOMContentLoaded', () => {
    // تهيئة عناصر DOM الرئيسية
    const elements = {
        contentArea: document.getElementById('content-area'),
        searchInput: document.getElementById('searchInput'),
        mainContentAreaLayout: document.getElementById('main-content-area-layout'),
        mainCategoriesNav: document.getElementById('main-categories-nav'),
        subCategoriesSidebar: document.getElementById('sub-categories-sidebar')
    };

    // التحقق من وجود جميع العناصر الضرورية
    if (!validateRequiredElements(elements)) {
        console.error('Essential layout elements not found!');
        return;
    }
    
    /**
     * التحقق من وجود جميع العناصر المطلوبة في DOM
     * @param {Object} elements - كائن يحتوي على مراجع لعناصر DOM
     * @returns {boolean} - صحيح إذا كانت جميع العناصر موجودة
     */
    function validateRequiredElements(elements) {
        return Object.values(elements).every(element => element !== null);
    }

    // تهيئة محرك البحث باستخدام Fuse.js
    const searchEngine = initializeSearchEngine(tools);
    
    // إنشاء بطاقات الأدوات وتخزينها في Map للاستخدام اللاحق
    const toolCardMap = createToolCardMap(tools);
    
    // تنظيم الأدوات حسب الفئات لسهولة الوصول
    const toolsByCategory = organizeToolsByCategory(categories, tools);
    
    /**
     * تهيئة محرك البحث Fuse.js
     * @param {Array} toolsData - مصفوفة الأدوات
     * @returns {Object} - كائن Fuse.js المهيأ
     */
    function initializeSearchEngine(toolsData) {
        return new Fuse(toolsData, {
            includeScore: true,
            keys: ['name', 'description', 'tags'],
            threshold: 0.35,
            minMatchCharLength: 2,
        });
    }
    
    /**
     * إنشاء خريطة من بطاقات الأدوات
     * @param {Array} toolsData - مصفوفة الأدوات
     * @returns {Map} - خريطة تربط اسم الأداة ببطاقة HTML الخاصة بها
     */
    function createToolCardMap(toolsData) {
        return new Map(toolsData.map(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.dataset.toolName = tool.name;
            if(Array.isArray(tool.tags)) card.dataset.tags = tool.tags.join(' ');
            
            card.innerHTML = `
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="card-footer">
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="main-link">افتح الأداة</a>
                    <a href="?tool=${encodeURIComponent(tool.name)}" class="details-link">التفاصيل</a>
                </div>
            `;
            return [tool.name, card];
        }));
    }
    
    /**
     * تنظيم الأدوات حسب الفئات
     * @param {Array} categoriesData - مصفوفة الفئات
     * @param {Array} toolsData - مصفوفة الأدوات
     * @returns {Object} - كائن يحتوي على الأدوات مصنفة حسب الفئات
     */
    function organizeToolsByCategory(categoriesData, toolsData) {
        // إنشاء كائن فارغ للفئات غير الرئيسية
        const toolsByCat = categoriesData.reduce((acc, cat) => {
            if (cat.type !== 'header') acc[cat.id] = [];
            return acc;
        }, {});
        
        // تصنيف الأدوات حسب الفئات
        toolsData.forEach(tool => {
            if (toolsByCat[tool.category]) {
                toolsByCat[tool.category].push(tool);
            }
        });
        
        return toolsByCat;
    }

    // إنشاء شبكة الأدوات الرئيسية
    const mainGrid = createMainGrid();
    
    /**
     * إنشاء شبكة الأدوات الرئيسية
     * @returns {HTMLElement} - عنصر div يمثل شبكة الأدوات
     */
    function createMainGrid() {
        const grid = document.createElement('div');
        grid.className = 'tools-grid';
        return grid;
    }

    /**
     * عرض قائمة من الأدوات في شبكة الأدوات
     * @param {Array} toolList - قائمة الأدوات المراد عرضها
     */
    function displayTools(toolList) {
        mainGrid.innerHTML = '';
        
        if (toolList.length === 0) {
            showNoResultsMessage(mainGrid);
        } else {
            renderToolCards(toolList, mainGrid);
        }
    }
    
    /**
     * عرض رسالة عدم وجود نتائج
     * @param {HTMLElement} container - العنصر الذي سيحتوي على الرسالة
     */
    function showNoResultsMessage(container) {
        container.innerHTML = '<p class="no-results-message">لم يتم العثور على نتائج. حاول البحث بكلمات أخرى.</p>';
    }
    
    /**
     * عرض بطاقات الأدوات في الحاوية المحددة
     * @param {Array} toolList - قائمة الأدوات المراد عرضها
     * @param {HTMLElement} container - العنصر الذي سيحتوي على البطاقات
     */
    function renderToolCards(toolList, container) {
        toolList.forEach(tool => container.appendChild(toolCardMap.get(tool.name)));
    }
    
    /**
     * عرض تفاصيل أداة واحدة
     * @param {Object} tool - الأداة المراد عرض تفاصيلها
     */
    function showSingleTool(tool) {
        elements.mainContentAreaLayout.classList.add('single-view');
        
        // البحث عن أدوات مشابهة
        const similarTools = findSimilarTools(tool, searchEngine, 3);

        // إنشاء محتوى صفحة التفاصيل
        elements.contentArea.innerHTML = generateToolDetailsHTML(tool, similarTools);
        
        // إضافة مستمعي الأحداث للروابط الديناميكية
        attachEventListenersToDetailPage(elements.contentArea, tools);
    }
    
    /**
     * البحث عن أدوات مشابهة لأداة معينة
     * @param {Object} tool - الأداة المراد البحث عن أدوات مشابهة لها
     * @param {Object} searchEngine - محرك البحث المستخدم
     * @param {number} limit - الحد الأقصى لعدد الأدوات المشابهة
     * @returns {Array} - قائمة الأدوات المشابهة
     */
    function findSimilarTools(tool, searchEngine, limit) {
        return searchEngine.search(tool.name)
            .map(res => res.item)
            .filter(t => t.name !== tool.name)
            .slice(0, limit);
    }
    
    /**
     * إنشاء HTML لصفحة تفاصيل الأداة
     * @param {Object} tool - الأداة المراد عرض تفاصيلها
     * @param {Array} similarTools - قائمة الأدوات المشابهة
     * @returns {string} - كود HTML لصفحة التفاصيل
     */
    function generateToolDetailsHTML(tool, similarTools) {
        return `
            <div class="tool-details-view">
                <a href="/" class="back-link"><i class="fas fa-arrow-right"></i> العودة إلى الكل</a>
                <div class="tool-details-header">
                    <h1>${tool.name}</h1>
                    <p class="tool-details-desc">${tool.description}</p>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="primary-action-btn">زيارة الموقع الرسمي <i class="fas fa-external-link-alt"></i></a>
                </div>

                ${generateExtraDetailsHTML(tool)}
                ${generateSimilarToolsHTML(similarTools)}
            </div>
        `;
    }
    
    /**
     * إنشاء HTML للتفاصيل الإضافية للأداة
     * @param {Object} tool - الأداة المراد عرض تفاصيلها
     * @returns {string} - كود HTML للتفاصيل الإضافية
     */
    function generateExtraDetailsHTML(tool) {
        if (!tool.details && (!tool.tags || tool.tags.length === 0)) {
            return '';
        }
        
        return `
        <div class="tool-extra-details">
            ${generateTagsHTML(tool.tags)}
            ${generateToolDetailsHTML(tool.details)}
        </div>`;
    }
    
    /**
     * إنشاء HTML لوسوم الأداة
     * @param {Array} tags - وسوم الأداة
     * @returns {string} - كود HTML للوسوم
     */
    function generateTagsHTML(tags) {
        if (!tags || tags.length === 0) return '';
        
        return `
        <div class="tool-tags-container">
            <h4>الوسوم</h4>
            <div class="tags">
                ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>`;
    }
    
    /**
     * إنشاء HTML لتفاصيل الأداة
     * @param {Object} details - تفاصيل الأداة
     * @returns {string} - كود HTML للتفاصيل
     */
    function generateToolDetailsHTML(details) {
        if (!details) return '';
        
        return `
            ${details.pricingSummary ? `
                <div class="detail-section">
                    <h5><i class="fas fa-dollar-sign"></i> ملخص التسعير</h5>
                    <p>${details.pricingSummary}</p>
                </div>
            ` : ''}
            ${details.keyFeatures && details.keyFeatures.length > 0 ? `
                <div class="detail-section">
                    <h5><i class="fas fa-star"></i> أبرز الميزات</h5>
                    <ul>
                        ${details.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${details.idealFor ? `
                <div class="detail-section">
                    <h5><i class="fas fa-bullseye"></i> مثالي لـ:</h5>
                    <p>${details.idealFor}</p>
                </div>
            ` : ''}
        `;
    }
    
    /**
     * إنشاء HTML للأدوات المشابهة
     * @param {Array} similarTools - قائمة الأدوات المشابهة
     * @returns {string} - كود HTML للأدوات المشابهة
     */
    function generateSimilarToolsHTML(similarTools) {
        if (similarTools.length === 0) return '';
        
        return `
        <div class="similar-tools-container">
            <h2>أدوات مشابهة قد تعجبك</h2>
            <div class="tools-grid">
                ${similarTools.map(t => {
                    const cardHTML = toolCardMap.get(t.name).outerHTML;
                    return cardHTML;
                }).join('')}
            </div>
        </div>`;
    }
    
    /**
     * إضافة مستمعي الأحداث لصفحة التفاصيل
     * @param {HTMLElement} container - العنصر الذي يحتوي على صفحة التفاصيل
     * @param {Array} toolsData - قائمة الأدوات
     */
    function attachEventListenersToDetailPage(container, toolsData) {
        // إضافة مستمعي الأحداث لروابط التفاصيل في الأدوات المشابهة
        container.querySelectorAll('.details-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const toolName = new URL(link.href).searchParams.get('tool');
                const newTool = toolsData.find(t => t.name === toolName);
                if (newTool) {
                    history.pushState({tool: toolName}, newTool.name, `?tool=${encodeURIComponent(toolName)}`);
                    showSingleTool(newTool);
                    window.scrollTo(0, 0);
                }
            });
        });
        
        // إضافة مستمع الحدث لرابط العودة
        container.querySelector('.back-link').addEventListener('click', (e) => {
            e.preventDefault();
            history.pushState({path: '/'}, '', '/');
            handleState();
            window.scrollTo(0, 0);
        });
    }

    let firstCategoryId = null;

    // Filter main and sub categories
    const mainCategories = categories.filter(cat => cat.type === 'header');
    const subCategories = categories.filter(cat => cat.type !== 'header');

    // Group sub categories by their main category prefix
    const categorizedSubCategories = mainCategories.reduce((acc, mainCat) => {
        // Extract the prefix, e.g., 'dev' from 'dev-main'
        const prefix = mainCat.id.replace('-main', '');
        acc[mainCat.id] = subCategories.filter(subCat => subCat.id.startsWith(prefix));
        return acc;
    }, {});

    // Store references to sub-category buttons
    const subCategoryButtons = {};
    const subCategoryGroups = {}; // To store references to the category-group divs

    // Build main categories navigation
    mainCategories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'tab-button';
        button.dataset.categoryId = category.id;
        button.textContent = category.title;
        mainCategoriesNav.appendChild(button);
    });

    // Build sub categories sidebar (including headers and groups)
    subCategoriesSidebar.innerHTML = ''; // Clear existing content before rebuilding
    mainCategories.forEach(mainCat => {
        const categoryGroupDiv = document.createElement('div');
        categoryGroupDiv.className = 'category-group';
        categoryGroupDiv.dataset.mainCategoryId = mainCat.id; // Store ID for filtering
        subCategoryGroups[mainCat.id] = categoryGroupDiv; // Store reference to the group

        const header = document.createElement('h4');
        header.className = 'sidebar-header';
        header.textContent = mainCat.title;
        categoryGroupDiv.appendChild(header);

        const relevantSubCategories = categorizedSubCategories[mainCat.id];
        if (relevantSubCategories) {
            relevantSubCategories.forEach(category => {
                if (!firstCategoryId) firstCategoryId = category.id; // Still get first ID for default
                const button = document.createElement('button');
                button.className = 'tab-button';
                button.dataset.categoryId = category.id;
                button.textContent = category.title;
                categoryGroupDiv.appendChild(button);
                subCategoryButtons[category.id] = button; // Store button reference
            });
        }
        subCategoriesSidebar.appendChild(categoryGroupDiv);
    });
    
    // Select all tab buttons (main and sub)
    const allTabButtons = document.querySelectorAll('.tab-button');
    
    /**
     * عرض الأدوات حسب الفئة المحددة
     * @param {string} categoryId - معرف الفئة المراد عرضها
     * @param {boolean} fromHistory - ما إذا كان الاستدعاء من سجل التصفح
     */
    function showCategory(categoryId, fromHistory = false) {
        mainContentAreaLayout.classList.remove('single-view');
        contentArea.innerHTML = '';
        contentArea.appendChild(mainGrid);
        
        const categoryTools = toolsByCategory[categoryId] || [];
        displayTools(categoryTools);

        // تحديث الفئة النشطة لجميع الأزرار ذات الصلة
        allTabButtons.forEach(t => t.classList.toggle('active', t.dataset.categoryId === categoryId));
        
        // إدارة رؤية مجموعة الفئات الفرعية
        const selectedMainCategory = mainCategories.find(cat => cat.id === categoryId);
        
        if (selectedMainCategory) {
            // إذا تم النقر على زر فئة رئيسية، أظهر مجموعتها وأخفِ الأخرى
            Object.values(subCategoryGroups).forEach(groupDiv => {
                groupDiv.style.display = (groupDiv.dataset.mainCategoryId === categoryId) ? '' : 'none';
            });
        } else {
            // إذا تم النقر على زر فئة فرعية، تأكد من أن مجموعة الفئة الأم مرئية، وأخفِ الأخرى
            const parentMainCategory = Object.keys(categorizedSubCategories).find(mainCatId => 
                categorizedSubCategories[mainCatId].some(subCat => subCat.id === categoryId)
            );
            Object.values(subCategoryGroups).forEach(groupDiv => {
                groupDiv.style.display = (groupDiv.dataset.mainCategoryId === parentMainCategory) ? '' : 'none';
            });
        }

        // تحديث عنوان URL إذا لم يكن الاستدعاء من سجل التصفح
        if (!fromHistory) {
            history.pushState({ category: categoryId }, '', `?category=${categoryId}`);
        }
    }
    
    /**
     * معالجة البحث مع تأخير زمني
     */
    let searchTimeout;
    function handleSearch() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            mainContentAreaLayout.classList.remove('single-view');
            if(!mainGrid.isConnected) {
                contentArea.innerHTML = '';
                contentArea.appendChild(mainGrid);
            }

            const query = searchInput.value.trim();
            if (!query) {
                // إذا كان البحث فارغًا، عرض الفئة الحالية أو الافتراضية
                const params = new URLSearchParams(window.location.search);
                const catId = params.get('category') || firstCategoryId;
                showCategory(catId, true);
                return;
            }
            
            // تحديث عنوان URL بمعلمة البحث
            history.pushState({ search: query }, '', `?search=${query}`);

            // إزالة حالة النشاط من جميع أزرار التبويب
            allTabButtons.forEach(t => t.classList.remove('active'));
            
            // إجراء البحث وعرض النتائج
            const searchResultItems = searchEngine.search(query).map(result => result.item);
            displayTools(searchResultItems);

            // عند البحث، عرض جميع مجموعات الفئات الفرعية
            Object.values(subCategoryGroups).forEach(groupDiv => {
                groupDiv.style.display = '';
            });

        }, 300);
    }
    
    searchInput.addEventListener('input', handleSearch);

    // Event listener for main categories nav
    mainCategoriesNav.addEventListener('click', (e) => {
        if(e.target.matches('.tab-button')) {
            if (searchInput.value) searchInput.value = '';
            const mainCategoryId = e.target.dataset.categoryId;
            const relevantSubCats = categorizedSubCategories[mainCategoryId];
            if (relevantSubCats && relevantSubCats.length > 0) {
                // Select the first sub-category automatically
                showCategory(relevantSubCats[0].id);
            } else {
                // If a main category has no sub-categories, just activate the main category button
                showCategory(mainCategoryId); // This line now properly calls showCategory for main headers
            }
        }
    });

    // Event listener for sub categories sidebar
    subCategoriesSidebar.addEventListener('click', (e) => {
        if(e.target.matches('.tab-button')) {
            if (searchInput.value) searchInput.value = '';
            showCategory(e.target.dataset.categoryId);
        }
    });

    contentArea.addEventListener('click', (e) => {
        const link = e.target.closest('.details-link');
        if (link) {
            e.preventDefault();
            const toolName = new URL(link.href).searchParams.get('tool');
            const toolToShow = tools.find(t => t.name === toolName);
            if (toolToShow) {
                history.pushState({ tool: toolName }, toolToShow.name, `?tool=${encodeURIComponent(toolName)}`);
                showSingleTool(toolToShow);
                window.scrollTo(0, 0);
            }
        }
    });

    /**
     * إدارة حالة التطبيق بناءً على معلمات URL
     */
    function handleState() {
        const params = new URLSearchParams(window.location.search);
        const toolName = params.get('tool');
        const categoryId = params.get('category');
        const searchQuery = params.get('search');
        
        if (toolName) {
            handleToolState(toolName);
        } else if (searchQuery) {
            handleSearchState(searchQuery);
        } else if (categoryId) {
            handleCategoryState(categoryId);
        } else {
            handleDefaultState();
        }
    }
    
    /**
     * معالجة حالة عرض أداة واحدة
     * @param {string} toolName - اسم الأداة المراد عرضها
     */
    function handleToolState(toolName) {
        const tool = tools.find(t => t.name === toolName);
        if (tool) {
            showSingleTool(tool);
        } else {
            // الأداة غير موجودة، إعادة التوجيه إلى الصفحة الرئيسية
            history.replaceState({path: '/'}, '', '/');
            handleDefaultState();
        }
    }
    
    /**
     * معالجة حالة البحث
     * @param {string} searchQuery - استعلام البحث
     */
    function handleSearchState(searchQuery) {
        searchInput.value = searchQuery;
        handleSearch();
    }
    
    /**
     * معالجة حالة عرض فئة
     * @param {string} categoryId - معرف الفئة
     */
    function handleCategoryState(categoryId) {
        // تحديد ما إذا كانت الفئة الحالية هي فئة رئيسية
        const isMainCategory = mainCategories.some(cat => cat.id === categoryId);
        
        if (isMainCategory) {
            // إذا كانت فئة رئيسية، اختر تلقائيًا أول فئة فرعية لها
            const relevantSubCats = categorizedSubCategories[categoryId];
            if (relevantSubCats && relevantSubCats.length > 0) {
                showCategory(relevantSubCats[0].id, true);
            } else {
                // إذا لم يكن للفئة الرئيسية فئات فرعية، فقط قم بتنشيط زر الفئة الرئيسية وإخفاء جميع المجموعات الفرعية
                showCategory(categoryId, true);
            }
        } else {
            // إذا كانت فئة فرعية، فقط اعرضها
            showCategory(categoryId, true);
        }
    }
    
    /**
     * معالجة الحالة الافتراضية
     */
    function handleDefaultState() {
        // منطق الحالة الافتراضية - عرض أول فئة فرعية من أول فئة رئيسية
        const firstMainCat = mainCategories[0];
        if (firstMainCat) {
            const relevantSubCats = categorizedSubCategories[firstMainCat.id];
            if (relevantSubCats && relevantSubCats.length > 0) {
                showCategory(relevantSubCats[0].id, true);
            } else { // الرجوع إلى الخيار البديل إذا لم يكن لأول فئة رئيسية فئات فرعية، اختر أول فئة فرعية عادية
                if (subCategories.length > 0) {
                    showCategory(subCategories[0].id, true);
                } else {
                    displayTools(tools); // إذا لم تكن هناك فئات على الإطلاق
                }
            }
        } else if (subCategories.length > 0) { // إذا كانت هناك فئات فرعية ولكن لا توجد فئات رئيسية محددة
            showCategory(subCategories[0].id, true);
        } else {
            displayTools(tools); // إذا لم تكن هناك فئات على الإطلاق
        }
    }

    window.addEventListener('popstate', () => {
        handleState();
    });

    handleState(); 

    const themeSwitcher = document.getElementById('theme-switcher-checkbox');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme');
    
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener('change', function() {
        const theme = this.checked ? 'dark-theme' : 'light-theme';
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    });

    /**
     * تحديث وعرض إحصائيات التطبيق (عدد الأدوات والفئات)
     */
    function updateStatistics() {
        const toolCountElement = document.getElementById('tool-count');
        const categoryCountElement = document.getElementById('category-count');
        
        if (toolCountElement) toolCountElement.textContent = tools.length;
        if (categoryCountElement) categoryCountElement.textContent = categories.filter(c => c.type !== 'header').length;
    }
    
    /**
     * تهيئة التطبيق
     */
    function initializeApp() {
        // تحديث الإحصائيات
        updateStatistics();
        
        // معالجة الحالة الأولية
        handleState();
    }
    
    // بدء تشغيل التطبيق
    initializeApp();
});