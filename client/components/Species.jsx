import React from 'react';
const api = require('../api')

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: null,
      animals: []
    }
    this.getAllAnimals = this.getAllAnimals.bind(this)
  }
  componentDidMount(){
    api.getAllAnimals(this.getAllAnimals)
  }

  getAllAnimals(e, animals){
    this.setState({
      species: this.props.species,
      animals: animals
    })
  }

  render() {
    let dispArr = this.state.animals.filter(animal => {
      return animal.type == this.state.species
    })

    return (
      <div>
        <h2>Whos the cutest of them all?</h2>
          <div className="animal-home-display">
              {dispArr.map(animal => {
                console.log(animal)
                return (
                <div className="homepage-img">
                  <img src={animal.imgSrc} alt={animal.type}/>
                  <h3>{animal.type}</h3>
                </div>)
              })}
          </div>
      </div>
    );
  }
}

export default Species
