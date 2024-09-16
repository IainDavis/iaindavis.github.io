// removeTruncateMarker.mjs
import { visit } from 'unist-util-visit';

const removeTruncateMarker = ({ regex }) => (tree) => {
    visit(tree, 'text', (node, index, parent) => {
        regex.test(node?.value) && parent?.children?.splice(index, 1);
    });
}

export default removeTruncateMarker;

