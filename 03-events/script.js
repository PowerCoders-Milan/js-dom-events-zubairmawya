// 1. generate an array of 20 random numbers
const randomNumbers = max => Math.ceil(Math.random()*max);

const randomNumbersGenerator = numberOfElements => {
    const randNumbers = [];
    for (let i = 0; i < numberOfElements; i++) {
        randNumbers.push(randomNumbers(50));
    }
    return randNumbers;
}

const numbers = randomNumbersGenerator(20)
console.log(numbers)
// 2. show those numbers inside the page element.insertAdjentHTML
const numbersList = document.querySelector('.random-numbers ul');
console.log(numbersList)

const writeList = (listElement, listArray) => {
    listElement.innerHTML = "";

    listArray.forEach(element => {
        listElement.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
    })
}
writeList (numbersList, numbers)
/// complete this iterator to do the task

// 3. create an event on the a elements to change the page
// on each element call a callback functions that returns you the correct element
// refactor step 2 into a function to reuse that code to update the page
const buttons = document.querySelectorAll('.actions .btn');
const sortBtn = buttons[0];
sortBtn.addEventListener('click', event => {
    console.log(event.currentTarget);
    numbers.sort((a, b) => a - b);
    writeList(numbersList, numbers);
});


const oddBtn = buttons[1];
oddBtn.addEventListener('click', event => {
    console.log(event.currentTarget);
    const oddNumber = numbers.filter(number => number%2 !== 0);
    writeList(numbersList, oddNumber);
})
const evenBtn = buttons[2];
evenBtn.addEventListener('click', even => {
    console.log(even.currentTarget);
    const evenNumbers = numbers.filter(number => number%2 === 0);
    writeList(numbersList, evenNumbers);
})

buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        console.log(event.currentTarget);
        buttons.forEach(btn => btn.classList.remove('btn-active'));
        event.currentTarget.classList.add('btn-active');
    });
})
