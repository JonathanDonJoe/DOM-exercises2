// console.log(`I poured spot remover on my dog. Now he's gone...`);

const container = document.querySelector(`.btn-container`);
const addBtn = document.querySelector(`[name="addBtn"]`);
const junkBtn = document.querySelector('.btn-container button');

const randNum = (max) => Math.floor(Math.random() * Math.floor(max));

/******************************
 * 
 *  Using the existing HTML and CSS, add Javascript code to do the following:
 * 
 *  1 - When the user clicks "Add New Button" a new button is added to the page.
 *  2 - The button can only be clicked a random number of times between 1 -10. A
 *      randNum function has been supplied.
 *  3 - Once the button has been clicked enough times, it should be disabled.
 * 
 ********************************/


function turnBlue(box) {
    box.style.backgroundColor="lightblue"
}


function clickButton(event) {
    if ( event.target !== event.currentTarget){
        event.target.dataset.number -= 1;
        if(event.target.dataset.number === "0") {
            event.target.innerHTML = `I can't be clicked anymore`
            turnBlue(event.target)
            event.target.disabled=true;
        } else {
            event.target.innerHTML = `I can be clicked ${event.target.dataset.number} times`;
        }
    }
}

function createButton () {
    const element = document.createElement('button');
    const realRand = randNum(10) +1 ;
    element.setAttribute('data-number', realRand)
    element.innerHTML += `I can be clicked ${realRand} times`
    console.log(element);
    container.appendChild(element);
}

container.addEventListener('click', clickButton);

addBtn.addEventListener('click', createButton);