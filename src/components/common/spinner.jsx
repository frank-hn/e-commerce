import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';
// fa-circle-o-notch
import '../../styles/css/spinner.css'

export default () => (
  <div className="spiner">
    <FontAwesomeIcon icon={faBowlingBall} size="5x" spin />
  </div>
);
