function hasil(nilai){
    console.log(nilai)
}

let myPromise = new Promise(function(resolve,reject){
    let i = 88;
    if(i >= 88){
        resolve("Selamat, Anda Lulus!");
    }else{
        reject("Mohon maaf, Anda gagal")
    }
});

myPromise.then(
    function(value) {hasil(value);},
    function(error) {hasil(error);}
);