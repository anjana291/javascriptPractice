//w.a.p to display all armstrong number between 8 -500

for (let i = 8; i <= 500; i++) {
    let sum = 0;
    let num = i;
    let temp = i;

    while (temp > 0) {
        let ld = temp % 10;
        sum += ld**3;
        temp = parseInt(temp/10)
    }

    if (num === sum) {
        console.log(num);
    }
}
