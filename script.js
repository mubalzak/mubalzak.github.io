// =====================
// JADWAL XI-H
// =====================
const SCHEDULE = {
  1: [
    { time:"07:00", end:"07:45", subject:"Upacara", guru:"" },
    { time:"07:45", end:"08:30", subject:"Bhs Inggris TL", guru:"Endah Listyani" },
    { time:"08:30", end:"09:15", subject:"Bhs Inggris TL", guru:"Endah Listyani" },
    { time:"09:15", end:"10:00", subject:"Bhs Indonesia", guru:"Munawaroh" },
    { time:"10:00", end:"10:15", subject:"Istirahat", guru:"" },
    { time:"10:15", end:"11:00", subject:"Bhs Indonesia", guru:"Munawaroh" },
    { time:"11:00", end:"11:45", subject:"Bahasa Jawa", guru:"Putri Wahyu Pramudita" },
    { time:"11:45", end:"12:15", subject:"Istirahat", guru:"" },
    { time:"12:15", end:"13:00", subject:"Bahasa Jawa", guru:"Putri Wahyu Pramudita" },
    { time:"13:00", end:"13:45", subject:"Geografi", guru:"Intan Ratna J" },
    { time:"13:45", end:"14:30", subject:"Geografi", guru:"Intan Ratna J" },
    { time:"14:30", end:"15:15", subject:"Geografi", guru:"Intan Ratna J" },
  ],
  2: [
    { time:"07:00", end:"09:15", subject:"PAI", guru:"M. Eko Arisusanto" },
    { time:"09:15", end:"10:00", subject:"Matematika", guru:"Shobrina Nurul Mufida" },
    { time:"10:00", end:"10:15", subject:"Istirahat", guru:"" },
    { time:"10:15", end:"11:00", subject:"Matematika", guru:"Shobrina Nurul Mufida" },
    { time:"11:00", end:"11:45", subject:"Sosiologi", guru:"Della Choirunnisa" },
    { time:"11:45", end:"12:15", subject:"Istirahat", guru:"" },
    { time:"12:15", end:"13:00", subject:"Sosiologi", guru:"Della Choirunnisa" },
    { time:"13:00", end:"13:45", subject:"Geografi", guru:"Intan Ratna J" },
    { time:"13:45", end:"14:30", subject:"Geografi", guru:"Intan Ratna J" },
    { time:"14:30", end:"15:15", subject:"Geografi", guru:"Intan Ratna J" },
  ],
  3: [
    { time:"07:00", end:"07:45", subject:"Ekonomi", guru:"Susanti" },
    { time:"07:45", end:"08:30", subject:"Ekonomi", guru:"Susanti" },
    { time:"08:30", end:"09:15", subject:"Sosiologi", guru:"Della Choirunnisa" },
    { time:"09:15", end:"10:00", subject:"Sosiologi", guru:"Della Choirunnisa" },
    { time:"10:00", end:"10:15", subject:"Istirahat", guru:"" },
    { time:"10:15", end:"11:00", subject:"Bhs Indonesia", guru:"Munawaroh" },
    { time:"11:00", end:"11:45", subject:"Bhs Indonesia", guru:"Munawaroh" },
    { time:"11:45", end:"12:15", subject:"Istirahat", guru:"" },
    { time:"12:15", end:"13:00", subject:"Sejarah", guru:"Gargarisnac D" },
    { time:"13:00", end:"13:45", subject:"Sejarah", guru:"Gargarisnac D" },
    { time:"13:45", end:"14:30", subject:"Prakarya", guru:"Puji Rahayu" },
    { time:"14:30", end:"15:15", subject:"Prakarya", guru:"Puji Rahayu" },
  ],
  4: [
    { time:"07:00", end:"07:45", subject:"Seni Budaya", guru:"Lusita Destriyanti" },
    { time:"07:45", end:"08:30", subject:"Seni Budaya", guru:"Lusita Destriyanti" },
    { time:"08:30", end:"09:15", subject:"Bhs Inggris TL", guru:"Endah Listyani" },
    { time:"09:15", end:"10:00", subject:"Bhs Inggris TL", guru:"Endah Listyani" },
    { time:"10:00", end:"10:15", subject:"Istirahat", guru:"" },
    { time:"10:15", end:"11:00", subject:"Matematika", guru:"Shobrina Nurul Mufida" },
    { time:"11:00", end:"11:45", subject:"Matematika", guru:"Shobrina Nurul Mufida" },
    { time:"11:45", end:"12:15", subject:"Istirahat", guru:"" },
    { time:"12:15", end:"13:00", subject:"Bhs Inggris", guru:"Karyono" },
    { time:"13:00", end:"13:45", subject:"Bhs Inggris", guru:"Karyono" },
    { time:"13:45", end:"14:30", subject:"Bhs Inggris", guru:"Karyono" },
    { time:"14:30", end:"15:15", subject:"Bhs Inggris", guru:"Karyono" },
  ],
  5: [
    { time:"07:00", end:"09:15", subject:"Penjaskes", guru:"M. Yusuf Ali" },
    { time:"09:15", end:"10:00", subject:"PPKN", guru:"Bambang Purnomo" },
    { time:"10:00", end:"10:15", subject:"Istirahat", guru:"" },
    { time:"10:15", end:"11:00", subject:"PPKN", guru:"Bambang Purnomo" },
    { time:"11:00", end:"11:45", subject:"Ekonomi", guru:"Susanti" },
    { time:"11:45", end:"12:15", subject:"Istirahat", guru:"" },
    { time:"12:15", end:"13:00", subject:"Ekonomi", guru:"Susanti" },
    { time:"13:00", end:"13:45", subject:"BK", guru:"Usdika Siswanto" },
    { time:"13:45", end:"14:30", subject:"BK", guru:"Usdika Siswanto" },
  ],
  6:[], 0:[],
};

const DAYS_ID = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const MONTHS_ID = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

const QUOTES = [
  "Belajar itu penting. Tapi tidur juga realistis.",
  "Nilai jelek bukan akhir dunia. Tapi mending jangan dicoba.",
  "HP disimpen dulu. Ilmu dulu, meme nanti.",
  "Yang ngantuk: kopi. Yang males: motivasi. Yang dua-duanya: kita semua.",
  "Ujian mendekat. Tidur menjauh. Hidup tidak adil.",
  "Fokus! Masa depan tidak bisa diundur seperti tugas.",
  "Absen hadir ✓ — Otak hadir? Pertanyaan bagus.",
  "Guru datang, semua tiba-tiba punya pertanyaan.",
  "Rajin pangkal pandai. Malas pangkal... tetap masuk juga sih.",
  "Yang penting usaha. Hasilnya? Itu urusan rapor.",
  "Sekolah itu investasi. Sayang kalau bolos.",
  "Semangat! Guru juga pernah capek ngajar.",
];

let quoteIdx = Math.floor(Math.random() * QUOTES.length);
let themeOverride = null;

// =====================
// STARS GENERATOR
// =====================
function generateStars() {
  const c = document.getElementById('stars');
  c.innerHTML = '';
  for(let i=0;i<120;i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random()*2.5+0.5;
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${size}px; height:${size}px;
      animation-delay:${Math.random()*3}s;
      animation-duration:${1.5+Math.random()*2}s;
    `;
    c.appendChild(s);
  }
}
generateStars();

// =====================
// THEME
// =====================
const THEMES = {
  pagi:  { cls:'time-pagi',  badge:'🌅 PAGI',   icon:'🌤️' },
  siang: { cls:'time-siang', badge:'☀️ SIANG',  icon:'☀️' },
  sore:  { cls:'time-sore',  badge:'🌇 SORE',   icon:'🌆' },
  malam: { cls:'time-malam', badge:'🌌 MALAM',  icon:'🌙' },
};

function getAutoTheme(h) {
  if(h>=5&&h<9) return 'pagi';
  if(h>=9&&h<15) return 'siang';
  if(h>=15&&h<18) return 'sore';
  return 'malam';
}

function setTheme(t) {
  if(t==='auto') { themeOverride=null; return; }
  themeOverride = t;
  applyTheme(t);
  document.getElementById('hp-panel').classList.remove('open');
}

function applyTheme(t) {
  const body = document.body;
  Object.values(THEMES).forEach(th => body.classList.remove(th.cls));
  body.classList.add(THEMES[t].cls);
  document.getElementById('time-badge').textContent = THEMES[t].badge;
}

function updateTheme() {
  const t = themeOverride || getAutoTheme(new Date().getHours());
  applyTheme(t);
}

// =====================
// WEATHER (Open-Meteo, gratis)
// =====================
async function fetchWeather() {
  try {
    // Tuban lat/lon
    const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.9&longitude=112.05&current=temperature_2m,weathercode&timezone=Asia%2FJakarta');
    const d = await r.json();
    const temp = Math.round(d.current.temperature_2m);
    const code = d.current.weathercode;
    const info = weatherCode(code);
    document.getElementById('w-icon').textContent = info.icon;
    document.getElementById('w-temp').textContent = temp + '°C';
    document.getElementById('w-desc').textContent = info.desc;
  } catch(e) {
    document.getElementById('w-desc').textContent = 'Tuban';
  }
}

function weatherCode(c) {
  if(c===0) return {icon:'☀️',desc:'Cerah'};
  if(c<=2) return {icon:'🌤️',desc:'Berawan sebagian'};
  if(c<=3) return {icon:'☁️',desc:'Mendung'};
  if(c<=48) return {icon:'🌫️',desc:'Berkabut'};
  if(c<=57) return {icon:'🌦️',desc:'Gerimis'};
  if(c<=67) return {icon:'🌧️',desc:'Hujan'};
  if(c<=77) return {icon:'❄️',desc:'Salju'};
  if(c<=82) return {icon:'🌦️',desc:'Hujan lokal'};
  if(c<=99) return {icon:'⛈️',desc:'Badai petir'};
  return {icon:'🌡️',desc:'—'};
}

fetchWeather();
setInterval(fetchWeather, 10*60*1000);

// =====================
// ANNOUNCEMENT
// =====================
function sendAnnouncement() {
  const msg = document.getElementById('ann-input').value.trim();
  if(!msg) return;
  const bar = document.getElementById('announcement');
  bar.textContent = '📢 ' + msg;
  bar.style.display = 'block';
  document.getElementById('hp-panel').classList.remove('open');
}

function clearAnnouncement() {
  document.getElementById('announcement').style.display = 'none';
  document.getElementById('ann-input').value = '';
  document.getElementById('hp-panel').classList.remove('open');
}

// =====================
// UTILS
// =====================
function toMin(t) { const [h,m]=t.split(':').map(Number); return h*60+m; }
function pad(n) { return String(n).padStart(2,'0'); }

function getCurrNext(sched, nowMin) {
  let cur=null, nxt=null;
  for(const s of sched) {
    const st=toMin(s.time), en=toMin(s.end);
    if(nowMin>=st&&nowMin<en) cur=s;
    if(nowMin<st&&!nxt) nxt=s;
  }
  return {cur,nxt};
}

function renderToday(sched, nowMin) {
  const c = document.getElementById('today-schedule');
  c.innerHTML='';
  sched.forEach(item => {
    const st=toMin(item.time), en=toMin(item.end);
    const isNow = nowMin>=st&&nowMin<en;
    const isPast = nowMin>=en;
    const d = document.createElement('div');
    d.style.cssText=`display:flex;align-items:center;gap:8px;padding:5px 8px;border-radius:7px;
      background:${isNow?'rgba(255,255,255,0.15)':'transparent'};
      border-left:2px solid ${isNow?'rgba(255,255,255,0.8)':isPast?'rgba(255,255,255,0.15)':'rgba(255,255,255,0.3)'};
      opacity:${isPast?'0.4':'1'};`;
    d.innerHTML=`
      <span style="font-family:'Space Mono',monospace;font-size:9px;opacity:0.6;min-width:80px">${item.time}–${item.end}</span>
      <span style="font-size:12px;font-weight:600;">${item.subject}${item.guru?'<span style="font-size:9px;opacity:0.55;font-weight:400;margin-left:5px">'+item.guru+'</span>':''}</span>
      ${isNow?'<span style="margin-left:auto;font-size:9px;font-family:monospace;opacity:0.8">NOW</span>':''}
    `;
    c.appendChild(d);
  });
}

function renderBottom(dayIdx) {
  const c = document.getElementById('bottom-row');
  c.innerHTML='';
  [1,2,3,4,5].forEach(d => {
    const isActive = d===dayIdx;
    const sched = (SCHEDULE[d]||[]).filter(s=>s.subject!=='Istirahat').slice(0,4);
    const div = document.createElement('div');
    div.className='day-mini'+(isActive?' active':'');
    div.innerHTML=`<div class="day-mini-name">${DAYS_ID[d]}</div>
      <div style="display:flex;flex-direction:column;gap:2px;">
        ${sched.map(s=>`<div class="day-mini-subject">${s.subject}</div>`).join('')}
        ${sched.length===0?'<div class="day-mini-subject" style="opacity:0.3">Kosong</div>':''}
      </div>`;
    c.appendChild(div);
  });
}

// =====================
// MAIN UPDATE
// =====================
function update() {
  const now = new Date();
  const h=now.getHours(), m=now.getMinutes(), s=now.getSeconds();
  const dayIdx=now.getDay();
  const nowMin=h*60+m;

  document.getElementById('hh').textContent=pad(h);
  document.getElementById('mm').textContent=pad(m);
  document.getElementById('ss').textContent=pad(s);
  document.getElementById('day-name').textContent=DAYS_ID[dayIdx];
  document.getElementById('date-full').textContent=`${now.getDate()} ${MONTHS_ID[now.getMonth()]} ${now.getFullYear()}`;

  const sched = SCHEDULE[dayIdx]||[];
  const {cur,nxt} = getCurrNext(sched,nowMin);

  document.getElementById('current-subject').textContent = cur?cur.subject:(nowMin<7*60?'Belum Mulai':'Pulang / Luar Jam');
  document.getElementById('current-time').textContent = cur?`${cur.time} – ${cur.end}${cur.guru?' • '+cur.guru:''}` :'—';
  document.getElementById('next-subject').textContent = nxt?nxt.subject:'Tidak ada lagi hari ini';
  document.getElementById('next-time').textContent = nxt?`Mulai ${nxt.time}${nxt.guru?' • '+nxt.guru:''}` :'—';

  const start=7*60, end=15*60+15;
  const pct=Math.min(100,Math.max(0,((nowMin-start)/(end-start))*100));
  document.getElementById('progress-fill').style.width=pct.toFixed(1)+'%';
  document.getElementById('prog-pct').textContent=pct.toFixed(0)+'%';

  renderToday(sched,nowMin);
  renderBottom(dayIdx);
  updateTheme();
}

// Quote rotate
setInterval(()=>{
  const el=document.getElementById('quote-text');
  el.style.opacity='0';
  setTimeout(()=>{
    quoteIdx=(quoteIdx+1)%QUOTES.length;
    el.textContent='"'+QUOTES[quoteIdx]+'"';
    el.style.opacity='1';
  },500);
}, 12000);

update();
setInterval(update,1000);