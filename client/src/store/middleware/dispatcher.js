import { STARTUP, 
    
    CHANGE_DESIGN_PARAMETER_VALUE, 
    RESTORE_DESIGN_PARAMETER_VALUES, 
    CHANGE_DESIGN_PARAMETER_CONSTRAINT, 
    SET_DESIGN_PARAMETER_FLAG, 
    RESET_DESIGN_PARAMETER_FLAG, 
    
    CHANGE_STATE_VARIABLE_CONSTRAINT, 
    RESTORE_STATE_VARIABLE_CONSTRAINTS, 
    SET_STATE_VARIABLE_FLAG, 
    RESET_STATE_VARIABLE_FLAG, 
    
    SEARCH, 
    SEEK } from '../actionTypes';
import { OBJMIN } from '../globals';
import { startup } from './startup';
import { search } from './search';
import { seek } from './seek';
import { invokeEquationSet } from './invokeEquationSet';
import { updateViolationsAndObjectiveValue } from './updateViolationsAndObjectiveValue';

export const dispatcher = store => next => action => {
    
    const returnValue = next(action);

//    console.log('In dispatcher');
//    console.log(action);

    switch (action.type) {
    case STARTUP:
        startup(store);
        updateViolationsAndObjectiveValue(store);
        break;
    case CHANGE_DESIGN_PARAMETER_VALUE:
        invokeEquationSet(store);
        updateViolationsAndObjectiveValue(store, action.payload.merit);
        break;
    case RESTORE_DESIGN_PARAMETER_VALUES:
        invokeEquationSet(store);
        updateViolationsAndObjectiveValue(store, action.payload.merit);
        break;
    case CHANGE_DESIGN_PARAMETER_CONSTRAINT:
        updateViolationsAndObjectiveValue(store);
        break;
    case SET_DESIGN_PARAMETER_FLAG:
        updateViolationsAndObjectiveValue(store);
        break;
    case RESET_DESIGN_PARAMETER_FLAG:
        updateViolationsAndObjectiveValue(store);
        break;
    case CHANGE_STATE_VARIABLE_CONSTRAINT:
        updateViolationsAndObjectiveValue(store);
        break;
    case RESTORE_STATE_VARIABLE_CONSTRAINTS:
        updateViolationsAndObjectiveValue(store);
        break;
    case SET_STATE_VARIABLE_FLAG:
        updateViolationsAndObjectiveValue(store);
        break;
    case RESET_STATE_VARIABLE_FLAG:
        updateViolationsAndObjectiveValue(store);
        break;
    case SEARCH:
        search(store, OBJMIN);
        break;
    case SEEK:
        seek(store, action);
        break;
    default:
        break;
    }
    return returnValue;
}