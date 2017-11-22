// pure component ... defeats the purpose of react
// function CoinFlip(props){
//     return(
//         <h1>{props.title}</h1>
//     )
// }

// stateful component

// start with helper method
// it allows you to create a class in ES5
// it takes an object.  objects have properties.
// the only rule for these properties --> must have a render function

// remember, this way is the ES5 way
// var CoinFlip = React.createClass({
//     render: function(){
//         return(
//             <h1>Sanity Check</h1>
//         );
//     },
// });

// now let's switch to ES6 style
class CoinFlip extends React.Component{
    constructor(props){
        // this is a child class of the react.component class
        super();
        this.test = "This is a test class property";
        this.title = props.title;
        this.coin = [
            props.heads,
            props.tails
        ]
        // state special to React
        this.state = {
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    // member method to flip coin --> use to change this.state.image
    flipCoin(){
        var coinSide = Math.round(Math.random());
        this.setState({
            image : this.coin[coinSide]
        })
    }

    // most important part...  
    render(){
        return(
            <div className="coin-flip">
                <h1>{this.title}</h1>
                <div>
                    {/* place flipCoin method as callback */}
                    <button onClick={this.flipCoin}>Click to Flip</button>
                    <img src={this.state.image} />
                </div>
            </div>
        )
    }
}

function Index(){
    return(
        <div>
            <CoinFlip title="Flip the Coin" heads="images/coin-front.jpg" tails="images/coin-back.jpg" />
        </div>
    )
}
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)