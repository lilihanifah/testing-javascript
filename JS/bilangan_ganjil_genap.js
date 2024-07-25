function bilangan_ganjil_genap(row){
    let bilangan = ["ganjil", "GENAP"];
    let index = 0;

for(let i = 1; i <= row; i++){
    let baru = bilangan [index % bilangan.length];
    console.log(i + " " + baru);
    index++;
    }
}
bilangan_ganjil_genap(20);

console.log()

const pilihan = ["maju", "MUNDUR"];
const repeatCount = 20;

for(let j = 0; j < repeatCount; j++){
    console.log(`${j+1} ${pilihan[j % pilihan.length]}`);
}