// Menangani klik pada tombol hamburger
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Memilih elemen dengan kelas 'nav' dan menambahkan atau menghapus kelas 'active'
    document.querySelector('.nav').classList.toggle('active');
});

// Menangani scroll
window.addEventListener('scroll', function() {
    // Memeriksa apakah jarak scroll lebih dari 50 piksel dari atas
    if (window.scrollY > 50) {
        // Jika ya, tambahkan kelas 'scrolled' ke elemen dengan kelas 'nav'
        document.querySelector('.nav').classList.add('scrolled');
    } else {
        // Jika tidak, hapus kelas 'scrolled' dari elemen dengan kelas 'nav'
        document.querySelector('.nav').classList.remove('scrolled');
    }
});
