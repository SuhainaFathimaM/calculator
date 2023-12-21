


function appendValue(value) {
    document.form1.answer.value += value;
}

function calculate() {
    document.form1.answer.value = eval(document.form1.answer.value);
}

function clearAll() {
    document.form1.answer.value = '';
}








