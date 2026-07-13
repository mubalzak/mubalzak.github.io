/* =========================================================
   SMART CLASSROOM DASHBOARD — XII-H — SMA NEGERI 2 TUBAN
   Semua data di bawah ini MUDAH DIEDIT.
   ========================================================= */

/* ---------- 1. IDENTITAS KELAS (boleh diedit) ---------- */
const CLASS_INFO = {
  schoolName: "SMA NEGERI 2 TUBAN",
  className: "SOSHUM CLASS",
  classCode: "XII-H • HISTORIC",
};

/* ---------- 2. JAM PELAJARAN (10 jam per hari) ---------- */
// Sumber: jadwal cetak "aSc Timetables", berlaku mulai 7/10/2026.
const PERIODS = [
  { no: 1,  start: "07:00", end: "07:45" },
  { no: 2,  start: "07:45", end: "08:30" },
  { no: 3,  start: "08:30", end: "09:15" },
  { no: 4,  start: "09:15", end: "10:00" },
  { no: 5,  start: "10:15", end: "11:00" },
  { no: 6,  start: "11:00", end: "11:45" },
  { no: 7,  start: "12:15", end: "13:00" },
  { no: 8,  start: "13:00", end: "13:45" },
  { no: 9,  start: "13:45", end: "14:30" },
  { no: 10, start: "14:30", end: "15:15" },
];

/* ---------- 3. JADWAL PELAJARAN PER HARI (MUDAH DIEDIT) ----------
   Setiap objek = satu blok pelajaran.
   "periods": daftar nomor jam yang digabung (jika 1 subjek berlangsung
   beberapa jam pelajaran sekaligus / jam ganda).

   ⚠️ CATATAN VERIFIKASI:
   Beberapa tulisan pada foto jadwal asli agak buram/miring sehingga
   ada beberapa sel yang mungkin perlu dicek ulang & disunting:
   - Senin jam ke-3 (Penjasorkes): nama guru tidak tercetak jelas.
   - Kamis jam ke-9 & 10: tidak ada keterangan pada foto (dianggap kosong).
   - Jumat tampak hanya sampai jam ke-6 (sesuai catatan "menyesuaikan bel").
   Silakan sunting langsung nilai di bawah ini sesuai jadwal resmi terbaru.
------------------------------------------------------------------- */
const SCHEDULE = {
  senin: [
    { periods: [1, 2],  subject: "Bahasa Inggris Tingkat Lanjut", teacher: "Ropikoherna, C." },
    { periods: [3],     subject: "Penjasorkes",                   teacher: "—" },
    { periods: [4, 5],  subject: "Prakarya",                      teacher: "Agus Sigid W." },
    { periods: [6],     subject: "BK (Bimbingan Konseling)",      teacher: "Yayuk Kasmawati" },
    { periods: [7],     subject: "Matematika",                    teacher: "Siti Naimah" },
    { periods: [8,9,10],subject: "Geografi",                      teacher: "Rosida, S.Pd." },
  ],
  selasa: [
    { periods: [1, 2],  subject: "Penjasorkes",                   teacher: "Novis Eka Prayuda" },
    { periods: [3, 4],  subject: "Matematika",                    teacher: "Siti Naimah" },
    { periods: [5],     subject: "Sosiologi",                     teacher: "Sri Utami" },
    { periods: [6],     subject: "Sejarah",                       teacher: "Ropikoherna, C." },
    { periods: [7],     subject: "Ekonomi",                       teacher: "Agus Sugianto" },
    { periods: [8,9,10],subject: "Bahasa Inggris",                teacher: "Karyono" },
  ],
  rabu: [
    { periods: [1, 2],  subject: "Bahasa Indonesia",              teacher: "Munawaroh" },
    { periods: [3, 4],  subject: "Bahasa Inggris Tingkat Lanjut",  teacher: "Munawaroh" },
    { periods: [5, 6],  subject: "Geografi",                      teacher: "Joenita Darmawati" },
    { periods: [7, 8],  subject: "Ekonomi",                       teacher: "Joenita Darmawati" },
    { periods: [9,10],  subject: "PPKN",                          teacher: "Rosida, S.Pd." },
  ],
  kamis: [
    { periods: [1, 2],  subject: "PAI",                           teacher: "M. Eko Arisusanto" },
    { periods: [3, 4],  subject: "Geografi",                      teacher: "Joenita Darmawati" },
    { periods: [5, 6],  subject: "Bahasa Jawa",                   teacher: "Bambang Purnomo" },
    { periods: [7, 8],  subject: "PPKN",                          teacher: "Rosida, S.Pd." },
  ],
  jumat: [
    { periods: [1, 2],  subject: "Sosiologi",                     teacher: "Sri Utami" },
    { periods: [3, 4],  subject: "Bahasa Indonesia",              teacher: "Munawaroh" },
    { periods: [5],     subject: "Seni Budaya",                   teacher: "Lusita Destriyanti" },
    { periods: [6],     subject: "Ekonomi",                       teacher: "Joenita Darmawati" },
  ],
};

/* ---------- 4. PENGUMUMAN RUNNING TEXT (MUDAH DIEDIT) ---------- */
const ANNOUNCEMENTS = [
  "Selamat datang di Smart Classroom Dashboard Kelas XII-H 🎓",
  "Mohon menjaga kebersihan dan ketertiban kelas.",
  "Piket kelas hari ini harap memastikan proyektor & AC dimatikan setelah jam terakhir.",
  "Jadwal dapat berubah sewaktu-waktu menyesuaikan bel sekolah.",
];

/* =========================================================
   ======================= LOGIKA ==========================
   ========================================================= */

const DAY_KEYS = ["minggu","senin","selasa","rabu","kamis","jumat","sabtu"];
const DAY_LABELS = {
  minggu:"Minggu", senin:"Senin", selasa:"Selasa", rabu:"Rabu",
  kamis:"Kamis", jumat:"Jumat", sabtu:"Sabtu"
};
const MONTH_LABELS = [
  "Januari","Februari","Maret","April","Mei","Juni",
  "Juli","Agustus","September","Oktober","November","Desember"
];

function pad(n){ return String(n).padStart(2,"0"); }

function timeToMinutes(t){
  const [h,m] = t.split(":").map(Number);
  return h*60+m;
}

/* Build a flat, time-ordered list of lesson blocks with start/end minutes */
function buildDayBlocks(dayKey){
  const blocks = SCHEDULE[dayKey] || [];
  return blocks.map(b => {
    const firstP = PERIODS.find(p => p.no === b.periods[0]);
    const lastP  = PERIODS.find(p => p.no === b.periods[b.periods.length-1]);
    return {
      ...b,
      start: firstP.start,
      end: lastP.end,
      startMin: timeToMinutes(firstP.start),
      endMin: timeToMinutes(lastP.end),
    };
  });
}

/* ---------- CLOCK & DATE ---------- */
function updateClock(){
  const now = new Date();
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());
  document.getElementById("clock").textContent = `${h}:${m}:${s}`;

  const dayName = DAY_LABELS[DAY_KEYS[now.getDay()]];
  const dateStr = `${dayName}, ${now.getDate()} ${MONTH_LABELS[now.getMonth()]} ${now.getFullYear()}`;
  document.getElementById("date").textContent = dateStr;

  return now;
}

/* ---------- RENDER SCHEDULE PANEL ---------- */
function renderSchedule(dayKey, nowMin){
  const list = document.getElementById("scheduleList");
  const blocks = buildDayBlocks(dayKey);

  document.getElementById("todayLabel").textContent = DAY_LABELS[dayKey];

  if(blocks.length === 0){
    list.innerHTML = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <div class="icon">🌙</div>
      <h3>Tidak Ada Jadwal Pelajaran</h3>
      <p>Selamat beristirahat! Sampai jumpa hari sekolah berikutnya.</p>`;
    list.appendChild(empty);
    return blocks;
  }

  list.innerHTML = blocks.map(b => {
    let state = "upcoming";
    if(nowMin >= b.endMin) state = "done";
    else if(nowMin >= b.startMin && nowMin < b.endMin) state = "active";

    const badge = state === "active" ? "SEKARANG" : state === "done" ? "SELESAI" : "AKAN DATANG";
    const periodLabel = b.periods.length > 1
      ? `Jam ${b.periods[0]}–${b.periods[b.periods.length-1]}`
      : `Jam ${b.periods[0]}`;

    return `
      <div class="lesson lesson--${state}">
        <div class="lesson__time">
          <span>${b.start}</span>
          <small>${periodLabel}</small>
        </div>
        <div class="lesson__info">
          <div class="lesson__subject">${b.subject}</div>
          <div class="lesson__teacher">${b.teacher}</div>
        </div>
        <div class="lesson__badge">${badge}</div>
      </div>`;
  }).join("");

  return blocks;
}

/* ---------- RENDER NOW / NEXT CARDS ---------- */
function renderStatusCards(blocks, nowMin){
  const nowCard = document.getElementById("nowCard");
  const nextCard = document.getElementById("nextCard");

  const active = blocks.find(b => nowMin >= b.startMin && nowMin < b.endMin);
  const upcoming = blocks.filter(b => b.startMin > nowMin).sort((a,b)=>a.startMin-b.startMin);
  const next = upcoming[0];

  if(active){
    nowCard.style.display = "";
    document.getElementById("nowSubject").textContent = active.subject;
    document.getElementById("nowTeacher").textContent = active.teacher;
    document.getElementById("nowTime").textContent = `${active.start} – ${active.end}`;

    const remain = active.endMin - nowMin;
    const rh = Math.floor(remain/60), rm = remain%60;
    document.getElementById("nowCountdown").textContent =
      rh > 0 ? `${rh}j ${pad(rm)}m lagi` : `${rm} menit lagi`;

    const total = active.endMin - active.startMin;
    const done = nowMin - active.startMin;
    const pct = Math.min(100, Math.max(0,(done/total)*100));
    document.getElementById("nowProgress").style.width = pct + "%";
  } else {
    document.getElementById("nowSubject").textContent = "Tidak ada kelas";
    document.getElementById("nowTeacher").textContent = "—";
    document.getElementById("nowTime").textContent = "--:-- – --:--";
    document.getElementById("nowCountdown").textContent = "—";
    document.getElementById("nowProgress").style.width = "0%";
  }

  if(next){
    nextCard.style.display = "";
    document.getElementById("nextSubject").textContent = next.subject;
    document.getElementById("nextTeacher").textContent = next.teacher;
    document.getElementById("nextTime").textContent = `${next.start} – ${next.end}`;
  } else {
    document.getElementById("nextSubject").textContent = "Tidak ada lagi hari ini";
    document.getElementById("nextTeacher").textContent = "—";
    document.getElementById("nextTime").textContent = "--:-- – --:--";
  }

  // stats
  const doneCount = blocks.filter(b => nowMin >= b.endMin).length;
  document.getElementById("statTotal").textContent = blocks.length;
  document.getElementById("statDone").textContent = doneCount;
  document.getElementById("statLeft").textContent = Math.max(0, blocks.length - doneCount);
}

/* ---------- MARQUEE ---------- */
function renderMarquee(){
  const track = document.getElementById("marqueeTrack");
  const itemsHtml = ANNOUNCEMENTS
    .map(a => `<div class="marquee__item">✦ <b>INFO</b> — ${a}</div>`)
    .join("");
  // duplicated twice for seamless infinite scroll
  track.innerHTML = itemsHtml + itemsHtml;
}

/* ---------- MAIN TICK ---------- */
function tick(){
  const now = updateClock();
  const dayKey = DAY_KEYS[now.getDay()];
  const nowMin = now.getHours()*60 + now.getMinutes();

  const blocks = renderSchedule(dayKey, nowMin);
  renderStatusCards(blocks, nowMin);
}

/* ---------- FULLSCREEN TOGGLE ---------- */
document.getElementById("fsBtn").addEventListener("click", () => {
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen().catch(()=>{});
  } else {
    document.exitFullscreen();
  }
});

/* ---------- APPLY CLASS_INFO TO HEADER ---------- */
function applyClassInfo(){
  document.getElementById("schoolName").textContent = `🏫 ${CLASS_INFO.schoolName}`;
  document.getElementById("className").textContent = `📖 ${CLASS_INFO.className}`;
  document.getElementById("classCode").textContent = `🎖 ${CLASS_INFO.classCode}`;
  document.title = `Smart Classroom Dashboard — ${CLASS_INFO.classCode}`;
}

/* ---------- INIT ---------- */
applyClassInfo();
renderMarquee();
tick();
setInterval(tick, 1000);
