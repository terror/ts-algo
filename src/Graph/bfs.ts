class Queue<T> {
    q: T[] = [];
    push(val: T) {
        this.q.push(val);
    }
    pop(): T | any {
        return this.q.shift();
    }
    empty(): boolean {
        return this.q.length === 0;
    }
}

const bfs = (vis: number[], graph: any, node: number) => {
    let q: Queue<number> = new Queue();
    q.push(node);
    vis.push(node);

    while (!q.empty()) {
        let v: number = q.pop();
        for (let i: number = 0; i < graph[v].length; ++i) {
            if (!vis.includes(graph[v][i])) {
                q.push(graph[v][i]);
                vis.push(graph[v][i]);
            }
        }
    }
    return vis;
};

export { bfs };
