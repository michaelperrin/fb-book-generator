import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import BlankPages from './BlankPages';

class Book extends React.Component {
  render() {
    const { title, albums } = this.props;

    return (
      <div>
        <div className="cover">
          <h1>{title}</h1>
        </div>

        <BlankPages number={2} />

        <div className="intro">
          <p>
            Contenu original (photos et texte) :
            <br />
            page Facebook de "John d'Orbigny Immobilier" (Patrick Marsaud).
          </p>

          <p style={{ marginBottom: '2in' }}>
            Mise en forme :
            <br />
            Frédéric et Michaël
          </p>

          <p style={{ textAlign: 'right' }}>
            <i>Pour Mémé</i>
          </p>
        </div>

        <BlankPages />

        {albums.map(album => (
          <Album title={album.title} pictures={album.pictures} key={`album-${album.name}`} />
        ))}

        <BlankPages number={3} />
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  albums: PropTypes.array.isRequired,
};

export default Book;
