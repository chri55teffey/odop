import { createStore, applyMiddleware } from 'redux';
import { pcylWebApp } from '../reducers';
import { initialState } from '../initialState';
import { equationsMiddleware } from '../equationsMiddleware';
import { 
    changeDesignParameterValue, setDesignParameterFlag, resetDesignParameterFlag, 
    setStateVariableFlag, resetStateVariableFlag 
    } from '../actionCreators';
import { MIN } from '../actionTypes';
import { CONSTRAINED, FIXED } from '../globals';

it('startup', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    // Nothing changed, subscribe not possible, so just use the store directly
    var design = store.getState();
    expect(design.name).toEqual("Piston-Cylinder");
    expect(design.version).toEqual("1.2");
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.4);
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);
});

it('change radius design parameter value', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.4); // before
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.5026548245743669);

    store.dispatch(changeDesignParameterValue("RADIUS", 0.5));
    
    design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].value).toEqual(0.5); // after
    expect(design.state_variables[1].name).toEqual("AREA");
    expect(design.state_variables[1].value).toEqual(0.7853981633974483);
});

it('set radius design parameter flag', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].lmin).toEqual(CONSTRAINED); // before

    store.dispatch(setDesignParameterFlag("RADIUS", MIN, FIXED));
    
    design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].lmin).toEqual(CONSTRAINED|FIXED); // after
});

it('reset radius design parameter flag', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].lmin).toEqual(CONSTRAINED); // before

    store.dispatch(resetDesignParameterFlag("RADIUS", MIN, CONSTRAINED));
    
    design = store.getState();
    expect(design.design_parameters[1].name).toEqual("RADIUS");
    expect(design.design_parameters[1].lmin).toEqual(0); // after
});

it('set area state variable flag', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState();
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].lmin).toEqual(CONSTRAINED); // before

    store.dispatch(setStateVariableFlag("FORCE", MIN, FIXED));
    
    design = store.getState();
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].lmin).toEqual(CONSTRAINED|FIXED); // after
});

it('reset area state variable flag', () => {
    const store = createStore(
        pcylWebApp,
        initialState,
        applyMiddleware(equationsMiddleware));
    
    var design = store.getState();
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].lmin).toEqual(CONSTRAINED); // before

    store.dispatch(resetStateVariableFlag("FORCE", MIN, CONSTRAINED));
    
    design = store.getState();
    expect(design.state_variables[0].name).toEqual("FORCE");
    expect(design.state_variables[0].lmin).toEqual(0); // after
});