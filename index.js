// NxfireDB — landing page: i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "NxfireDB — Lapisan Lokal di Depan Firebase",
    "meta.desc": "NxfireDB — kirim JSON ke localhost, NxfireDB yang meneruskannya ke Firebase. Cache, antrian offline, realtime WebSocket lokal, SDK 5 bahasa. Tanpa domain, tanpa biaya.",
    "nav.about": "Tentang",
    "nav.features": "Fitur",
    "nav.usage": "Cara Pakai",
    "nav.sdk": "SDK",
    "nav.install": "Pasang",
    "hero.badge": "Lapisan lokal di depan Firebase Realtime Database",
    "hero.title": "Kirim JSON ke <span class=\"accent\">localhost</span>, biar kami yang bicara ke cloud",
    "hero.desc": "Aplikasi Anda cukup bicara ke <strong>127.0.0.1:9026</strong>. NxfireDB meneruskan ke Firebase, menyembunyikan URL panjang, format <code>.json</code>, dan token auth — plus <strong>cache</strong>, <strong>antrian offline</strong>, dan <strong>realtime WebSocket lokal</strong>.",
    "hero.cta1": "Mulai Pasang",
    "hero.cta2": "Lihat Fitur",
    "flow.app": "Aplikasi Anda",
    "why.title": "Mengapa NxfireDB Ada",
    "why.sub": "Lahir dari keterbatasan — domain mahal, database berbayar mahal. Keterbatasan bukan penghalang untuk berkarya.",
    "why.1t": "Tidak Ada Domain? Tidak Perlu",
    "why.1d": "Aplikasi berbicara ke localhost (127.0.0.1:9026) — gratis, milik sendiri, dan selalu ada.",
    "why.2t": "Tidak Mampu Database Berbayar?",
    "why.2d": "Cukup tier gratis Firebase. URL panjang, format .json, dan token auth diganti satu perintah JSON sederhana.",
    "why.3t": "Internet Tidak Stabil?",
    "why.3d": "Antrian offline menyimpan operasi tulis lalu mengirimnya ulang saat koneksi kembali — data tidak hilang.",
    "why.4t": "Komputer Restart?",
    "why.4d": "Auto-start menyalakan ulang server sendiri saat komputer menyala.",
    "feat.title": "Fitur",
    "feat.sub": "Perantara lokal C++ native — tidak menyimpan data sendiri, semua data tetap di Firebase.",
    "feat.1t": "Dua Gaya Operasi",
    "feat.1d": "Gaya path Firebase (/users/iyan) atau gaya tabel yang ramah (table+key). Alias: put/insert/select/delete.",
    "feat.2t": "Cache Lokal",
    "feat.2d": "cache_ttl menyimpan respons GET di memori — latency < 1 ms, bukan 100-300 ms ke cloud. Otomatis dibatalkan saat ada tulis.",
    "feat.3t": "Realtime WebSocket Lokal",
    "feat.3d": "Subscribe per path lewat ws://127.0.0.1:9026/ws — perubahan didorong ke aplikasi Anda tanpa koneksi langsung ke Firebase.",
    "feat.4t": "Antrian Offline",
    "feat.4d": "Tulis yang gagal disimpan ke nxfire.queue.json dan dikirim ulang otomatis saat Firebase terjangkau.",
    "feat.5t": "Query Lengkap",
    "feat.5d": "orderBy, startAt, endAt, equalTo, limitToFirst/Last, shallow — langsung dari perintah JSON Anda.",
    "feat.6t": "Balasan Seragam",
    "feat.6d": "{ ok, data, meta: latency_ms } saat sukses; { ok, error, hint } saat gagal — prediktabel di semua SDK.",
    "feat.7t": "Token Akses",
    "feat.7d": "Sejak token pertama dibuat, semua perintah wajib Bearer nxf_... — disimpan sebagai hash SHA-256, dengan role admin/user dan rotasi token.",
    "use.title": "Cara Pakai",
    "use.sub": "Setup sekali, lalu lupakan bahwa Firebase ada di baliknya.",
    "use.map": "<strong>Pemetaan ke Firebase REST:</strong> set→PUT · get→GET · update→PATCH · push→POST · remove→DELETE. Konfigurasi <code>nxfire.json</code>: project, region, api_key, secret, port (9026), cache_ttl, offline_queue.",
    "sdk.title": "SDK Multi Bahasa",
    "sdk.sub": "Klien resmi siap pakai — atau tulis sendiri: protokolnya hanya HTTP + JSON.",
    "ins.title": "Cara Pasang",
    "ins.sub": "Termudah lewat npm — atau unduh paket rilis v0.2.0.",
    "ins.dlNote": "Semua paket tersedia di <a href=\"https://github.com/iyanrsaleh/nxfiredb/releases/tag/v0.2.0\" target=\"_blank\" rel=\"noopener\">Releases v0.2.0</a>. Ekstrak lalu salin isi <code>bin/</code> ke folder yang ada di PATH.",
    "ins.buildTitle": "Atau Lewat npm / Build dari Source",
    "ins.note": "C++ native (WinHTTP di Windows, socket di Linux) — tanpa dependensi eksternal. Uji otomatis berjalan terhadap mock Firebase lokal, tanpa kredensial asli.",
    "foot.tag": "Lapisan lokal di depan Firebase — bagian dari ekosistem NXDOM.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "© 2026 NxfireDB · NXDOM"
  },
  en: {
    "meta.title": "NxfireDB — A Local Layer in Front of Firebase",
    "meta.desc": "NxfireDB — send JSON to localhost, NxfireDB forwards it to Firebase. Cache, offline queue, local realtime WebSocket, SDKs in 5 languages. No domain, no cost.",
    "nav.about": "About",
    "nav.features": "Features",
    "nav.usage": "Usage",
    "nav.sdk": "SDK",
    "nav.install": "Install",
    "hero.badge": "A local layer in front of Firebase Realtime Database",
    "hero.title": "Send JSON to <span class=\"accent\">localhost</span>, let us talk to the cloud",
    "hero.desc": "Your app only talks to <strong>127.0.0.1:9026</strong>. NxfireDB forwards to Firebase, hiding long URLs, the <code>.json</code> format, and auth tokens — plus <strong>cache</strong>, <strong>offline queue</strong>, and <strong>local realtime WebSocket</strong>.",
    "hero.cta1": "Get Started",
    "hero.cta2": "See Features",
    "flow.app": "Your app",
    "why.title": "Why NxfireDB Exists",
    "why.sub": "Born from limitations — expensive domains, paid databases. Limitations are not a barrier to creating.",
    "why.1t": "No Domain? Not Needed",
    "why.1d": "Your app talks to localhost (127.0.0.1:9026) — free, yours, and always there.",
    "why.2t": "Can't Afford a Paid Database?",
    "why.2d": "Firebase's free tier is enough. Long URLs, .json format, and auth tokens become one simple JSON command.",
    "why.3t": "Unstable Internet?",
    "why.3d": "The offline queue stores write operations and resends them when the connection returns — no data lost.",
    "why.4t": "Computer Restarted?",
    "why.4d": "Auto-start relights the server on its own when the computer boots.",
    "feat.title": "Features",
    "feat.sub": "A native C++ local proxy — it stores no data itself; all data stays in Firebase.",
    "feat.1t": "Two Operation Styles",
    "feat.1d": "Firebase path style (/users/iyan) or friendly table style (table+key). Aliases: put/insert/select/delete.",
    "feat.2t": "Local Cache",
    "feat.2d": "cache_ttl keeps GET responses in memory — latency < 1 ms, not 100-300 ms to the cloud. Auto-invalidated on writes.",
    "feat.3t": "Local Realtime WebSocket",
    "feat.3d": "Subscribe per path via ws://127.0.0.1:9026/ws — changes are pushed to your app without a direct Firebase connection.",
    "feat.4t": "Offline Queue",
    "feat.4d": "Failed writes are saved to nxfire.queue.json and resent automatically once Firebase is reachable.",
    "feat.5t": "Full Query Support",
    "feat.5d": "orderBy, startAt, endAt, equalTo, limitToFirst/Last, shallow — straight from your JSON command.",
    "feat.6t": "Uniform Responses",
    "feat.6d": "{ ok, data, meta: latency_ms } on success; { ok, error, hint } on failure — predictable across all SDKs.",
    "feat.7t": "Access Tokens",
    "feat.7d": "Once the first token is created, every command requires Bearer nxf_... — stored as SHA-256 hashes, with admin/user roles and token rotation.",
    "use.title": "Usage",
    "use.sub": "Set up once, then forget Firebase is behind it.",
    "use.map": "<strong>Mapping to Firebase REST:</strong> set→PUT · get→GET · update→PATCH · push→POST · remove→DELETE. Configuration in <code>nxfire.json</code>: project, region, api_key, secret, port (9026), cache_ttl, offline_queue.",
    "sdk.title": "Multi-Language SDK",
    "sdk.sub": "Official ready-to-use clients — or write your own: the protocol is just HTTP + JSON.",
    "ins.title": "Installation",
    "ins.sub": "Easiest via npm — or download the v0.2.0 release packages.",
    "ins.dlNote": "All packages are available on <a href=\"https://github.com/iyanrsaleh/nxfiredb/releases/tag/v0.2.0\" target=\"_blank\" rel=\"noopener\">Releases v0.2.0</a>. Extract, then copy the contents of <code>bin/</code> to a folder in your PATH.",
    "ins.buildTitle": "Or via npm / Build from Source",
    "ins.note": "Native C++ (WinHTTP on Windows, sockets on Linux) — no external dependencies. Automated tests run against a local mock Firebase, no real credentials needed.",
    "foot.tag": "A local layer in front of Firebase — part of the NXDOM ecosystem.",
    "foot.company": "PT Tatiye Digital Solusindo",
    "foot.copy": "© 2026 NxfireDB · NXDOM"
  }
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxfiredb-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let saved = null;
  try { saved = localStorage.getItem("nxfiredb-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = (navigator.language || "id").slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
