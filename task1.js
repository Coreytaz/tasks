function TableMultiple(num) {
    const arrayMultiplier = NumArray(num);

    const numMultiple = "  " + arrayMultiplier.join(" ") + "\n";
    const dashs = numMultiple.replace(/\d| |\W+n/g, "-");
    const tableNum = TableNumCreate(arrayMultiplier);

    const finaliArray = [numMultiple, dashs, tableNum];

    console.group("Задание с таблицой умножения");
    console.log(finaliArray.join(" "));
    console.groupEnd();
}

function NumArray(num) {
    return Array.from({ length: num }, (e, i) => i + 1);
}

function TableNumCreate(arrayMultiplier) {
    const newArray = [];
    for (let i = 1; i < arrayMultiplier.length; i++) {
        newArray.push(
            i + "|" + arrayMultiplier.map((item) => item * i) + "\n"
        );
    }
    return newArray.join(" ").replaceAll(",", " ");
}
