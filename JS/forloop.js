let value = "";

for(let i = 0; i < 15; i++){
    value = value + i + " "
}
console.log(value);

console.log()

const siswa = ["Budi", "Citra", "Dita", "edzhar", "Fathia", "gumilang", "Handoko", "ingeu", "Junaidi"];
let text = "Berikut nama-nama siswa yang berprestasi di kelas XII:\n";

for(let j = 0; j < siswa.length; j++){
    text += siswa[j] + "\n"
}
console.log(text);

console.log()

let nama = ["1. A", "2. B", "3. C", "4. D", "5. E", "6. F", "7. G", "8. H", "9. I"];
let test = "Nomor urut siswa kelas XII: \n";

for(let n = 0; n < nama.length; n++){
    test += nama[n] + "\n"
}
console.log(test);

console.log()

const nilai = "";

let txt = "Berikut bilangan ganjil:";

for(let x = 1; x <= 15; x += 2){
    txt += x + ","
}
console.log(txt);