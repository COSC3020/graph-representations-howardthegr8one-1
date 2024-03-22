function convertToAdjList(adjMatrix) {
    let adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) {
        let edges = [];
        for (let j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j] == 1) edges.push(j)
        }
        adjList.push(edges)
    }
    return adjList
}

function convertToAdjMatrix(adjList) {
    let adjMatrix = [];
    for (let i = 0; i < adjList.length; i++) {
        let row = new Array(adjList.length).fill(0)
        for (nodes in adjList[i]) {
            row[adjList[i][nodes]] = 1
        }
        adjMatrix[i] = row
    }
    return adjMatrix
}   
