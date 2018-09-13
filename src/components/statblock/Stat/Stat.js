import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StatRow = Styled.div`
    height: 30px;
    outline: 1px solid green;
    display: flex;
`;

class Stat extends React.Component{

    render() {

        return(
            <StatRow>
                <div>{this.props.name}</div>
                <div>{this.props.value}</div>
            </StatRow>
        )
    }
}

Stat.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number
}

export default Stat;