# react-test-renderer-tree-to-json

[![Build Status](https://img.shields.io/travis/mochiya98/react-test-renderer-tree-to-json.svg?branch=master&style=flat-square)](https://travis-ci.org/mochiya98/react-test-renderer-tree-to-json) [![Coverage Status](https://img.shields.io/coveralls/github/mochiya98/react-test-renderer-tree-to-json.svg?style=flat-square)](https://coveralls.io/github/mochiya98/react-test-renderer-tree-to-json?branch=master)  
[![npm Version](https://img.shields.io/npm/v/react-test-renderer-tree-to-json.svg?style=flat-square)](https://www.npmjs.com/package/react-test-renderer-tree-to-json) [![License](https://img.shields.io/npm/l/react-test-renderer-tree-to-json.svg?style=flat-square)](https://www.npmjs.com/package/react-test-renderer-tree-to-json) [![Downloads](https://img.shields.io/npm/dm/react-test-renderer-tree-to-json.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-test-renderer-tree-to-json)

Convert [React Test Renderer](https://reactjs.org/docs/test-renderer.html) tree to a format compatible with [Jest snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing).  
This is similar to [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json).

# Install

```console
$ npm i -D react-test-renderer-tree-to-json
```

# Usage

Only for full rendering without key props.

```jsx
import React from "react";

import TestRenderer from "react-test-renderer";
import { treeToJSON } from "react-test-renderer-tree-to-json";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const Hoge = () => <div />;

it("snapshot", () => {
  const renderer = TestRenderer.create(<Hoge />);
  const tree = renderer.toTree();
  expect(treeToJSON(tree)).toMatchSnapshot();
  // similar to
  const wrapper = mount(<Hoge />);
  expect(toJson(wrapper, { noKey: true })).toMatchSnapshot();
});
/*-----------------------
exports[`snapshot 1`] = `
<Hoge>
  <div />
</Hoge>
`; 
-----------------------*/
```
