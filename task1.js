function TableMultiple(num) {
    const arrayMultiplier = NumArray(num);
    let numMultiple = [];
    let lastArray = [];
    const tableNum = TableNumCreate(arrayMultiplier);

    lastString = tableNum[tableNum.length - 1].map(item => item.toString().length);
    firstColumnWidth = arrayMultiplier[arrayMultiplier.length - 1].toString().length
    const rows = (arr, index) => {

        let newArr = []

        for (i = 0; i < arr.length; i++) {
            newArr.push(arr[i].toString().padStart(lastString[i]))
        }

        lastArray.push(arrayMultiplier[index].toString().padStart(firstColumnWidth) + '|' + newArr.join(' ') + '\n')


    }

    for (let i = 0; i < tableNum.length; i++) {

        rows(tableNum[i], i)
    }

    for (let i = 0; i < arrayMultiplier.length; i++) {

        numMultiple.push(arrayMultiplier[i].toString().padStart(lastString[i]))
    }

    const dashs = numMultiple.join(" ").replace(/\d| |\W+n/g, "-");

    let titleStringLength = numMultiple.join(" ").length + firstColumnWidth + 1

    const finaliArray = [numMultiple.join(" ").padStart(titleStringLength) + '\n', dashs.padStart(titleStringLength) + '\n'];

    console.group("Задание 1 c таблицой умножения");
    console.log(finaliArray.concat(lastArray).join(''));
    console.groupEnd();
}

function NumArray(num) {
    return Array(num).fill().map((e, i) => i + 1);
}


function TableNumCreate(arrayMultiplier) {
    const newArray = [];
    for (let i = 1; i <= arrayMultiplier.length; i++) {
        newArray.push(arrayMultiplier.map((item) => item * i));
    }
    return newArray;
}


TableMultiple(10);