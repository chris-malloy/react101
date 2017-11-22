function Poster(props){
    return(
        <div className="col s12 m4 l3">
            <img src={props.image} />
        </div>
    )
}
class Movies extends React.Component{
    constructor(){
        super();
        this.state = {
            moviesToShow: []
        }
    }
    // this belongs to React.Component. It is similar to document.ready
    // if something 
    componentDidMount(){
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
        $.getJSON(url, (movieData)=>{
            var nowPlayingArray = [];
            movieData.results.map((movie)=>{
                nowPlayingArray.push(movie);
            });
            this.setState({
                moviesToShow: nowPlayingArray
            })
        });
    }
    render(){
        const imagePath = "http://image.tmdb.org/t/p/w300";
        var moviesList = [];
        this.state.moviesToShow.map((movie, index)=>{
            var fullImagePath = imagePath + movie.poster_path;
            moviesList.push(<Poster key={index} image={fullImagePath} />)
        });
        console.log(moviesList); 
        return(
             <div className="container">
                <div className="row">
                    <div className="col s12 center">
                        <div className="th-wrapper">
                            <a className="waves-effect waves-light btn">Reset Search</a>
                        </div>
                        <div className="movie-rows">
                            {/* Movies go here! */}
                            {moviesList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Movies />,
    document.getElementById('root')
)