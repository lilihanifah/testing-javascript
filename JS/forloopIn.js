const mahasiswa = {name: "dudung", age: "30th", gender: "laki-laki"}
let text = "";

for(let x in mahasiswa){
    console.log(text + mahasiswa[x])
}

console.log()

const nama = {a:1, b:2, c:3}

for(let p in nama){
    console.log(`${p} : ${nama[p]}`)
}