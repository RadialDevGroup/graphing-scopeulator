import React from 'react';

export default ({width, height, top=0, left=0, children, ...props}) => {
  const viewBox = [left, top, width, height].join(" ");
  const aspect = Math.round(height/width*100);
  return (
    <div className="responsive-svg" style={{paddingBottom: `${aspect}%`}}>
      <svg viewBox={viewBox} {...props} preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
  );
}
