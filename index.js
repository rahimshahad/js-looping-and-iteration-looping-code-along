// Code your solutions in this file
function writeCards(people, gift) {
    let message = []
    for (let i = 0; i < people.length; i++) {
        message[i] = (`Thank you, ${people[i]}, for the wonderful ${gift} gift!`);
    }
    return message;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}