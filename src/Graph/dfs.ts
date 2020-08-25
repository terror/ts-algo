const dfs = (vis: number[], graph: any, node: number) => {
    if (!vis.includes(node)) {
        console.log(node);
        vis.push(node);
        for (let i: number = 0; i < graph[node].length; ++i) {
            dfs(vis, graph, graph[node][i]);
        }
    }
};

export { dfs };
