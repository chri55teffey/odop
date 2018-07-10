import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export class StateVariableRow extends React.Component {
    
    render() {
        var vmin = this.props.state_variable.vmin > 0.0 ? 'bg-danger align-middle' : 'align-middle';
        var vmax = this.props.state_variable.vmax > 0.0 ? 'bg-danger align-middle' : 'align-middle';
        var fixed = this.props.state_variable.lmin === global.FIXEDSTAT ? <Input type="checkbox" aria-label="Checkbox for fixed value" checked/> : <Input type="checkbox" aria-label="Checkbox for fixed value"/>;
       return (
                <tr key={this.props.state_variable.name}>
                <td className="align-middle">{this.props.state_variable.name}</td>
                <td className="pull-right align-middle"><Input type="number" defaultValue={this.props.state_variable.value} /></td>
                <td className="text-nowrap align-middle">{this.props.state_variable.units}</td>

                <td className="text-center align-middle">{fixed}</td>

                <td className={vmin}>
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for minimum value" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input className="pull-right" type="number" defaultValue={this.props.state_variable.cmin} />
                </InputGroup>
                </td>
                
                <td className={vmax}>
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for maximum value" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input className="pull-right" type="number" defaultValue={this.props.state_variable.cmax} />
                </InputGroup>
                </td>
                </tr>
        );
    }
    
}
