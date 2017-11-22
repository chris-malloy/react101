// start with helper method
// it allows you to create a class in ES5
// it takes an object.  objects have properties.
// the only rule for these properties --> must have a render function

// remember, this way is the ES5 way
var CoinFlip = React.createClass({
    render: function(){
        return(
            <h1>Sanity Check</h1>
        );
    },
});