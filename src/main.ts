type PageKey = 'home' | 'about' | 'news' | 'contact';

type Locale = 'hu' | 'en';

type Renderer<T> = (item: T) => HTMLElement;

interface GoalItem {
  title: string; 
  detail: string; 
  progress: number;
  focus: string;
}

interface MetricItem {
  label: string; 
  value: string;
  note: string; 
}

interface NewsItem {
  date: string;
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

interface TeamProfile {
  name: string; 
  title: string; 
  bio: string; 
  specialties: string[];
  highlight: string; 
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

const localeStorageKey = 'bcg-locale';
const localeFormatMap: Record<Locale, Intl.LocalesArgument> = {
  hu: 'hu-HU',
  en: 'en-GB'
};

const goals: GoalItem[] = [
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

const metrics: MetricItem[] = [
  { label: 'metrics.0.label', value: '3', note: 'metrics.0.note' },
  { label: 'metrics.1.label', value: '120+', note: 'metrics.1.note' },
  { label: 'metrics.2.label', value: '5', note: 'metrics.2.note' }
];

const newsItems: NewsItem[] = [
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

const timelineEntries: TimelineItem[] = [
  { year: '2026', title: 'timeline.0.title', description: 'timeline.0.description' },
  { year: '2025', title: 'timeline.1.title', description: 'timeline.1.description' },
  { year: '2024', title: 'timeline.2.title', description: 'timeline.2.description' }
];

const teamProfiles: TeamProfile[] = [
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

const contactProfiles: ContactProfile[] = [
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

const studioSchedule: ScheduleInfo = {
  windows: [
    { label: 'schedule.windows.0.label', detail: 'schedule.windows.0.detail' },
    { label: 'schedule.windows.1.label', detail: 'schedule.windows.1.detail' },
    { label: 'schedule.windows.2.label', detail: 'schedule.windows.2.detail' }
  ],
  note: 'schedule.note'
};

const clampProgress = (value: number): number => Math.max(0, Math.min(100, value));

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

const localeFormatFor = (locale: Locale): Intl.LocalesArgument => localeFormatMap[locale];

const formatDate = (isoString: string): string => {
  try {
    const formatter = new Intl.DateTimeFormat(localeFormatFor(currentLocale), {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formatter.format(new Date(isoString));
  } catch (error) {
    return isoString;
  }
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

    const progress = createElement('div', 'progress');
    const bar = createElement('div', 'progress-bar');
    bar.style.width = `${clampProgress(goal.progress)}%`;
    progress.appendChild(bar);
    card.appendChild(progress);
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

const renderTeamProfiles = (): void => {
  const grid = document.querySelector<HTMLElement>('[data-team-profiles]');
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
  const list = createElement('ul', 'schedule-list');
  studioSchedule.windows.forEach(window => {
    const item = createElement('li', 'schedule-row');
    item.appendChild(createElement('strong', '', translate(window.label)));
    item.appendChild(createElement('span', '', translate(window.detail)));
    list.appendChild(item);
  });
  card.appendChild(list);
  card.appendChild(createElement('p', 'schedule-note', translate(studioSchedule.note)));
  host.appendChild(card);
};

const renderDynamicSections = (): void => {
  renderGoals();
  renderMetrics();
  renderNews();
  renderTimeline();
  renderTeamProfiles();
  renderContacts();
  renderScheduleCard();
};

const wireNewsletterForm = (): void => {
  const form = document.querySelector<HTMLFormElement>('[data-newsletter]');
  if (!form) {
    return;
  }
  const input = form.querySelector<HTMLInputElement>('input[type="email"]');
  const hint = form.parentElement?.querySelector<HTMLElement>('.form-hint');
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

const updateYear = (): void => {
  const yearEl = document.querySelector<HTMLElement>('[data-current-year]');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
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
  renderDynamicSections();
};

const initLanguageSwitcher = (): void => {
  document.documentElement.lang = currentLocale;
  updateLanguageButtons();
  applyTranslations();
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
  initLanguageSwitcher();
  renderDynamicSections();
  wireNewsletterForm();
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
