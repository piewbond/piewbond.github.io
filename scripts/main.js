"use strict";
const fileAliasMap = {
    '': 'home',
    'index': 'home',
    'index.html': 'home',
    'about': 'about',
    'aboutme': 'about',
    'aboutme.html': 'about',
    'news': 'news',
    'news.html': 'news',
    'reachout': 'contact',
    'reachout.html': 'contact',
    'contact': 'contact',
    'contact.html': 'contact',
    'elerhetosegek': 'contact',
    'elerhetosegek.html': 'contact'
};
const translations = {
    hu: {
        'common.noscript': 'Ez az oldal TypeScript alapú funkciókat használ, ezért kapcsold be a JavaScriptet a teljes élményhez.',
        'common.rights': 'Minden jog fenntartva.',
        'common.readMore': 'Részletek',
        'nav.home': 'Kezdőlap',
        'nav.about': 'Rólunk',
        'nav.news': 'Hírek',
        'nav.contact': 'Kapcsolat',
        'home.hero.eyebrow': 'Független játékstúdió',
        'home.hero.title': 'Neon noir világok kézzel fújva',
        'home.hero.lead': 'Atmoszférikus lopakodós kalandokat készítünk, ahol az üveg, a fény és a ritmus narratívává válik.',
        'home.hero.primary': 'Roadmap & devlog',
        'home.hero.secondary': 'Találkozz a csapattal',
        'home.projects.heading': 'Aktuális buildjeink',
        'home.projects.subheading': 'A TypeScript tölti fel a sprint alatt lévő projektek részleteit.',
        'home.stats.heading': 'Stúdió pulzus',
        'home.stats.subheading': 'Mennyi pálya, asset és együttműködés készül éppen.',
        'about.hero.eyebrow': 'Stúdió portré',
        'about.hero.title': 'BlackCat Glass csapat',
        'about.hero.lead': 'Lopakodós játéksztorikat, hangdizájnt és vizuális identitást két alkotó hoz életre: Pónya Bonifác és Mercz Kristóf.',
        'about.mission.heading': 'Manifesztó',
        'about.mission.subheading': 'A játékainkban a fény dönt, az üveg törik, és a zene vezeti a játékost.',
        'about.mission.body1': 'A BlackCat Glass atmoszférikus lopakodós játékokat fejleszt, ahol a pályák egy-egy installációhoz hasonlóan vannak komponálva.',
        'about.mission.body2': 'Bonifác felel a hangért és rendezésért, Kristóf az üvegtextúrákért – a TypeScript réteg meséli el, min dolgozunk éppen.',
        'about.team.heading': 'Rólunk kettőnk szemszögéből',
        'about.team.subheading': 'A TypeScript tölti fel a profilkártyákat.',
        'about.timeline.heading': 'Mérföldkövek',
        'about.timeline.subheading': 'Az idővonalat TypeScript generálja a kulcsprojektek alapján.',
        'about.timeline.placeholder.title': 'BlackCat Glass indul',
        'about.timeline.placeholder.body': 'Ha nem fut a TypeScript, ez a fallback marad.',
        'about.quote': '„A játékaink üvegből épülnek, de a történetek élő zenére lélegeznek.”',
        'about.quote.author': 'Bonifác & Kristóf',
        'news.hero.eyebrow': 'Devlog',
        'news.hero.title': 'Hírek és események',
        'news.hero.lead': 'A TypeScript gondoskodik róla, hogy mindig a legfrissebb bejelentéseket lássad.',
        'news.feed.heading': 'Aktuális hírek',
        'news.feed.subheading': 'A kártyákat TypeScript generálja a legújabb milestone-ok alapján.',
        'news.newsletter.heading': 'Hírlevél',
        'news.newsletter.subheading': 'Heti devlog összefoglaló, prototípek és soundtrack részletek.',
        'news.newsletter.label': 'Email',
        'news.newsletter.placeholder': 'email@blackcatglass.com',
        'news.newsletter.button': 'Feliratkozom',
        'news.newsletter.hint': 'A beküldés most még demó: TypeScript csak validál, nem küld adatot.',
        'news.newsletter.success': 'Köszi! Hamarosan megérkezik az első összefoglaló ide: {{email}}.',
        'contact.eyebrow': 'Kapcsolat',
        'contact.title': 'Lépj velünk kapcsolatba',
        'contact.lede': 'Ha szeretnél együtt dolgozni velünk, vagy kérdésed van a projektek kapcsán, írj bátran. BlackCat Glass egy indie stúdió – az őszinte beszélgetésekből születnek a legjobb játékok.',
        'contact.sectionEyebrow': 'Csapat & Elérhetőség',
        'contact.sectionTitle': 'Két alkotó, két nézőpont – egy stúdió',
        'contact.sectionIntro': 'Minden csatornán személyesen válaszolunk. Emailben kapsz mélyebb válaszokat, Instagramon pedig láthatod a friss fejlesztési bejegyzéseket.',
        'contact.scheduleEyebrow': 'Nyitott órák',
        'contact.scheduleTitle': 'Alkotási ritmusunk',
        'contact.scheduleIntro': 'BlackCat Glass organikusan működik – a beszélgetések akkor a leghatékonyabbak, ha tudod, mikor merre jár a figyelmünk.',
        'contact.careersEyebrow': 'Csatlakoznál?',
        'contact.careersTitle': 'Mutasd meg mire képes a képzeleted',
        'contact.careersIntro': 'Indie stúdióként folyamatosan figyeljük az új tehetségeket. Ha úgy érzed, illenek rád a stúdió értékei, írj nekünk egy rövid bemutatkozót az e-mail címünkre „BlackCat Collaborate” tárggyal.',
        'contact.careersCtaTitle': 'BlackCat Glass open call',
        'contact.careersCtaBody': 'Küldj portfóliót, mini demót vagy vázlatot. A lényeg, hogy benne legyen a saját mitológiád.',
        'contact.careersCtaButton': 'Írok a stúdiónak',
        'footer.copy': '© BlackCat Glass – Indie játéksütő stúdió Budapestről.',
        'footer.instagram': 'Instagram',
        'footer.email': 'hello@blackcatglass.studio'
    },
    en: {
        'common.noscript': 'This site relies on TypeScript-powered features, so please enable JavaScript for the full experience.',
        'common.rights': 'All rights reserved.',
        'common.readMore': 'Read more',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'home.hero.eyebrow': 'Independent game studio',
        'home.hero.title': 'Neon noir worlds, blown like glass',
        'home.hero.lead': 'We craft atmospheric stealth adventures where glass, light, and rhythm become narrative.',
        'home.hero.primary': 'Roadmap & devlog',
        'home.hero.secondary': 'Meet the team',
        'home.projects.heading': 'Current builds',
        'home.projects.subheading': 'TypeScript fills in the sprint data for every project.',
        'home.stats.heading': 'Studio pulse',
        'home.stats.subheading': 'Tracking levels, assets, and collabs in progress.',
        'about.hero.eyebrow': 'Studio portrait',
        'about.hero.title': 'The BlackCat Glass team',
        'about.hero.lead': 'Two creators shape stealth stories, sound design, and visual identity: Bonifác Pónya and Kristóf Mercz.',
        'about.mission.heading': 'Manifesto',
        'about.mission.subheading': 'In our games light makes the calls, glass breaks, and music guides the player.',
        'about.mission.body1': 'BlackCat Glass builds atmospheric stealth games where every level feels like an installation.',
        'about.mission.body2': 'Bonifác handles direction and sound, Kristóf sculpts the glass textures – the TypeScript layer narrates what we are building.',
        'about.team.heading': 'Two viewpoints, one studio',
        'about.team.subheading': 'Team cards are rendered by TypeScript.',
        'about.timeline.heading': 'Milestones',
        'about.timeline.subheading': 'The timeline is generated from our key projects.',
        'about.timeline.placeholder.title': 'BlackCat Glass launches',
        'about.timeline.placeholder.body': 'If TypeScript is offline, this fallback remains.',
        'about.quote': '“Our games are built from glass, yet the stories breathe to living music.”',
        'about.quote.author': 'Bonifác & Kristóf',
        'news.hero.eyebrow': 'Devlog',
        'news.hero.title': 'News & events',
        'news.hero.lead': 'TypeScript keeps the freshest announcements in front of you.',
        'news.feed.heading': 'Latest news',
        'news.feed.subheading': 'Cards are generated from the newest milestones.',
        'news.newsletter.heading': 'Newsletter',
        'news.newsletter.subheading': 'Weekly devlog recaps, prototypes, and soundtrack cues.',
        'news.newsletter.label': 'Email',
        'news.newsletter.placeholder': 'email@blackcatglass.com',
        'news.newsletter.button': 'Subscribe',
        'news.newsletter.hint': 'Submitting is still a demo: TypeScript validates, but no data is sent.',
        'news.newsletter.success': 'Thanks! The first recap will land in your inbox soon: {{email}}.',
        'contact.eyebrow': 'Contact',
        'contact.title': 'Reach the duo',
        'contact.lede': 'Partner with us, ask about the builds, or drop a hello. Honest conversations forge the best indie titles.',
        'contact.sectionEyebrow': 'Team & Contact',
        'contact.sectionTitle': 'Two creators, two channels – one studio',
        'contact.sectionIntro': 'We answer every channel personally. Email for deep dives, Instagram for live dev stories.',
        'contact.scheduleEyebrow': 'Open windows',
        'contact.scheduleTitle': 'Our creative rhythm',
        'contact.scheduleIntro': 'BlackCat Glass runs organically – reaching out is easiest when you see our weekly cadence.',
        'contact.careersEyebrow': 'Want to collaborate?',
        'contact.careersTitle': 'Show us where your imagination runs',
        'contact.careersIntro': 'We keep an eye on new talent. If our studio values resonate, send a short introduction titled “BlackCat Collaborate”.',
        'contact.careersCtaTitle': 'BlackCat Glass open call',
        'contact.careersCtaBody': 'Send a portfolio, mini demo, or sketch – we want to feel your personal mythology.',
        'contact.careersCtaButton': 'Write the studio',
        'footer.copy': '© BlackCat Glass – Indie game studio from Budapest.',
        'footer.instagram': 'Instagram',
        'footer.email': 'hello@blackcatglass.studio'
    }
};
const localeStorageKey = 'bcg-locale';
const localeFormatMap = {
    hu: 'hu-HU',
    en: 'en-GB'
};
const goals = [
    {
        title: { hu: 'Mirror Bloom vertical slice', en: 'Mirror Bloom vertical slice' },
        detail: {
            hu: 'Stealth pályák neon üveg labirintusokkal és dinamikus fénytöréssel.',
            en: 'Stealth arenas filled with neon glass labyrinths and real-time refractions.'
        },
        progress: 72,
        focus: { hu: 'Immersive stealth', en: 'Immersive stealth' }
    },
    {
        title: { hu: 'Glass Saints soundtrack', en: 'Glass Saints soundtrack' },
        detail: {
            hu: 'Kristóf textúráihoz Bonifác moduláris ambientet komponál élő felvételekkel.',
            en: 'Bonifác scores modular ambient suites for Kristóf’s tactile textures.'
        },
        progress: 48,
        focus: { hu: 'Audiovizuális narratíva', en: 'Audio-visual narrative' }
    },
    {
        title: { hu: 'Cathedral of Shards R&D', en: 'Cathedral of Shards R&D' },
        detail: {
            hu: 'Kísérleti AI rutin, ami a fény és zaj alapján vált stratégiát a pályákon.',
            en: 'Experimental AI routine that pivots tactics based on light and noise levels.'
        },
        progress: 31,
        focus: { hu: 'K+F', en: 'R&D' }
    }
];
const metrics = [
    {
        label: { hu: 'Aktív build', en: 'Active builds' },
        value: '3',
        note: { hu: 'Mirror Bloom · Glass Saints · Cathedral', en: 'Mirror Bloom · Glass Saints · Cathedral' }
    },
    {
        label: { hu: 'Asset drop', en: 'Asset drops' },
        value: '120+',
        note: { hu: 'Heti ArtStation bejegyzések', en: 'Weekly ArtStation drops' }
    },
    {
        label: { hu: 'Közösségi playtest', en: 'Community playtests' },
        value: '5',
        note: { hu: 'Discord core csapat', en: 'Discord core squad' }
    }
];
const newsItems = [
    {
        date: '2026-02-18',
        title: {
            hu: 'Mirror Bloom: neon lopakodó build #12',
            en: 'Mirror Bloom: neon stealth build #12'
        },
        summary: {
            hu: 'Új fénytörés shader és „listen-to-glass” AI viselkedés került a vert slice-ba.',
            en: 'New refraction shader plus a “listen-to-glass” AI routine shipped inside the vertical slice.'
        },
        tags: [
            { hu: 'Devlog', en: 'Devlog' },
            { hu: 'Build', en: 'Build' }
        ],
        link: 'https://blackcatglass.studio/devlog/mirror-bloom-12'
    },
    {
        date: '2026-02-05',
        title: {
            hu: 'Glass Saints soundtrack session',
            en: 'Glass Saints soundtrack session'
        },
        summary: {
            hu: 'Bonifác modular synth loopjai összeértek Kristóf üvegrezgéseivel – új OST preview érkezik.',
            en: 'Bonifác’s modular loops now breathe with Kristóf’s glass resonances – OST preview is coming.'
        },
        tags: [
            { hu: 'Audio', en: 'Audio' },
            { hu: 'Studio', en: 'Studio' }
        ]
    },
    {
        date: '2026-01-22',
        title: {
            hu: 'Mercz Kristóf concept drop',
            en: 'Mercz Kristóf concept drop'
        },
        summary: {
            hu: 'Kristóf új karakterlapjai bemutatják a Glass Saints antagonista frakcióját.',
            en: 'Kristóf’s latest boards introduce the antagonist faction for Glass Saints.'
        },
        tags: [
            { hu: 'Art', en: 'Art' },
            { hu: 'Concept', en: 'Concept' }
        ]
    }
];
const timelineEntries = [
    {
        year: '2026',
        title: {
            hu: 'Mirror Bloom vertical slice',
            en: 'Mirror Bloom vertical slice'
        },
        description: {
            hu: 'A stealth loop és a fényre reagáló AI elérte a showcase szintet.',
            en: 'Stealth loop plus light-reactive AI reached showcase quality.'
        }
    },
    {
        year: '2025',
        title: {
            hu: 'BlackCat Glass rebrand',
            en: 'BlackCat Glass rebrand'
        },
        description: {
            hu: 'Bonifác és Kristóf egyesítette stúdióit, megszületett a neon noir identitás.',
            en: 'Bonifác and Kristóf merged their studios and shaped the neon noir identity.'
        }
    },
    {
        year: '2024',
        title: {
            hu: 'Első lopakodó prototípus',
            en: 'First stealth prototype'
        },
        description: {
            hu: 'Üveg shadereken kísérleteztünk, amelyből született a Mirror Bloom magja.',
            en: 'Glass shaders experiments that seeded the core of Mirror Bloom.'
        }
    }
];
const teamProfiles = [
    {
        name: 'Pónya Bonifác',
        title: {
            hu: 'Creative director & audio alkimista',
            en: 'Creative director & audio alchemist'
        },
        bio: {
            hu: 'Bonifác építi a lopakodó ritmusokat és moduláris soundtrackeket, ahol a zaj is mechanika.',
            en: 'Bonifác designs stealth rhythms and modular soundtracks where noise itself becomes a mechanic.'
        },
        specialties: [
            { hu: 'Procedurális vizuál', en: 'Procedural visuals' },
            { hu: 'Moduláris ambient', en: 'Modular ambient' },
            { hu: 'Narratív UX', en: 'Narrative UX' }
        ],
        highlight: {
            hu: 'Ő felügyeli a Mirror Bloom vert slice tempóját és az audio-driven AI-t.',
            en: 'Leads the Mirror Bloom vertical slice pacing plus the audio-driven AI.'
        }
    },
    {
        name: 'Mercz Kristóf',
        title: {
            hu: 'Lead artist & glass designer',
            en: 'Lead artist & glass designer'
        },
        bio: {
            hu: 'Kristóf kézzel festett textúrákból és üveg szimulációból épít neon noir tereket.',
            en: 'Kristóf sculpts neon noir spaces from hand-painted textures and glass simulation.'
        },
        specialties: [
            { hu: 'Üveg shader kutatás', en: 'Glass shader research' },
            { hu: 'Karakter koncepció', en: 'Character concept' },
            { hu: 'Devlog vizuál', en: 'Devlog visuals' }
        ],
        highlight: {
            hu: 'Ő felel a Glass Saints antagonista frakciójának vizuális mitológiájáért.',
            en: 'Shapes the visual mythology of the Glass Saints antagonist faction.'
        }
    }
];
const contactProfiles = [
    {
        name: 'Pónya Bonifác',
        role: {
            hu: 'Creative director',
            en: 'Creative director'
        },
        focus: {
            hu: 'Partnerség, soundtrack, produkció',
            en: 'Partnerships, soundtrack, production'
        },
        channels: [
            {
                label: { hu: 'Email', en: 'Email' },
                value: 'hello@blackcatglass.studio',
                href: 'mailto:hello@blackcatglass.studio',
                hint: { hu: '24 órán belül válaszol', en: 'Replies within 24 hours' }
            },
            {
                label: { hu: 'Instagram', en: 'Instagram' },
                value: '@bonifac.codeslight',
                href: 'https://instagram.com/bonifac.codeslight',
                hint: { hu: 'Live dev sztorik és soundtrack sneak peek', en: 'Live dev stories & soundtrack sneak peeks' }
            }
        ]
    },
    {
        name: 'Mercz Kristóf',
        role: {
            hu: 'Lead artist',
            en: 'Lead artist'
        },
        focus: {
            hu: 'Koncept art, vizuális együttműködés',
            en: 'Concept art, visual collaborations'
        },
        channels: [
            {
                label: { hu: 'Email', en: 'Email' },
                value: 'kristof@blackcatglass.studio',
                href: 'mailto:kristof@blackcatglass.studio',
                hint: { hu: 'Moodboardok, textúrák, installációk', en: 'Moodboards, textures, installations' }
            },
            {
                label: { hu: 'Instagram', en: 'Instagram' },
                value: '@mercz.glass',
                href: 'https://instagram.com/mercz.glass',
                hint: { hu: 'Naponta friss concept drop', en: 'Daily concept drops' }
            }
        ]
    }
];
const studioSchedule = {
    windows: [
        {
            label: { hu: 'Hétfő – Szerda', en: 'Mon – Wed' },
            detail: {
                hu: 'Mirror Bloom lopakodó pályák, AI tuning és refraction QA.',
                en: 'Mirror Bloom stealth levels, AI tuning, and refraction QA.'
            }
        },
        {
            label: { hu: 'Csütörtök', en: 'Thursday' },
            detail: {
                hu: 'Glass Saints art review + soundtrack mix session.',
                en: 'Glass Saints art review + soundtrack mix session.'
            }
        },
        {
            label: { hu: 'Péntek', en: 'Friday' },
            detail: {
                hu: 'Közösségi build, devlog felvétel és Instagram Q&A.',
                en: 'Community build, devlog recording, and Instagram Q&A.'
            }
        }
    ],
    note: {
        hu: 'Szombat-vasárnap csendes prototipelés – ilyenkor a Discord a legjobb csatorna.',
        en: 'Weekends are for quiet prototyping – Discord is best during those hours.'
    }
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
        const fileName = url.pathname.split('/').pop()?.toLowerCase() ?? '';
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
const getLocalizedText = (text, locale = currentLocale) => text[locale] ?? text.hu;
const translate = (key, vars) => {
    const table = translations[currentLocale] ?? translations.hu;
    const template = table[key] ?? translations.hu[key] ?? key;
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
        card.appendChild(createElement('span', 'badge', getLocalizedText(goal.focus)));
        card.appendChild(createElement('h3', '', getLocalizedText(goal.title)));
        card.appendChild(createElement('p', '', getLocalizedText(goal.detail)));
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
        stat.appendChild(createElement('p', 'stat-label', getLocalizedText(metric.label)));
        stat.appendChild(createElement('p', 'stat-value', metric.value));
        stat.appendChild(createElement('p', 'stat-note', getLocalizedText(metric.note)));
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
        item.tags.forEach(tag => meta.appendChild(createElement('span', 'badge', getLocalizedText(tag))));
        card.appendChild(meta);
        card.appendChild(createElement('h3', '', getLocalizedText(item.title)));
        card.appendChild(createElement('p', '', getLocalizedText(item.summary)));
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
        content.appendChild(createElement('h3', '', getLocalizedText(entry.title)));
        content.appendChild(createElement('p', '', getLocalizedText(entry.description)));
        item.appendChild(content);
        return item;
    });
};
const renderTeamProfiles = () => {
    const grid = document.querySelector('[data-team-profiles]');
    renderCollection(grid, teamProfiles, profile => {
        const card = createElement('article', 'card team-card');
        card.appendChild(createElement('h3', '', profile.name));
        card.appendChild(createElement('p', 'team-role', getLocalizedText(profile.title)));
        card.appendChild(createElement('p', '', getLocalizedText(profile.bio)));
        const specialtyList = createElement('div', 'tag-rail');
        profile.specialties.forEach(spec => specialtyList.appendChild(createElement('span', 'badge', getLocalizedText(spec))));
        card.appendChild(specialtyList);
        card.appendChild(createElement('p', 'team-highlight', getLocalizedText(profile.highlight)));
        return card;
    });
};
const renderContacts = () => {
    const grid = document.querySelector('[data-contact-list]');
    renderCollection(grid, contactProfiles, profile => {
        const card = createElement('article', 'card contact-card');
        card.appendChild(createElement('h3', '', profile.name));
        card.appendChild(createElement('p', 'contact-role', getLocalizedText(profile.role)));
        card.appendChild(createElement('p', 'contact-focus', getLocalizedText(profile.focus)));
        profile.channels.forEach(channel => {
            const block = createElement('div', 'contact-channel');
            block.appendChild(createElement('p', 'contact-channel-label', getLocalizedText(channel.label)));
            const link = createElement('a', 'contact-link', channel.value);
            link.setAttribute('href', channel.href);
            if (channel.href.startsWith('http')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
            block.appendChild(link);
            block.appendChild(createElement('p', 'contact-hint', getLocalizedText(channel.hint)));
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
    const list = createElement('ul', 'schedule-list');
    studioSchedule.windows.forEach(window => {
        const item = createElement('li', 'schedule-row');
        item.appendChild(createElement('strong', '', getLocalizedText(window.label)));
        item.appendChild(createElement('span', '', getLocalizedText(window.detail)));
        list.appendChild(item);
    });
    card.appendChild(list);
    card.appendChild(createElement('p', 'schedule-note', getLocalizedText(studioSchedule.note)));
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
    renderDynamicSections();
};
const initLanguageSwitcher = () => {
    document.documentElement.lang = currentLocale;
    updateLanguageButtons();
    applyTranslations();
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
    initLanguageSwitcher();
    renderDynamicSections();
    wireNewsletterForm();
    updateYear();
};
init();
