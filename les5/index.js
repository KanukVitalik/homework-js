// 1
function compare(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

// 2
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3
function digitsToNumber(a, b, c) {
    return (`${a}${b}${c}`);
}

// 4
function rectangleArea(a, b = a) {
    return a * b;
}

// 5
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0)
            sum += i;
    }
    return sum === num && num !== 0;
}

// 6
function perfectInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            console.log(i);
        }
    }
}

// 8
function timeToSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}
