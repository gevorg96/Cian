import React from 'react';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/Button';
import { Description } from "../../ui/Description";
import { Layout } from '../../ui/Layout';


function Header({ onButtonClick }) {
    return(
        <header>
            <Layout orientation="row" jc="space-between">
                <Layout orientation="row" ai="center">
                    <Logo />
                </Layout>
                <Layout jc="flex-end" orientation="row" ai="center">
                    <Description size="l" margin="right_x2" color="default">+7(495)9545785</Description>
                    <Button onClick={() => onButtonClick(true)} bStyle='green' size='m' type='button' >Обратный звонок</Button>
                </Layout>
            </Layout>
        </header>
    )
}

export { Header }