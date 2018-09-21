import React from 'react';
import Styled from 'styled-components';
import Stat from '../Stat/Stat';
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
    _name = undefined;

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

    handleNameChange = (event) => {
        console.log('name : ', event.target.value);
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <Panel>
                <Stat name="STR" value={this.props.characterStats.attributes.str} />
                <Stat name="DEX" value={this.props.characterStats.attributes.dex} />
                <Stat name="CON" value={this.props.characterStats.attributes.con} />
                <Stat name="INT" value={this.props.characterStats.attributes.int} />
                <Stat name="WIZ" value={this.props.characterStats.attributes.wiz} />
                <Stat name="CHA" value={this.props.characterStats.attributes.cha} />
                <RollButton onClick={this.handleClick}>
                    ROLL!
                </RollButton>
                <select value={this.selectedOption} onChange={this.handleChange}>
                    <option value="hardcore">hardcore (3d6)</option>
                    <option value="classic">classic (4d6d1)</option>
                </select>
                <div>
                    <input type="text" value={this._name} onChange={this.handleNameChange}></input>
                </div>
            </Panel>
        );
    }
}

StatBlock.propTypes = {
    onRoll: PropTypes.func.isRequired,
    characterStats: PropTypes.object.isRequired,
    onNameChange: PropTypes.func.isRequired
}

export default StatBlock;