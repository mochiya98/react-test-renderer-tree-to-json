const reactTestSymbol = Symbol.for("react.test.json");

// @types/react-test-renderer@16.8.1 is invalid(outdated?)
interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
}
type ComponentType = string | React.ComponentType | ((...args: any[]) => any);
interface ReactTestRendererJSON {
  children: null | ReactTestRendererJSON[];
  props: Props;
  type: ComponentType;
}
interface ReactTestRendererTree extends ReactTestRendererJSON {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance: any;
  nodeType: "component" | "host";
  rendered: null | ReactTestRendererTree | (ReactTestRendererTree | string)[];
}

export interface TestReactNode {
  $$typeof: typeof reactTestSymbol;
  children: (TestReactNode | string)[] | null;
  props: Props;
  type: string;
}

function normalizeMixedArray<T>(src: T | T[]): T[] {
  return Array.isArray(src) ? src : [src];
}
function normalizeType(type: ComponentType): string {
  if (typeof type === "string") return type;
  return (type as React.ComponentType).displayName || type.name || "Component";
}

function treeToJSON<T>(tree: T | ReactTestRendererTree): T | TestReactNode;
function treeToJSON(
  tree: ReactTestRendererTree | null | string
): TestReactNode | null | string {
  if (!tree || typeof tree === "string") return tree;

  const props: TestReactNode["props"] = { ...tree.props };
  delete props.children;

  const type: TestReactNode["type"] = normalizeType(tree.type);

  const children: TestReactNode["children"] =
    tree.rendered === null
      ? null
      : normalizeMixedArray(tree.rendered).map((r) => treeToJSON(r));

  return {
    $$typeof: reactTestSymbol,
    children,
    props,
    type,
  };
}

export { treeToJSON };
