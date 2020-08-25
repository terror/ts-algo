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
export { dfs };
