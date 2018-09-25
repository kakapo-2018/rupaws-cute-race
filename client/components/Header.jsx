import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <img src='title.svg' className="header-title"></img>
                <div className="header-btns">
                  <input type="button" className="header-btn-text" value="Leaderboard"></input>
                  <input type="button" className="header-btn-text" value="Home" onClick={(e) => {e.preventDefault(); this.props.setActivePage("home", null)}}></input>
                </div>
            </div>
        );
    }
}

export default Header;