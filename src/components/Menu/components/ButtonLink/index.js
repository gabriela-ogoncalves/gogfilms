import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
  // props => { className: "o que alguém passar", href: "/" }
  console.log('props: ', props);
  const { className, href, children } = props;
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
