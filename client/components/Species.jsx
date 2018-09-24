import React from 'react';

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>

        <h2>Whos the cutest of them all?</h2>

        <table>
          <tbody>
            <tr>
              <td>Dog</td>
              <td>Dog</td>
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
