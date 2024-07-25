function sesudahMenunggu(){
    return new Promise((selesai)=>{
        setTimeout(()=>{
            selesai("Selamat Datang")
        },3000);
    });
}

async function asyncCall(){
    console.log("Proses...");
    const result = await sesudahMenunggu();
    console.log(result)
}
asyncCall();