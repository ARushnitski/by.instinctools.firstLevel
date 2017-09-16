var firstTestArray = [2, 'text', 6, 7];
var secondTestArray = [true, true, true, true, true, true, true];
var thirdTestArray = [1, 2, 'text', undefined, 15];

function pushSummElements(firstArray, secondArray, thirdArray) {
    let summElements = [];
    for (let index = 0; index < firstArray.length || index < secondArray.length || index < thirdArray.length; ++index) {
        let elementFirstArray = !(isNaN(firstArray[index])) && firstArray[index] !== true ? firstArray[index] : 0;
        let elementSecondArray = !(isNaN(secondArray[index])) && secondArray[index] !== true ? secondArray[index] : 0;
        let elementThirdArray = !(isNaN(thirdArray[index])) && thirdArray[index] !== true ? thirdArray[index] : 0;
        let result = elementFirstArray + elementSecondArray + elementThirdArray;
        summElements.push(result);
        result = 0;
    }
    return summElements;
}