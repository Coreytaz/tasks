function validateArr(arr) {
    const arrLength = arr.length;
    searchRemove(arr);
    arr.sort((a, b) => a - b);
    if (arr.length === 1 || arr.length === 1 || arr.length < 1 || arr.length === arrLength) {
        return arr
    } else {
        arr = reverseArray(arr);
        validateArr(arr)
        console.log(arr);
    }

}

function searchRemove(arr) {
    let [arrIterator, value] = arrayNumbers(arr);
    let currentLength = arr.length;

    while (value) {
        let index = arr.indexOf(value);
        const searchNums = [...value.toString()];

        currentRemove(arr, index, searchNums);

        if (arr.length !== currentLength) arr.splice(index, 1);
        currentLength = arr.length;
        value = arrIterator.next().value;
    }
}

const arrayNumbers = (arr) => {
    const arrIterator = arr[Symbol.iterator]();
    return [arrIterator, arrIterator.next().value];
};

function currentRemove(arr, index, searchNums) {
    arr.slice(index + 1).filter((elem) => {
        const i = arr.indexOf(elem);
        searchNums.some((num) => elem.toString().includes(num))
            && arr.splice(i, 1);
    });
}

function reverseArray(arr) {
    return arr.map((item) => +item.toString().split('').reverse().join('')).map((item) => item * item)
}

console.group('Задание 2 с массивом');
validateArr([41, 55, 61, 1, 8, 27, 37, 39]);
console.groupEnd();