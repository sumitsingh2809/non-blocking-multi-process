process.on('message', (message) => {
    const { number } = message;
    const response = isPrime(number);
    process.send(response);
    process.exit();
});

function isPrime(number) {
    let startTime = new Date();
    let endTime = new Date();
    let isPrime = true;

    for (let i = 3; i < number; i++) {
        if (number % i === 0) {
            endTime = new Date();
            isPrime = false;
            console.log(i);
            break;
        }
    }

    if (isPrime) endTime = new Date();

    return {
        number: number,
        isPrime: isPrime,
        time: endTime.getTime() - startTime.getTime(),
    };
}
