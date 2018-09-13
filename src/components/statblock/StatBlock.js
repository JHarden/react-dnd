import React from 'react';
import Styled from 'styled-components';
import Stat from './Stat/Stat';

const Panel = Styled.div`
    outline: 1px solid red;
    width: 50px;
    height: 100px;
`;

class StatBlock extends React.Component {

    roll() {
        const roll = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
        return roll;
    }

    componentDidMount() {

    }

    render() {
        return(
            <Panel>
                <Stat name="STR" value={this.roll()}/>
                <Stat name="DEX" value={this.roll()}/>
                <Stat name="CON" value={this.roll()}/>
                <Stat name="INT" value={this.roll()}/>
                <Stat name="WIZ" value={this.roll()}/>
                <Stat name="CHA" value={this.roll()}/>
            </Panel>
        );
    }
}

export default StatBlock;