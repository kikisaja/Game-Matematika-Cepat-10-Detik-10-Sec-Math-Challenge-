# ⚡ 10-Sec Math Challenge (Game Matematika Cepat 10 Detik)

Game tantangan matematika berkecepatan tinggi (*10-Sec Math Challenge*) berbasis JavaScript di mana pemain harus menyelesaikan soal penjumlahan, pengurangan, dan perkalian acak sebanyak mungkin sebelum waktu 10 detik habis.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Precision Timer (`setInterval` 100ms):**
   Menggunakan pewaktu presisi sub-detik (100 milidetik) dengan format `toFixed(1)` untuk menampilkan countdown yang responsif.
2. **Random Arithmetic Generation:**
   Mengacak operator (`+`, `-`, `*`) serta angka acak dengan kalkulasi aman (mencegah nilai negatif pada pengurangan).
3. **Real-time Form Validation & Event Handling:**
   Proses pengecekan jawaban instan melalui event submission form tanpa memicu muat ulang halaman.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Panel skor, timer countdown, area soal, & input jawaban
├── style.css        # Desain Neobrutalism hijau-pop, animasi pulse waktu kritis, & layout
└── script.js        # Logika generator soal acak, pewaktu presisi, & handler skor DOM