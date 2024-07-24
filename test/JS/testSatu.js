let nama = "TEST JAVASCRIPT";

for(let i = 0; i < nama.length; i++) {
    let spasi = " ";
    for(let j = 0; j < i; j++) {
        spasi = spasi + " ";
    }
    console.log(spasi+ nama[i]);
}