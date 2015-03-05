import React from 'react';
import BaseComponent from '../components/baseComponent.jsx';

export default {

  init: function () {
    React.render(
      <BaseComponent />,
      document.getElementsByClassName('app')[0]
    );
  }

};
