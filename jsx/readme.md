# JSX

JSX = Javascript + XML(HTML)

[Babel is a JavaScript compiler](https://babeljs.io/)

JSX is not directly recognized by browsers and must be compiled before it can be interpreted.

```html
<div>
  This is div.
  <span>This is span.</span>
</div>
```

```
(Babel)
=======>
```

```js
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/*#__PURE__*/_jsxs("div", {
  children: ["This is div.", /*#__PURE__*/_jsx("span", {
    children: "This is span."
  })]
});
```

JSX is a syntax extension for JavaScript, particularly used in the React library developed by Facebook. JSX allows developers to write HTML-like syntax within their JavaScript code, which makes it easier and more intuitive to define the structure and appearance of user interfaces.

In React, components are written as classes or functions that typically return JSX expressions. These expressions can include elements, attributes, conditional logic, and even JavaScript expressions embedded within curly braces {}.

For example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Here, `Welcome` is a React component that returns a JSX expression representing an HTML `<h1>` element with dynamic content from the `props` object.

JSX is not actual HTML but gets transpiled (converted) into regular JavaScript during the build process, creating React.createElement calls which React then uses to construct the Virtual DOM and efficiently update the real DOM when necessary.
