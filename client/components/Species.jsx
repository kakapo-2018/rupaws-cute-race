import React from 'react';

const api = require('../api')

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: this.props.animals
    }
  }


  render() {

    return (
      <div>

        <h2>Whos the cutest of them all?</h2>

        <table>
          <tbody>
            <tr>
              <td>{this.props.animals.map(animal => {
                return <img src={animal.imgSrc}></img>
              })}}</td>
              <td>Dog</td>
            </tr>
            <tr>
              <td>Dog</td>
              <td>Dog</td>
              <td>Dog</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Species
