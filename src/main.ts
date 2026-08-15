type PageKey = 'home' | 'about' | 'news' | 'contact';

type Locale = 'hu' | 'en';

type Renderer<T> = (item: T) => HTMLElement;

interface GoalItem {
  title: string; 
  detail: string; 
  focus: string;
  link: string;
}

interface MetricItem {
  label: string; 
  value: string;
  note: string; 
}

interface NewsItem {
  status: string;
  title: string; 
  summary: string; 
  tags: string[];
  link?: string;
}

interface TimelineItem {
  year: string;
  title: string; 
  description: string; 
}

interface ProfileCard {
  name: string; 
  title: string; 
  bio: string; 
  specialties: string[];
  highlight: string;
  imageSrc?: string;
  initials: string;
}

interface ContactChannel {
  label: string; 
  value: string;
  href: string;
  hint: string; 
}

interface ContactProfile {
  name: string; 
  role: string; 
  focus: string; 
  channels: ContactChannel[];
}

interface ScheduleWindow {
  label: string; 
  detail: string; 
}

interface ScheduleInfo {
  windows: ScheduleWindow[];
  note: string; 
}

const fileAliasMap: Record<string, PageKey> = {
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

type TranslationTable = Record<string, string>;

type TranslationMap = Record<Locale, TranslationTable>;

const translationSources: Record<Locale, string> = {
  hu: '/src/translations/HU_hun.json',
  en: '/src/translations/EN_eng.json'
};

let translations: TranslationMap = {
  hu: {},
  en: {}
};

const loadTranslations = async (): Promise<void> => {
  const entries = await Promise.all(
    (Object.entries(translationSources) as [Locale, string][]).map(async ([locale, path]) => {
      const cacheBusted = `${path}?t=${Date.now()}`;
      try {
        const response = await fetch(cacheBusted);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${cacheBusted}: ${response.status}`);
        }
        const table = (await response.json()) as TranslationTable;
        console.info(`Loaded translations for ${locale}`, Object.keys(table).length);
        return [locale, table] as const;
      } catch (error) {
        console.error('Translation load failed', error);
        return [locale, translations[locale]] as const;
      }
    })
  );

  const nextTranslations: TranslationMap = { hu: {}, en: {} };
  entries.forEach(([locale, table]) => {
    nextTranslations[locale] = table;
  });
  translations = nextTranslations;
};

const localeStorageKey = 'piewbond-locale';
const goals: GoalItem[] = [
  {
    title: 'goals.0.title',
    detail: 'goals.0.detail',
    focus: 'goals.0.focus',
    link: 'https://github.com/piewbond/project-kiddo'
  },
  {
    title: 'goals.1.title',
    detail: 'goals.1.detail',
    focus: 'goals.1.focus',
    link: 'https://github.com/piewbond/cyberpunk-shootout'
  }
];

const metrics: MetricItem[] = [
  { label: 'metrics.0.label', value: '2', note: 'metrics.0.note' },
  { label: 'metrics.1.label', value: 'Kiddo', note: 'metrics.1.note' },
  { label: 'metrics.2.label', value: 'Soon', note: 'metrics.2.note' }
];

const newsItems: NewsItem[] = [
  {
    status: 'news.items.0.status',
    title: 'news.items.0.title',
    summary: 'news.items.0.summary',
    tags: ['news.items.0.tags.0', 'news.items.0.tags.1'],
    link: 'https://github.com/piewbond/project-kiddo'
  },
  {
    status: 'news.items.1.status',
    title: 'news.items.1.title',
    summary: 'news.items.1.summary',
    tags: ['news.items.1.tags.0', 'news.items.1.tags.1'],
    link: 'https://github.com/piewbond/cyberpunk-shootout'
  },
];

const timelineEntries: TimelineItem[] = [
  { year: 'Now', title: 'timeline.0.title', description: 'timeline.0.description' },
  { year: 'Next', title: 'timeline.1.title', description: 'timeline.1.description' },
  { year: 'Later', title: 'timeline.2.title', description: 'timeline.2.description' }
];

const profileCards: ProfileCard[] = [
  {
    name: 'profile.0.name',
    title: 'profile.0.title',
    bio: 'profile.0.bio',
    specialties: ['profile.0.spec.0', 'profile.0.spec.1', 'profile.0.spec.2'],
    highlight: 'profile.0.highlight',
    imageSrc: '/me.png',
    initials: 'BP'
  },
  {
    name: 'profile.1.name',
    title: 'profile.1.title',
    bio: 'profile.1.bio',
    specialties: ['profile.1.spec.0', 'profile.1.spec.1', 'profile.1.spec.2'],
    highlight: 'profile.1.highlight',
    initials: 'KM'
  }
];

const contactProfiles: ContactProfile[] = [
  {
    name: 'contact.0.name',
    role: 'contact.0.role',
    focus: 'contact.0.focus',
    channels: [
      { label: 'contact.0.channels.0.label', value: 'github.com/piewbond/project-kiddo', href: 'https://github.com/piewbond/project-kiddo', hint: 'contact.0.channels.0.hint' },
      { label: 'contact.0.channels.1.label', value: 'github.com/piewbond/cyberpunk-shootout', href: 'https://github.com/piewbond/cyberpunk-shootout', hint: 'contact.0.channels.1.hint' }
    ]
  }
];

const portfolioContext: ScheduleInfo = {
  windows: [
    { label: 'schedule.windows.0.label', detail: 'schedule.windows.0.detail' },
    { label: 'schedule.windows.1.label', detail: 'schedule.windows.1.detail' },
    { label: 'schedule.windows.2.label', detail: 'schedule.windows.2.detail' }
  ],
  note: 'schedule.note'
};

const createElement = <K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

const renderCollection = <T>(root: Element | null, items: T[], template: Renderer<T>): void => {
  if (!root) {
    return;
  }
  const fragment = document.createDocumentFragment();
  items.forEach(item => fragment.appendChild(template(item)));
  root.innerHTML = '';
  root.appendChild(fragment);
};

const detectPage = (): PageKey => {
  const fromDataset = document.body.dataset.page as PageKey | undefined;
  if (fromDataset) {
    return fromDataset;
  }
  const fileName = window.location.pathname.split('/').pop()?.toLowerCase() ?? 'index.html';
  return fileAliasMap[fileName] ?? 'home';
};

const currentPage = detectPage();

const resolveHrefToPage = (href: string | null): PageKey | undefined => {
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
  } catch (error) {
    return undefined;
  }
};

const activateNavigation = (): void => {
  const links = document.querySelectorAll<HTMLAnchorElement>('.main-nav .nav-link');
  links.forEach(link => {
    const target = resolveHrefToPage(link.getAttribute('href'));
    if (target && target === currentPage) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
};

const initMobileNavigation = (): void => {
  const nav = document.querySelector<HTMLElement>('.main-nav');
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const backdrop = document.querySelector<HTMLButtonElement>('.nav-backdrop');

  if (!nav || !toggle || !backdrop) {
    return;
  }

  const closeMenu = (): void => {
    nav.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  const openMenu = (): void => {
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

  nav.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
};

const translate = (key: string, vars?: Record<string, string>): string => {
  const localeTable = translations[currentLocale] ?? {};
  const enTable = translations.en ?? {};
  const huTable = translations.hu ?? {};
  const template = localeTable[key] ?? enTable[key] ?? huTable[key] ?? key;
  if (!vars) {
    return template;
  }
  return Object.entries(vars).reduce((acc, [token, value]) => acc.split(`{{${token}}}`).join(value), template);
};

const applyTranslations = (): void => {
  const textNodes = document.querySelectorAll<HTMLElement>('[data-i18n]');
  textNodes.forEach(node => {
    const key = node.dataset.i18n;
    if (key) {
      node.textContent = translate(key);
    }
  });

  const placeholderNodes = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]');
  placeholderNodes.forEach(node => {
    const key = node.getAttribute('data-i18n-placeholder');
    if (key) {
      node.placeholder = translate(key);
    }
  });

  const ariaLabelNodes = document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]');
  ariaLabelNodes.forEach(node => {
    const key = node.dataset.i18nAriaLabel;
    if (key) {
      node.setAttribute('aria-label', translate(key));
    }
  });
};

const updateLanguageButtons = (): void => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.lang-btn');
  buttons.forEach(button => {
    const lang = button.dataset.lang as Locale | undefined;
    const isActive = lang === currentLocale;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const releaseNavPreloadGuard = (): void => {
  document.documentElement.classList.remove('locale-en-loading-nav');
};

const persistLocale = (locale: Locale): void => {
  try {
    window.localStorage.setItem(localeStorageKey, locale);
  } catch (error) {
    // Swallow storage errors silently.
  }
};

const detectInitialLocale = (): Locale => {
  try {
    const stored = window.localStorage.getItem(localeStorageKey);
    if (stored === 'hu' || stored === 'en') {
      return stored;
    }
  } catch (error) {
    // ignore storage access issues
  }
  const docLang = document.documentElement.lang;
  if (docLang === 'en') {
    return 'en';
  }
  return 'hu';
};

let currentLocale: Locale = detectInitialLocale();

const renderGoals = (): void => {
  const container = document.querySelector<HTMLElement>('[data-goal-list]');
  renderCollection(container, goals, goal => {
    const card = createElement('article', 'card goal-card');
    card.appendChild(createElement('span', 'badge', translate(goal.focus)));
    card.appendChild(createElement('h3', '', translate(goal.title)));
    card.appendChild(createElement('p', '', translate(goal.detail)));
    const link = createElement('a', 'btn ghost', translate('common.readMore'));
    link.setAttribute('href', goal.link);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    card.appendChild(link);
    return card;
  });
};

const renderMetrics = (): void => {
  const container = document.querySelector<HTMLElement>('[data-metric-board]');
  renderCollection(container, metrics, metric => {
    const stat = createElement('article', 'stat-card');
    stat.appendChild(createElement('p', 'stat-label', translate(metric.label)));
    stat.appendChild(createElement('p', 'stat-value', metric.value));
    stat.appendChild(createElement('p', 'stat-note', translate(metric.note)));
    return stat;
  });
};

const renderNews = (): void => {
  const list = document.querySelector<HTMLElement>('[data-news-feed]');
  renderCollection(list, newsItems, item => {
    const card = createElement('li', 'news-card');
    const meta = createElement('div', 'news-meta');
    meta.appendChild(createElement('span', 'news-date', translate(item.status)));
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

const renderTimeline = (): void => {
  const list = document.querySelector<HTMLElement>('[data-timeline]');
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

const renderProfileCards = (): void => {
  const grid = document.querySelector<HTMLElement>('[data-profile-cards]');
  renderCollection(grid, profileCards, profile => {
    const card = createElement('article', 'card profile-card');
    if (profile.imageSrc) {
      const image = createElement('img', 'profile-photo');
      image.setAttribute('src', profile.imageSrc);
      image.setAttribute('alt', translate('profile.photoAlt', { name: translate(profile.name) }));
      card.appendChild(image);
    } else {
      card.appendChild(createElement('div', 'profile-photo profile-photo-placeholder', profile.initials));
    }
    card.appendChild(createElement('h3', '', translate(profile.name)));
    card.appendChild(createElement('p', 'profile-role', translate(profile.title)));
    card.appendChild(createElement('p', '', translate(profile.bio)));

    const specialtyList = createElement('div', 'tag-rail');
    profile.specialties.forEach(spec => specialtyList.appendChild(createElement('span', 'badge', translate(spec))));
    card.appendChild(specialtyList);

    card.appendChild(createElement('p', 'profile-highlight', translate(profile.highlight)));
    return card;
  });
};

const renderContacts = (): void => {
  const grid = document.querySelector<HTMLElement>('[data-contact-list]');
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

const renderScheduleCard = (): void => {
  const host = document.querySelector<HTMLElement>('[data-schedule-card]');
  if (!host) {
    return;
  }
  host.innerHTML = '';
  const card = createElement('article', 'card schedule-card');
  const list = createElement('div', 'schedule-list');
  portfolioContext.windows.forEach(window => {
    const item = createElement('div', 'schedule-row');
    item.appendChild(createElement('span', 'schedule-label', translate(window.label)));
    item.appendChild(createElement('p', 'schedule-detail', translate(window.detail)));
    list.appendChild(item);
  });
  card.appendChild(list);
  card.appendChild(createElement('p', 'schedule-note', translate(portfolioContext.note)));
  host.appendChild(card);
};

const renderDynamicSections = (): void => {
  renderGoals();
  renderMetrics();
  renderNews();
  renderTimeline();
  renderProfileCards();
  renderContacts();
  renderScheduleCard();
};

const updateYear = (): void => {
  const yearEl = document.querySelector<HTMLElement>('[data-current-year]');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
};

const initLunchboxDamage = (): void => {
  const controls = document.querySelectorAll<HTMLButtonElement>('[data-lunchbox-control]');
  const states = [
    { image: '/assets/kiddo/lunchbox-full.png', label: 'home.mission.damage.full' },
    { image: '/assets/kiddo/lunchbox-damaged.png', label: 'home.mission.damage.damaged' },
    { image: '/assets/kiddo/lunchbox-broken.png', label: 'home.mission.damage.broken' }
  ] as const;

  states.slice(1).forEach(state => {
    const preload = new Image();
    preload.src = state.image;
  });

  controls.forEach(control => {
    const image = control.querySelector<HTMLImageElement>('img');
    if (!image) {
      return;
    }

    let stateIndex = 0;
    let resetTimer: number | undefined;

    const setState = (nextStateIndex: number): void => {
      stateIndex = nextStateIndex;
      const state = states[stateIndex];
      image.src = state.image;
      control.dataset.i18nAriaLabel = state.label;
      control.setAttribute('aria-label', translate(state.label));
      control.disabled = stateIndex === states.length - 1;
    };

    const scheduleReset = (): void => {
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        setState(0);
      }, 1800);
    };

    control.addEventListener('click', () => {
      if (stateIndex >= states.length - 1) {
        return;
      }

      setState(stateIndex + 1);
      control.classList.remove('is-hit');
      void control.offsetWidth;
      control.classList.add('is-hit');
      scheduleReset();
    });

    image.addEventListener('animationend', event => {
      if (event.animationName === 'lunchbox-hit') {
        control.classList.remove('is-hit');
      }
    });
  });
};

type HeroAction = 'idle' | 'attack' | 'jump' | 'death';

interface HeroSprite {
  source: string;
  frames: number;
  frameDuration: number;
  loop?: boolean;
}

const initHeroStory = (): void => {
  const stage = document.querySelector<HTMLElement>('[data-hero-story]');
  const kiddo = stage?.querySelector<HTMLElement>('[data-hero-kiddo]');
  const worker = stage?.querySelector<HTMLElement>('[data-hero-worker]');
  const kiddoImage = kiddo?.querySelector<HTMLImageElement>('img');
  const workerImage = worker?.querySelector<HTMLImageElement>('img');
  if (!stage || !kiddo || !worker || !kiddoImage || !workerImage) {
    return;
  }

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const timers: number[] = [];
  const frameTimers = new Map<HTMLElement, number>();
  const assets = {
    kiddo: {
      idle: { source: '/assets/kiddo/kiddo-idle.png', frames: 4, frameDuration: 225, loop: true },
      attack: { source: '/assets/kiddo/kiddo-attack.png', frames: 3, frameDuration: 293 },
      jump: { source: '/assets/kiddo/kiddo-jump.png', frames: 7, frameDuration: 150 }
    },
    worker: {
      idle: { source: '/assets/kiddo/construction-worker-idle.png', frames: 4, frameDuration: 288, loop: true },
      attack: { source: '/assets/kiddo/construction-worker-attack.png', frames: 10, frameDuration: 105 },
      death: { source: '/assets/kiddo/construction-worker-death.png', frames: 6, frameDuration: 163 }
    }
  } as const;

  const later = (callback: () => void, delay: number): void => {
    timers.push(window.setTimeout(callback, delay));
  };

  const clearTimers = (): void => {
    timers.splice(0).forEach(timer => window.clearTimeout(timer));
  };

  const stopFrames = (actor: HTMLElement): void => {
    const timer = frameTimers.get(actor);
    if (timer !== undefined) {
      window.clearInterval(timer);
      frameTimers.delete(actor);
    }
  };

  const setActor = (
    actor: HTMLElement,
    image: HTMLImageElement,
    action: HeroAction,
    sprite: HeroSprite
  ): void => {
    stopFrames(actor);
    actor.dataset.action = action;
    image.src = sprite.source;
    image.style.width = `${sprite.frames * 100}%`;

    let frame = 0;
    const showFrame = (): void => {
      image.style.transform = `translate3d(-${(frame * 100) / sprite.frames}%, 0, 0)`;
    };
    showFrame();

    if (motionQuery.matches || sprite.frames < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      if (frame === sprite.frames - 1) {
        if (!sprite.loop) {
          stopFrames(actor);
          return;
        }
        frame = 0;
      } else {
        frame += 1;
      }
      showFrame();
    }, sprite.frameDuration);
    frameTimers.set(actor, timer);
  };

  const reset = (): void => {
    stage.classList.remove('scene-fight', 'is-claiming', 'scene-jump');
    setActor(kiddo, kiddoImage, 'idle', assets.kiddo.idle);
    setActor(worker, workerImage, 'idle', assets.worker.idle);
  };

  const idleBefore = (nextScene: () => void): void => {
    reset();
    later(nextScene, 2000);
  };

  const runJump = (): void => {
    reset();
    stage.classList.add('scene-jump');
    later(() => setActor(kiddo, kiddoImage, 'jump', assets.kiddo.jump), 350);
    later(() => setActor(worker, workerImage, 'attack', assets.worker.attack), 520);
    later(() => {
      setActor(kiddo, kiddoImage, 'idle', assets.kiddo.idle);
      setActor(worker, workerImage, 'idle', assets.worker.idle);
    }, 3900);
    later(() => idleBefore(runFight), 4400);
  };

  const runFight = (): void => {
    clearTimers();
    reset();
    stage.classList.add('scene-fight');
    later(() => {
      setActor(kiddo, kiddoImage, 'attack', assets.kiddo.attack);
      setActor(worker, workerImage, 'attack', assets.worker.attack);
    }, 850);
    later(() => {
      setActor(kiddo, kiddoImage, 'idle', assets.kiddo.idle);
      setActor(worker, workerImage, 'death', assets.worker.death);
    }, 1900);
    later(() => stage.classList.add('is-claiming'), 3000);
    later(() => idleBefore(runJump), 5400);
  };

  const syncMotionPreference = (): void => {
    clearTimers();
    reset();
    if (!motionQuery.matches && !document.hidden) {
      later(runFight, 700);
    }
  };

  motionQuery.addEventListener('change', syncMotionPreference);
  document.addEventListener('visibilitychange', syncMotionPreference);
  syncMotionPreference();
};

type ArsenalAnimation = 'idle' | 'attack' | 'dash' | 'jump' | 'damage';
type ArsenalEffect = 'plan' | 'swing' | 'throw' | 'boost' | 'blink' | 'deploy';

interface ArsenalItemDefinition {
  key: string;
  image: string;
  name: string;
  effectName: string;
  description: string;
  role: string;
  animation: ArsenalAnimation;
  effect: ArsenalEffect;
}

const arsenalItems: ArsenalItemDefinition[] = [
  { key: 'notebook', image: 'notebook', name: 'notebook', effectName: 'notebook', description: 'notebook', role: 'utility', animation: 'idle', effect: 'plan' },
  { key: 'potion', image: 'potion', name: 'potion', effectName: 'potion', description: 'potion', role: 'boost', animation: 'damage', effect: 'boost' },
  { key: 'paper-star', image: 'paper-star', name: 'paperStar', effectName: 'paperStar', description: 'paperStar', role: 'projectile', animation: 'attack', effect: 'throw' },
  { key: 'fries', image: 'fries', name: 'fries', effectName: 'fries', description: 'fries', role: 'boost', animation: 'dash', effect: 'boost' },
  { key: 'bat', image: 'bat', name: 'bat', effectName: 'bat', description: 'bat', role: 'melee', animation: 'attack', effect: 'swing' },
  { key: 'water-bottle', image: 'water-bottle', name: 'water', effectName: 'water', description: 'water', role: 'boost', animation: 'jump', effect: 'boost' },
  { key: 'ammo-box', image: 'ammo-box', name: 'ammo', effectName: 'ammo', description: 'ammo', role: 'utility', animation: 'attack', effect: 'deploy' },
  { key: 'wrapped-candy', image: 'wrapped-candy', name: 'candy', effectName: 'candy', description: 'candy', role: 'boost', animation: 'dash', effect: 'boost' },
  { key: 'brick', image: 'brick', name: 'brick', effectName: 'brick', description: 'brick', role: 'melee', animation: 'attack', effect: 'swing' },
  { key: 'basketball', image: 'basketball', name: 'basketball', effectName: 'basketball', description: 'basketball', role: 'projectile', animation: 'attack', effect: 'throw' },
  { key: 'jacks', image: 'jacks', name: 'jacks', effectName: 'jacks', description: 'jacks', role: 'utility', animation: 'jump', effect: 'deploy' },
  { key: 'cutlery', image: 'cutlery', name: 'cutlery', effectName: 'cutlery', description: 'cutlery', role: 'melee', animation: 'attack', effect: 'swing' },
  { key: 'bread', image: 'bread', name: 'bread', effectName: 'bread', description: 'bread', role: 'boost', animation: 'damage', effect: 'boost' },
  { key: 'sock', image: 'sock', name: 'sock', effectName: 'sock', description: 'sock', role: 'mobility', animation: 'dash', effect: 'blink' }
];

const arsenalAnimationAssets: Record<ArsenalAnimation, string> = {
  idle: '/assets/kiddo/kiddo-idle.png',
  attack: '/assets/kiddo/kiddo-attack.png',
  dash: '/assets/kiddo/kiddo-dash.png',
  jump: '/assets/kiddo/kiddo-jump.png',
  damage: '/assets/kiddo/kiddo-damage.png'
};

const initArsenalPlayground = (): void => {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-arsenal-item]'));
  const actor = document.querySelector<HTMLElement>('[data-arsenal-actor]');
  const actorImage = actor?.querySelector<HTMLImageElement>('img');
  const effect = document.querySelector<HTMLElement>('[data-arsenal-effect]');
  const name = document.querySelector<HTMLElement>('[data-arsenal-name]');
  const role = document.querySelector<HTMLElement>('[data-arsenal-role]');
  const description = document.querySelector<HTMLElement>('[data-arsenal-description]');
  const activate = document.querySelector<HTMLButtonElement>('[data-arsenal-activate]');

  if (!buttons.length || !actor || !actorImage || !effect || !name || !role || !description || !activate) {
    return;
  }

  let selected = arsenalItems[0];
  let resetTimer: number | undefined;

  const translationKey = (item: ArsenalItemDefinition, field: 'name' | 'effect' | 'description'): string =>
    `home.arsenal.item.${item[field === 'effect' ? 'effectName' : field]}.${field}`;

  const updateReadout = (item: ArsenalItemDefinition): void => {
    selected = item;
    const nameKey = translationKey(item, 'name');
    const effectKey = translationKey(item, 'effect');
    const descriptionKey = translationKey(item, 'description');
    const roleKey = `home.arsenal.role.${item.role}`;

    name.dataset.i18n = effectKey;
    name.textContent = translate(effectKey);
    role.dataset.i18n = roleKey;
    role.textContent = translate(roleKey);
    description.dataset.i18n = descriptionKey;
    description.textContent = translate(descriptionKey);
    activate.dataset.i18n = 'home.arsenal.try';
    activate.textContent = translate('home.arsenal.try');

    buttons.forEach(button => {
      const definition = arsenalItems.find(entry => entry.key === button.dataset.arsenalItem);
      const isSelected = definition?.key === item.key;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
      if (definition) {
        const buttonNameKey = translationKey(definition, 'name');
        button.dataset.i18nAriaLabel = buttonNameKey;
        button.setAttribute('aria-label', translate(buttonNameKey));
      }
    });
  };

  const resetStage = (): void => {
    actor.classList.remove('is-playing');
    effect.classList.remove('is-playing');
    effect.replaceChildren();
    actor.dataset.animation = 'idle';
    actorImage.src = arsenalAnimationAssets.idle;
  };

  const playSelected = (): void => {
    window.clearTimeout(resetTimer);
    actor.classList.remove('is-playing');
    effect.classList.remove('is-playing');
    effect.replaceChildren();
    void actor.offsetWidth;

    actor.dataset.animation = selected.animation;
    actorImage.src = arsenalAnimationAssets[selected.animation];
    effect.dataset.effect = selected.effect;
    effect.dataset.item = selected.key;
    const prop = document.createElement('img');
    prop.className = 'arsenal-prop';
    prop.src = `/assets/kiddo/item-${selected.image}.png`;
    prop.alt = '';
    effect.appendChild(prop);
    actor.classList.add('is-playing');
    effect.classList.add('is-playing');
    resetTimer = window.setTimeout(resetStage, 1050);
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const item = arsenalItems.find(entry => entry.key === button.dataset.arsenalItem);
      if (item) {
        updateReadout(item);
        playSelected();
      }
    });
  });
  activate.addEventListener('click', playSelected);
  updateReadout(selected);
};

const setLocale = (locale: Locale): void => {
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

const initLanguageSwitcher = (): void => {
  document.documentElement.lang = currentLocale;
  updateLanguageButtons();
  applyTranslations();
  releaseNavPreloadGuard();
  const buttons = document.querySelectorAll<HTMLButtonElement>('.lang-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (lang === 'hu' || lang === 'en') {
        setLocale(lang);
      }
    });
  });
};

const init = (): void => {
  activateNavigation();
  initMobileNavigation();
  initLanguageSwitcher();
  initLunchboxDamage();
  initHeroStory();
  initArsenalPlayground();
  renderDynamicSections();
  updateYear();
};

const bootstrap = async (): Promise<void> => {
  try {
    await loadTranslations();
  } catch (error) {
    console.error('Unable to load translations', error);
  }
  init();
};

void bootstrap();
