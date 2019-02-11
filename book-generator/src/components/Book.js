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
          <p style={{ marginBottom: '0.4in' }}>
            <b>De la part de Frédéric et Michaël</b>
          </p>

          <p style={{ marginBottom: '2in' }}>
            <b>Contenu original (photos et texte) :</b>
            <br />
            <br />
            Page Facebook de "John d'Orbigny Immobilier" (Patrick Marsaud).
            <br />
            https://www.facebook.com/johndorbigny/
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
