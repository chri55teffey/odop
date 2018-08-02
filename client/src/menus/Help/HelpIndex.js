import React from 'react';
import { DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';

class HelpIndex extends React.Component {
    constructor(props) {
        super(props);
        this.onHelp = this.onHelp.bind(this);
    }

    onHelp() {
        window.open('https://thegrumpys.github.io/pcyl-web/Help', '_blank');
    }

    render() {
        return (
            <React.Fragment>
                <DropdownItem onClick={this.onHelp}>
                    Index
                </DropdownItem>
            </React.Fragment>
        );
    }
}  

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HelpIndex);