var React         = require('react'),
    BaseComponent = require('../components/baseComponent.jsx');


module.exports = {

  init: function () {
    React.render(
      <BaseComponent />,
      document.getElementsByClassName('app')[0]
    );
  }

};
