import React from 'react';
import Styled from 'styled-components';
import Stat from './Stat/Stat';
import PropTypes from 'prop-types'

const Panel = Styled.div`
    outline: 1px solid grey;
    width: 50px;
    display: flex;
    flex-direction: column;
    height: auto;
`;

class StatBlock extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.roll({
            str: 10,
            dex: 2,
            con: 12,
            int: 5,
            wiz: 7,
            cha: 12
        });
        console.log('p', this.props)
    }

    roll = () => {
        const roll = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
        return roll;
    }

    render() {

        return (
            <Panel>
                <Stat name="STR" value={this.roll()} />
                <Stat name="DEX" value={this.roll()} />
                <Stat name="CON" value={this.roll()} />
                <Stat name="INT" value={this.roll()} />
                <Stat name="WIZ" value={this.roll()} />
                <Stat name="CHA" value={this.roll()} />
                <div onClick={this.handleClick}>
                    CLICK ME
                </div>
            </Panel>
        );
    }
}

StatBlock.propTypes = {
    roll: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired
}

export default StatBlock;