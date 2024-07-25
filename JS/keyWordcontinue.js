let text = "";

for(let i = 1; i <= 15; i++){
    if(i === 8) {
        continue;
    }
    text = text + i + " "
}
console.log(text);

console.log()

const nama = ["dudung", "maman", "dilan", "milea"];

for(let n = 0; n < nama.length; n++){
    if(nama[n]==="dilan"){
        continue;
    }
    console.log(nama[n])
}