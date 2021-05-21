"use strict";
var React = {
    createElement: function (tag, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
    }
};
function renderToString(el) {
}
var html = renderToString(React.createElement("div", null,
    React.createElement("h1", null, "This is title."),
    React.createElement("div", { "data-foo": "bar" },
        "hello",
        React.createElement("br", null),
        "world")));
console.log(html);
