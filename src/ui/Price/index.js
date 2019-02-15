import React from 'react';
import PropTypes from 'prop-types';
import { Description } from "../Description";
import {convertToSpaceView, isNumber} from "./helpers"

// in rubles by CBRF on 15.02.2019
const usd = 66.61;
const eur = 75.19;

function getCurrencySymbol(currency) {
    switch (currency) {
        case 'USD':
            return <span>&#36;</span>;
        case 'EUR':
            return <span>&euro;</span>;
        case 'RUB':
            return <span>&#8381;</span>;
        default:
            return <span>&#8381;</span>;
    }
}

function getValueByCurrency(value, currency) {
    if (isNumber(value))
    {
        switch (currency) {
            case 'USD':
                return convertToSpaceView((value/usd).toFixed(0));
            case 'EUR':
                return convertToSpaceView((value/eur).toFixed(0));
        }
        return convertToSpaceView(value);
    }
    return NaN;
}

function Price({ currency, price, children, size, color }) {
    const pr =  getValueByCurrency(price, currency)
    const cur = getCurrencySymbol(currency)
    return(
        <Description extraClass="price" size={size} color={color}>{cur}{pr}</Description>
    )
}

Price.PropTypes = {
    currency: PropTypes.oneOf(['USD', 'EUR', 'RUB']),
    value: PropTypes.number,
};

export { Price }