// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label = "") {
    console.log(`\nEnter ${label}matrix (${rows} x ${cols}):`);
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix, label = "Matrix") {
    console.log(`\n${label}:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += String(matrix[i][j]).padStart(4);
        }
        console.log(rowStr);
    }
}

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let j = 0; j < cols; j++) {
        result.push([]);
        for (let i = 0; i < rows; i++) {
            result[j].push(matrix[i][j]);
        }
    }
    return result;
}

function addMatrices(a, b) {
    const rows = a.length;
    const cols = a[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < cols; j++) {
            result[i].push(a[i][j] + b[i][j]);
        }
    }
    return result;
}

function multiplyMatrices(a, b) {
    const m = a.length;
    const n = b.length;
    const p = b[0].length;
    const result = [];
    for (let i = 0; i < m; i++) {
        result.push([]);
        for (let j = 0; j < p; j++) {
            let total = 0;
            for (let k = 0; k < n; k++) {
                total += a[i][k] * b[k][j];
            }
            result[i].push(total);
        }
    }
    return result;
}

function main() {
    console.log("Matrix Operations");
    console.log("1. Transpose a matrix");
    console.log("2. Add two matrices");
    console.log("3. Multiply two matrices");
    const choice = readlineSync.question("Choose an operation (1-3): ");

    if (choice === "1") {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");
        const matrix = readMatrix(rows, cols);
        printMatrix(matrix, "Original Matrix");
        printMatrix(transpose(matrix), "Transposed Matrix");

    } else if (choice === "2") {
        const rows = readlineSync.questionInt("Enter number of rows: ");
        const cols = readlineSync.questionInt("Enter number of columns: ");
        const matrixA = readMatrix(rows, cols, "first ");
        const matrixB = readMatrix(rows, cols, "second ");
        printMatrix(matrixA, "Matrix A");
        printMatrix(matrixB, "Matrix B");
        printMatrix(addMatrices(matrixA, matrixB), "A + B");

    } else if (choice === "3") {
        const m = readlineSync.questionInt("Enter rows of Matrix A: ");
        const n = readlineSync.questionInt("Enter columns of Matrix A (= rows of Matrix B): ");
        const p = readlineSync.questionInt("Enter columns of Matrix B: ");
        const matrixA = readMatrix(m, n, "A ");
        const matrixB = readMatrix(n, p, "B ");
        printMatrix(matrixA, "Matrix A");
        printMatrix(matrixB, "Matrix B");
        printMatrix(multiplyMatrices(matrixA, matrixB), "A x B");

    } else {
        console.log("Invalid choice.");
    }
}

main();

