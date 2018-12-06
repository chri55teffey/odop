import { CONSTRAINED, FIXED } from '../../../store/actionTypes';
export const initialState = {
    "symbol_table": [
        {
            "input": true,
            "name": "OD_Free",
            "value": 0.9265,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 2.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Outside diameter in free (no load) condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Wire_Dia",
            "value": 0.063,
            "units": "inch",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0.5,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Wire diameter",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Coils_T",
            "value": 7.039999,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 40,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Total number of coils",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "M_1",
            "value": 0.050,
            "units": "in-lbs",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Minimum operating load (Length L_1)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "M_2",
            "value": 4.00,
            "units": "in-lbs",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Maximum operating load (Length L_2)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": true,
            "name": "Coil_Spacing",
            "value": 0.00,
            "units": "inches",
            "lmin": FIXED,
            "lmax": FIXED,
            "cmin": 0,
            "cmax": 1.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Empty space between each turn (not the same as pitch)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Mean_Dia",
            "value": 0.8635,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Average of coil inside and outside diameters",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "ID_Free",
            "value": 0.8005,
            "units": "inches",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Inside diameter in free (no load) condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Coils_A",
            "value": 7.039999,
            "units": "coils",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.0,
            "cmax": 50.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Number of Active coils",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Rate",
            "value": 0.019995,
            "units": "in#/deg",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.001,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Spring rate (spring constant); slope of force-deflection curve",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_1",
            "value": 2.500620 ,
            "units": "deg",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Deflection from free to load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_2",
            "value": 200.049600,
            "units": "deg",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 300.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Deflection from free to load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Body",
            "value": 0.506520,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 50.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Length of spring body in free condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_1",
            "value": 0.506958,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 50.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Spring length at load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_2",
            "value": 0.541529,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.1,
            "cmax": 50.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Spring length at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "End_Angle_Free)",
            "value": 0.0,
            "units": "deg",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 300.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Relative angle between arms in free condition",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stroke",
            "value": 197.5489,
            "units": "deg",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 300.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Angular displacement from point 1 to point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Weight",
            "value": 0.017836,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.01,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Weight of one spring",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Index",
            "value": 13.70634,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 4.0,
            "cmax": 20.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Ratio of mean coil diameter (Mean_Dia) to wire diameter (Wire_Dia)",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "End_Deflect_All",
            "value": 0.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 10.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "End deflection allowance",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_1",
            "value": 2036.8,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 10000.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Bending stress in body wire at load point 1",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_2",
            "value": 162944.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 200000.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Bending stress in body wire at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_End",
            "value": 1.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 100000.0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Placeholder for future calculation of bending stress in end arms",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_2",
            "value": 1.312625,
            "units": "ratio",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.05,
            "cmax": 1.6,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Factor of safety at load point 2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_CycleLife",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Factor of safety to achieve the target cycle life category",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Cycle_Life",
            "value": 1.0,
            "units": "cycles",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1000000,
            "ioclass": 0,
            "sdlim": 1000.0,
            "tooltip": "Rough estimate of the average number of cycles to failure",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Force_Arm_2",
            "value": 1.0,
            "units": "pounds",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 1.0,
            "ioclass": 0,
            "sdlim": 0,
            "tooltip": "Force produced at distance of Arm_2",
            "equationset": true,
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Type",
            "value": "Torsion",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Torsion spring design",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Prop_Calc_Method",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Torsion/prop_calc",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Property Calculation Method - Controls how material properties are determined and used.  1-Use values from material table  2-Specify Tensile, %_Ten_Bnd_Stat & %_Ten_Bnd_Endur  3-Specify allowable stresses: Stress_Lim_Bnd_Stat & Stress_Lim_Bnd_Endur",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Material_Type",
            "value": 2,
            "units": "",
            "type": "table",
            "table": "Spring/mat_ips",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Select wire material",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "ASTM/Fed_Spec",
            "value": "Defined in initialState",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Wire specification",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Process",
            "value": "Cold_Coiled",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Coil winding process temperature - Cold coiled vs. Hot wound",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "HT_Process",
            "value": "No Stress Relieve",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Heat Treat process",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Number",
            "value": "Defined in initialState ... -1?",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "Material_File",
            "value": "pass in name: mat_ips.json? ... -1?",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "Life_Category",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Torsion/lifetarget",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Select cycle life target. Selects %_Ten_Bnd_Endur from material table.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "End_Type",
            "value": 1,
            "units": "",
            "type": "table",
            "table": "Spring/Torsion/endtypes",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Select end type",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Inactive_Coils",
            "value": 0.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Number of coils not contributing to deflection. Depends on End_Type.",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Density",
            "value": 0.284,
            "units": "lb/cu-in",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Wire material density",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Elastic_Modulus",
            "value": 30000000.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Wire elastic modulus (E)",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Hot_Factor_Kh",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Reduction factor applied to modulus of hot-wound materials",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Tensile",
            "value": 285179.2,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Wire tensile strength (computed as a function of wire diameter when Prop_Calc_Method=1; See Help for details)",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Ten_Bnd_Endur",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Allowable percent of tensile strength for selected life cycle category",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Tens_Bnd_Stat",
            "value": 75.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Allowable percent of tensile strength for static applications",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Lim_Bnd_Endur",
            "value": 142589.6,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Allowable stress for selected life cycle category",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Lim_Bnd_Stat",
            "value": 213884.4,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Allowable stress for static applications",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Arm_1",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Moment arm at end 1",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Arm_2",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Moment arm at end 2",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Xlen_1",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Extra length at end 1 added to wire length calculation",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "Xlen_2",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Extra length at end 2 added to wire length calculation",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_End_1",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Length at end 1 used to calculate end deflection allowance",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "L_End_2",
            "value": 0.0,
            "units": "inches",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "tooltip": "Length at end 2 used to calculate end deflection allowance",
            "equationset": false,
            "hidden": false
        },
        {
            "input": false,
            "name": "tbase010",
            "value": 0.010,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "tbase400",
            "value": 0.400,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "const_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "slope_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        },
        {
            "input": false,
            "name": "tensile_010",
            "value": 100000.0,
            "units": "PSI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "ioclass": 0,
            "sdlim": 1.0,
            "equationset": false,
            "hidden": true
        }
    ],
    "labels": [
        {
            "name": "COMMENT",
            "value": "Torsion Spring initialState"
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
    "type": "Spring/Torsion",
    "version": "1",
    "result": {
        "objective_value": 0,
        "termination_condition": "",
        "violated_constraint_count": 0
    }
};
