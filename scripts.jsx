// ReactDom is available because we include reactDOM.js
// the .render funciton needs React (react.js) and it takes 2 args:
    // 1. The component to render.
    // 2. Where to render it.

ReactDOM.render(
    // pass as object, not string
    <h1>Hello, World</h1>,
    document.getElementById('container')
)