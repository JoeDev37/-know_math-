

const input = document.getElementById('input');

function calc(value) {
    input.value += value;
}

function equal() {
    // console.log('=')
    try {
        input.value = eval(input.value);
    }
    catch(error) {
        input.value = 'Error';
    }
}

function clearCalc() {
    input.value = '';
}

document.title = 'Calculator'