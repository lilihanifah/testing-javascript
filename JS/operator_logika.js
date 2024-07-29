var a = 20;
var b = 10;

var benar = a > b;
var salah = a < b;

// operator && (and)
var hasil = benar && salah;
console.log(`${benar} && ${salah} = ${hasil}`);

// operator || (or)
var hasil = benar || salah;
console.log(`${benar} || ${salah} = ${hasil}`);

// operator ! (not)
var hasil = !benar;
console.log(`!${benar} = ${hasil}`);