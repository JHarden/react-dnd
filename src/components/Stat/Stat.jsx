import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StatRow = Styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    outline: 1px solid grey;
    padding: 10px;
    margin: 10px 0;
`;

const PosMod = Styled.div`
    color: green;
`;
const NegMod = Styled.div`
    color: red;
`;

class Stat extends React.Component {

    calcAbilityModifier = (value) => {
        const mod = Math.floor((value - 10) / 2);
        return (<div>{mod > 0 && <PosMod> +{mod}</PosMod> || <NegMod>{mod}</NegMod>} </div>)
    }

    render() {
        return (
            <StatRow>
                <div>{this.props.name}</div>
                <div>{this.props.value}</div>
                <div>{this.calcAbilityModifier(this.props.value)}</div>
            </StatRow>
        )
    }
}

Stat.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number
}

export default Stat;