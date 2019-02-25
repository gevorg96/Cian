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
function Button({children, bStyle, size, type, disable, onClick, extraClass}) {
    const className = cx("button", `button__style_${bStyle}`, `button__size_${size}`, extraClass);
    return (

        <button onClick={onClick} type={type} disabled={disable}  className={className}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    bStyle: PropTypes.oneOf(['green', 'red']),
    size: PropTypes.oneOf(['s', 'm', 'xs']),
    type: PropTypes.oneOf(['button', 'submit']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps ={
    bStyle: 'green',
    size: 'm',
    type: 'button',
    disable: false,
    onClick: i => 1,
}

export { Button };