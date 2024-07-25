function warna(pelangi){
    console.log(pelangi.hijau)
}

function getPelangi(warnaID,callback){
    let pelangi;
    pelangi ={
        merah: "MERAH",
        kuning: "KUNING",
        hijau: "HIJAU",
        biru: "BIRU"
    }
    callback(pelangi);
}

function main(){
    console.log("Berikut warna pelangi:");
    getPelangi(1,warna)
}

main()

console.log()

function hasil(sum){
    console.log(sum);
}
function getCalculator(num1, num2, callback){
    let sum = num1 % num2
    callback(sum);
}
getCalculator(20, 3,hasil);