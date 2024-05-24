
function appendValue(value) {
    document.form1.answer.value += value;
}

function calculate() {
    document.form1.answer.value = eval(document.form1.answer.value);
}

function clearAll() {
    document.form1.answer.value = '';
}

const modeswitch=document.getElementById("mode-switch");
const body=document.body;
modeswitch.addEventListener("change",()=>
{
    if(modeswitch.checked)
        {
            body.classList.add("dark-mode");
        }
        else{
            body.classList.remove("dark-mode");
        }
});



