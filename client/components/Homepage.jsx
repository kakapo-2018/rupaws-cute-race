import React from 'react';

const api = require('../api')

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    }
    this.getAnimalsByParam = this.getAnimalsByParam.bind(this)
  }

  getAnimalsByParam(e, data) {
    this.setState({
      animals: data
    })
  }

  componentDidMount() {
    api.getAllAnimals(this.getAnimalsByParam)
  }

  render() {
    let arr = [];
    return (
      <div>
        <h2>Pick an Animal: </h2>
          <div className="animal-home-display">
              {this.state.animals.map(animal => {
                arr.push(animal)
                return arr.length <= 6 ? (<div className="homepage-img">
                  <img className="pics" src={animal.imgSrc} alt={animal.type} onClick={() => {this.props.setActivePage("species", animal.type)}}/>
                  <h3>{animal.type}</h3>
                </div>) : null
              })}
          </div>
      </div>
    );
  }
}

export default Homepage;