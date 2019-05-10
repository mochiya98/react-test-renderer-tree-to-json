import * as TestRenderer from "react-test-renderer";
import { treeToJSON } from ".";
import { testCases } from "../test/fixtures/snapshot";

describe.each(testCases)("snapshot", (title, node) => {
  it(title, () => {
    const wrapper = TestRenderer.create(node as any);
    const tree = wrapper.toTree();
    expect(treeToJSON(tree)).toMatchSnapshot();
    wrapper.unmount();
  });
});
