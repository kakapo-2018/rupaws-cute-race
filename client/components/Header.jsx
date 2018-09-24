import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <h1>Rupaws Cute Race</h1>
                <input type="button" value="Leaderboard"></input>
                <input type="button" value="Home"></input>
            </div>
        );
    }
}

export default Header;