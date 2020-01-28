function solution(A) {
    let myMap = {};
    A.forEach((number) => {
        if (myMap[number]) {
            myMap[number] += 1;
        } else {
            myMap[number] = 1;
        }
    });

    let exception = 0;

    Object.keys(myMap).forEach((key) => {
        exception += myMap[key] % 3;
    });

    if (exception > 2) console.log('false');
    else console.log('true');
}

solution([1, 2, 1, 2, 1, 2]);

