/**
 * Изменяется исходный массив.
 * Добавление нового метода в прототип объекта Array для перемешивания заданного массива
 * методом рандомного выбора элемента из массива и постановки его в конец массива.
 */
Array.prototype.suffle = function () {
    let arr = this;
    let countIteration = arr.length;
    let elem;
    function randomElem() {
        return elem = arr.splice(Math.floor(Math.random() * arr.length), 1);
    }
    for (let index = 0; index < countIteration; index++) {
        randomElem(arr);
        arr.push(elem[0]);
    }
    return arr;
};

/**
 * Исходный массив не изменяется, метод возвращает новый массив.
 * Добавление нового метода в прототип объекта Array для возврата перемешенного массива которыйы был задан
 * методом рандомного выбора элемента из массива и постановки его в конец массива.
 */
Array.prototype.suffleNewArray = function () {
    let arr = this.slice();
    let countIteration = arr.length;
    let res = [];
    let elem;
    function randomElem(array) {
        return elem = array.splice(Math.floor(Math.random() * array.length), 1);
    }
    for (let index = 0; index < arr.length;) {
        randomElem(arr);
        res.push(elem[0]);
    }
    return res
};

let suffleBtn = document.getElementsByName('suffleBtn')[0];
suffleBtn.addEventListener("click", setResult);
let suffleArr = document.getElementsByName('suffleArr')[0];
let res = document.getElementsByClassName('result')[0];
res.appendChild(span);

/**
 * Метод преобразует введеную строку в массив и 
 * заполняет значение вставляемого результата в созданный элемент
 */
function setResult() {
    let valueArr = suffleArr.value.split(",");
    span.innerHTML = valueArr.suffle();
}

