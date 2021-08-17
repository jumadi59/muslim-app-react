import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import WindowSize from './WindowSize'

const Page = forwardRef(({
  children,
  title = '',
  ...rest
}, ref) => {
  if (WindowSize.isMobile()) {
    const dom = document.querySelector('a.logo-brand')
    if (dom !=null) {
      dom.innerHTML = title
    }
  }
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;