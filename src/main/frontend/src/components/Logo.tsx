import React from 'react'

const Logo = (props: any) => {
  return (
    <img
      alt='Logo'
      src='/static/organux.svg'
      {...props}
      width='70'
      height='43'
    />
  );
};

export default Logo
