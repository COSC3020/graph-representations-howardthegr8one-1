[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

## My Answer

### Adjacency Matrix to List
The runtime would be $\Theta(V^2)$. The outer ```for``` loop iterates through the length of the given matrix, which is just the number of vertices. The inner ```for``` also runs for the same number of iterations and since every other operation in the function is a constant we're left with $\Theta(V^2)$. 

### Adjacency List to Matrix
The runtime would be $\Theta(V^2 + (VE))$. The outer ```for``` iterates through the vertices of the given list, then within that loop an array of zeros is initialized also with the number of vertices, thus we have a runtime of $V^2$. Additionally within the ```for``` loop the function iterates through all vertices connected to a particular vertex. Therefore our final runtime is $\Theta(V^2)$.
