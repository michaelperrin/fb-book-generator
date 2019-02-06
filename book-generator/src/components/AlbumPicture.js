import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumPicture extends Component {
  getDescription() {
    const { description } = this.props;

    return { __html: description };
  }

  render() {
    const { url } = this.props;

    return (
      <div className="figure">
        <div className="picture">
          <img src={url} alt="" />
        </div>

        <div className="caption" dangerouslySetInnerHTML={this.getDescription()} />
      </div>
    );
  }
}

AlbumPicture.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AlbumPicture;
