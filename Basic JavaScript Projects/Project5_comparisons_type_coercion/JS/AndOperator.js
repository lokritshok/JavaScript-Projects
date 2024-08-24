//AndOperator.js


//using document.write in And, OR and Not Operators

var M = 100;
var N = 500;
var C = 1000;

document.write(M<N && N<C); //returned true



document.write(C<N && N<M); // returned false



document.write(M>N || C>N); //returned true



document.write(C<N || N<M); //returned false