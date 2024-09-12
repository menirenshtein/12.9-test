function Mission1(arr) {
  const IsEvenArr = arr.filter((num)=> num % 2 == 0);
  return IsEvenArr
}

console.log(Mission1([2,4,5, 3, 8, 9, -1, -2]))




function Mission3(arr) {
    const oneDimensionalArr = arr.flat()
    return oneDimensionalArr
}

console.log(Mission3([1,[2,4], [14, 15], 5]))


function Mission4(arr) {
    let counter = 0;
    if(arr.every((value, index, array) => 
        index === 0 || value >= array[index - 1])) 
    counter = 1
    else if (arr.every((value, index, array) => 
        index === 0 || value <= array[index - 1])) 
    counter = 2
    else counter = 0
    return counter     
}
// Example usage
const arr1 = [32, 39, 48, 56];
const arr2 = [22,21, 4, 1];
const arr3 = [22,21, 5, 6];

console.log(Mission4(arr1));
console.log(Mission4(arr2)); 
console.log(Mission4(arr3)); 

function Miision5(arr1, arr2) {
    let object = {};
    if (arr1.length >= arr2.length) {
        arr1.forEach((key, val) => {
            object[key] = arr2[val]
        });
    }
    else{
        arr2.forEach((arr2Index, arr1Index) => {
            object[arr2Index] = arr1[arr1Index]
        });
    }
    return object
    
}

const arr = ["fname", "lname", "age"]
const arr4 = ["meni", "iren", "25"]


console.log(Miision5(arr, arr4))



module.export = {
    Mission1,
    Mission3,
    Mission4,
    Miision5,
}