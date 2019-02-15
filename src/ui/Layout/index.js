import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Layout({ children, orientation, jc, ai, className }){
    const classes = cx('layout', `layout__orientation_${orientation}`,
        `layout__jc_${jc}`,
        `layout__ai_${ai}`,
        className);
    return(
        <div className={classes}>{children}</div>
    )
}

Layout.proptTypes ={
    orientation: PropTypes.string,
    ai: PropTypes.string,
    jc: PropTypes.string,
    className: PropTypes.string,
};
Layout.defaultProps = {
    orientation: 'column',
    ai: 'flex-start',
    jc: 'flex-start',
    className: '',
};

export { Layout };