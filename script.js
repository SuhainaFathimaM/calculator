
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

const micBtn = document.getElementById('mic-btn');
const recognition = new webkitSpeechRecognition(); // Use webkitSpeechRecognition for Chrome

micBtn.addEventListener('click', () => {
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.form1.answer.value = transcript;
    calculate(); // Calculate after voice input
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event);
};

// Calculate after voice input
recognition.onend = () => {
    calculate(); 
};




