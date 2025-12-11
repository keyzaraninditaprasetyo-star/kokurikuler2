document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // 1. Cek mode yang tersimpan di Local Storage
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = '🌙 Mode Gelap';
    } else {
        modeToggle.textContent = '☀️ Mode Cerah';
    }

    // 2. Event Listener untuk Tombol
    modeToggle.addEventListener('click', () => {
        // Toggle class dark-mode pada body
        body.classList.toggle('dark-mode');

        // Simpan preferensi mode di Local Storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
            modeToggle.textContent = '🌙 Mode Gelap';
        } else {
            localStorage.setItem('mode', 'light');
            modeToggle.textContent = '☀️ Mode Cerah';
        }
    });
});