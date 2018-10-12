import React from 'react';
import { FaTwitter, FaFacebookSquare, FaYoutubeSquare, FaInstagram, FaGooglePlusSquare } from 'react-icons/fa/';
import './style.scss';

const SocialIcons = () => (
  <div className="Social-container">
    <div className="Social-icons">
      <FaTwitter />
      <FaFacebookSquare />
      <FaYoutubeSquare />
      <FaInstagram />
      <FaGooglePlusSquare />
    </div>
  </div>
);

export default SocialIcons;
