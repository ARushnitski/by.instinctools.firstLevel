let btnResult = document.getElementsByName("result")[0];
btnResult.addEventListener("click", result);
let btnReset = document.getElementsByName("reset")[0];
btnReset.addEventListener("click", reset);

let summElements = [];
let resultValue = document.querySelector('.resultValue');
let span = document.createElement("span");

/**
 * Метод получает все значения из всех input и заполняет массив.
 * Вызывает функцияю "pushSummElements" и помещает результат в элемент span.
 * Блокирует кнопку Result от повторного нажатия и разблокирует кнопку Reset.
 */
function result() {
    var valuesArr = [];
    var allInputs = document.querySelectorAll('input[type=text]');
    for (var index = 0; index < allInputs.length; index++) {
        valuesArr[index] = allInputs[index].value.split(",");
    }
    span.innerHTML = pushSummElements(valuesArr[0], valuesArr[1], valuesArr[2]);
    resultValue.appendChild(span);
    btnResult.setAttribute('disabled', 'disabled');
    btnReset.removeAttribute('disabled');
}
/**
 * Метод удаляет элемент Span.
 * Обнуляет массив суммы введенных элементов.
 * Разблокирует кнопку Result и блокирует кнопку Reset.
 */
function reset() {
    summElements = [];
    resultValue.removeChild(span);
    btnReset.setAttribute('disabled', 'disabled');
    btnResult.removeAttribute('disabled');
}
/**
 * Метод принимает на вход 3 массива значений, после проверки является ли элемент числом суммируетсяс последующими элементами и вносится в новый массив результата
 * @param {Array} firstArray 
 * @param {Array} secondArray 
 * @param {Array} thirdArray 
 */
function pushSummElements(firstArray, secondArray, thirdArray) {
    for (let index = 0; index < firstArray.length || index < secondArray.length || index < thirdArray.length; ++index) {
        let elementFirstArray = !(isNaN(+firstArray[index])) && firstArray[index] !== true ? +firstArray[index] : 0;
        let elementSecondArray = !(isNaN(+secondArray[index])) && secondArray[index] !== true ? +secondArray[index] : 0;
        let elementThirdArray = !(isNaN(+thirdArray[index])) && thirdArray[index] !== true ? +thirdArray[index] : 0;
        let result = elementFirstArray + elementSecondArray + elementThirdArray;
        summElements.push(result);
        result = 0;
    }
    return summElements;
}