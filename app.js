let input = document.getElementById('input');
let btn = document.querySelectorAll('.btn');
let string = '';

btn.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.innerHTML === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch (error) {
                input.value = 'Error';
                string = '';
            }
        } else if (element.innerHTML === 'C') {
            string = '';
            input.value = string;
        } else if(element.innerHTML === 'CE'){
            string = string.slice(0 , - 1);
            input.value = string;
        } else if (string.endsWith(')') && !(element.innerHTML === '*') && !(element.innerHTML === '/') && !(element.innerHTML === '-') && !(element.innerHTML === '+')) {
            string = string + '*' + element.innerHTML;
            input.value = string;   
        } else {
            string = string + element.innerHTML;
            input.value = string;
        }
    });
});


