const { edAbril, edMaio } = require("./publishers")

function mergeArrays(l1, l2) {
    let finalList = [];
    let current = 0;
    let currentPosL1 = 0;
    let currentPosL2 = 0;

    while(currentPosL1 < l1.length && currentPosL2 < l2.length) {
        let currentItemL1 = l1[currentPosL1];
        let currentItemL2 = l2[currentPosL2];

        if(currentItemL1.preco < currentItemL2.preco) {
            finalList[current] = currentItemL1;
            currentPosL1++;
        }
        else 
        {
            finalList[current] = currentItemL2;
            currentPosL2++;
        }
        
        current++;
    }

    while(currentPosL1 < l1.length) {
        finalList[current] = l1[currentPosL1];
        currentPosL1++;
        current++;
    }

    while(currentPosL2 < l2.length) {
        finalList[current] = l2[currentPosL2];
        currentPosL2++;
        current++;
    }

    return finalList;
}

console.log(mergeArrays(edAbril, edMaio));