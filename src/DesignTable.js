import React from 'react';
import { Table } from 'reactstrap';
import { DesignParametersSection } from './DesignParametersSection.js';
import { StateVariablesSection } from './StateVariablesSection.js';

export class DesignTable extends React.Component {
    render() {
        return (
                <Table>
                <thead>
                <th>Name</th>
                <th className="text-center">Value</th>
                <th>Units</th>
                <th className="text-center">Fixed</th>
                <th className="text-center">Min</th>
                <th className="text-center">Max</th>
                </thead>
                <tbody>
                <DesignParametersSection design_parameters={this.props.design.design_parameters} />
                <StateVariablesSection state_variables={this.props.design.state_variables} />
                </tbody>
                </Table>
        );
    }
}