const correctPassword = "Gu";
const splash = document.getElementById("splash");
const loginBox = document.getElementById("login");
const menu = document.getElementById("menu");
const consoleBox = document.getElementById("console");

setTimeout(() => {
  splash.classList.add("hidden");
  loginBox.classList.remove("hidden");
}, 2500);

function login() {
  const val = document.getElementById("passwordInput").value;
  if (val === correctPassword) {
    consoleBox.innerHTML += `\n✅ Login berhasil. Mengakses menu...`;
    setTimeout(() => {
      loginBox.classList.add("hidden");
      menu.classList.remove("hidden");
    }, 1000);
  } else {
    consoleBox.innerHTML += `\n❌ Password salah!`;
  }
  consoleBox.scrollTop = consoleBox.scrollHeight;
}

async function downloadTikTok() {
  const url = encodeURIComponent(document.getElementById('tiktokUrl').value.trim());
  const out = document.getElementById('tiktokResult');
  if (!url) return out.innerText = '❌ Masukkan URL TikTok';
  out.innerHTML = '<div class="loader">⏳ Memuat...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/tiktok?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.url}" target="_blank">📥 Unduh Video</a>`;
  } catch {
    out.innerHTML = '❌ Gagal mengunduh.';
  }
}

async function downloadSpotify() {
  const url = encodeURIComponent(document.getElementById('spotifyUrl').value.trim());
  const out = document.getElementById('spotifyResult');
  if (!url) return out.innerText = '❌ Masukkan URL Spotify';
  out.innerHTML = '<div class="loader">⏳ Mengubah ke MP3...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/spotify?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.link}" target="_blank">🎵 Unduh MP3</a>`;
  } catch {
    out.innerHTML = '❌ Gagal.';
  }
}

async function ytDownloadMP3() {
  const url = encodeURIComponent(document.getElementById('ytUrl').value.trim());
  const out = document.getElementById('ytResult');
  if (!url) return out.innerText = '❌ Masukkan URL YouTube';
  out.innerHTML = '<div class="loader">⏳ Mengonversi MP3...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/ytmp3?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.link}" target="_blank">🎧 Unduh MP3</a>`;
  } catch {
    out.innerHTML = '❌ Gagal.';
  }
}

async function ytDownloadMP4() {
  const url = encodeURIComponent(document.getElementById('ytUrl').value.trim());
  const out = document.getElementById('ytResult');
  if (!url) return out.innerText = '❌ Masukkan URL YouTube';
  out.innerHTML = '<div class="loader">⏳ Mengonversi MP4...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/ytmp4?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.link}" target="_blank">🎬 Unduh MP4</a>`;
  } catch {
    out.innerHTML = '❌ Gagal.';
  }
}

async function getInstagram() {
  const url = encodeURIComponent(document.getElementById('instaUrl').value.trim());
  const out = document.getElementById('resultArea');
  if (!url) return out.innerText = '❌ Masukkan URL Instagram';
  out.innerHTML = '<div class="loader">⏳ Memuat IG...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/ig?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.url}" target="_blank">📸 Unduh IG</a>`;
  } catch {
    out.innerHTML = '❌ Gagal.';
  }
}

async function getCapcut() {
  const url = encodeURIComponent(document.getElementById('capcutUrl').value.trim());
  const out = document.getElementById('capcutResult');
  if (!url) return out.innerText = '❌ Masukkan URL CapCut';
  out.innerHTML = '<div class="loader">⏳ Memuat CapCut...</div>';
  try {
    const res = await fetch(`https://veloria-ui.vercel.app/download/capcut?url=${url}`);
    const json = await res.json();
    out.innerHTML = `<a href="${json.result.url}" target="_blank">🎞️ Unduh CapCut</a>`;
  } catch {
    out.innerHTML = '❌ Gagal.';
  }
      }
