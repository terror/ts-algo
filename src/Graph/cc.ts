// Finding the number of connected components in a graph
import _ from 'lodash';
const dfs = (vis: number[], graph: any, node: number) => {
    if (_.isEmpty(graph)) return -1;
    if (!vis.includes(node)) {
        vis.push(node);
        for (let i: number = 0; i < graph[node].length; ++i)
            dfs(vis, graph, graph[node][i]);
    }
    return vis;
};

const cc = (vis: number[], graph: any, nodes: number) => {
    let ans: number = 0;
    for (let i = 0; i < nodes; ++i) {
        if (!vis.includes(i)) ++ans, dfs(vis, graph, i);
    }
    return ans;
};

export { cc };
