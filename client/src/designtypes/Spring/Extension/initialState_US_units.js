import { CONSTRAINED, FIXED, FDCL } from '../../../store/actionTypes';
export const initialState = {
    "symbol_table": [
        {
            "input": true,
            "name": "OD_Free",
            "value": 1.1,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 2.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Outside diameter in free (no load) condition",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Wire_Dia",
            "value": 0.1055,
            "units": "inch",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire diameter",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Coils_T",
            "value": 10.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 20,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Total number of coils",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Initial_Tension",
            "value": 6.0,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Minimum force required to separate coils",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "End_Extension",
            "value": 0.0,
            "units": "in.",
            "lmin": FIXED,
            "lmax": FIXED,
            "cmin": 0,
            "cmax": 0.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "End Extension (see diagram in on-line Help)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Force_1",
            "value": 10.0,
            "units": "pounds",
            "lmin": CONSTRAINED|FDCL,
            "lmax": 0,
            "cmin": 3,
            "cmax": 6.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Minimum operating load (Length L_1) (FDCL)",
            "type": "equationset",
            "hidden": false,
            "cminchoices": [ "Initial_Tension" ]
        },
        {
            "input": true,
            "name": "Force_2",
            "value": 40.0,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Maximum operating load (Length L_2)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Mean_Dia",
            "value": 0.9945,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Average of inside and outside coil diameters",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "ID_Free",
            "value": 0.889,
            "units": "inches",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Coil inside diameter in free (no load) condition",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Coils_A",
            "value": 10.40,
            "units": "coils",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.0,
            "cmax": 90.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Number of Active coils; includes End_Deflect_Allow",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Rate",
            "value": 17.408840,
            "units": "Lb/In",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring rate (spring constant); slope of force-deflection curve",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_1",
            "value": 0.229768,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Deflection from free to load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_2",
            "value": 1.953030,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Deflection from free to load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Body",
            "value": 1.160499,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of body in free condition (see diagram in on-line Help)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Free",
            "value": 2.938500,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Free length including ends (see diagram in on-line Help)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_1",
            "value": 3.168268,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 100.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring length at load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_2",
            "value": 4.891530,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Spring length at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Stroke",
            "value": 1.723262,
            "units": "inches",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.050,
            "cmax": 100.0,
            "ioclass": 0,
            "sdlim": 0.1,
            "tooltip": "Length of stroke from point 1 to point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Weight",
            "value": 0.093078 ,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.01,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Weight of one spring",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Index",
            "value": 9.426,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 4.0,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Ratio of mean coil diameter (Mean_Dia) to wire diameter (Wire_Dia)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Initial",
            "value": 12940.1,
            "units": "PSI",
            "lmin": CONSTRAINED|FDCL,
            "lmax": CONSTRAINED|FDCL,
            "cmin": 29,
            "cmax": 30,
            "ioclass": 0,
            "sdlim": 2000.0,
            "tooltip": "Stress resulting from Initial_Tension (FDCL)",
            "type": "equationset",
            "hidden": false,
            "cminchoices": [ "Stress_Init_Lo" ],
            "cmaxchoices": [ "Stress_Init_Hi" ]
        },
        {
            "input": false,
            "name": "Stress_1",
            "value": 2489.3,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Torsion stress in wire at load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_2",
            "value": 99573.98,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Torsion stress in wire at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Hook",
            "value": 191924.3,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Bending stress in hooks",
            "type": "equationset",
            "hidden": false,
            "cmaxchoices": [ "Stress_Lim_Bend" ]
        },
        {
            "input": false,
            "name": "FS_2",
            "value": 1.3127,
            "units": "ratio",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.1,
            "cmax": 1.6,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_CycleLife",
            "value": 1.270290,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.02,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety to achieve the target cycle life category. See on-line Help.",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_Hook",
            "value": 1.021571,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety in the hooks. See on-line Help.",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Cycle_Life",
            "value": 794230.0,
            "units": "cycles",
            "lmin": 0,
            "lmax": 0,
            "cmin": 10000,
            "cmax": 1000000.0,
            "ioclass": 0,
            "sdlim": 10000.0,
            "tooltip": "Rough estimate of the average number of cycles to failure. See on-line Help.",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Safe_Deflect",
            "value": 80.52,
            "units": "%",
            "lmin": 0,
            "lmax": CONSTRAINED,
            "cmin": 0,
            "cmax": 90.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Deflection of load point 2 as a percent of total safe deflection",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Init_Lo",
            "value": 10183.4,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Stress Initial range low point - sets lower limit for Initial_Tension",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Init_Hi",
            "value": 16724.5,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Stress Initial range high point - sets upper limit for Initial_Tension",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_SI_Lo",
            "value": 1.270712,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety for Stress Initial range low point",
            "type": "equationset",
            "hidden": true
        },
        {
            "input": false,
            "name": "FS_SI_Hi",
            "value": 1.292452,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Factor of safety for Stress Initial range high point",
            "type": "equationset",
            "hidden": true
        },
        {
            "input": false,
            "name": "F1_IT_Margin",
            "value": 4.00,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 20,
            "ioclass": 0,
            "sdlim": 10.0,
            "tooltip": "Force_1 > Initial_Tension margin",
            "type": "equationset",
            "hidden": true
        },
        {
            "input": false,
            "name": "Energy",
            "value": 12.3456,
            "units": "in-lb",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1,
            "cmax": 1000000,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Change in elastic potential energy between 1 and 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Type",
            "value": "Extension",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Extension spring design",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Prop_Calc_Method",
            "value": 1,
            "units": "",
            "format": "table",
            "table": "Spring/Extension/prop_calc",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Property Calculation Method - Controls how material properties are determined and used.  1-Use values from material table  2-Specify Tensile, %_Tensile_Stat & %_Tensile_Endur  3-Specify allowable stresses: Stress_Lim_Stat & Stress_Lim_Endur",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Material_Type",
            "value": 2,
            "units": "",
            "format": "table",
            "table": "Spring/mat_ips",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select wire material",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "ASTM/Fed_Spec",
            "value": "Defined in initialState",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire specification",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Process",
            "value": "Cold_Coiled",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Coil winding process temperature - Cold coiled vs. Hot wound",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Material_File",
            "value": "mat_ips.json",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "Life_Category",
            "value": 1,
            "units": "",
            "format": "table",
            "table": "Spring/Extension/lifetarget",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select cycle life target. Selects %_Tensile_Endur from material table.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Inactive_Coils",
            "value": 0.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Number of coils not contributing to deflection. Depends on End_Type.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Density",
            "value": 0.036,
            "units": "lb/cu-in",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire material density",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Torsion_Modulus",
            "value": 11500000.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire torsion modulus (G)",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Hot_Factor_Kh",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Reduction factor applied to modulus of hot-wound materials",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Tensile",
            "value": 261000.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Wire tensile strength (computed as a function of wire diameter when Prop_Calc_Method=1; See Help for details)",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "%_Tensile_Endur",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for selected life cycle category",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "%_Tensile_Stat",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for static applications",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "%_Tensile_Bend",
            "value": 75.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for bending",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Stress_Lim_Endur",
            "value": 130709.6,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for selected life cycle category",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Stress_Lim_Stat",
            "value": 130709.6,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for static applications",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Stress_Lim_Bend",
            "value": 199999.9,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for bending",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "SI_Range",
            "value": 1,
            "units": "",
            "format": "table",
            "table": "Spring/Extension/si_range",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select desired range of stress created by Initial_Tension. See on-line Help for details.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "SI_Lo_Factor",
            "value": 27400.1,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Stress Initial Low Factor from material table - used with Spring_Index to determine Stress_Init_Lo",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "SI_Hi_Factor",
            "value": 45000.1,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Stress Initial High Factor from material table - used with Spring_Index to determine Stress_Init_Hi",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "End_Type",
            "value": 3,
            "units": "",
            "format": "table",
            "table": "Spring/Extension/endtypes",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Select end type",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "End_ID",
            "value": 0.0,
            "units": "in.",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "End Inside Diameter. Used in calculation of stress at end.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Extended_End_ID",
            "value": 0.0,
            "units": "in.",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Extended End Inside Diameter. Used in calculation of stress at end.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "L_End",
            "value": 0.0,
            "units": "in.",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of End (see diagram in on-line Help). Used in calculation of L_Free.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "L_Extended_End",
            "value": 0.0,
            "units": "in.",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Length of Extended End (see diagram in on-line Help). Used in calculation of L_Free.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Hook_Deflect_All",
            "value": 0.40,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Hook Deflection Allowance - adds to Coils_A",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Name",
            "value": "",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Name of the catalog from which the catalog entry was selected",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Number",
            "value": "",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "tooltip": "Catalog entry which was selected from the named catalog",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "tbase010",
            "value": 0.010,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "tbase400",
            "value": 0.400,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "const_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "slope_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "tensile_010",
            "value": 100000.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        }
    ],
    "labels": [
        {
            "name": "COMMENT",
            "value": "Extension Spring default start point ..."
        },
        {
            "name": "Contact person",
            "value": ""
        },
        {
            "name": "Company name",
            "value": ""
        },
        {
            "name": "Street",
            "value": ""
        },
        {
            "name": "City",
            "value": ""
        },
        {
            "name": "State & Zip",
            "value": ""
        },
        {
            "name": "Phone",
            "value": ""
        },
        {
            "name": "Date",
            "value": ""
        },
        {
            "name": "Part Number",
            "value": ""
        },
        {
            "name": "Finish",
            "value": ""
        }
    ],
    "name": "initialState",
    "type": "Spring/Extension",
    "version": "4",
    "result": {
        "objective_value": 0,
        "termination_condition": "",
        "violated_constraint_count": 0
    }
};