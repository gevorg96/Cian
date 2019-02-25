import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {Layout} from "../../ui/Layout";
import {Button} from "../../ui/Button";


function Modal ({ children , isModalOpen, onButtonClick}) {
    if (!isModalOpen) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal__container">
                <Button extraClass="modal__close" onClick={() => onButtonClick(false)} bStyle='red' size='xs' type='button'>X</Button>
                <Layout className="modal__inner">{children}</Layout>
            </div>
        </div>
    )
}


export { Modal }