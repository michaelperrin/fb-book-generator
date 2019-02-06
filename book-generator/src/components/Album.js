import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumPicture from './AlbumPicture';

class Album extends Component {
  render() {
    const { title, pictures } = this.props;

    return (
      <div className="album">
        <h1 className="album-title">{title}</h1>

        {pictures.map(picture => (
          <AlbumPicture
            key={picture.url}
            url={picture.url}
            description={picture.description}
          />
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
};

export default Album;
