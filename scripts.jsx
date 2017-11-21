// My first react component! How exciting. Components today, Turkey tomorrow, Santa next month.
// A component in React should be uppercased
function Application() {
    // A React Component must return 1, and only 1 DOM element
    var zachsSeats = 1;
    var niksSeat = 100000;
    var chrisSeat = 'saxophone';
    // A component can pass props to another component inside of it. props are passed as "HTML attributes" and will be available in the child comp
    return (
        <div id="parent">
            <div class="sibling">
                <Student name="Jennifer" seat="3"/>
                <Student name="Jason" seat="27934"/>
                <Student name="Chris" seat="1324"/>
            </div>
        </div>
    )
};

function Student(props){
    // this is a component, a component return a single DOM element
    return(
        <li>{props.name} is in seat {props.seat}</li>
    )
}

// ReactDom is available because we include reactDOM.js
// the .render funciton needs React (react.js) and it takes 2 args:
    // 1. The component to render.
    // 2. Where to render it.

ReactDOM.render(
    // pass as object, not string
    // <h1>Hello, World</h1>,
    <Application />,
    document.getElementById('container')
)