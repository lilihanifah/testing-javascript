function bintang_bintang(row){

    for(let i = row; i >= 1; i--){
        let bintang = " ".repeat(row - i) + "* ".repeat(i);
        console.log(bintang);
    }
}
bintang_bintang(5);