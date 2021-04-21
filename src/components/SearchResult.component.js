import React from 'react';
import { connect } from 'react-redux';
import locale from 'locale-codes'
import TopNav from './top-nav/TopNav.component';


function SearchResult(props) {
    let displayCard;
    if (props.movies.movies === null || props.movies.loading) {
        displayCard = (<h4 className="loading">Loading...</h4>)
    } else {
        if (props.movies.movies.length > 0) {
            displayCard = (props.movies.movies.map(movie => (<MovieCard key={movie.id} movie={movie} />)))
        } else {
            displayCard = (<p className="no-movie-found">Movie Not Found!</p>)
        }
    }

    return (
        <div className="tv-layout">

            <div className="container-fluid">

                <div className="row">
                    <div className="span12">

                        <TopNav />



                        <div className="tv-data-row">
                            <h1>Search Results</h1>

                            <div className="col-12">

                                <div className="search-results">
                                    {displayCard}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="cd-panel cd-panel--from-right js-cd-panel-main">
                <div className="cd-panel__container">
                    <a href="#0" className="cd-panel__close js-cd-close">X</a>
                    <div className="cd-panel__content">
                        <div className="tv-slide-nav">
                            <ul>

                                <li>
                                    <a href="login.html">
                                        <img src="assets/images/icons/login-icon.png" /> Login</a>
                                </li>

                                <li>
                                    <a href="register.html">
                                        <img src="assets/images/icons/register-icon.png" /> Registration</a>
                                </li>

                                <li>
                                    <a href="subscription.html">
                                        <img src="assets/images/icons/subscrption-icon.png" /> Subscription</a>
                                </li>

                                <li>
                                    <a href="search.html">
                                        <img src="assets/images/icons/search-icon.png" /> Search</a>
                                </li>


                                <li>
                                    <a href="categories.html">
                                        <img src="assets/images/icons/categories-icon.png" /> Categories</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, {})(SearchResult)


const MovieCard = (props) => {
    let language = locale.getByTag(props.movie.original_language).name
    let image = props.movie.poster_path !== null
        ? (`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`)
        : 'https://lh3.googleusercontent.com/proxy/7a3BtlMo8Rz2_QlCMOaTNdBDjl_UgphFIWIo3afaoPZp9ms50nO6x5hDvUz3mOrrnTaxgNeRzcVaZoxyiZRyp0Q2eGOfMyJBmqqKOjQbLQ'
    return (
        <div key={props.movie.id} className="item"><a href="#">
            <img src={image} />
            <p className="movie-name">{props.movie.title} ({language})</p></a>
        </div>
    )
}