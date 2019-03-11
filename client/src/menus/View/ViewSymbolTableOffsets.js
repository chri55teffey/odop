import React from 'react';
import { DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';

class ViewSymbolTableOffsets extends React.Component {

    constructor(props) {
//        console.log('In ViewSymbolTableOffsets.constructor');
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            modal: false
        };
    }
    
    toggle() {
//        console.log('In ViewSymbolTableOffsets.toggle');
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
//        console.log('In ViewSymbolTableOffsets.render');
        var ist = 0;
        var isc = 0;
        var il = 0;
        return (
            <React.Fragment>
                <DropdownItem onClick={this.toggle}>
                    Offsets
                </DropdownItem>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}><img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; View : Offsets </ModalHeader>
                    <ModalBody>
                        <pre>
                        {'// Variables\n'}
                        {this.props.symbol_table.map((element) => {return 'export const ' + element.name.replace('%','PC').replace(/[^a-zA-Z0-9]/g,'_') + ' = ' + (ist++) + ';\n'})}
                        {'\n// System Controls (Preferences)\n'}
                        {Object.keys(this.props.system_controls).map((element) => { return 'export const ' + element.replace('%','PC').replace(/[^a-zA-Z0-9]/g,'_') + ' = ' + (isc++) + ';\n'})}
                        {'\n// Labels (Properties)\n'}
                        {this.props.labels.map((element) => {return 'export const ' + element.name.replace('%','PC').replace(/[^a-zA-Z0-9]/g,'_') + ' = ' + (il++) + ';\n'})}
                        </pre>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}  

const mapStateToProps = state => ({
    symbol_table: state.symbol_table,
    system_controls: state.system_controls,
    labels: state.labels
});

export default connect(mapStateToProps)(ViewSymbolTableOffsets);