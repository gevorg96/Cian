import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Card } from '../../widgets/Card';
import { getImage } from '../../global/images';
import config from './config.json';
import { Layout } from '../../ui/Layout';

function List() {

    return (
        <Layout jc="flex-start" orientation="row" className="list">
            {config.map(item => <Card description={item.description} img={getImage(item.image)} alt={item.img}
                                      key={item.id} price={item.price} curr='USD'/>)}
        </Layout>
    )
}

export { List }