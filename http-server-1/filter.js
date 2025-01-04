let array = [1,2,3,4,5,6,7,8];

let newArr = [];

for(let i = 0;i<array.length;i++){
    if(array[i] % 2 == 0){
        newArr.push(array[i])
    }
}
console.log(newArr);