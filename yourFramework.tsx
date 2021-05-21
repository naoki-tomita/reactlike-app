interface VNode {

}

const React = {
  createElement(tag: string, props: { [key: string]: any }, ...children: VNode[]): VNode {
    return {}
  }
}

function renderToString(el: any) {

}

declare namespace JSX {
  interface IntrinsicElements {
    [key: string]: any;
  }
}

const html = renderToString(
  <div>
    <h1>This is title.</h1>
    <div data-foo="bar">
      hello<br/>world
    </div>
  </div>
);

console.log(html);
