import React from 'react';
import cx from 'classnames';
import { Description } from "../../ui/Description";
import { Layout } from '../../ui/Layout';
import { Price } from "../../ui/Price";

function getCardTitle(description, destination, id) {
    return `Дом в посёлке "${description}", ${destination} км, ID ${id}`;
}

function Card({ img, alt, description, curr, price, id, destination, area, metrics }) {
    return(
        <Layout orientation="column" className="card">
            <img src={img} alt={alt}/>
            <Description margin="top_x2" size="m" color="accent">{getCardTitle(description, destination, id)}</Description>
            <Price margin="top" currency={curr} color="default" price={price} size="l" />
            <Layout className="card__additional" orientation="row" ai="center" jc="space-between">
                <Description extraClass={cx("card__info", "card__info_area")}>{`${area} coт`}</Description>
                <Description extraClass={cx("card__info", "card__info_metrics")}>{`${metrics} м`}<sup>2</sup></Description>
            </Layout>
        </Layout>
    )
}

export { Card }