function validateArr(arr) {
    const sortArray = arr.sort((a, b) => a - b);
    let prevRes = sortArray.map(String);
    let currRes = searchRemove(prevRes);

    while (!checkLenghtAndEmpty(currRes, prevRes)) {
        prevRes = currRes;
        currRes = searchRemove(currRes
            .map(el => Math.pow(el.split('').reverse().join(''), 2))
            .map(String)
        );
    }

    return currRes;
}


function checkLenghtAndEmpty(curr, prev) {
    return curr.length === 1 || curr.length === 0 || curr.length === prev.length;
}

function searchRemove(arr, result = []) {
    if (arr.length === 0) {
        return result;
    }

    const [number, ...numbers] = arr;

    for (let digit of number) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] && arr[i].includes(digit)) {
                arr[i] = false;
                if (arr[0]) {
                    arr[0] = false;
                }
            }
        }
    }

    const newArr = arr.filter(Boolean);

    if (newArr.length === arr.length) {
        result.push(number);
        return searchRemove(numbers, result);
    }

    return searchRemove(newArr, result);
}

console.group('Задание 2 с массивом');
console.log(validateArr([41, 55, 61, 1, 8, 27, 37, 39]));
console.groupEnd();