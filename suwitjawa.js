var ulang = true
var tanya = true
while (ulang) {

    //menangkap pilihan player
    var p = prompt("Silahkan pilih untuk mulai suwit : gajah, semut, orang");
    //menangkap pilihan komputer
    //menentukan bilangan random
    var komputer = Math.random()

    if (komputer < 0.34) {
        komputer = "semut";
    } else if (komputer > 0.34 && komputer < 0.67) {
        komputer = "gajah";
    } else {
        komputer = "orang";
    }

    //menentukan rules
    var hasil = ""
    if (p === komputer) {
        hasil = "Kita SERI";
    } else if (p === "semut") {
        hasil = (komputer === "gajah" ? "Selamat Kau Menang" : "Kau KALAH. BODOK kali pun KAU.");
    } else if (p === "gajah") {
        hasil = (komputer === "orang" ? "Selamat Kau Menang" : "Kau BODOK kali pun KAU.");
    } else if (p === "orang") {
        hasil = (komputer === "semut" ? "Selamat Kau Menang" : "Kau BODOK kali pun KAU.");
    } else {
        alert("ENTAH APA YANG KAMU PILIH PAOK!")
    }
    // Hasil
    alert("Tadi kau pilih : " + p + " Aku tadi pilih: " + komputer + "\n" + hasil);
    //Pengulangan permainan

    ulang = confirm("Mau main lagi, gak ? ada game baru nih \ntekan \"OK\" kalau mau main lagi sama abang dek. \ntekan \"CANCEL\" kalau mau sampai di sini aja.")
}

alert("Terima kasih dah main ya kawan awak.");

while (mainLagi = true) {
    var kesempatan = 3;
    var kasihAturan = alert("Selamat datang di permainan yang kedua. Aturannya gampang, nanti saya akan beri kamu 3 kesempatan untuk menebak angka yang ada dalam memori saya dari 1 - 10. Nanti saya akan memberi tahu clue-nya apakah angkanya kurang atau lebih dari angka saya. Saya harap anda sudah mengerti");
    var komputer1 = Math.floor(Math.random() * 10) + 1;
    var i = kesempatan
    var mainLagi = true

    for (i; i > 0; i--) {
        var p1 = prompt("kesempatan ke-" + i);
        var j = i - 1;
        if (p1 === komputer1) {
            alert("Selamat kamu berhasil menebaknya");
        } else if (p1 < komputer1) {
            if (j === 0) {
                alert("Yahh... Kamu gagal nih. Coba lain kali ya :)");
            } else {
                alert("Terlalu rendah... \nsemangat kamu masih punya " + j + " kesempatan lagi");
            }
        } else if (p1 > komputer1) {
            if (j === 0) {
                alert("Yahh... Kamu gagal nih. Coba lain kali ya :)");
            } else {
                alert("Terlalu besar... \nsemangat kamu masih punya " + j + " kesempatan lagi");
            }
        }


    }
    mainLagi = confirm("Mau main lagi, gak ?");

}
alert("Terima Kasih. Jika ingin main lagi tekan F5 di keyboard atau refresh halaman ini.");