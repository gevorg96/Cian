import React from 'react';
import { Card } from '../../widgets/Card';
import { getImage } from '../../global/images';
import config from './config.json';
import { Layout } from '../../ui/Layout';

function List() {

    return (
        <Layout jc="flex-start" orientation="row" className="list">
            {config.map(item => {
                const { description, image, id, price, destination, additionInfo } = item;
                const { area, metrics } = additionInfo;
                return (
                    <Card description={description}
                          img={getImage(image)}
                          alt={image}
                          key={id}
                          price={price}
                          id={id}
                          destination={destination}
                          area={area}
                          metrics={metrics}
                          curr='USD'
                    />
                )
            }
            )}
        </Layout>
    )
}

export { List }