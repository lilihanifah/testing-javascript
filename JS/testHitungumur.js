function hitungUmur(tahunLahir){
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}

//contoh penggunaan
const tahunLahir = 1945;
const umur =hitungUmur(tahunLahir);
console.log(`umur: ${umur} tahun`);