import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './style.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ignite Driving | South Canberra Driving School"
      meta={[
        {
          name: 'description',
          content:
            'Based in South Canberra, Ignite Driving aims to help Learner drivers transition to confident and safe P plate drivers using thorough and informative teaching techniques',
        },
        {
          name: 'keywords',
          content: 'Driving, Keys2Drive, South Canberra, Instructor, Learner, Driving Lessons, Help, Teach, Learn',
        },
        { property: 'og:title', content: 'Ignite Driving | South Canberra Driving School' },
        {
          property: 'og:description',
          content:
            'Based in South Canberra, Ignite Driving aims to help Learner drivers transition to confident and safe P plate drivers using thorough and informative teaching techniques',
        },
        { property: 'og:url', content: 'ignitedriving.com.au' },
        {
          property: 'og:image',
          content: 'http://d33wubrfki0l68.cloudfront.net/6e0d672d0e0bd74654ea9867cd34324c9213a020/66160/static/bgimg.43ab0aac.jpg',
        },
      ]}
      script={[
        { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript' },
        { src: 'https://fonts.googleapis.com/css?family=Raleway:500,600', type: 'text/stylesheet' },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
          type: 'text/stylesheet',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
          type: 'text/stylesheet',
        },
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
