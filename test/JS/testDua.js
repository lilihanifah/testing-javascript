let nama = "Tanalin Romeesa.";
let text = "";

for(let i = 0; i < nama.length; i++){
    if(nama[i -1] === " "){
        for(let j = i; j < nama.length; j++){
            if(nama[j] === "."){
                break;
            }
            text += nama[j];
        }
        break;
    }
}
console.log(`Nama tengah kamu adalah ${text}`);