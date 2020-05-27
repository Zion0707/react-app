import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Test extends Component {
    render() {
        let { name } = this.props;
        return (
            <>
                <div>{name}</div>
            </>
        );
    }
}
Test.defaultProps = {
    name: 'tt',
};
Test.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Test;
