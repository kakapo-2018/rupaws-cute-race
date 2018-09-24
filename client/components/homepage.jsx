import React from 'react';

const api = require('../api')

class homepage extends React.Component {
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
    
    console.log(this.state.animals.length > 0 && this.state.animals[0].imgSrc);

    return (
      <div>

        <h2>Pick an Animal: </h2>

        <table>
          <tbody>
             
            <tr>  
         
            {/* {this.state.animals.length > 0 && this.state.animals.map(animal => {
                    console.log(animal)
                    return <td><img src={animal.imgSrc}></img></td>
                 
              })
              } */}
                <td><img src= {this.state.animals.length > 0 && this.state.animals[0].imgSrc}></img>Panda</td>
                <td><img src= {this.state.animals.length > 0 && this.state.animals[1].imgSrc}></img>Dog</td>
                <td><img src= {this.state.animals.length > 0 && this.state.animals[2].imgSrc}></img>Cat</td>
                <td><img src= {this.state.animals.length > 0 && this.state.animals[3].imgSrc}></img>Sloth</td>
                <td><img src= {this.state.animals.length > 0 && this.state.animals[4].imgSrc}></img>Aye aye</td>
                <td><img src= {this.state.animals.length > 0 && this.state.animals[5].imgSrc}></img>Human</td>


                
  




                

            </tr>
           
          </tbody>
        </table>

      </div>
    );
  }
}

export default homepage;