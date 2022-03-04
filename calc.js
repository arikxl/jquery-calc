$(document).ready(function(){
    let result = 0 ;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = '0';
    updateScreen(result);

    $('.btn').on('click', function(e) {
        var buttonPressed = $(this).html();  

    if(buttonPressed === "איפוס"){
        result = 0;
        currentEntry = '0';
    } else if(buttonPressed === 'מחק') {
        currentEntry = '0';
    } else if(buttonPressed === 'חזרה') {
        currentEntry = currentEntry.substring(0,currentEntry.length-1);
    } else if(buttonPressed === '+/-') {
        currentEntry *=-1;
    } else if(buttonPressed === '.'){
        currentEntry+='.';
    } else if(isNumber(buttonPressed)) {
        if(currentEntry === '0') currentEntry = buttonPressed;
        else currentEntry = currentEntry + buttonPressed;
    } else if(isOperator(buttonPressed)) {
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = ''
    } else if(buttonPressed === '%') {
        currentEntry = currentEntry/100;
    } else if(buttonPressed === 'שורש') {
        currentEntry = Math.sqrt(currentEntry);
    } else if(buttonPressed === '1/x') {
        currentEntry = 1/currentEntry;
    } else if(buttonPressed === 'π') {
        currentEntry = Math.PI;
    } else if(buttonPressed === '=') {
        currentEntry = operate(prevEntry, currentEntry, operation);
        operation = null;
    }
    updateScreen(currentEntry)
    });
});

updateScreen = function(displayValue) {
    if (displayValue === undefined) return;
    let display = displayValue.toString();
    $('.screen').html(display.substring(0,10));
};

isNumber = function(value) {
    return !isNaN(value)
};

isOperator = function(value) {
    return value === '+' || value === '-' || value === '/' || value === '*'
};

operate = function(a, b, operation) {
    let numA = parseFloat(a);
    let numB = parseFloat(b);
    if(operation === '+') return numA + numB;
    if(operation === '-') return numA - numB;
    if(operation === '*') return numA * numB;
    if(operation === '/') return numA / numB;
};