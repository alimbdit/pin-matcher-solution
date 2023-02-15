function setPin (){
    let pin = generatePin();
    pin += '';
    
    if(pin.length === 4){
        return pin;
    }
    else{
        return setPin();
    }
}

function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}

document.getElementById('generate-pin-btn').addEventListener('click', function(){
    const pinNumber = setPin ();
    const pinField = document.getElementById('pin-field');
    pinField.value = pinNumber;

});

document.getElementById('calculate').addEventListener('click', function(event){
    const number = event.target.innerText;
    const previousNumber = document.getElementById('input-field');

    if(isNaN(number)){
        if(number === 'C'){
            previousNumber.value = '';
        }
        else if (number === '<'){
            const numberValue = previousNumber.value;
            const splitNumber = numberValue.split('');
            splitNumber.pop()
            const digits = splitNumber.join('');
            previousNumber.value = digits;

        }
    }
    else{
        const currentNumber = previousNumber.value + number;
        previousNumber.value = currentNumber;
    }
    console.log()
});

document.getElementById('pin-submit').addEventListener('click', function(){
    const pinNumber = document.getElementById('pin-field').value;
    
    const currentPinNumber = document.getElementById('input-field').value;
    document.getElementById('input-field').value = '';
    const successMessage = document.getElementById('success');
    const failureMessage = document.getElementById('failure');
    if(pinNumber === currentPinNumber){
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
        
    }
    else{

        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
    }
    
})


