import { useEffect, useRef, useState } from 'react'
import {
  profile,
  ui,
  skills,
  experience,
  projectCategories,
  projects,
  education,
} from './data.js'
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, SunIcon, MoonIcon, ArrowIcon } from './icons.jsx'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact']

function readStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function store(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — preference just won't persist */
  }
}

function initialLang() {
  const saved = readStored('lang')
  if (saved === 'pt' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const [theme, setTheme] = useState(() => readStored('theme'))
  const [menuOpen, setMenuOpen] = useState(false)

  const t = (v) => (v && typeof v === 'object' && 'pt' in v ? v[lang] : v)

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    store('lang', lang)
  }, [lang])

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      store('theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    const current =
      theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} · {t(ui.footer)} {profile.name}
          </span>
          <Socials />
        </div>
      </footer>
    </>
  )
}

function Header({ t, lang, setLang, toggleTheme, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Eline Farias — início" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark" aria-hidden="true">EF</span>
        </a>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {t(ui.nav[id])}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="pill-btn"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label="Language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label={t(ui.theme)}>
            <SunIcon className="only-dark" />
            <MoonIcon className="only-light" />
          </button>
          <button
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t(ui.menu)}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{t(ui.hello)}</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{t(ui.role)}</p>
          <p className="hero-tagline">{t(ui.tagline)}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={profile.resume} download>
              <DownloadIcon /> {t(ui.ctaResume)}
            </a>
            <a className="btn btn-ghost" href="#contact">
              {t(ui.ctaContact)} <ArrowIcon />
            </a>
          </div>
          <Socials />
        </div>
        <div className="hero-photo">
          <img src={profile.photo} alt={profile.name} width="320" height="320" />
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, subtitle, children, alt }) {
  return (
    <section id={id} className={`section ${alt ? 'section-alt' : ''}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

function About({ t }) {
  return (
    <Section id="about" title={t(ui.aboutTitle)}>
      <div className="about-grid">
        <div className="about-text">
          {ui.about.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>
        <ul className="stats">
          {ui.stats.map((s) => (
            <li key={s.value}>
              <strong>{s.value}</strong>
              <span>{t(s.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function Skills({ t }) {
  return (
    <Section id="skills" title={t(ui.skillsTitle)} subtitle={t(ui.skillsSub)} alt>
      <div className="skills-grid">
        {skills.map((g) => (
          <div className="card skill-card" key={g.group.en}>
            <h3>{t(g.group)}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience({ t }) {
  return (
    <Section id="experience" title={t(ui.experienceTitle)}>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <div className="timeline-head">
              <div>
                <h3>{t(job.role)}</h3>
                <p className="company">
                  {job.company} · <span>{t(job.place)}</span>
                </p>
              </div>
              <span className="period">
                {t(job.start)} – {job.end ? t(job.end) : t(ui.present)}
              </span>
            </div>
            <ul className="bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{t(b)}</li>
              ))}
            </ul>
            <ul className="chips chips-sm">
              {job.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Projects({ t }) {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const tabs = [{ id: 'all', label: ui.all }, ...projectCategories]

  // On small screens the grid becomes a swipeable carousel; keep the dots in sync.
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
    setActive(0)
  }, [filter])

  const onScroll = () => {
    const el = trackRef.current
    const card = el?.firstElementChild
    if (!card) return
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || 0)
    setActive(Math.round(el.scrollLeft / step))
  }

  const goTo = (i) => {
    const card = trackRef.current?.children[i]
    if (card) trackRef.current.scrollTo({ left: card.offsetLeft - trackRef.current.offsetLeft, behavior: 'smooth' })
  }

  return (
    <Section id="projects" title={t(ui.projectsTitle)} subtitle={t(ui.projectsSub)} alt>
      <div className="tabs" role="tablist">
        {tabs.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={filter === c.id}
            className={filter === c.id ? 'is-active' : ''}
            onClick={() => setFilter(c.id)}
          >
            {t(c.label)}
          </button>
        ))}
      </div>
      <div className="projects-grid" ref={trackRef} onScroll={onScroll}>
        {visible.map((p) => (
          <a
            key={t(p.title)}
            className="card project-card"
            href={p.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-thumb">
              {p.image ? (
                <img src={p.image} alt="" loading="lazy" />
              ) : (
                <span className="project-thumb-fallback">{t(p.title)}</span>
              )}
            </div>
            <div className="project-body">
              <h3>{t(p.title)}</h3>
              <p>{t(p.description)}</p>
              <ul className="chips chips-sm">
                {p.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="project-link">
                {t(ui.viewProject)} <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
      {visible.length > 1 && (
        <div className="carousel-dots">
          {visible.map((p, i) => (
            <button
              key={i}
              className={i === active ? 'is-active' : ''}
              onClick={() => goTo(i)}
              aria-label={`${i + 1} / ${visible.length}`}
              aria-current={i === active}
            />
          ))}
        </div>
      )}
    </Section>
  )
}

function Education({ t }) {
  return (
    <Section id="education" title={t(ui.educationTitle)}>
      <div className="edu-grid">
        {education.map((e) => (
          <div className="card edu-card" key={e.degree.en}>
            <span className="period">{t(e.period)}</span>
            <h3>{t(e.degree)}</h3>
            <p>{e.school}</p>
            {e.detail && <p className="muted">{t(e.detail)}</p>}
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact({ t }) {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <h2 className="section-title">{t(ui.contactTitle)}</h2>
        <p className="section-sub">{t(ui.contactSub)}</p>
        <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
          <MailIcon /> {profile.email}
        </a>
        <p className="muted contact-location">{profile.location}</p>
      </div>
    </section>
  )
}

function Socials() {
  return (
    <div className="socials">
      <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GithubIcon />
      </a>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="E-mail">
        <MailIcon />
      </a>
    </div>
  )
}
