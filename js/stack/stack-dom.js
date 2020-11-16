const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
    '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');
const displ = document.querySelector('.col-sm-1');
const newStack = new StackDataStructure();

const clearStackInput = () => {
    stackInput.value = '';
};

const renderListStack = () => {
    // ... your code goes here
};

renderListStack();

const generateWarningStack = (val) => {
    if (val === 'Stack Overflow') {
        warningTopStack.setAttribute('display', 'block');
        warningTopStack.innerHTML = 'STACK OVERFLOW';
    } else {
        warningBottomStack.innerHTML = 'STACK UNDERFLOW';
        warningBottomStack.style.display = 'block';
        console.log(warningBottomStack);
    }
};

const addToStack = () => {
    const val = newStack.push(stackInput.value);
    if (val === 'Stack Overflow') {
        generateWarningStack(val);
    } else {
        let newStackElement = document.createElement('li');

        newStackElement.className = 'active';
        newStackElement.innerText = stackInput.value;
        stackList.appendChild(newStackElement);
        clearStackInput();
    }
};

const removeFromStack = () => {
    const val = newStack.pop();
    if (val === 'Stack Underflow') {
        console.log(val);
        generateWarningStack(val);
    } else {
        displ.innerHTML = val;
        stackList.removeChild(stackList.lastChild);
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);