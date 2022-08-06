let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');

document.addEventListener('keyup', function (e) {
    if (input1.value) {
        input2.focus()
    }
    if (input2.value) {
        input3.focus()
    }
    if (input3.value) {
        input4.focus()
    }



    if (input4.value && input3.value && input2.value && input1.value) {
        if (input4.value == 7 && input3.value == 9 && input2.value == 0 && input1.value == 8){
            document.querySelector('.popap').classList.remove('none');
            input4.blur()
        } else {
            input4.value = '';
            input3.value = '';
            input2.value = '';
            input1.value = '';
            input1.focus()
        }
    }


    if (e.key == 'Backspace') {
        if(input1.value){
            input1.focus()
        }
        if(input2.value && input1.value){
            input2.focus()
        }
        if(input3.value && input2.value && input1.value){
            input3.focus()
        }
        if(input4.value && input3.value && input2.value && input1.value){
            input3.focus()
        }
    }

})


