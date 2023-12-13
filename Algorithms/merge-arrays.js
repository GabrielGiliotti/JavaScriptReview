const { edAbril, edMaio } = require("./publishers")

function mergeArrays(l1, l2) {
    let finalList = [];
    let atual = 0;
    let posAtualL1 = 0;
    let posAtualL2 = 0;

    while(posAtualL1 < l1.length && posAtualL2 < l2.length) {
        let itemAtualL1 = l1[posAtualL1];
        let itemAtualL2 = l2[posAtualL2];

        if(itemAtualL1.preco < itemAtualL2.preco) {
            finalList[atual] = itemAtualL1;
            posAtualL1++;
        }
        else 
        {
            finalList[atual] = itemAtualL2;
            posAtualL2++;
        }
        
        atual++;
    }

    while(posAtualL1 < l1.length) {
        finalList[atual] = l1[posAtualL1];
        posAtualL1++;
        atual++;
    }

    while(posAtualL2 < l2.length) {
        finalList[atual] = l2[posAtualL2];
        posAtualL2++;
        atual++;
    }

    return finalList;
}

console.log(mergeArrays(edAbril, edMaio));