import { changeConstantValues } from '../actionCreators';
import { init as pcyl_init } from '../../designtypes/Piston-Cylinder/init';
import { init as solid_init } from '../../designtypes/Solid/init';
import { init as spring_init } from '../../designtypes/Spring/init';

// Invoke Init
export function invokeInit(store) {
    
//    console.log('Entering invokeInit');
    
    var c;

    var design = store.getState();
    
    // Loop to create d from constants
    var d = [];
    for (let i = 0; i < design.constants.length; i++) {
        c = design.constants[i];
        d[i] = c.value;
    }

    // Update constants from d to d
    switch(design.type) {
    default:
    case 'Piston-Cylinder':
        d = pcyl_init(d);
        break;
    case 'Solid':
        d = solid_init(d);
        break;
    case 'Spring':
        d = spring_init(d);
        break;
    }

    // Compute and dispatch constant changes
    store.dispatch(changeConstantValues(d, true));
    
//    console.log('Exiting invokeInit');
}