/* espo Hero, Nav, Tweaks */

const { useState, useEffect, useRef } = React;

window.Nav = function() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark">e</span>
          <span>espo<span style={{color:'var(--accent)'}}>.</span></span>
        </a>
        <div className="nav-links">
          <a href="#about">ABOUT <span className="jp">とは</span></a>
          <a href="#live">LIVE <span className="jp">配信中</span></a>
          <a href="#members">MEMBERS <span className="jp">メンバー</span></a>
          <a href="#trophies">TROPHIES <span className="jp">戦績</span></a>
          <a href="#media">MEDIA <span className="jp">メディア</span></a>
          <a href="#goods">GOODS <span className="jp">グッズ</span></a>
        </div>
        <div className="nav-cta">
          <div className="lang-toggle">
            <button className="on">JP</button>
            <button>EN</button>
          </div>
          <a href="#audition" className="btn btn-solid">AUDITION <Icon name="arrow-right" size={12}/></a>
        </div>
      </div>
    </nav>
  );
};

window.Hero = function() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const featured = window.MEMBERS.slice(0, 6);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIdx(i => (i + 1) % featured.length), 3500);
    return () => clearInterval(t);
  }, [playing, featured.length]);

  const active = featured[idx];

  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-noise" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">[ EST. 2021 ] VIRTUAL ESPORTS PROJECT</div>
          <h1 className="hero-title">
            <span className="line"><span className="slide d1">GAMING</span></span>
            <span className="line"><span className="slide d2 stroke">GIRLS</span> <span className="slide d2 mag">ARE</span></span>
            <span className="line"><span className="slide d3 cyan">COOL</span><span className="slide d3">.CUTE.</span></span>
          </h1>
          <p className="hero-sub">勝つために生まれた、24人の乙女たち。<br/>eスポーツと配信、その本気を見せつける。</p>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-label">MEMBERS</div>
              <div className="hero-stat-value"><span className="accent">20</span><span style={{fontSize:16,color:'var(--ink-3)',marginLeft:4}}>/ 32</span></div>
            </div>
            <div>
              <div className="hero-stat-label">TROPHIES</div>
              <div className="hero-stat-value">47</div>
            </div>
            <div>
              <div className="hero-stat-label">SUBSCRIBERS</div>
              <div className="hero-stat-value">12.4<span className="accent">M</span></div>
            </div>
            <div>
              <div className="hero-stat-label">LIVE NOW</div>
              <div className="hero-stat-value" style={{color:'var(--live)'}}>● 04</div>
            </div>
          </div>
          <div className="hero-cta-row">
            <a href="#members" className="btn btn-solid">MEET MEMBERS <Icon name="arrow-right" size={12}/></a>
            <a href="#live" className="btn">WATCH LIVE</a>
            <a href="#audition" className="btn btn-mag">AUDITION 応募</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame" />
          {featured.map((m, i) => (
            <div key={m.no} className={'hero-talent-card ' + (i === idx ? '' : 'inactive')}>
              <MemberImage member={m} />
              <div className="hero-talent-meta">
                <div>
                  <div className="hero-talent-name">{m.name}</div>
                  <div className="hero-talent-jp">{m.jp}</div>
                </div>
                <div className="hero-talent-no">
                  <span className="big">{m.no}</span>
                  TALENT
                </div>
              </div>
            </div>
          ))}
          <div className="hero-rotator-dots">
            {featured.map((_, i) => (
              <button key={i} className={i === idx ? 'on' : ''} onClick={() => { setIdx(i); setPlaying(false); }} />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll">SCROLL ↓</div>

      <div className="hero-ticker">
        <div className="hero-ticker-track">
          {[...window.NEWS_TICKER, ...window.NEWS_TICKER].map((s, i) => (
            <React.Fragment key={i}>
              <span className="dot">◆</span>
              <span>{s}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========= TWEAKS =========
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cyan",
  "hero": "split",
  "card": "dark",
  "density": "cozy",
  "typo": "dots"
}/*EDITMODE-END*/;

const PALETTES = {
  cyan:   { '--accent': '#36f0ff', '--accent-2': '#ff3ea5', '--accent-3': '#f8d34a' },
  sakura: { '--accent': '#ff7fb2', '--accent-2': '#b96aff', '--accent-3': '#ffd86a' },
  acid:   { '--accent': '#c9ff3c', '--accent-2': '#ff3c6a', '--accent-3': '#3cfff0' },
  amber:  { '--accent': '#ffb23c', '--accent-2': '#ff3c3c', '--accent-3': '#fff06a' },
  noir:   { '--accent': '#ffffff', '--accent-2': '#9a9ab0', '--accent-3': '#ff3355' },
};

const TYPOS = {
  dots:   { '--font-display': '"Zen Dots", "Orbitron", sans-serif', '--font-head': '"Anton", "Oswald", sans-serif' },
  mono:   { '--font-display': '"Space Mono", "JetBrains Mono", monospace', '--font-head': '"JetBrains Mono", monospace' },
  heavy:  { '--font-display': '"Bebas Neue", "Anton", sans-serif', '--font-head': '"Bebas Neue", sans-serif' },
  serif:  { '--font-display': '"DM Serif Display", "Playfair Display", serif', '--font-head': '"DM Serif Display", serif' },
};

window.Tweaks = function() {
  const [state, setState] = useState(TWEAK_DEFAULTS);
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState(false);

  const apply = (s) => {
    const r = document.documentElement;
    // palette
    const p = PALETTES[s.palette] || PALETTES.cyan;
    Object.entries(p).forEach(([k, v]) => r.style.setProperty(k, v));
    // typo
    const t = TYPOS[s.typo] || TYPOS.dots;
    Object.entries(t).forEach(([k, v]) => r.style.setProperty(k, v));
    // hero / card / density
    r.setAttribute('data-hero', s.hero);
    r.setAttribute('data-card', s.card);
    r.setAttribute('data-density', s.density);
  };

  useEffect(() => {
    // Register listener FIRST
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    // Then announce
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    setAvailable(true);
    apply(state);
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => { apply(state); }, [state]);

  const update = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  if (!open) return null;

  const Swatch = ({ k }) => {
    const cs = PALETTES[k];
    return (
      <button className={state.palette === k ? 'on' : ''} onClick={() => update('palette', k)} title={k}>
        <div className="sw-inner">
          <i style={{ background: cs['--accent'] }} />
          <i style={{ background: cs['--accent-2'] }} />
          <i style={{ background: cs['--accent-3'] }} />
        </div>
      </button>
    );
  };

  const Opt = ({ group, val, label }) => (
    <button className={state[group] === val ? 'on' : ''} onClick={() => update(group, val)}>{label}</button>
  );

  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>TWEAKS</span>
        <button onClick={() => setOpen(false)}><Icon name="x" size={14}/></button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-group">
          <h6>PALETTE / アクセント</h6>
          <div className="tweak-swatches">
            <Swatch k="cyan" />
            <Swatch k="sakura" />
            <Swatch k="acid" />
            <Swatch k="amber" />
            <Swatch k="noir" />
          </div>
        </div>
        <div className="tweak-group">
          <h6>HERO LAYOUT</h6>
          <div className="tweak-options">
            <Opt group="hero" val="default" label="SPLIT" />
            <Opt group="hero" val="split"   label="50/50" />
            <Opt group="hero" val="centered" label="CENTERED" />
          </div>
        </div>
        <div className="tweak-group">
          <h6>MEMBER CARD</h6>
          <div className="tweak-options">
            <Opt group="card" val="dark"     label="DARK" />
            <Opt group="card" val="polaroid" label="POLAROID" />
            <Opt group="card" val="typo"     label="TYPOGRAPHIC" />
          </div>
        </div>
        <div className="tweak-group">
          <h6>DENSITY / 密度</h6>
          <div className="tweak-options">
            <Opt group="density" val="compact"  label="COMPACT" />
            <Opt group="density" val="cozy"     label="COZY" />
            <Opt group="density" val="spacious" label="SPACIOUS" />
          </div>
        </div>
        <div className="tweak-group">
          <h6>TYPOGRAPHY</h6>
          <div className="tweak-options">
            <Opt group="typo" val="dots"  label="ZEN DOTS" />
            <Opt group="typo" val="heavy" label="BEBAS" />
            <Opt group="typo" val="mono"  label="MONO" />
            <Opt group="typo" val="serif" label="SERIF" />
          </div>
        </div>
      </div>
    </div>
  );
};
