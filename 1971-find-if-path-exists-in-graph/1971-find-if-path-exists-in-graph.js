var validPath = function(n, edges, source, destination) {
    let graph = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Array(n).fill(false);
    let queue = [source];
    visited[source] = true;

    while (queue.length) {
        let node = queue.shift();

        if (node === destination) return true;

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return false;
};