const hari = "5";

switch (hari){
    case "0":
        console.log("Hari Minggu");
        break;
    case "1":
        console.log("Hari Senin");
        break;
    case "2":
        console.log("Hari Selasa");
        break;
    case "3":
        console.log("Hari Rabu");
        break;
    case "4":
        console.log("Hari Kamis");
        break;
    case "5":
        console.log("Hari Jumat");
        break;
    case "6":
        console.log("Hari Sabtu");
        break;
    default:
        console.log("Maaf, hanya dapat diinput angka 0-6");
        break;
}

console.log()

const buah = "paya";

switch (buah){
    case "apel":
        console.log("Harga buah apel Rp25.000,00/kg")
        break;
    case "paya":
    case "naga":
        console.log("Harga buah paya & naga Rp15.000,00/kg")
        break;
    default:
        console.log(`Maaf buah ${buah} yang Anda cari tidak tersedia`)
}