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
        this.props.onNameChange(event.target.value);
    }

    render() {
        const {stats , mods} = this.props;
        return (
            <Panel>
                <Stat name='STR' value={stats.str + mods.str} racialBonus={mods.str}/>
                <Stat name='DEX' value={stats.dex + mods.dex} racialBonus={mods.dex}/>
                <Stat name='CON' value={stats.con + mods.con} racialBonus={mods.con}/>
                <Stat name='INT' value={stats.int + mods.int} racialBonus={mods.int}/>
                <Stat name='WIZ' value={stats.wiz + mods.wiz} racialBonus={mods.wiz}/>
                <Stat name='CHA' value={stats.cha + mods.cha} racialBonus={mods.cha}/>
                <RollButton onClick={this.handleClick}>
                    ROLL!
                </RollButton>
                <select value={this.selectedOption} onChange={this.handleChange}>
                    <option value='hardcore'>hardcore (3d6)</option>
                    <option value='classic'>classic (4d6d1)</option>
                </select>
                <div>
                    <input type='text' value={this._name} onChange={this.handleNameChange}></input>
                </div>
            </Panel>
        );
    }
}

StatBlock.propTypes = {
    onRoll: PropTypes.func.isRequired,
    stats: PropTypes.object.isRequired,
    mods: PropTypes.object.isRequired,
    onNameChange: PropTypes.func.isRequired
}

export default StatBlock;