import React, { Component } from 'react'
import { connect } from 'react-redux';
import KeyBoard from './search/KeyBoard';
import RecentSearch from './search/RecentSearch';

import { searchMoviesByString } from '../redux/actions/movies.action';
import TopNav from './top-nav/TopNav.component';


const Search = (props) => {
    const [SearchString, setSearchString] = React.useState('');

    const handleSearch = (letter) => {
        setSearchString(SearchString + letter);
    }

    const cancelLastLetter = () => {
        setSearchString(SearchString.slice(0, -1));
    }

    const clearSearchString = () => {
        setSearchString('');
    }

    const search = (e) => {
        e.preventDefault();
        props.searchMoviesByString(SearchString)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="span12">
                    <TopNav />
                    <div className="tv-data-row">
                        <div className="col-12">

                            <div className="seach-box">
                                <div className="input-group">
                                    <span className="input-search">
                                        <img src="assets/images/icons/search-icon.png" />
                                    </span>
                                    <input type="text" defaultValue={SearchString} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className="search-block-iteams">
                                <RecentSearch />
                                <KeyBoard handleSearch={handleSearch} cancelLastLetter={cancelLastLetter} clearSearchString={clearSearchString} search={search} />
                            </div>
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

export default connect(mapStateToProps, { searchMoviesByString })(Search);
