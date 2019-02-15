import React from 'react';
import { Description } from "../../ui/Description";
import { Layout } from '../../ui/Layout';
import { Price } from "../../ui/Price";

function getCardTitle(description, destination, id) {
    return `Дом в поселке "${description}", ${destination} км, ID ${id}`
}

function Card({ img, alt, description, curr, price, id, destination, area, metrics }) {
    return(
        <Layout orientation="column" className="card">
            <img src={img} alt={alt}/>
            <Description size="m" color="accent">{getCardTitle(description, destination, id)}</Description>
            <Price currency={curr} color="default" price={price} size="l" />
            <Layout orientation="row" ai="center" jc="space-between">
                <Description>{`${area} coт`}</Description>
                <Description>{`${metrics} м`}<sup>2</sup></Description>
            </Layout>
        </Layout>
    )
}

export {Card}