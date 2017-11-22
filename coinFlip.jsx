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
var CoinFlip = React.createClass({
    render: function(){
        return(
            <h1>Sanity Check</h1>
        );
    },
});

ReactDOM.render(
    <CoinFlip title="Flip the Coin" />,
    document.getElementById('root')
)