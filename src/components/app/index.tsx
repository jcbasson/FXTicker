import * as React from 'react';
import styled from 'styled-components';
import { FXTicker } from '../FXTicker';

export const App: React.FC = () => {

    return (<Layout>
        <LayoutItem>
            <FXTicker />
        </LayoutItem>
        <LayoutDivider/>
        <LayoutItem>
        </LayoutItem>
        </Layout>)
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

const LayoutItem = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

const LayoutDivider = styled.hr`
    border: 0;
    clear:both;
    display:block;
    width: 100%;              
    background-color:#dddddd;;
    height: 1px;
`;
