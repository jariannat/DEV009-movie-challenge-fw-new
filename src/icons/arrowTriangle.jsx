import React from 'react';

const ArrowTriangle = (props) => {
  const { color, rotation } = props;

  const styles = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={32}
      fill={color}
      style={styles}
    >
      <path fill={color} d="M23.351 16.348.055 31.867.148.69 23.35 16.348Z" />
    </svg>
  );
};

export default ArrowTriangle;
