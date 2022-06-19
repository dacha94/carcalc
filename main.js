let modelCar = 0;
let yearCar = 1;

const selects = document.querySelectorAll('select');
const inputs = document.querySelectorAll('input');

// селекты
document.getElementById('carModel').addEventListener('change', function() {
    modelCar = this.value;
});

document.getElementById('carYear').addEventListener('change', function() {
    yearCar = this.value;
});

// радио кнопки
const radioEngine = document.querySelectorAll('input[name="engine"]');
const radioEnginePower = document.querySelectorAll('input[name="enginePower"]');
const radioGearbox = document.querySelectorAll('input[name="gearbox"]');

function calculate() {
    //Базовая цена модели, потеря стоимости с годами и км (селекты и инпут)
    let result = modelCar * yearCar;
        //Влияние на базовую цену (радиокнопки)
        for (const radio of radioEngine) {
            if (radio.checked === true) {
                result = result * radio.value;
            }
        }
    
        for (const enginePower of radioEnginePower) {
            if (enginePower.checked === true) {
                result = result + +enginePower.value;
            }
        }
    
        for (const gearbox of radioGearbox) {
            if (gearbox.checked === true) {
                result = result + +gearbox.value;
            }
        }
        return result;
    }

// // Чтобы пересчитывала и показывала промежуточную цену сразу и по ходу, если меняются селекты и инпуты
for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();
    })
}

for (const select of selects) {
    select.addEventListener('select', function () {
        calculate();
    })
}

let showResult = () =>{
    const showResultHtml = document.querySelector('.show-result');
    const result = calculate();
    if (result) {
        showResultHtml.innerHtml = `${result.toLocaleString('ru-RU')} RUB.`;
    } else {
        showResultHtml.innerHtml = '';
    }
}

