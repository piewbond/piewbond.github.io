"use strict";
const fileAliasMap = {
    '': 'home',
    'index': 'home',
    'index.html': 'home',
    'about': 'about',
    'about.html': 'about',
    'news': 'news',
    'news.html': 'news',
    'contact': 'contact',
    'contact.html': 'contact',
    'elerhetosegek': 'contact',
    'elerhetosegek.html': 'contact'
};
const translationSources = {
    hu: '/src/translations/HU_hun.json',
    en: '/src/translations/EN_eng.json'
};
let translations = {
    hu: {},
    en: {}
};
const loadTranslations = async () => {
    const entries = await Promise.all(Object.entries(translationSources).map(async ([locale, path]) => {
        const cacheBusted = `${path}?t=${Date.now()}`;
        try {
            const response = await fetch(cacheBusted);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${cacheBusted}: ${response.status}`);
            }
            const table = (await response.json());
            console.info(`Loaded translations for ${locale}`, Object.keys(table).length);
            return [locale, table];
        }
        catch (error) {
            console.error('Translation load failed', error);
            return [locale, translations[locale]];
        }
    }));
    const nextTranslations = { hu: {}, en: {} };
    entries.forEach(([locale, table]) => {
        nextTranslations[locale] = table;
    });
    translations = nextTranslations;
};
const localeStorageKey = 'bcg-locale';
const localeFormatMap = {
    hu: 'hu-HU',
    en: 'en-GB'
};
const goals = [
    {
        title: 'goals.0.title',
        detail: 'goals.0.detail',
        progress: 72,
        focus: 'goals.0.focus'
    },
    {
        title: 'goals.1.title',
        detail: 'goals.1.detail',
        progress: 48,
        focus: 'goals.1.focus'
    },
    {
        title: 'goals.2.title',
        detail: 'goals.2.detail',
        progress: 31,
        focus: 'goals.2.focus'
    }
];
const metrics = [
    { label: 'metrics.0.label', value: '3', note: 'metrics.0.note' },
    { label: 'metrics.1.label', value: '120+', note: 'metrics.1.note' },
    { label: 'metrics.2.label', value: '5', note: 'metrics.2.note' }
];
const newsItems = [
    {
        date: '2026-02-18',
        title: 'news.items.0.title',
        summary: 'news.items.0.summary',
        tags: ['news.items.0.tags.0', 'news.items.0.tags.1'],
        link: 'https://blackcatglass.studio/devlog/mirror-bloom-12'
    },
    {
        date: '2026-02-05',
        title: 'news.items.1.title',
        summary: 'news.items.1.summary',
        tags: ['news.items.1.tags.0', 'news.items.1.tags.1']
    },
    {
        date: '2026-01-22',
        title: 'news.items.2.title',
        summary: 'news.items.2.summary',
        tags: ['news.items.2.tags.0', 'news.items.2.tags.1']
    }
];
const timelineEntries = [
    { year: '2026', title: 'timeline.0.title', description: 'timeline.0.description' },
    { year: '2025', title: 'timeline.1.title', description: 'timeline.1.description' },
    { year: '2024', title: 'timeline.2.title', description: 'timeline.2.description' }
];
const teamProfiles = [
    {
        name: 'team.0.name',
        title: 'team.0.title',
        bio: 'team.0.bio',
        specialties: ['team.0.spec.0', 'team.0.spec.1', 'team.0.spec.2'],
        highlight: 'team.0.highlight'
    },
    {
        name: 'team.1.name',
        title: 'team.1.title',
        bio: 'team.1.bio',
        specialties: ['team.1.spec.0', 'team.1.spec.1', 'team.1.spec.2'],
        highlight: 'team.1.highlight'
    },
    {
        name: 'team.2.name',
        title: 'team.2.title',
        bio: 'team.2.bio',
        specialties: ['team.2.spec.0', 'team.2.spec.1', 'team.2.spec.2'],
        highlight: 'team.2.highlight'
    }
];
const contactProfiles = [
    {
        name: 'contact.0.name',
        role: 'contact.0.role',
        focus: 'contact.0.focus',
        channels: [
            { label: 'contact.0.channels.0.label', value: 'hello@blackcatglass.studio', href: 'mailto:hello@blackcatglass.studio', hint: 'contact.0.channels.0.hint' },
            { label: 'contact.0.channels.1.label', value: '@bonifac.codeslight', href: 'https://instagram.com/bonifac.p', hint: 'contact.0.channels.1.hint' }
        ]
    },
    {
        name: 'contact.1.name',
        role: 'contact.1.role',
        focus: 'contact.1.focus',
        channels: [
            { label: 'contact.1.channels.0.label', value: 'kristof@blackcatglass.studio', href: 'mailto:kristof@blackcatglass.studio', hint: 'contact.1.channels.0.hint' },
            { label: 'contact.1.channels.1.label', value: '@mercz.glass', href: 'https://instagram.com/mercz.kristof', hint: 'contact.1.channels.1.hint' }
        ]
    },
    {
        name: 'contact.2.name',
        role: 'contact.2.role',
        focus: 'contact.2.focus',
        channels: [
            { label: 'contact.2.channels.0.label', value: 'mark@blackcatglass.studio', href: 'mailto:mark@blackcatglass.studio', hint: 'contact.2.channels.0.hint' },
            { label: 'contact.2.channels.1.label', value: '@cseh.mark', href: 'https://instagram.com/mark.cz_', hint: 'contact.2.channels.1.hint' }
        ]
    }
];
const studioSchedule = {
    windows: [
        { label: 'schedule.windows.0.label', detail: 'schedule.windows.0.detail' },
        { label: 'schedule.windows.1.label', detail: 'schedule.windows.1.detail' },
        { label: 'schedule.windows.2.label', detail: 'schedule.windows.2.detail' }
    ],
    note: 'schedule.note'
};
const clampProgress = (value) => Math.max(0, Math.min(100, value));
const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (text) {
        element.textContent = text;
    }
    return element;
};
const renderCollection = (root, items, template) => {
    if (!root) {
        return;
    }
    const fragment = document.createDocumentFragment();
    items.forEach(item => fragment.appendChild(template(item)));
    root.innerHTML = '';
    root.appendChild(fragment);
};
const detectPage = () => {
    const fromDataset = document.body.dataset.page;
    if (fromDataset) {
        return fromDataset;
    }
    const fileName = window.location.pathname.split('/').pop()?.toLowerCase() ?? 'index.html';
    return fileAliasMap[fileName] ?? 'home';
};
const currentPage = detectPage();
const resolveHrefToPage = (href) => {
    if (!href) {
        return undefined;
    }
    const sanitized = href.toLowerCase();
    if (fileAliasMap[sanitized]) {
        return fileAliasMap[sanitized];
    }
    try {
        const url = new URL(href, window.location.origin);
        const normalizedPath = url.pathname.replace(/\/+$/, '').toLowerCase();
        const pathSegment = normalizedPath.split('/').pop() ?? '';
        const fileName = pathSegment || 'index';
        return fileAliasMap[fileName];
    }
    catch (error) {
        return undefined;
    }
};
const activateNavigation = () => {
    const links = document.querySelectorAll('.main-nav .nav-link');
    links.forEach(link => {
        const target = resolveHrefToPage(link.getAttribute('href'));
        if (target && target === currentPage) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
        else {
            link.classList.remove('is-active');
            link.removeAttribute('aria-current');
        }
    });
};
const initMobileNavigation = () => {
    const nav = document.querySelector('.main-nav');
    const toggle = document.querySelector('.nav-toggle');
    const backdrop = document.querySelector('.nav-backdrop');
    if (!nav || !toggle || !backdrop) {
        return;
    }
    const closeMenu = () => {
        nav.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
    };
    const openMenu = () => {
        nav.classList.add('is-open');
        backdrop.classList.add('is-visible');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('nav-open');
    };
    toggle.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
            closeMenu();
            return;
        }
        openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('click', event => {
        if (!nav.classList.contains('is-open')) {
            return;
        }
        const target = event.target;
        if (!(target instanceof Node)) {
            return;
        }
        if (nav.contains(target) || toggle.contains(target)) {
            return;
        }
        closeMenu();
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 720) {
            closeMenu();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
};
const localeFormatFor = (locale) => localeFormatMap[locale];
const formatDate = (isoString) => {
    try {
        const formatter = new Intl.DateTimeFormat(localeFormatFor(currentLocale), {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        return formatter.format(new Date(isoString));
    }
    catch (error) {
        return isoString;
    }
};
const translate = (key, vars) => {
    const localeTable = translations[currentLocale] ?? {};
    const enTable = translations.en ?? {};
    const huTable = translations.hu ?? {};
    const template = localeTable[key] ?? enTable[key] ?? huTable[key] ?? key;
    if (!vars) {
        return template;
    }
    return Object.entries(vars).reduce((acc, [token, value]) => acc.split(`{{${token}}}`).join(value), template);
};
const applyTranslations = () => {
    const textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(node => {
        const key = node.dataset.i18n;
        if (key) {
            node.textContent = translate(key);
        }
    });
    const placeholderNodes = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderNodes.forEach(node => {
        const key = node.getAttribute('data-i18n-placeholder');
        if (key) {
            node.placeholder = translate(key);
        }
    });
};
const updateLanguageButtons = () => {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        const lang = button.dataset.lang;
        const isActive = lang === currentLocale;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
};
const releaseNavPreloadGuard = () => {
    document.documentElement.classList.remove('locale-en-loading-nav');
};
const persistLocale = (locale) => {
    try {
        window.localStorage.setItem(localeStorageKey, locale);
    }
    catch (error) {
        // Swallow storage errors silently.
    }
};
const detectInitialLocale = () => {
    try {
        const stored = window.localStorage.getItem(localeStorageKey);
        if (stored === 'hu' || stored === 'en') {
            return stored;
        }
    }
    catch (error) {
        // ignore storage access issues
    }
    const docLang = document.documentElement.lang;
    if (docLang === 'en') {
        return 'en';
    }
    return 'hu';
};
let currentLocale = detectInitialLocale();
const renderGoals = () => {
    const container = document.querySelector('[data-goal-list]');
    renderCollection(container, goals, goal => {
        const card = createElement('article', 'card goal-card');
        card.appendChild(createElement('span', 'badge', translate(goal.focus)));
        card.appendChild(createElement('h3', '', translate(goal.title)));
        card.appendChild(createElement('p', '', translate(goal.detail)));
        const progress = createElement('div', 'progress');
        const bar = createElement('div', 'progress-bar');
        bar.style.width = `${clampProgress(goal.progress)}%`;
        progress.appendChild(bar);
        card.appendChild(progress);
        return card;
    });
};
const renderMetrics = () => {
    const container = document.querySelector('[data-metric-board]');
    renderCollection(container, metrics, metric => {
        const stat = createElement('article', 'stat-card');
        stat.appendChild(createElement('p', 'stat-label', translate(metric.label)));
        stat.appendChild(createElement('p', 'stat-value', metric.value));
        stat.appendChild(createElement('p', 'stat-note', translate(metric.note)));
        return stat;
    });
};
const renderNews = () => {
    const list = document.querySelector('[data-news-feed]');
    const sorted = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    renderCollection(list, sorted, item => {
        const card = createElement('li', 'news-card');
        const meta = createElement('div', 'news-meta');
        meta.appendChild(createElement('span', 'news-date', formatDate(item.date)));
        item.tags.forEach(tag => meta.appendChild(createElement('span', 'badge', translate(tag))));
        card.appendChild(meta);
        card.appendChild(createElement('h3', '', translate(item.title)));
        card.appendChild(createElement('p', '', translate(item.summary)));
        if (item.link) {
            const link = createElement('a', 'btn ghost', translate('common.readMore'));
            link.setAttribute('href', item.link);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            card.appendChild(link);
        }
        return card;
    });
};
const renderTimeline = () => {
    const list = document.querySelector('[data-timeline]');
    renderCollection(list, timelineEntries, entry => {
        const item = createElement('li', 'timeline-item');
        item.appendChild(createElement('span', 'timeline-year', entry.year));
        const content = createElement('div', 'timeline-content');
        content.appendChild(createElement('h3', '', translate(entry.title)));
        content.appendChild(createElement('p', '', translate(entry.description)));
        item.appendChild(content);
        return item;
    });
};
const renderTeamProfiles = () => {
    const grid = document.querySelector('[data-team-profiles]');
    renderCollection(grid, teamProfiles, profile => {
        const card = createElement('article', 'card team-card');
        card.appendChild(createElement('h3', '', translate(profile.name)));
        card.appendChild(createElement('p', 'team-role', translate(profile.title)));
        card.appendChild(createElement('p', '', translate(profile.bio)));
        const specialtyList = createElement('div', 'tag-rail');
        profile.specialties.forEach(spec => specialtyList.appendChild(createElement('span', 'badge', translate(spec))));
        card.appendChild(specialtyList);
        card.appendChild(createElement('p', 'team-highlight', translate(profile.highlight)));
        return card;
    });
};
const renderContacts = () => {
    const grid = document.querySelector('[data-contact-list]');
    renderCollection(grid, contactProfiles, profile => {
        const card = createElement('article', 'card contact-card');
        card.appendChild(createElement('h3', '', translate(profile.name)));
        card.appendChild(createElement('p', 'contact-role', translate(profile.role)));
        card.appendChild(createElement('p', 'contact-focus', translate(profile.focus)));
        profile.channels.forEach(channel => {
            const block = createElement('div', 'contact-channel');
            block.appendChild(createElement('p', 'contact-channel-label', translate(channel.label)));
            const link = createElement('a', 'contact-link', channel.value);
            link.setAttribute('href', channel.href);
            if (channel.href.startsWith('http')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
            block.appendChild(link);
            block.appendChild(createElement('p', 'contact-hint', translate(channel.hint)));
            card.appendChild(block);
        });
        return card;
    });
};
const renderScheduleCard = () => {
    const host = document.querySelector('[data-schedule-card]');
    if (!host) {
        return;
    }
    host.innerHTML = '';
    const card = createElement('article', 'card schedule-card');
    const list = createElement('div', 'schedule-list');
    studioSchedule.windows.forEach(window => {
        const item = createElement('div', 'schedule-row');
        item.appendChild(createElement('span', 'schedule-label', translate(window.label)));
        item.appendChild(createElement('p', 'schedule-detail', translate(window.detail)));
        list.appendChild(item);
    });
    card.appendChild(list);
    card.appendChild(createElement('p', 'schedule-note', translate(studioSchedule.note)));
    host.appendChild(card);
};
const renderDynamicSections = () => {
    renderGoals();
    renderMetrics();
    renderNews();
    renderTimeline();
    renderTeamProfiles();
    renderContacts();
    renderScheduleCard();
};
const wireNewsletterForm = () => {
    const form = document.querySelector('[data-newsletter]');
    if (!form) {
        return;
    }
    const input = form.querySelector('input[type="email"]');
    const hint = form.parentElement?.querySelector('.form-hint');
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!input) {
            return;
        }
        if (!input.value.trim() || !input.checkValidity()) {
            input.reportValidity();
            return;
        }
        if (hint) {
            hint.textContent = translate('news.newsletter.success', { email: input.value.trim() });
            hint.classList.add('success');
        }
        form.reset();
    });
};
const updateYear = () => {
    const yearEl = document.querySelector('[data-current-year]');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
};
const setLocale = (locale) => {
    if (locale === currentLocale) {
        return;
    }
    currentLocale = locale;
    document.documentElement.lang = locale;
    persistLocale(locale);
    updateLanguageButtons();
    applyTranslations();
    releaseNavPreloadGuard();
    renderDynamicSections();
};
const initLanguageSwitcher = () => {
    document.documentElement.lang = currentLocale;
    updateLanguageButtons();
    applyTranslations();
    releaseNavPreloadGuard();
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            if (lang === 'hu' || lang === 'en') {
                setLocale(lang);
            }
        });
    });
};
const init = () => {
    activateNavigation();
    initMobileNavigation();
    initLanguageSwitcher();
    renderDynamicSections();
    wireNewsletterForm();
    updateYear();
};
const bootstrap = async () => {
    try {
        await loadTranslations();
    }
    catch (error) {
        console.error('Unable to load translations', error);
    }
    init();
};
void bootstrap();
