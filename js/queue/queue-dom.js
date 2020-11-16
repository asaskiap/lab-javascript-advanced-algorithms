const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
    '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const displ = document.querySelector('.col-sm-1');
const queue = new QueueDataStructure();

const clearQueueInput = () => {
    queueInput.value = '';
};

const generateListQueue = () => {};

generateListQueue();

const generateWarningQueue = (type) => {
    if (type === 'Queue Overflow') {
        warningTopQueue.setAttribute('display', 'block');
        warningTopQueue.innerHTML = 'QUEUE OVERFLOW';
    } else {
        warningBottomQueue.innerHTML = 'QUEUE UNDERFLOW';
        warningBottomQueue.style.display = 'block';
        console.log(warningBottomQueue);
    }
};

const addToQueue = () => {
    const val = queue.enqueue(queueInput.value);
    if (val === 'Queue Overflow') {
        generateWarningQueue(val);
    } else {
        let newQueueElement = document.createElement('li');

        newQueueElement.className = 'active';
        newQueueElement.innerText = queueInput.value;
        queueUL.appendChild(newQueueElement);
        clearQueueInput();
    }
};

const removeFromQueue = () => {
    const val = queue.dequeue();
    if (val === 'Queue Underflow') {
        console.log(val);
        generateWarningQueue(val);
    } else {
        displ.innerHTML = val;
        queueUL.removeChild(queueUL.firstChild);
    }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);