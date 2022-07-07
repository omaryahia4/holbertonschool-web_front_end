function countPrimeNumbers(){
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let flag = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0 && j != 1) {
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            count +=1;
        }
}
return count;
}
var a = performance.now();
for(let i=0; i<=100;i++){
    setTimeout(countPrimeNumbers, 0);
}
var b = performance.now();
var time = (b - a);
console.log("Execution time of calculating prime numbers 100 times was " + time + " milliseconds.");