
//[1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]

let array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const length = array.length - 1;
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < length; i++) {
        array[i] < pivot ? leftArray.push(array[i]) : rightArray.push(array[i]);
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const sortedArr = quickSort(array);
console.log("======== SORTED ARRAY ========");
console.log(sortedArr);

