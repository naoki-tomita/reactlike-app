"use strict";
const React = {
    createElement(tag, props, ...children) {
    }
};
function renderToString(el) {
}
const html = renderToString(React.createElement("div", null,
    React.createElement("h1", null, "This is title."),
    React.createElement("div", { "data-foo": "bar" },
        "hello",
        React.createElement("br", null),
        "world")));
console.log(html);
