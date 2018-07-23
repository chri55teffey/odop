import { changeDesignParameterValue } from './actionCreators';
import { FIXED } from './globals';
/**
 * despak - Expand any compressed design parameters and call the equation set.
 */
export function despak(pc, store) {
    var design = store.getState();
    var kd = 0;
    for (let i = 0; i < design.design_parameters.length; i++) {
        var dp = design.design_parameters[i];
        if (!(dp.lmin & FIXED)) {
            var value = pc[kd++];
            store.dispatch(changeDesignParameterValue(dp.name, value));
        }
    }
    design = store.getState();
    var obj = design.search_results.objective_value;
    return obj;
}