function bintang_dua(row){

    for(let i = 1; i <= row; i++){
        let dua = "";
        for(let j = 1; j <= i; j++){
            dua += "*"
        }
        console.log(dua)
    }
}
bintang_dua(5);

console.log()

function dua(baris){

    for(let n = baris; n >= 0; n--){
        let bintang = "*".repeat(baris - n);
        console.log(bintang)
    }
}
dua(5);