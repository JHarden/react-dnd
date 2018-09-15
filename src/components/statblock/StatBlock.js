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
        this.props.onRoll({
            str: this._roll(),
            dex: this._roll(),
            con: this._roll(),
            int: this._roll(),
            wiz: this._roll(),
            cha: this._roll()
        });
        console.log('p', this.props)
    }

    _roll = () => {
        const roll = (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
        return roll;
    }

    render() {

        return (
            <Panel>
                <Stat name="STR" value={this.props.activeRoll.stats.str} />
                <Stat name="DEX" value={this.props.activeRoll.stats.dex} />
                <Stat name="CON" value={this.props.activeRoll.stats.con} />
                <Stat name="INT" value={this.props.activeRoll.stats.int} />
                <Stat name="WIZ" value={this.props.activeRoll.stats.wiz} />
                <Stat name="CHA" value={this.props.activeRoll.stats.cha} />
                <div onClick={this.handleClick}>
                    CLICK ME
                </div>
            </Panel>
        );
    }
}

StatBlock.propTypes = {
    onRoll: PropTypes.func.isRequired,
    activeRoll: PropTypes.object.isRequired
}

export default StatBlock;