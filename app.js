let bill = document.getElementById('cost');
let people = document.getElementById('people');
const btn = document.querySelector('button');
const para = document.querySelector('p');

btn.addEventListener('click', function billSplit() {
    let billInput = bill.value;
    let peopleInput = people.value;

    let equation = (billInput / peopleInput);

    para.textContent = 'The bill should be split £' + equation + ' equally.';

});

