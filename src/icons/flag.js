import React from 'react';
import PropTypes from 'prop-types';

const Flag = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      id="Flag"
    >
      <path d="M4 15h16l-5-6 5-6H4v18"></path>
    </svg>
  );
};

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Flag.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Flag;