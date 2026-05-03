/* Striped SVG placeholders + character-style silhouettes */

// Character-style placeholder with hair silhouette, eyes, outfit hints based on member data
window.CharPlaceholder = function({ member, variant = 'portrait' }) {
  const id = 'c' + (member.no);
  const [c1, c2] = member.color;
  const v = member.visual || {};

  // Hair color from visual.hair string — pick accent as fallback
  const hairColor = c2;
  const skinTone = '#f4dcc8';
  const eyeColor = c2;

  // role-based iconographic motif
  const role = member.role;

  return (
    <svg viewBox="0 0 300 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{display:'block'}}>
      <defs>
        <linearGradient id={id+'bg'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor="#050714" />
        </linearGradient>
        <linearGradient id={id+'hair'} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={hairColor} />
          <stop offset="1" stopColor={c1} />
        </linearGradient>
        <pattern id={id+'st'} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(135)">
          <line x1="0" y1="0" x2="0" y2="8" stroke={c2} strokeWidth="1" strokeOpacity="0.14" />
        </pattern>
        <radialGradient id={id+'glow'} cx="0.5" cy="0.3">
          <stop offset="0" stopColor={c2} stopOpacity="0.5" />
          <stop offset="1" stopColor={c2} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* BG */}
      <rect width="300" height="400" fill={`url(#${id}bg)`} />
      <rect width="300" height="400" fill={`url(#${id}st)`} />
      <ellipse cx="150" cy="140" rx="140" ry="120" fill={`url(#${id}glow)`} />

      {/* corner crosshairs */}
      <g stroke={c2} strokeWidth="1" opacity="0.4" fill="none">
        <path d="M 12 12 L 24 12 M 12 12 L 12 24" />
        <path d="M 288 12 L 276 12 M 288 12 L 288 24" />
        <path d="M 12 388 L 24 388 M 12 388 L 12 376" />
        <path d="M 288 388 L 276 388 M 288 388 L 288 376" />
      </g>

      {/* CHARACTER SILHOUETTE */}
      {/* back hair - long flowing */}
      <path
        d="M 100 90 Q 80 150 78 240 L 95 280 Q 100 220 110 180 Q 120 140 150 120 Q 180 140 190 180 Q 200 220 205 280 L 222 240 Q 220 150 200 90 Q 180 60 150 58 Q 120 60 100 90 Z"
        fill={`url(#${id}hair)`}
        opacity="0.95"
      />

      {/* neck */}
      <rect x="138" y="155" width="24" height="28" fill={skinTone} opacity="0.85" />

      {/* torso / outfit */}
      <path
        d="M 95 200 Q 150 185 205 200 L 220 320 L 80 320 Z"
        fill={c1}
        stroke={c2}
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      {/* outfit accent band */}
      <path
        d="M 95 230 Q 150 218 205 230 L 205 245 Q 150 232 95 245 Z"
        fill={c2}
        opacity="0.8"
      />

      {/* face — simplified oval */}
      <ellipse cx="150" cy="130" rx="34" ry="40" fill={skinTone} />

      {/* front bangs / hair frame */}
      <path
        d="M 116 100 Q 120 135 110 150 L 118 145 Q 130 120 150 110 Q 170 120 182 145 L 190 150 Q 180 135 184 100 Q 170 88 150 90 Q 130 88 116 100 Z"
        fill={`url(#${id}hair)`}
      />

      {/* Eyes — large, accent colored */}
      <g>
        <ellipse cx="138" cy="135" rx="5.5" ry="8" fill={eyeColor} />
        <ellipse cx="162" cy="135" rx="5.5" ry="8" fill={eyeColor} />
        <ellipse cx="136" cy="132" rx="1.5" ry="2" fill="#fff" opacity="0.9" />
        <ellipse cx="160" cy="132" rx="1.5" ry="2" fill="#fff" opacity="0.9" />
      </g>

      {/* Subtle mouth */}
      <path d="M 145 148 Q 150 151 155 148" stroke="#b85a6a" strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round" />

      {/* Role-specific accessory / motif */}
      {role === 'fps' && (
        <g stroke={c2} strokeWidth="1.5" fill="none" opacity="0.75">
          <circle cx="150" cy="130" r="22" strokeDasharray="3 3" />
          <line x1="150" y1="100" x2="150" y2="110" />
          <line x1="150" y1="150" x2="150" y2="160" />
          <line x1="120" y1="130" x2="130" y2="130" />
          <line x1="170" y1="130" x2="180" y2="130" />
        </g>
      )}
      {role === 'mmo' && (
        <g fill={c2} opacity="0.7">
          <circle cx="100" cy="80" r="3" />
          <circle cx="200" cy="75" r="2" />
          <circle cx="90" cy="120" r="2" />
          <circle cx="210" cy="115" r="2.5" />
          <circle cx="75" cy="200" r="3" />
          <circle cx="225" cy="195" r="2" />
        </g>
      )}
      {role === 'fgt' && (
        <g stroke={c2} strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round">
          <path d="M 40 60 L 60 80 L 45 85 L 55 105" />
          <path d="M 260 60 L 240 80 L 255 85 L 245 105" />
        </g>
      )}

      {/* codename bar bottom */}
      <rect x="0" y="370" width="300" height="30" fill="#000" opacity="0.6" />
      <text x="16" y="390" fill={c2} fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2">
        {member.no} / {member.name}
      </text>
      <text x="284" y="390" fill={c2} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" textAnchor="end" opacity="0.6">
        {role.toUpperCase()}
      </text>

      {/* top sub label */}
      <text x="16" y="24" fill={c2} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.7">
        ESPO TALENT
      </text>
    </svg>
  );
};

// ===== MEMBER IMAGE w/ direct list & rotation =====
// Uses member.imgs array directly — no probing needed.
// Rotates every 5s through all images. Falls back to CharPlaceholder if none.
window.MemberImage = function({ member, style = {} }) {
  const { useState, useEffect } = React;
  const imgs = (member && member.imgs) || [];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [member && member.no]);

  useEffect(() => {
    if (imgs.length <= 1) return;
    const t = setInterval(() => setIdx(i => (i + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  if (imgs.length === 0) {
    return <CharPlaceholder member={member} />;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', ...style }}>
      {imgs.map((src, i) => (
        <img key={src} src={src} alt={member.name} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'top center',
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 0.8s ease',
          display: 'block',
        }} />
      ))}
      {imgs.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 10, right: 10,
          display: 'flex', gap: 5, zIndex: 4,
        }}>
          {imgs.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }} style={{
              width: 6, height: 6, borderRadius: '50%', padding: 0,
              background: i === idx ? 'var(--accent)' : 'rgba(255,255,255,0.35)',
              border: 'none', cursor: 'pointer',
              transition: 'all .2s',
            }} />
          ))}
        </div>
      )}
    </div>
  );
};

// Fallback generic striped placeholder (for non-character slots: goods, media, streams)
window.StripePlaceholder = function({ colors, label, sub, angle = 135, dense = false, className = '', style = {} }) {
  const [c1, c2] = colors || ['#1a1a2e', '#36f0ff'];
  const id = 'p' + Math.random().toString(36).slice(2, 9);
  const stripe = dense ? 8 : 14;
  return (
    <svg className={className} style={{ width: '100%', height: '100%', display: 'block', ...style }} viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id + 'bg'} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} stopOpacity="0.8" />
        </linearGradient>
        <pattern id={id + 'st'} patternUnits="userSpaceOnUse" width={stripe} height={stripe} patternTransform={`rotate(${angle})`}>
          <rect width={stripe} height={stripe} fill="transparent" />
          <line x1="0" y1="0" x2="0" y2={stripe} stroke={c2} strokeWidth="1.5" strokeOpacity="0.22" />
        </pattern>
      </defs>
      <rect width="300" height="400" fill={`url(#${id}bg)`} />
      <rect width="300" height="400" fill={`url(#${id}st)`} />
      <g opacity="0.22" fill={c2}>
        <ellipse cx="150" cy="130" rx="38" ry="42" />
        <path d="M 90 200 Q 150 170 210 200 L 220 400 L 80 400 Z" />
      </g>
      {label && (
        <text x="16" y="380" fill={c2} fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" opacity="0.85">
          {label}
        </text>
      )}
      {sub && (
        <text x="16" y="24" fill={c2} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" opacity="0.6">
          {sub}
        </text>
      )}
      <g stroke={c2} strokeWidth="1" opacity="0.5" fill="none">
        <path d="M 280 16 L 290 16 L 290 26" />
        <path d="M 20 390 L 10 390 L 10 380" />
      </g>
    </svg>
  );
};

window.Icon = function({ name, size = 16 }) {
  const s = size;
  const stroke = 'currentColor';
  switch (name) {
    case 'arrow-right': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case 'play': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M6 4l14 8-14 8z"/></svg>;
    case 'pause': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>;
    case 'next': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M5 4l12 8-12 8zM17 4h3v16h-3z"/></svg>;
    case 'volume': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><path d="M3 10v4h4l5 4V6L7 10H3z"/><path d="M16 8a5 5 0 010 8"/></svg>;
    case 'full': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/></svg>;
    case 'x': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'search': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>;
    case 'download': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><path d="M12 3v14M5 12l7 7 7-7M3 21h18"/></svg>;
    case 'sparkle': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>;
    case 'copy': return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2"><rect x="8" y="8" width="12" height="12"/><path d="M4 16V4h12"/></svg>;
    case 'twitter': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5z"/></svg>;
    case 'youtube': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M23 7a3 3 0 00-2-2c-2-.5-9-.5-9-.5s-7 0-9 .5a3 3 0 00-2 2C.5 9 .5 12 .5 12s0 3 .5 5a3 3 0 002 2c2 .5 9 .5 9 .5s7 0 9-.5a3 3 0 002-2c.5-2 .5-5 .5-5s0-3-.5-5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>;
    case 'discord': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M20 4c-2-1-4-1.5-4-1.5l-.2.3c2 .6 3 1.5 3 1.5-3-2-7-2-11 0 0 0 1-.9 3-1.5L10.2 2.5S8 3 6 4C3 9 2 14 2 14c2 2 4 2 4 2l1-2c-1 0-2-.5-3-1l.2-.2c2 1 4 1.5 7 1.5s5-.5 7-1.5l.2.2c-1 .5-2 1-3 1l1 2s2 0 4-2c0 0-1-5-3-10zm-11 8c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm6 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/></svg>;
    case 'tiktok': return <svg width={s} height={s} viewBox="0 0 24 24" fill={stroke}><path d="M16 3v3a5 5 0 004 4v3a8 8 0 01-4-1v6a6 6 0 11-6-6v3a3 3 0 103 3V3z"/></svg>;
    default: return null;
  }
};
