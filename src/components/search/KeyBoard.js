import React, { Component } from 'react'


function KeyBoard(props) {
    const [isNumber, setIsNumber] = React.useState(false)

    return (
        <>
            {
                isNumber ? (
                    <div className="key-board-box" id="show-numbers">
                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >1</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >2</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >3</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > & </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > # </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > ( </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > ) </button></span>
                            <span className="arrow-change"><button onClick={e => props.cancelLastLetter()}>
                                <img src="assets/images/icons/clear-icon.png" />
                            </button></span>
                        </div>

                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >4</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >5</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >6</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > @ </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > ! </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > ? </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > : </button></span>
                            <span className="arrow-change show-alpabets"><button onClick={e => setIsNumber(false)}>& ABC</button></span>
                        </div>

                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >7</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >8</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >9</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >0</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > . </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > _ </button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} > " </button></span>
                        </div>


                        <div className="key-board-row">
                            <span className="space-clear"><button onClick={e => props.handleSearch(' ')} >SPACE</button></span>
                            <span className="space-clear"><button onClick={e => props.clearSearchString()}>CLEAR</button></span>
                            <span className="search-btn"><a href="search-results.html"><button onClick={e => props.search(e)}>SEARCH</button></a></span>
                        </div>

                    </div>
                ) : (
                    <div className="key-board-box" id="show-alpabets">
                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)}>A</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >B</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >C</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >D</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >E</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >F</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >G</button></span>
                            <span className="arrow-change"><button onClick={e => props.cancelLastLetter()}>
                                <img src="assets/images/icons/clear-icon.png" />
                            </button></span>
                        </div>

                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >H</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >I</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >J</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >K</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >L</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >M</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >N</button></span>
                            <span className="arrow-change show-numbers">
                                <button onClick={e => setIsNumber(true)} > 123</button>
                            </span>
                        </div>

                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >O</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >P</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >Q</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >R</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >S</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >T</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >U</button></span>
                        </div>

                        <div className="key-board-row">
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >V</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >W</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >X</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >Y</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >Z</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >-</button></span>
                            <span className="key"><button onClick={e => props.handleSearch(e.target.innerText)} >'</button></span>
                        </div>

                        <div className="key-board-row">
                            <span className="space-clear"><button onClick={e => props.handleSearch(' ')} >SPACE</button></span>
                            <span className="space-clear"><button onClick={e => props.clearSearchString()}>CLEAR</button></span>
                            <span className="search-btn"><a href="search-results.html"><button onClick={e => props.search(e)}> SEARCH</button></a></span>
                        </div>

                    </div>
                )
            }
        </>
    )

}

export default KeyBoard
