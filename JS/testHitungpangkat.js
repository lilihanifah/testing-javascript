var a = 25;
var b = 3;
var c = 0;

c = a ** b;
console.log(`${a} ** ${b} = ${c}`)

console.log()

function pangkatTiga(number){
    return number ** 3;
}

//contoh penggunaan
const number =  5;
const hasil = pangkatTiga(number);
console.log(`${number} pangkat 3 adalah ${hasil}`)