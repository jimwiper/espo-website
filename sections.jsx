/* espo — Streams, Members, Trophies, Media, Goods, Audition, Footer */

const { useState: uS, useEffect: uE, useRef: uR } = React;

// ====== LIVE STREAMS ======
window.LiveStreams = function() {
  const [main, setMain] = uS(0);
  const [playing, setPlaying] = uS(true);
  const stream = window.LIVE_NOW[main];
  const side = window.LIVE_NOW.filter((_, i) => i !== main);
  const streamMember = window.MEMBERS.find(m => m.name === stream.talent);

  return (
    <section className="streams" id="live">
      <div className="wrap">
        <div className="section-head">
          <div className="section-title-block">
            <div className="section-kicker">LIVE / 配信中 — {window.LIVE_NOW.length} STREAMS</div>
            <h2><span className="accent">ON</span> <span className="stroke">AIR</span>.</h2>
            <div className="section-jp">メンバーが今まさに配信中。見逃すな。</div>
          </div>
          <a className="view-all" href="#">ALL STREAMS →</a>
        </div>

        <div className="stream-grid">
          <div className="stream-main">
            <div className="stream-video">
              {streamMember
                ? <MemberImage member={streamMember} />
                : <StripePlaceholder colors={stream.color} label={`// ${stream.game} LIVE`} dense />}
            </div>
            <div className="stream-player">
              <div className="stream-top">
                <div style={{display:'flex',gap:8}}>
                  <div className="live-badge">LIVE</div>
                  <div className="viewer-count"><span className="num">{stream.viewers.toLocaleString()}</span> viewers</div>
                </div>
                <div className="viewer-count">{stream.game}</div>
              </div>
              <div className="stream-bot">
                <div className="stream-bot-controls">
                  <div className="stream-meta">
                    <h3>{stream.title}</h3>
                    <p><span className="tag">{stream.game}</span>{stream.talent} ／ {stream.jp}</p>
                  </div>
                  <div className="stream-controls">
                    <button className="pbtn play" onClick={() => setPlaying(!playing)}>
                      <Icon name={playing ? 'pause' : 'play'} size={14} />
                    </button>
                    <button className="pbtn"><Icon name="volume" size={14} /></button>
                    <button className="pbtn"><Icon name="full" size={14} /></button>
                  </div>
                </div>
                <div className="stream-progress" />
              </div>
            </div>
          </div>

          <div className="stream-side">
            {side.map((s) => {
              const realIdx = window.LIVE_NOW.indexOf(s);
              const sm = window.MEMBERS.find(m => m.name === s.talent);
              return (
                <div key={s.talent} className="stream-card" onClick={() => setMain(realIdx)}>
                  <div className="thumb">
                    {sm ? <MemberImage member={sm} /> : <StripePlaceholder colors={s.color} label={s.game} dense />}
                  </div>
                  <div className="thumb-overlay" />
                  <div className="body">
                    <div className="top">
                      <div className="live-badge">LIVE</div>
                      <div className="viewers">{s.viewers.toLocaleString()} ppl</div>
                    </div>
                    <div className="bot">
                      <div className="talent">{s.talent} ／ {s.jp}</div>
                      <div className="title">{s.title}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ====== CHARACTER DETAIL MODAL ======
window.CharModal = function({ member, onClose }) {
  const [prompt, setPrompt] = uS('');
  const [loading, setLoading] = uS(false);
  const [copied, setCopied] = uS(false);

  const buildLocalPrompt = (m) => {
    const v = (m && m.visual) || {};
    return `Anime-style character portrait of "${m.name}" (${m.jp}), an esports VTuber talent.
Hair: ${v.hair || '—'}. Eyes: ${v.eyes || '—'}.
Outfit: ${v.outfit || '—'}.
Accessories: ${v.accessory || '—'}.
Visual motif: ${v.motif || '—'}.
Personality / vibe: ${v.vibe || '—'}.
Game role: ${m.role.toUpperCase()}. Codename NO.${m.no}.
Style: high-quality anime/VTuber character illustration, cel-shaded, dynamic three-quarter pose, sharp linework, vibrant but refined palette (primary ${m.color[0]} / accent ${m.color[1]}), esports banner lighting, studio background with soft neon bokeh, detailed face, expressive eyes with light reflections, 4k, trending on pixiv.
Negative: blurry, watermark, text, logo, extra limbs, malformed hands, low quality, realistic photo, western cartoon.`;
  };

  uE(() => {
    let cancelled = false;
    setPrompt(buildLocalPrompt(member));
    if (!window.claude?.complete) return;
    setLoading(true);
    (async () => {
      try {
        const text = await window.claude.complete({
          messages: [{
            role: 'user',
            content: `You are writing a detailed image-generation prompt for an anime VTuber character.
Return ONLY the prompt text (no intro, no commentary, no markdown).
Structure:
1. One English paragraph describing appearance, outfit, accessories, pose, expression, lighting, background, and anime art style. ~100-140 words.
2. Blank line.
3. A Japanese version (same content, natural Japanese, similar length).
4. Blank line.
5. One line of Midjourney-style parameters like: --ar 3:4 --style raw --stylize 300 --v 6
6. A "Negative prompt:" line with what to avoid.

CHARACTER DATA:
Codename: NO.${member.no} ${member.name} (${member.jp})
Role: ${member.role.toUpperCase()}
Personality: ${member.bio}
Hair: ${(member.visual||{}).hair||''}
Eyes: ${(member.visual||{}).eyes||''}
Outfit: ${(member.visual||{}).outfit||''}
Accessories: ${(member.visual||{}).accessory||''}
Motif: ${(member.visual||{}).motif||''}
Vibe: ${(member.visual||{}).vibe||''}
Brand color: ${member.color[0]} / ${member.color[1]}
Brand: espo — neon-cyber esports VTuber org, dark navy + neon cyan/magenta palette.`
          }]
        });
        if (!cancelled && text) setPrompt(text.trim());
      } catch (e) {
        // fall back to local prompt already set
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [member.no]);

  const copy = () => {
    navigator.clipboard?.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon name="x" size={16}/></button>
        <div className="modal-grid">
          <div className="modal-visual">
            <MemberImage member={member} />
          </div>
          <div className="modal-body">
            <div className="modal-eyebrow">NO.{member.no} ／ {member.role.toUpperCase()}</div>
            <h2 className="modal-name">{member.name}</h2>
            <div className="modal-jp">{member.jp}</div>
            <p className="modal-bio">{member.bio}</p>

            <div className="modal-stats">
              <div><span className="l">K/D</span><span className="v">{member.stats.kd}</span></div>
              <div><span className="l">STREAM HRS</span><span className="v">{member.stats.hrs}</span></div>
              <div><span className="l">ROLE</span><span className="v">{member.role.toUpperCase()}</span></div>
            </div>

            <div className="modal-attrs">
              <h4>VISUAL PROFILE</h4>
              <dl>
                <div><dt>HAIR</dt><dd>{(member.visual||{}).hair}</dd></div>
                <div><dt>EYES</dt><dd>{(member.visual||{}).eyes}</dd></div>
                <div><dt>OUTFIT</dt><dd>{(member.visual||{}).outfit}</dd></div>
                <div><dt>ACCESSORY</dt><dd>{(member.visual||{}).accessory}</dd></div>
                <div><dt>MOTIF</dt><dd>{(member.visual||{}).motif}</dd></div>
                <div><dt>VIBE</dt><dd>{(member.visual||{}).vibe}</dd></div>
                <div><dt>COLORS</dt><dd>
                  <span className="sw-chip" style={{background: member.color[0]}} /> {member.color[0]}
                  <span className="sw-chip" style={{background: member.color[1], marginLeft:8}} /> {member.color[1]}
                </dd></div>
              </dl>
            </div>

            <div className="modal-prompt">
              <div className="prompt-head">
                <h4><Icon name="sparkle" size={12}/> IMAGE-GEN PROMPT {loading && <span className="loading">生成中...</span>}</h4>
                <button className="prompt-copy" onClick={copy}>
                  <Icon name="copy" size={12}/> {copied ? 'COPIED' : 'COPY'}
                </button>
              </div>
              <pre className="prompt-body">{prompt}</pre>
              <p className="prompt-hint">これを Midjourney / NovelAI / DALL-E などに貼り付けてキャラクタービジュアルを生成できます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ====== MEMBERS ======
window.Members = function() {
  const [filter, setFilter] = uS('ALL');
  const [active, setActive] = uS(null);
  const members = window.MEMBERS;
  const counts = {
    ALL: members.length,
    FPS: members.filter(m => m.role === 'fps').length,
    MMO: members.filter(m => m.role === 'mmo').length,
    FGT: members.filter(m => m.role === 'fgt').length,
  };

  const show = (m) => filter === 'ALL' || m.role === filter.toLowerCase();

  const exportBible = () => {
    const md = buildBibleMarkdown(members);
    download('espo-character-bible.md', md, 'text/markdown');
  };
  const exportJson = () => {
    download('espo-character-bible.json', JSON.stringify(members, null, 2), 'application/json');
  };
  const exportAllPrompts = () => {
    const lines = members.map(m => {
      const v = m.visual || {};
      return `# NO.${m.no} ${m.name} (${m.jp}) — ${m.role.toUpperCase()}

Anime-style VTuber esports character portrait of "${m.name}".
Hair: ${v.hair}. Eyes: ${v.eyes}. Outfit: ${v.outfit}. Accessory: ${v.accessory}.
Motif: ${v.motif}. Vibe: ${v.vibe}.
Brand: espo, neon-cyber esports organization, primary ${m.color[0]} / accent ${m.color[1]}.
Style: cel-shaded, dynamic 3/4 pose, sharp linework, studio banner lighting, neon bokeh, detailed face.

--ar 3:4 --style raw --stylize 300 --v 6
Negative: blurry, watermark, text, logo, extra limbs, low quality, realistic photo.
`;
    }).join('\n---\n\n');
    download('espo-all-prompts.txt', lines, 'text/plain');
  };

  return (
    <section className="members" id="members">
      <div className="wrap">
        <div className="section-head">
          <div className="section-title-block">
            <div className="section-kicker">MEMBERS / メンバー — {members.length} TALENTS</div>
            <h2><span className="stroke">THE</span> <span className="accent">ROSTER</span>.</h2>
            <div className="section-jp">クリックで詳細プロファイル・画像生成プロンプトを表示。</div>
          </div>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            <button className="btn" onClick={exportAllPrompts}><Icon name="download" size={12}/> ALL PROMPTS .TXT</button>
            <button className="btn" onClick={exportBible}><Icon name="download" size={12}/> BIBLE .MD</button>
            <button className="btn" onClick={exportJson}><Icon name="download" size={12}/> .JSON</button>
          </div>
        </div>

        <div className="member-filters">
          {Object.keys(counts).map(k => (
            <button key={k} className={'filter-chip ' + (filter === k ? 'on' : '')} onClick={() => setFilter(k)}>
              {k} <span className="count">[{counts[k]}]</span>
            </button>
          ))}
        </div>

        <div className="member-grid">
          {members.map((m) => (
            <div key={m.no} className={'member ' + (show(m) ? '' : 'hidden')} onClick={() => setActive(m)}>
              <div className="member-image">
                <MemberImage member={m} />
              </div>
              <div className="member-no">NO.{m.no}</div>
              <div className={'member-role ' + m.role}>{m.role.toUpperCase()}</div>
              <div className="member-info">
                <div className="member-name">{m.name}</div>
                <div className="member-jp">{m.jp}</div>
              </div>
              <div className="member-hover">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <span className="h-no">NO.{m.no}</span>
                  <span className="h-no">{m.role.toUpperCase()}</span>
                </div>
                <div>
                  <div className="h-name">{m.name}</div>
                  <div style={{fontSize:12,margin:'4px 0 8px'}}>{m.jp}</div>
                  <div className="h-bio">{m.bio}</div>
                  <div className="h-stats">
                    <div>K/D <span>{m.stats.kd}</span></div>
                    <div>HRS <span>{m.stats.hrs}</span></div>
                  </div>
                  <div style={{marginTop:10,fontFamily:'var(--font-mono)',fontSize:10,letterSpacing:'0.15em'}}>CLICK → 詳細 & PROMPT</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {active && <CharModal member={active} onClose={() => setActive(null)} />}
    </section>
  );
};

function download(name, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function buildBibleMarkdown(members) {
  let md = `# espo — Character Bible\n\nVirtual esports Project (fictional brand).\nGenerated from espo/data.js.\n\n---\n\n`;
  members.forEach(m => {
    md += `## NO.${m.no} — ${m.name} (${m.jp})\n\n`;
    md += `- **Role:** ${m.role.toUpperCase()}\n`;
    md += `- **K/D:** ${m.stats.kd}  |  **Stream hrs:** ${m.stats.hrs}\n`;
    md += `- **Brand colors:** \`${m.color[0]}\` / \`${m.color[1]}\`\n`;
    md += `- **Bio:** ${m.bio}\n\n`;
    md += `### Visual\n`;
    Object.entries(m.visual).forEach(([k, v]) => { md += `- **${k}:** ${v}\n`; });
    const v = m.visual || {};
    md += `\n### Image-gen prompt\n\n\`\`\`\n`;
    md += `Anime-style character portrait of "${m.name}" (${m.jp}), espo VTuber esports talent.\n`;
    md += `${v.hair||''}. ${v.eyes||''} eyes. ${v.outfit||''}. ${v.accessory||''}.\n`;
    md += `Motif: ${v.motif||''}. Vibe: ${v.vibe||''}. Role: ${m.role.toUpperCase()}.\n`;
    md += `Cel-shaded, 3/4 pose, neon bokeh, primary ${m.color[0]} / accent ${m.color[1]}.\n`;
    md += `--ar 3:4 --style raw --stylize 300 --v 6\n`;
    md += `\`\`\`\n\n---\n\n`;
  });
  return md;
}

// ====== TROPHIES ======
window.Trophies = function() {
  return (
    <section className="trophies" id="trophies">
      <div className="wrap">
        <div className="section-head">
          <div className="section-title-block">
            <div className="section-kicker">TROPHIES / 戦績</div>
            <h2><span className="stroke">WE</span> <span className="accent">WIN</span>.</h2>
            <div className="section-jp">勝ち取ってきた栄光の記録。</div>
          </div>
          <a href="trophies.html" className="view-all">ALL TROPHIES →</a>
        </div>
        <div className="trophy-grid">
          {window.TROPHIES.map((t, i) => (
            <a key={i} href={`trophies.html`} className={'trophy-card ' + (t.featured ? 'featured' : '')} style={{textDecoration:'none',color:'inherit',display:'block'}}>
              <div className="rank">{t.rank}</div>
              <div className="event">{t.event}</div>
              <div className="date">{t.date}</div>
              <div className="team">
                {t.team.map(m => <span key={m} className="team-chip">{m}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====== MEDIA ======
window.Media = function() {
  return (
    <section className="media" id="media">
      <div className="wrap">
        <div className="section-head">
          <div className="section-title-block">
            <div className="section-kicker">MEDIA / メディア</div>
            <h2><span className="accent">MV</span>. <span className="stroke">ANIME</span>. <span className="accent">MORE</span>.</h2>
            <div className="section-jp">音楽・アニメ・PV。espo を深く感じろ。</div>
          </div>
          <a className="view-all" href="#">ALL MEDIA →</a>
        </div>
        <div className="media-grid">
          {window.MEDIA.map((m, i) => (
            <div key={i} className="media-card">
              <div className="thumb">
                <StripePlaceholder colors={m.color} label={m.label + ' THUMBNAIL'} dense />
              </div>
              <div className="overlay" />
              <div className="label">{m.label}</div>
              <div className="play" />
              <div className="title-row">
                <h3>{m.title}</h3>
                <div className="date">{m.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ====== GOODS ======
window.Goods = function() {
  // Pick up to 4 items that have images, from GOODS_DATA if available
  const allGoods = (window.GOODS_DATA || window.GOODS || []);
  const featured = allGoods.filter(g => g.img).slice(0, 4);
  // fallback if no GOODS_DATA loaded
  const items = featured.length ? featured : (window.GOODS || []).slice(0, 4);

  return (
    <section className="goods" id="goods">
      <div className="wrap">
        <div className="section-head">
          <div className="section-title-block">
            <div className="section-kicker">GOODS / グッズ — SS 2026</div>
            <h2><span className="accent">WEAR</span> <span className="stroke">THE</span> <span className="accent">CREW</span>.</h2>
            <div className="section-jp">新コレクション販売中。限定アイテムも。</div>
          </div>
          <a href="store.html" className="view-all">STORE →</a>
        </div>
        <div className="goods-hero">
          <div className="goods-feature">
            <div>
              <div className="big-type">
                <span className="mag">SS26</span><br/>
                <span className="stroke">COLLECTION</span>
              </div>
              <div className="caption">04.18 LAUNCH — LIMITED QTY</div>
            </div>
            <a href="store.html" className="btn btn-solid" style={{alignSelf:'flex-start'}}>SHOP NOW <Icon name="arrow-right" size={12}/></a>
          </div>
          <div className="goods-list">
            {items.map((g, i) => (
              <a key={i} href="store.html" className="goods-item" style={{textDecoration:'none'}}>
                <div className="img" style={{position:'relative',overflow:'hidden'}}>
                  {g.img
                    ? <img src={g.img} alt={g.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
                    : <StripePlaceholder colors={g.colors || g.color || ['#1a1a2e','#36f0ff']} label={g.name} dense />
                  }
                </div>
                <div>
                  <div className="tag">{g.tag}</div>
                  <h4>{g.name}</h4>
                </div>
                <div className="price"><span className="yen">¥</span>{(g.price).toLocaleString()}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ====== AUDITION ======
window.Audition = function() {
  const [time, setTime] = uS({ d: 43, h: 11, m: 28, s: 14 });
  uE(() => {
    const id = setInterval(() => {
      setTime(t => {
        let { d, h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; d -= 1; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="audition" id="audition">
      <div className="audition-bg" />
      <div className="audition-inner">
        <div>
          <div className="deadline">■ DEADLINE 2026.05.31 23:59 JST</div>
          <h2>
            <span className="stroke">JOIN</span><br/>
            <span className="accent">espo</span>.
          </h2>
          <p>次世代 Virtual esports Project「espo」は、本気でゲームと向き合う新しい仲間を募集しています。年齢・性別・配信経験不問。あなたの情熱だけを見る。</p>
          <div className="audition-cta">
          <a href="audition.html" className="btn btn-solid" style={{padding:'18px 32px'}}>APPLY NOW <Icon name="arrow-right" size={12}/></a>
            <a href="audition-detail.html" className="btn">詳細を見る</a>
          </div>
        </div>
        <div className="audition-visual">
          <div className="audition-corners"><span/><span/><span/><span/></div>
          <div className="audition-countdown">
            <div className="audition-countdown-inner">
              <div className="label">// TIME REMAINING</div>
              <div className="big-num">{String(time.d).padStart(2,'0')}</div>
              <div className="label">DAYS</div>
              <div className="countdown-units">
                <div><div className="u-val">{String(time.h).padStart(2,'0')}</div><div className="u-lab">HRS</div></div>
                <div><div className="u-val">{String(time.m).padStart(2,'0')}</div><div className="u-lab">MIN</div></div>
                <div><div className="u-val">{String(time.s).padStart(2,'0')}</div><div className="u-lab">SEC</div></div>
                <div><div className="u-val" style={{color:'var(--accent)'}}>GO</div><div className="u-lab">NOW</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ====== FOOTER ======
window.Footer = function() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div>
          <div className="foot-big">
            <span className="stroke">FOR</span> <span className="accent">THE</span><br/>
            <span className="accent">CROWN</span>.
          </div>
          <div className="foot-caption">espo — VIRTUAL ESPORTS PROJECT © 2026</div>
        </div>
        <div className="foot-col">
          <h5>SITE</h5>
          <ul>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="#members">MEMBERS</a></li>
            <li><a href="#trophies">TROPHIES</a></li>
            <li><a href="#media">MEDIA</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>SUPPORT</h5>
          <ul>
            <li><a href="fanclub.html">FAN CLUB</a></li>
            <li><a href="store.html">STORE</a></li>
            <li><a href="guidelines.html">GUIDELINES</a></li>
            <li><a href="faq.html">FAQ</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>COMPANY</h5>
          <ul>
            <li><a href="corporate.html">CORPORATE</a></li>
            <li><a href="careers.html">CAREERS</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            <li><a href="press.html">PRESS</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <div>© 2026 espo. ALL RIGHTS RESERVED. — 架空のブランドです。</div>
        <div className="foot-socials">
          <a href="#"><Icon name="twitter" size={14}/></a>
          <a href="#"><Icon name="youtube" size={14}/></a>
          <a href="#"><Icon name="discord" size={14}/></a>
          <a href="#"><Icon name="tiktok" size={14}/></a>
        </div>
      </div>
    </footer>
  );
};
