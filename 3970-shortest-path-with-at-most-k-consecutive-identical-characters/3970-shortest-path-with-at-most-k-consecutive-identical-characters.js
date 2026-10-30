/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */


var shortestPath = function(n, edges, labels, k) {
    if (k < 1) return -1;

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
    }

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(value) {
            this.heap.push(value);
            let i = this.heap.length - 1;

            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);

                if (this.heap[parent][0] <= this.heap[i][0]) break;

                [this.heap[parent], this.heap[i]] =
                    [this.heap[i], this.heap[parent]];

                i = parent;
            }
        }

        pop() {
            const result = this.heap[0];
            const last = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = last;
                let i = 0;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;

                    if (
                        left < this.heap.length &&
                        this.heap[left][0] < this.heap[smallest][0]
                    ) {
                        smallest = left;
                    }

                    if (
                        right < this.heap.length &&
                        this.heap[right][0] < this.heap[smallest][0]
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [this.heap[i], this.heap[smallest]] =
                        [this.heap[smallest], this.heap[i]];

                    i = smallest;
                }
            }

            return result;
        }

        get size() {
            return this.heap.length;
        }
    }

    const dist = Array.from(
        { length: n },
        () => Array(k + 1).fill(Infinity)
    );

    const pq = new MinHeap();

    dist[0][1] = 0;
    pq.push([0, 0, 1]);

    while (pq.size > 0) {
        const [cost, node, count] = pq.pop();

        if (cost !== dist[node][count]) continue;

        if (node === n - 1) {
            return cost;
        }

        for (const [next, weight] of graph[node]) {
            let newCount;

            if (labels[node] === labels[next]) {
                newCount = count + 1;
            } else {
                newCount = 1;
            }

            if (newCount > k) continue;

            const newCost = cost + weight;

            if (newCost < dist[next][newCount]) {
                dist[next][newCount] = newCost;

                pq.push([
                    newCost,
                    next,
                    newCount
                ]);
            }
        }
    }

    return -1;
};
