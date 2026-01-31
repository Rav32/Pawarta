// ATUR BATAS WAKTU (Tahun, Bulan-1, Tanggal, Jam, Menit)
// Bulan dimulai dari 0 (Januari = 0, Februari = 1)
const deadline = new Date(2026, 0, 18, 23, 59).getTime();

function checkTime() {
    const now = new Date().getTime();
    
    if (now > deadline) {
        document.getElementById('body-content').innerHTML = `
            <div class="expired-screen">
                <h1>⚠️</h1>
                <h2 style="color:#333">Waktu Kunjungan Telah Berakhir</h2>
                <p style="color:#666">Masa aktif website berita ini telah selesai.</p>
                <p style="color:#666">Pada tanggal 18-02-2026.</p>
                <p style="color:#666">Karena hanya di gunakan untuk keperluan tugas.</p>
            </div>
        `;
        document.body.style.backgroundColor = "white";
    }
}

// Jalankan fungsi saat halaman dimuat
checkTime();

// Cek secara berkala setiap 10 detik
setInterval(checkTime, 10000);