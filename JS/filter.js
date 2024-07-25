const list = [1,2,3,4,5,6,7,8,9,10];

const editList = list.filter(item => {
    if(item % 2 === 1){
        return true;
    }else{
        return false;
    }
})
console.log(editList);

console.log()

const bunga = ["mawar", "melati", "rose", "raflesia", "matahari"];
const result = bunga.filter((bunga) => bunga.length >= 6);

console.log(result);