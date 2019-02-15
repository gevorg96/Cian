import React from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types'

function Description({ children , size, color, extraClass, margin} ) {
    const className = cx("description",
        `description__size_${size}`,
        `description__color_${color}`,
        `description__margin_${margin}`,
        extraClass);
    return(
        <p className={className}>{ children }</p>
    )
}

Description.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']),
    color: PropTypes.oneOf(['default', 'accent'])
}

Description.defaultProps = {
    size: 'm',
    color: 'default'
}

export { Description };