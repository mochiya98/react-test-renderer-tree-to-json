import * as React from "react";
import { Component, FunctionComponent, ReactElement, ReactNode } from "react";

const EmptyComponent: FunctionComponent = (): null => null;
const DivWrapper: FunctionComponent = ({
  children
}: {
  children?: ReactNode;
}): ReactElement<HTMLElement> => <div>{children}</div>;

class ClassComponent extends Component {
  public render(): ReactNode {
    return null;
  }
}

export { EmptyComponent, DivWrapper };

/* eslint-disable react/jsx-key */
export const testCases: [string, ReactElement | null][] = [
  ["null", null],
  ["empty children", <p />],
  ["with props", <p className="a" />],
  ["string children", <p>hoge</p>],
  ["null component", <EmptyComponent />],
  ["class component", <ClassComponent />],
  [
    "anonymous component",
    (AnonymousComponent => <AnonymousComponent />)(() => null)
  ],
  [
    "raw children",
    <DivWrapper>
      <p />
    </DivWrapper>
  ],
  [
    "single children",
    <p>
      <p />
    </p>
  ],
  [
    "multiple children",
    <p>
      <p className="a" key="a" />
      <p className="b" key="b" />
    </p>
  ],
  [
    "multiple children with keys",
    <p>
      <p key="a" />
      <p key="b" />
    </p>
  ],
  [
    "multiple children includes null",
    <div>
      <p className="a" />
      {null}
      <p className="b" />
    </div>
  ],
  [
    "multiple children includes string",
    <div>
      <div className="a" />
      hoge
      <div className="b" />
    </div>
  ],
  [
    "deep dive",
    <DivWrapper>
      <p className="a">
        <DivWrapper>
          <p className="b">hoge</p>
        </DivWrapper>
      </p>
    </DivWrapper>
  ]
];
/* eslint-enable react/jsx-key */
