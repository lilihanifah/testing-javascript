function sesudahMenunggu(){
    return new Promise((selesai)=>{
        setTimeout(()=>{
            selesai("SELAMAT DATANG DAN SELAMAT BELAJAR SOBAT")
        },3000);
    });
}

async function asyncCall(){
    console.log("Proses...");
    const result = await sesudahMenunggu();
    console.log(result)
}
asyncCall();