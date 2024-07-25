function bintang_empat(row){

    for(let i = 1; i <= row; i++){
        let bintang = " ".repeat(row - i);
        let empat = "*".repeat(i);
        console.log(bintang + empat);
    }
}
bintang_empat(5);