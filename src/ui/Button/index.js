import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 *
 * @param {node}children - all data which includes button
 * @param {string}bStyle - all styles for  @param sizebutton
 *
 * @param type
 * @param disable
 * @constructor
 */
function Button({children, bStyle, size, type, disable}) {
    const className = cx("button", `button__style_${bStyle}`, `button__size_${size}`);
    return (

        <button type={type} disable={disable} className={className}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    bStyle: PropTypes.oneOf(['green', 'red']),
    size: PropTypes.oneOf(['s', 'm']),
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
};

Button.defaultProps ={
    bStyle: 'green',
    size: 'm',
    type: 'button',
    disable: false,
}

export { Button };