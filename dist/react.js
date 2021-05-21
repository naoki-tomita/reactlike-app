"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const html = server_1.renderToString(react_1.default.createElement("div", null,
    react_1.default.createElement("h1", null, "This is title."),
    react_1.default.createElement("div", { "data-foo": "bar" },
        "hello",
        react_1.default.createElement("br", null),
        "world")));
console.log(html);
