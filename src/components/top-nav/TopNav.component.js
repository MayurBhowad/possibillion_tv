import React from 'react'
import { withRouter } from 'react-router-dom'

function TopNav(props) {
    const navigateToHome = (e) => {
        e.preventDefault();
        props.history.push('/');
    }

    return (
        <div className="nav-row">
            <a onClick={e => navigateToHome(e)}>
                <div className="round-box back-arrow">
                    <img src="assets/images/icons/arrow-back.png" />
                </div>
            </a>
            <a onClick={e => navigateToHome(e)}>
                <div className="round-box close-icon">
                    <img src="assets/images/icons/close-icon.png" />
                </div>
            </a>

        </div>
    )
}

export default withRouter(TopNav)
