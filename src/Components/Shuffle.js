export function shuffle (array) {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// [4, 10, 6, 2,  8, 11, 1, 9, 7, 3, 5]
//  0   1  2  3   4  5  6  7  8  9  10

// first run 
// i = 10;
// j = 4;
// temp = 11;
// array[10] = array[4];
// array[4] = 5;

// 2nd run
// i = 9;
// j = 2;
// temp = 10;
// array[9] = array[2] // 3
// array[2] = 10

// 3rd run
// i = 8;
// j = 6;
// temp = 9;
// array[8] = array[6]; //7
// array[6] = 9;

// 4th run
// i = 7;
// j = 6;
// temp = 8;
// array[7] = array[6] // 
// array[6] = 8;

// 5th run
// i = 6;
// j = 1;
// temp = 8;
// array[6] = array[1]; // 1
// array[1] = 8;

// 6th run
// i = 5;
// j = 4;
// temp = 6;
// array[5] = array[4] // 
// array[4] = 6;

// 7th run
// i = 4;
// j = 0;
// temp = 6;
// array[4] = array[0]
// array[0] = 6;

// 8th run
// i = 3;
// j = 1;
// temp = 4;
// array[3] = array[1];
// array[1] = 4;

// 9th run
// i = 2;
// j = 0;
// temp = 10;
// array[2] = array[0];
// array[0] = 10;

// 10th run
// i = 1;
// j = 0;
// temp = 4;
