function bintang_enam(row){

    for(let i = 1; i <= row; i++){
        let enam = " ".repeat(row - i) + "* ".repeat(i);
        console.log(enam);
    }
}
bintang_enam(5);