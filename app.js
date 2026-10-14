const tracks = [
  {
    id: 1,
    title: "Piano di Beranda",
    artist: "Piano lembut · Fokus",
    category: "Piano",
    icon: "♫",
    art: "art-1",
    description: "Nada piano hangat untuk memulai hari perlahan.",
    kind: "piano",
    tone: 0,
  },
  {
    id: 2,
    title: "Hujan di Jendela",
    artist: "Rintik hujan · Tidur",
    category: "Hujan",
    icon: "☂",
    art: "art-2",
    description: "Rintik hujan yang konsisten seperti sore yang panjang.",
    kind: "rain",
    tone: 1,
  },
  {
    id: 3,
    title: "Hutan Setelah Hujan",
    artist: "Hutan · Burung · Angin",
    category: "Alam",
    icon: "❋",
    art: "art-3",
    description: "Suasana hutan yang segar dan lapisan burung pagi.",
    kind: "forest",
    tone: 2,
  },
  {
    id: 4,
    title: "Sungai di Kaki Bukit",
    artist: "Aliran air · Meditasi",
    category: "Air",
    icon: "≋",
    art: "art-4",
    description: "Gemercik sungai yang mengalir tanpa terburu-buru.",
    kind: "water",
    tone: 3,
  },
  {
    id: 5,
    title: "Senja dan Melodi",
    artist: "Piano + ambience alam",
    category: "Campuran",
    icon: "☼",
    art: "art-5",
    description: "Piano pelan berpadu dengan udara senja.",
    kind: "mix",
    tone: 4,
  },
  {
    id: 6,
    title: "Ombak Pantai Sunyi",
    artist: "Laut · Gelombang",
    category: "Air",
    icon: "≈",
    art: "art-6",
    description: "Ombak jauh yang datang dan pergi dengan tenang.",
    kind: "ocean",
    tone: 5,
  },
  {
    id: 7,
    title: "Malam di Kabin",
    artist: "Hujan + piano",
    category: "Campuran",
    icon: "⌂",
    art: "art-2",
    description: "Hujan di luar jendela dan piano yang samar.",
    kind: "mix",
    tone: 6,
  },
  {
    id: 8,
    title: "Angin di Padang Rumput",
    artist: "Angin · Alam terbuka",
    category: "Alam",
    icon: "♧",
    art: "art-3",
    description: "Hembusan angin lembut untuk jeda sejenak.",
    kind: "wind",
    tone: 7,
  },
  {
    id: 9,
    title: "Piano Tengah Malam",
    artist: "Piano · Deep rest",
    category: "Piano",
    icon: "♬",
    art: "art-5",
    description: "Nada jarang dengan ruang untuk pikiran beristirahat.",
    kind: "piano",
    tone: 8,
  },
  {
    id: 10,
    title: "Air Terjun Tersembunyi",
    artist: "Air · Hutan",
    category: "Air",
    icon: "≋",
    art: "art-4",
    description: "Aliran air berlapis ambience hijau yang dalam.",
    kind: "water",
    tone: 9,
  },
  {
    id: 11,
    title: "Ruang Baca yang Hening",
    artist: "Lo-fi · Fokus",
    category: "Piano",
    icon: "▤",
    art: "art-6",
    description: "Nada sederhana untuk membaca dan bekerja.",
    kind: "lofi",
    tone: 10,
  },
  {
    id: 12,
    title: "Hujan dan Guntur Jauh",
    artist: "Hujan · Petir jauh",
    category: "Hujan",
    icon: "ϟ",
    art: "art-2",
    description: "Bunyi hujan dengan gelegar jauh yang lembut.",
    kind: "storm",
    tone: 11,
  },
];
// ============================================================
// KATALOG AUDIO LOKAL — tambahkan file MP3 di folder ./audio,
// lalu daftarkan metadata di array customAudioTracks di bawah.
// category: Piano | Hujan | Alam | Air | Campuran
// kind: 'file' menandakan audio berasal dari file lokal.
// ============================================================
const customAudioTracks = [
  // Contoh: hapus komentar // lalu sesuaikan nama dan file MP3.
  // { id: 'custom-rain', title: 'Hujan di Teras', artist: 'Rekaman hujan', category: 'Hujan', icon: '☂', art: 'art-2', description: 'Rintik hujan untuk relaksasi.', audioFile: './audio/hujan-di-teras.mp3', kind: 'file' },
  // { id: 'custom-piano', title: 'Piano Senja', artist: 'Piano lembut', category: 'Piano', icon: '♫', art: 'art-5', description: 'Melodi piano untuk menemani senja.', audioFile: './audio/piano-senja.mp3', kind: 'file' },
  // { id: 'custom-forest', title: 'Hutan Pagi', artist: 'Burung dan angin', category: 'Alam', icon: '❋', art: 'art-3', description: 'Suara alami hutan di pagi hari.', audioFile: './audio/hutan-pagi.mp3', kind: 'file' },
];
tracks.push(...customAudioTracks.map((t) => ({ ...t, tone: 0 })));
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
// Serenara icon set: inline SVG, consistent stroke weight and currentColor.
function uiIcon(name, size = 18) {
  const paths = {
    play: '<path d="m8 5 10 7-10 7z" fill="currentColor" stroke="none"/>',
    pause:
      '<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" stroke="none"/>',
    rain: '<path d="M6 13.5a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.4 1.7A3.2 3.2 0 0 1 17 13.5z"/><path d="m7 16-1 2m6-2-1 2m6-2-1 2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    sunrise:
      '<path d="M3 18h18M5 15a7 7 0 0 1 14 0M12 2v3m-7 1 2 2m10-2-2 2"/>',
    sunset: '<path d="M3 18h18M5 15a7 7 0 0 1 14 0M4 5l2 2m12-2-2 2M12 2v3"/>',
    moon: '<path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/>',
    nature:
      '<path d="M12 21v-8m0 3C7 16 4 13 4 8c5 0 8 3 8 8m0-2c0-5 3-9 8-10 0 6-3 10-8 10"/>',
    water:
      '<path d="M3 8c2.5-2 4.5 2 7 0s4.5-2 7 0 3 1 4 0M3 13c2.5-2 4.5 2 7 0s4.5-2 7 0 3 1 4 0M3 18c2.5-2 4.5 2 7 0s4.5-2 7 0 3 1 4 0"/>',
    piano:
      '<path d="M5 4v11m4-11v7m4-7v11m4-11v7M4 4h13a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z"/>',
    mix: '<path d="M4 7h3l10 10h3m-3-13h3v3M4 17h3l3-3m7-7 3-3M17 17h3v3"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M4 4l6 6m4 4 7 7"/>',
    repeat:
      '<path d="m17 2 4 4-4 4M3 11V8a2 2 0 0 1 2-2h16M7 22l-4-4 4-4m14-1v3a2 2 0 0 1-2 2H3"/>',
    next: '<path d="m6 5 10 7-10 7z" fill="currentColor" stroke="none"/><path d="M19 5v14"/>',
    prev: '<path d="m18 5-10 7 10 7z" fill="currentColor" stroke="none"/><path d="M5 5v14"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    heart:
      '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/>',
  };
  return `<svg class="ui-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.nature}</svg>`;
}
function trackIconName(t) {
  if (t.category === "Piano") return "piano";
  if (t.category === "Hujan") return "rain";
  if (t.category === "Alam") return "nature";
  if (t.category === "Air") return "water";
  return "mix";
}
let current = null,
  playing = false,
  mixTracks = new Set(),
  favorites = new Set(),
  filter = "Semua",
  view = "home",
  repeat = false,
  shuffle = false,
  elapsed = 0,
  timer = null,
  ctx = null,
  master = null,
  nodes = [],
  noiseBuffer = null,
  lastToast = null,
  visualizer = true,
  ambience = true,
  activeBus = null;
const defaultTrackVolume = (t) =>
  ({
    piano: 42,
    rain: 30,
    forest: 32,
    water: 34,
    mix: 28,
    ocean: 28,
    wind: 26,
    storm: 24,
    lofi: 35,
  })[t.kind] ?? 32;
const trackVolumes = new Map(
  tracks.map((t) => {
    let saved = null;
    try {
      saved = localStorage.getItem("serenara-track-volume-" + t.id);
    } catch (e) {}
    return [
      t.id,
      saved === null
        ? defaultTrackVolume(t)
        : Math.max(0, Math.min(100, Number(saved) || 0)),
    ];
  }),
);
const trackGainNodes = new Map();
const fileAudioElements = new Map();
const fileAudioSources = new Map();
const fileAudioBuses = new Map();
const trackList = $("#track-list");
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(lastToast);
  lastToast = setTimeout(() => el.classList.remove("show"), 2200);
}
function filteredTracks() {
  let list = tracks.filter(
    (t) =>
      (filter === "Semua" || t.category === filter) &&
      (view !== "favorites" || favorites.has(t.id)),
  );
  const q = $("#search-input").value.trim().toLowerCase();
  if (q)
    list = list.filter((t) =>
      (t.title + " " + t.artist + " " + t.category + " " + t.description)
        .toLowerCase()
        .includes(q),
    );
  return list;
}
function renderTracks() {
  const list = filteredTracks();
  trackList.innerHTML = "";
  if (!list.length) {
    trackList.innerHTML =
      '<div class="empty-state">Belum ada yang cocok. Coba suasana atau kata kunci lain.</div>';
    return;
  }
  list.forEach((t, i) => {
    const row = document.createElement("div");
    row.className =
      "track-row " +
      (current?.id === t.id ? "playing" : "") +
      (mixTracks.has(t.id) ? " layered" : "");
    row.innerHTML = `<div class="row-art ${t.art}">${uiIcon(trackIconName(t), 23)}</div><div class="track-main"><div class="track-name">${t.title}</div><div class="track-sub">${t.artist}${mixTracks.has(t.id) ? " · LAPISAN AKTIF" : ""}</div><label class="track-volume-control" title="Atur volume khusus untuk ${t.title}"><span class="volume-icon" aria-hidden="true">♫</span><span class="volume-word">VOLUME</span><input class="track-volume" type="range" min="0" max="100" step="1" value="${trackVolumes.get(t.id)}" aria-label="Volume trek ${t.title}"><output>${trackVolumes.get(t.id)}%</output></label></div><span class="track-tag">${t.category.toUpperCase()}</span><span class="track-duration">∞</span><div class="row-actions"><button class="row-heart ${favorites.has(t.id) ? "liked" : ""}" aria-label="Favorit">${favorites.has(t.id) ? "♥" : "♡"}</button><button class="row-mix ${mixTracks.has(t.id) ? "active" : ""}" aria-label="${mixTracks.has(t.id) ? "Lepas lapisan" : "Tambahkan ke campuran"}" title="${mixTracks.has(t.id) ? "Lepas dari campuran" : "Tambahkan suara ini tanpa menghentikan suara utama"}">${mixTracks.has(t.id) ? "✓ Aktif" : "＋ Campur"}</button><button class="row-play" aria-label="Putar">${uiIcon(current?.id === t.id && playing ? "pause" : "play", 16)}</button></div>`;
    row.querySelector(".row-play").onclick = () =>
      current?.id === t.id ? togglePlay() : playTrack(t);
    row.querySelector(".row-heart").onclick = () => toggleFavorite(t);
    row.querySelector(".row-mix").onclick = (e) => {
      e.stopPropagation();
      toggleLayer(t);
    };
    const volumeInput = row.querySelector(".track-volume");
    volumeInput.oninput = (e) =>
      setTrackVolume(t.id, Number(e.target.value), row.querySelector("output"));
    volumeInput.onclick = (e) => e.stopPropagation();
    row.ondblclick = (e) => {
      if (!e.target.closest(".track-volume-control,.row-actions")) playTrack(t);
    };
    trackList.append(row);
  });
}
function updatePlayer() {
  if (!current) return;
  $("#player-title").textContent = current.title;
  $("#player-subtitle").textContent = current.artist;
  $("#player-art").innerHTML = uiIcon(trackIconName(current), 28);
  $("#player-art").className = "track-art " + current.art;
  $("#player-fav").textContent = favorites.has(current.id) ? "♥" : "♡";
  $("#player-fav").classList.toggle("liked", favorites.has(current.id));
  $("#play-btn").innerHTML = uiIcon(playing ? "pause" : "play", 20);
  $("#play-btn").setAttribute("aria-label", playing ? "Jeda" : "Putar");
  $("#duration").textContent = "∞";
  $("#elapsed").textContent = formatTime(elapsed);
  $("#seek").value = ((elapsed % 240) / 240) * 100;
  updateMixerStatus();
  renderTracks();
}
function updateMixerStatus() {
  const el = $("#mixer-active");
  if (!el) return;
  const active = [
    ...(current ? [current] : []),
    ...[...mixTracks]
      .map((id) => tracks.find((t) => t.id === id))
      .filter(Boolean),
  ];
  el.innerHTML = active.length
    ? active
        .map(
          (t, i) =>
            `<span class="mixer-chip ${i === 0 ? "main-chip" : ""}">${uiIcon(i === 0 ? "play" : "mix", 13)} ${t.title}</span>`,
        )
        .join("")
    : '<span class="mixer-empty">Belum ada suara aktif. Putar satu trek, lalu tekan ＋ Campur pada trek lain.</span>';
  const count = $("#mixer-count");
  if (count) count.textContent = active.length + " suara aktif";
}
function formatTime(s) {
  s = Math.floor(s);
  return (
    String(Math.floor(s / 60)).padStart(2, "0") +
    ":" +
    String(s % 60).padStart(2, "0")
  );
}
function toggleFavorite(t) {
  if (favorites.has(t.id)) {
    favorites.delete(t.id);
    toast("Dihapus dari favorit");
  } else {
    favorites.add(t.id);
    toast("Disimpan ke favorit ♡");
  }
  $("#fav-count").textContent = favorites.size;
  updatePlayer();
  renderTracks();
}
function ensureAudio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) {
      toast("Browser ini belum mendukung audio.");
      return false;
    }
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = Number($("#volume").value) / 100;
    const outputCompressor = ctx.createDynamicsCompressor();
    outputCompressor.threshold.value = -8;
    outputCompressor.knee.value = 12;
    outputCompressor.ratio.value = 3;
    outputCompressor.attack.value = 0.008;
    outputCompressor.release.value = 0.22;
    master.connect(outputCompressor);
    outputCompressor.connect(ctx.destination);
    noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") ctx.resume();
  return true;
}
function setTrackVolume(id, value, output) {
  const v = Math.max(0, Math.min(100, Number(value)));
  trackVolumes.set(id, v);
  if (output) output.textContent = v + "%";
  const bus = trackGainNodes.get(id) || fileAudioBuses.get(id);
  if (bus && ctx) bus.gain.setTargetAtTime(v / 100, ctx.currentTime, 0.04);
  try {
    localStorage.setItem("serenara-track-volume-" + id, String(v));
  } catch (e) {}
}
function clearNodes() {
  nodes.forEach((n) => {
    try {
      n.stop?.();
    } catch (e) {}
    try {
      n.disconnect?.();
    } catch (e) {}
  });
  nodes = [];
  trackGainNodes.clear();
  activeBus = null;
  fileAudioElements.forEach((audio, id) => {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (e) {}
  });
}
function addTone(freq, gain, kind = "sine", detune = 0, bus = activeBus) {
  const osc = ctx.createOscillator(),
    g = ctx.createGain();
  osc.type = kind;
  osc.frequency.value = freq;
  osc.detune.value = detune;
  g.gain.value = 0;
  osc.connect(g);
  g.connect(bus || master);
  osc.start();
  g.gain.setTargetAtTime(gain, ctx.currentTime, 0.6);
  nodes.push(osc, g);
  return { osc, g };
}
function addNoise(gain, filterType, freq, bus = activeBus) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  src.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.value = gain;
  src.connect(filter);
  filter.connect(g);
  g.connect(bus || master);
  src.start();
  nodes.push(src, filter, g);
  return { src, filter, g };
}
function soundscape(t) {
  if (!ensureAudio()) return;
  const generation = audioGeneration;
  if (t.audioFile) {
    let audio = fileAudioElements.get(t.id),
      bus = fileAudioBuses.get(t.id);
    if (!audio) {
      audio = new Audio(t.audioFile);
      audio.loop = true;
      audio.preload = "auto";
      audio.crossOrigin = "anonymous";
      fileAudioElements.set(t.id, audio);
      const source = ctx.createMediaElementSource(audio);
      bus = ctx.createGain();
      bus.gain.value = (trackVolumes.get(t.id) ?? defaultTrackVolume(t)) / 100;
      source.connect(bus);
      bus.connect(master);
      fileAudioSources.set(t.id, source);
      fileAudioBuses.set(t.id, bus);
      audio.addEventListener("error", () =>
        toast("Audio tidak dapat dimuat: " + t.audioFile),
      );
    }
    trackGainNodes.set(t.id, bus);
    audio.loop = true;
    audio
      .play()
      .then(() => {})
      .catch(() =>
        toast(
          "Audio gagal diputar. Pastikan file ada di folder audio dan buka website melalui server (bukan file://).",
        ),
      );
    return;
  }
  const trackBus = ctx.createGain();
  trackBus.gain.value = (trackVolumes.get(t.id) ?? defaultTrackVolume(t)) / 100;
  trackBus.connect(master);
  trackGainNodes.set(t.id, trackBus);
  nodes.push(trackBus);
  activeBus = trackBus;
  const piano = [261.63, 329.63, 392, 493.88, 440, 392, 329.63, 293.66],
    idx = t.tone % piano.length;
  let sounds = [];
  if (["piano", "mix", "lofi"].includes(t.kind)) {
    sounds.push(
      addTone(piano[idx], 0.022, "sine", 0, trackBus),
      addTone(piano[(idx + 2) % 8] * 1.5, 0.008, "sine", 0, trackBus),
      addTone(piano[(idx + 4) % 8] * 0.5, 0.016, "triangle", 0, trackBus),
    );
    let pulse = () => {
      if (
        !playing ||
        generation !== audioGeneration ||
        !(current?.id === t.id || mixTracks.has(t.id))
      )
        return;
      const n = addTone(
        piano[Math.floor(Math.random() * piano.length)] *
          (Math.random() > 0.65 ? 2 : 1),
        0.026,
        "sine",
        0,
        trackBus,
      );
      n.g.gain.setValueAtTime(0.0001, ctx.currentTime);
      n.g.gain.exponentialRampToValueAtTime(0.028, ctx.currentTime + 0.04);
      n.g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);
      setTimeout(pulse, Math.random() * 1300 + 1000);
    };
    setTimeout(pulse, 300);
  }
  if (
    ["rain", "storm", "mix", "forest", "water", "ocean", "wind"].includes(
      t.kind,
    )
  ) {
    const n = addNoise(
      t.kind === "rain" || t.kind === "storm" ? 0.075 : 0.045,
      "lowpass",
      t.kind === "ocean" ? 500 : t.kind === "wind" ? 350 : 1250,
      trackBus,
    );
    sounds.push(n);
    if (t.kind === "rain" || t.kind === "storm")
      addNoise(0.018, "highpass", t.kind === "storm" ? 2500 : 4000, trackBus);
    if (t.kind === "water" || t.kind === "forest")
      addNoise(0.014, "bandpass", 1800, trackBus);
    if (t.kind === "wind") addNoise(0.02, "lowpass", 260, trackBus);
  }
  const filters = nodes.filter((n) => n instanceof BiquadFilterNode);
  filters.forEach((f) => {
    if (!f._base) f._base = f.frequency.value;
  });
  const animate = () => {
    if (
      !playing ||
      generation !== audioGeneration ||
      !(current?.id === t.id || mixTracks.has(t.id)) ||
      !ctx
    )
      return;
    const now = ctx.currentTime;
    filters.forEach((f) => {
      try {
        f.frequency.setTargetAtTime(
          f._base * (0.84 + Math.random() * 0.28),
          now,
          2.5,
        );
      } catch (e) {}
    });
    setTimeout(animate, 2800 + Math.random() * 2200);
  };
  animate();
}
let audioGeneration = 0;
function rebuildSoundscape() {
  if (!ensureAudio()) return;
  audioGeneration++;
  clearNodes();
  if (!playing) return;
  if (current) soundscape(current);
  mixTracks.forEach((id) => {
    const layer = tracks.find((t) => t.id === id);
    if (layer && layer.id !== current?.id) soundscape(layer);
  });
}
function playTrack(t) {
  if (!ensureAudio()) return;
  current = t;
  mixTracks.delete(t.id);
  elapsed = 0;
  playing = true;
  rebuildSoundscape();
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    if (playing) {
      elapsed++;
      $("#elapsed").textContent = formatTime(elapsed);
      $("#seek").value = ((elapsed % 240) / 240) * 100;
    }
  }, 1000);
  updatePlayer();
  document.body.classList.toggle("visualizer-on", visualizer);
  toast("Memutar " + t.title);
}
function toggleLayer(t) {
  if (!ensureAudio()) return;
  if (!current) {
    current = tracks[0];
  }
  if (current?.id === t.id) {
    toast("Ini suara utama. Pilih trek lain untuk dicampur.");
    return;
  }
  if (mixTracks.has(t.id)) {
    mixTracks.delete(t.id);
    toast("Lapisan dilepas: " + t.title);
  } else {
    if (mixTracks.size >= 3) {
      toast("Maksimal 4 suara aktif termasuk suara utama.");
      return;
    }
    mixTracks.add(t.id);
    toast("✓ " + t.title + " ditambahkan — suara utama tetap berjalan");
  }
  if (!playing) {
    playing = true;
    elapsed = 0;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (playing) {
        elapsed++;
        $("#elapsed").textContent = formatTime(elapsed);
        $("#seek").value = ((elapsed % 240) / 240) * 100;
      }
    }, 1000);
  }
  rebuildSoundscape();
  updatePlayer();
}
function togglePlay() {
  if (!current) {
    playTrack(tracks[0]);
    return;
  }
  if (!ensureAudio()) return;
  playing = !playing;
  if (playing) rebuildSoundscape();
  else {
    audioGeneration++;
    clearNodes();
  }
  updatePlayer();
}

function nextTrack(dir = 1) {
  const list = tracks;
  let i = list.findIndex((t) => t.id === current?.id);
  if (shuffle) i = Math.floor(Math.random() * list.length);
  else i = (i + dir + list.length) % list.length;
  playTrack(list[i]);
}
function chooseCategory(cat) {
  filter = cat;
  view = "discover";
  $("#current-section").textContent = cat === "Semua" ? "Jelajahi" : cat;
  $("#track-heading").textContent =
    cat === "Semua" ? "Semua suasana" : cat + " untukmu";
  $("#track-eyebrow").textContent = "PILIH BERDASARKAN SUASANA";
  $$(".filter-chip").forEach((b) =>
    b.classList.toggle("active", b.dataset.filter === cat),
  );
  renderTracks();
  $("#tracks-section").scrollIntoView({ behavior: "smooth", block: "start" });
}
$$("[data-category]").forEach((b) =>
  b.addEventListener("click", () => chooseCategory(b.dataset.category)),
);
$$(".filter-chip").forEach((b) =>
  b.addEventListener("click", () => {
    filter = b.dataset.filter;
    view = "discover";
    $$(".filter-chip").forEach((x) => x.classList.toggle("active", x === b));
    $("#current-section").textContent =
      filter === "Semua" ? "Jelajahi" : filter;
    renderTracks();
  }),
);
$$(".nav-link").forEach((b) =>
  b.addEventListener("click", () => {
    view = b.dataset.view;
    $$(".nav-link").forEach((x) => x.classList.toggle("active", x === b));
    if (view === "home") {
      filter = "Semua";
      $("#current-section").textContent = "Beranda";
      $("#track-heading").textContent = "Temani harimu";
      $("#track-eyebrow").textContent = "PILIHAN HARI INI";
      $("#hero").scrollIntoView({ behavior: "smooth" });
    } else if (view === "favorites") {
      filter = "Semua";
      $("#current-section").textContent = "Favorit";
      $("#track-heading").textContent = "Suara kesukaanmu";
      $("#track-eyebrow").textContent = "KOLEKSI PRIBADI";
      $("#tracks-section").scrollIntoView({ behavior: "smooth" });
    } else {
      filter = "Semua";
      $("#current-section").textContent = "Jelajahi";
      $("#track-heading").textContent = "Semua suasana";
      $("#tracks-section").scrollIntoView({ behavior: "smooth" });
    }
    renderTracks();
  }),
);
$("#hero-play").onclick = () => (current ? togglePlay() : playTrack(tracks[0]));
$("#play-btn").onclick = togglePlay;
$("#prev-btn").onclick = () => nextTrack(-1);
$("#next-btn").onclick = () => nextTrack(1);
$("#shuffle-btn").onclick = () => {
  shuffle = !shuffle;
  $("#shuffle-btn").classList.toggle("active", shuffle);
  toast(shuffle ? "Mode acak aktif" : "Mode acak nonaktif");
};
$("#repeat-btn").onclick = () => {
  repeat = !repeat;
  $("#repeat-btn").classList.toggle("active", repeat);
  toast(repeat ? "Mode ulang aktif" : "Mode ulang nonaktif");
};
$("#player-fav").onclick = () => current && toggleFavorite(current);
$("#clear-mix").onclick = () => {
  mixTracks.clear();
  if (current && playing) rebuildSoundscape();
  updateMixerStatus();
  renderTracks();
  toast("Semua lapisan tambahan dihapus");
};
$("#volume").oninput = (e) => {
  if (ensureAudio())
    master.gain.setTargetAtTime(
      Number(e.target.value) / 100,
      ctx.currentTime,
      0.08,
    );
};
$("#seek").oninput = (e) => {
  elapsed = Math.floor((Number(e.target.value) / 100) * 240);
  $("#elapsed").textContent = formatTime(elapsed);
};
$("#search-toggle").onclick = () => {
  $("#search-wrap").classList.toggle("hidden");
  if (!$("#search-wrap").classList.contains("hidden"))
    $("#search-input").focus();
};
$("#search-input").oninput = () => {
  view = "discover";
  renderTracks();
};
$("#search-clear").onclick = () => {
  $("#search-input").value = "";
  renderTracks();
  $("#search-input").focus();
};
$("#all-categories").onclick = () => chooseCategory("Semua");
$("#surprise-btn").onclick = () =>
  playTrack(tracks[Math.floor(Math.random() * tracks.length)]);
$("#visualizer-toggle").onclick = () => {
  visualizer = !visualizer;
  document.body.classList.toggle("visualizer-on", visualizer);
  toast(visualizer ? "Visualizer aktif" : "Visualizer nonaktif");
};
$("#ambience-btn").onclick = () => {
  ambience = !ambience;
  document.body.classList.toggle("ambience-off", !ambience);
  toast(ambience ? "Ambience bergerak aktif" : "Gerakan ambience dijeda");
};
const timeModeLabels = {
  sunrise: "Sunrise hangat",
  day: "Siang yang segar",
  sunset: "Sunset keemasan",
  night: "Malam yang tenang",
};
function setTimeMode(mode, notify = true) {
  if (!timeModeLabels[mode]) return;
  document.body.dataset.timeMode = mode;
  const globalVideo = $("#global-scene-video");
  if (globalVideo) {
    const videoSources = {
      sunrise: "mode-sunrise.mp4",
      day: "mode-day.mp4",
      sunset: "mode-sunset.mp4",
      night: "mode-night.mp4",
    };
    const nextSrc = videoSources[mode];
    if (nextSrc && !globalVideo.getAttribute("src")?.endsWith(nextSrc)) {
      globalVideo.src = nextSrc;
      globalVideo.load();
      const playPromise = globalVideo.play();
      if (playPromise && playPromise.catch) playPromise.catch(() => {});
    }
  }
  $$("[data-time-mode]").forEach((btn) => {
    const active = btn.dataset.timeMode === mode;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  const label = $("#mode-current");
  if (label) label.textContent = timeModeLabels[mode];
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta)
    meta.content = {
      sunrise: "#65443b",
      day: "#42645a",
      sunset: "#6b4148",
      night: "#17251e",
    }[mode];
  const scene = $("#hero-scene-bg");
  if (scene) {
    scene.dataset.scene = mode;
    const names = {
      sunrise: "pegunungan saat matahari terbit",
      day: "hamparan sawah hijau dan gunung biru",
      sunset: "pantai dengan ombak saat matahari terbenam",
      night: "hutan malam dan sungai",
    };
    scene.setAttribute("aria-label", "Latar suasana " + names[mode]);
  }
  try {
    localStorage.setItem("serenara-time-mode", mode);
  } catch (e) {}
  if (notify) toast("Mode " + timeModeLabels[mode] + " aktif");
}
$$("[data-time-mode]").forEach((btn) =>
  btn.addEventListener("click", () => setTimeMode(btn.dataset.timeMode)),
);
try {
  setTimeMode(localStorage.getItem("serenara-time-mode") || "night", false);
} catch (e) {
  setTimeMode("night", false);
}

// Replace remaining decorative emoji/glyphs with the same restrained SVG icon family.
$$(".mode-symbol").forEach((el) => {
  const mode = el.closest("[data-time-mode]")?.dataset.timeMode;
  el.innerHTML = uiIcon(
    { sunrise: "sunrise", day: "sun", sunset: "sunset", night: "moon" }[mode] ||
      "sun",
    21,
  );
});
$$(".cat-icon").forEach((el) => {
  const card = el.closest("[data-category]");
  const cat = card?.dataset.category;
  el.innerHTML = uiIcon(
    {
      Piano: "piano",
      Alam: "nature",
      Hujan: "rain",
      Air: "water",
      Campuran: "mix",
    }[cat] || "nature",
    22,
  );
});
const heroPlayIcon = $("#hero-play span");
if (heroPlayIcon) heroPlayIcon.innerHTML = uiIcon("play", 14);
const surprise = $("#surprise-btn");
if (surprise) surprise.innerHTML = uiIcon("sun", 14) + " Acak suasana";
const allCategories = $("#all-categories");
if (allCategories)
  allCategories.innerHTML = "Lihat semua " + uiIcon("arrow", 13);
const searchButton = $("#search-toggle");
if (searchButton) searchButton.innerHTML = uiIcon("search", 18);
const playerButtons = {
  "#shuffle-btn": "shuffle",
  "#prev-btn": "prev",
  "#next-btn": "next",
  "#repeat-btn": "repeat",
};
Object.entries(playerButtons).forEach(([selector, name]) => {
  const el = $(selector);
  if (el) el.innerHTML = uiIcon(name, 17);
});
renderTracks();
if ("serviceWorker" in navigator && location.protocol.startsWith("http"))
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("./sw.js").catch(() => {}),
  );
