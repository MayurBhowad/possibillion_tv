import React, { Component } from 'react'
import KeyBoard from './search/KeyBoard';
import RecentSearch from './search/RecentSearch';


const Search = () => {
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
        console.log(SearchString);
    }

    return (
        <div>
            <div className="tv-layout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="span12">
                            <div className="nav-row">
                                <a href="index.html">
                                    <div className="round-box back-arrow">
                                        <img src="assets/images/icons/arrow-back.png" />
                                    </div>
                                </a>
                                <a href="index.html">
                                    <div className="round-box close-icon">
                                        <img src="assets/images/icons/close-icon.png" />
                                    </div>
                                </a>

                            </div>
                            <div className="tv-data-row">
                                <div className="col-12">

                                    <div className="seach-box">
                                        <div className="input-group">
                                            <span className="input-search">
                                                <img src="assets/images/icons/search-icon.png" />
                                            </span>
                                            <input type="text" value={SearchString} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
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
            </div>
        </div>
    )
}

export default Search;
