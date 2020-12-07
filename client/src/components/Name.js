import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';

class Name extends Component {
    
    constructor(props) {
//        console.log('In Name.constructor props=',props);
        super(props);
    }
    
    render() {
//        console.log('In Name.render this.props=', this.props);
        return (
            <td className={"align-middle " + this.props.className} id={'calculator_name_'+this.props.index}>
                <OverlayTrigger placement="top" overlay={this.props.element.tooltip !== undefined && <Tooltip>{this.props.element.tooltip}</Tooltip>}>
                    <span>{this.props.element.name}</span>
                </OverlayTrigger>
            </td>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Name);
