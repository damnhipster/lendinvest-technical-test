import React, {PropTypes} from 'react';

export default class Index extends React.Component {

  render() {
    return (
      <h1>{this.props.heading}</h1>
    );
  }

}

Index.propTypes = {
  heading: PropTypes.string
}
