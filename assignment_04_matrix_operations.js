// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
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
