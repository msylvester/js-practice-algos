/*
Problem: Matrix Mult
Input: Two matrices, A (of dimension  x by y) and B (of dimension y by z) 
Output: An x by z matrix Z where C[i][j] is the dot proudct of the ith row of A and the jth column of B
*/

const matrix_mult = (arrayA, arrayB) => {
    const { length: lengthA } = arrayA
    const array2D = make2d(lengthA, arrayB[0].length);
    array2D.forEach((a) =>  console.log(`here is teh array for 2d ${a}`));
    for (let i = 1; i <= lengthA; i++) {
        try { 
        console.log(`here is the value of ${arrayA} and ${arrayA[i]}`)
        } catch (e) {
            console.log(`here sit ${e}`)
        }
        let columnsA; 
        if (arrayA[i]  && arrayA[i].length) {
            columnsA = arrayA[i].length
        }
    
        for (let j = 0; j < columnsA; j++) {
            array2D[i][j] = 0;
            const { length: lengthK } = arrayB[i];
            for (let k = 0; k < lengthK; k++) {
                array2D[i][j] += arrayA[i][k] * arrayB[k][j]
            }
        }
    }
    return array2D;
}

const make2d = (r, c) => [...Array(r)].map(x => Array(c).fill(0));

const result = matrix_mult([[3, 3, 3], [2, 2, 2], [4, 4, 4]], [[3, 3, 3], [2, 2, 2], [4, 4, 4]])
console.log(`here is the result ${result}`)