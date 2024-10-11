function getOtosLotteryNumbers(){
    let szam = [];
    

    for (let i = 0; i < 5; i++) {
        let szamok = Math.floor(Math.random() * 90)+1;
        szam.push(szamok);
    }
    return szam;
}

console.log(getOtosLotteryNumbers());


function getSortedtLotteryNumbers(){
    let szam = getOtosLotteryNumbers();
    szam.sort(function(a, b)(return a - b));
    return szam;
}

console.log(getSortedtLotteryNumbers())

function getNumberOfHits(){
    
}

