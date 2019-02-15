import React from 'react';
import { Description } from "../../ui/Description";
import { Layout } from '../../ui/Layout';
import { Price } from "../../ui/Price";



function Card({ img, alt, description, curr, price }) {
    return(
        <Layout jc="center" orientation="column" ai="center" className="card">
            <img src={img} alt={alt}/>
            <Price currency={curr} color="default" price={price} size="l" />
            <Description size="1" color="accent">{description}</Description>
        </Layout>
    )
}

export {Card}