import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <img src='title.svg'></img>
                <input type="button" value="Leaderboard"></input>
                <input type="button" value="Home" onClick={(e) => {e.preventDefault(); this.props.setActivePage("home", null)}}></input>
            </div>
        );
    }
}

export default Header;