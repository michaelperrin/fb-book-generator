import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LONG_TEXT_THRESHOLD = 700;

class AlbumPicture extends Component {
  getDescriptionHtml(description) {
    return { __html: description };
  }

  getPictureWithText(description, url) {
    return (
      <div className="figure">
        <div className="picture">
          <img src={url} alt="" />
        </div>

        <div className="caption" dangerouslySetInnerHTML={this.getDescriptionHtml(description)} />
      </div>
    );
  }

  getPictureWithLongText(description, url) {
    const transformedDescription = `<img src="${url}" alt="" />${description}`;

    // let transformedDescription = description;


    // We should not have other tags than <br>, let's strip them for now
    // transformedDescription = transformedDescription.replace(/<br ?[/]?>/, 'BRBRBR');

    // // Find first space char after one third of the string length
    // const imgPosition = transformedDescription.indexOf(' ', Math.floor(transformedDescription.length / 3));
    // const imgString = `<img src="${url}" alt="" />`;

    // // Insert image tag
    // transformedDescription = transformedDescription.substr(0, imgPosition) + imgString + transformedDescription.substr(imgPosition);
    // transformedDescription = transformedDescription.replace('BRBRBR', '<br>');

    // console.log(transformedDescription);
    // process.exit(0);

    return (
      <div
        className="long-text-figure"
        dangerouslySetInnerHTML={this.getDescriptionHtml(transformedDescription)}
      />
    );
  }

  render() {
    const { description, url } = this.props;

    if (description <= LONG_TEXT_THRESHOLD) {
      return this.getPictureWithText(description, url);
    }

    return this.getPictureWithLongText(description, url);
  }
}

AlbumPicture.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AlbumPicture;
