function bintang_tiga(row){
    
    for(let i = row; i >= 1; i--){
        let tiga = "";
        for(let j = 1; j <= i; j++){
            tiga += "*"
        }
        console.log(tiga)
    }
}
bintang_tiga(5);

console.log()

function tiga(baris){

    for(let n = 0; n <= baris; n++){
        let bintang = "*".repeat(baris - n);
        console.log(bintang)
    }
}
tiga(5);