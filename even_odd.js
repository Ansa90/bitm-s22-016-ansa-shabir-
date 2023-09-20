function EvenOrOdd() {
    const userInput = document.getElementById("numberInput").value;

//praseInt = parses a value as a string and returns the first integer.
    const number = parseInt(userInput);

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = `${number} is even.`;
    } else if(number % 2 !==0) {
        document.getElementById("result").innerHTML = `${number} is odd.`;
    }
}