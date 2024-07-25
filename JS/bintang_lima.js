function bintang_lima(row){

    for(let i = row; i >= 1; i--){
        let bintang = " ".repeat(row - i);
        let lima = "*".repeat(i);
        console.log(bintang + lima);
    }
}
bintang_lima(5);