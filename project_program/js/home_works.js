const gmailInp = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const validateGmail = (gmail) => {
    const regExp = /^[a-z0-9._]+@gmail\.com$/i
    return regExp.test(gmail)
}

gmailBtn.addEventListener('click', () => {
    const gmail = gmailInp.value.trim()
    if (validateGmail(gmail)){
        gmailResult.style.color = 'green'
        gmailResult.innerHTML = 'Адрес правильный'
    } else {
        gmailResult.innerHTML = 'Адрес неправильный'
        gmailResult.style.color = 'red'
    }
})

const parent = document.querySelector('#parent_block')
const child = document.querySelector('#child_block')

function moveRight(position){
    if (position < parent.clientWidth - child.clientWidth){
        position += 1
        child.style.right = `${position}px`

        setTimeout(() => moveRight(position), 10)
    }
}

moveRight()

const moveRightAndDown = (left, top) => {
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    if (left < parent.clientWidth - child.clientWidth){
        left += 1;
        child.style.left = `${left}px`;
        setTimeout(()=> moveRightAndDown(left, top), 100);
    } else if (top < parent.clientHeight - child.clientHeight){
        top += 1;
        child.style.top = `${top}px`;
        setTimeout(() => moveRightAndDown(left, top), 100);
    }
};

moveRightAndDown(0, 0);

let count = 0;
let isCounting = false;
let intervalId;

const time = document.querySelector('#time_buttons');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const startCounting = () => {
    if (!isCounting) {
        isCounting = true;
        intervalId = setInterval(() => {
            count++;
            time.textContent = count;
        }, 1000);
    }
};

const stopCounting = () =>{
    if (isCounting){
        isCounting = false;
        clearInterval(intervalId);
    }
};

const resetCounting = () => {
    stopCounting();
    count = 0;
    time.textContent = count;
};

start.addEventListener('click', startCounting);
stop.addEventListener('click', stopCounting);
reset.addEventListener('click', resetCounting);
