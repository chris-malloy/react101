// now let's switch to ES6 style
class CoinFlip extends React.Component {
    constructor(props) {
        // this is a child class of the react.component class
        super();
        this.test = "This is a test class property";
    }

    // most important part...
    render() {
        return (
            <h1>Sanity Check ES6 style</h1>
        )
    }
}