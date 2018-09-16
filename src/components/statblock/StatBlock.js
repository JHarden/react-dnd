import React from 'react';
import Styled from 'styled-components';
import Stat from './Stat/Stat';
import PropTypes from 'prop-types'

const Panel = Styled.div`
    width: 150px;
    font-size: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: auto;
`;

const RollButton = Styled.div`
    cursor: pointer;
`;

class StatBlock extends React.Component {

    selectedOption = 'hardcore';

    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.onRoll(this.selectedOption);
    }

    handleChange = (event) => {
        this.selectedOption = event.target.value;
        this.props.onRoll(event.target.value);
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
                <RollButton onClick={this.handleClick}>
                    ROLL!
                </RollButton>
                <select value={this.selectedOption} onChange={this.handleChange}>
                    <option value="hardcore">hardcore (3d6)</option>
                    <option value="classic">classic (4d6d1)</option>
                </select>
            </Panel>
        );
    }
}

StatBlock.propTypes = {
    onRoll: PropTypes.func.isRequired,
    activeRoll: PropTypes.object.isRequired,
    selectedOption: PropTypes.string.isRequired
}

export default StatBlock;