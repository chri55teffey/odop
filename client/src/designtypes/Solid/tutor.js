import React from 'react';
import { changeSymbolValue, changeSymbolConstraint, fixSymbolValue, loadInitialState, setSymbolFlag, saveOutputSymbolConstraints, search } from '../../store/actionCreators';
import { MIN, MAX, CONSTRAINED } from '../../store/actionTypes';
export const execute = {
    steps: [
        {
            title: "Session Now In Progress",
            text: (
                <React.Fragment>
                    <p>
                    <b>***  Under Construction  ***</b> <br />
                    This session is still a work in progress. <br /><br />
                    Welcome to the first ODOP tutorial session.
                    This session will provide an introduction to ODOP features and concepts.
                    </p>
                    
                    <p>
                    If you are here as a "tourist" and are interested in picking up a "flavor" 
                    for ODOP:Spring as opposed to walking through the underlying
                    concepts and major features at the disposal of a serious
                    spring designer, you may want to skip forward to the sample problems. 
                    You may do this by Canceling this session and selecting one of the spring 
                    design Demo sessions available from the <b>Help : Demo...</b> menu
                    when a Spring design type is loaded.
                    </p>
                    
                    <p>
                    As with the other tutorial and demo sessions, 
                    this session needs to start from a known state.  
                    So, if you have entered any work of value that is not yet saved,
                    use the <b>File : Save</b> menu item to save your work before continuing.
                    Moving to the next page will establish the necessary initialState
                    for the ODOP <b>Rectangular Solid</b> design model.
                    </p>
                    
                    <p>
                    To continue with this session, just click the "Next" button as you finish
                    reading each page (step). 
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 02 of xx",
            text: (
                <React.Fragment>
                    <p>
                    The initial conditions expected by this tutorial session are now established.
                    </p>
                    
                    <p>
                    ODOP contains an "on-line" help facility.
                    It includes an overview of the program, a Getting Started section plus
                    helpful hints and detailed explanations of major features.  
                    But first, a few words about what <b>not</b> to expect ...
                    The on-line help facility is not intended to replace the documentation that comes 
                    with your browser or computer system.  
                    Also, the Help facility is not intended to teach spring design. 
                    The spring design user is expected to know the
                    basic physics of springs and strength of materials. 
                    The spring design content assumes that the user is familiar with the
                    concepts of stress, factor of safety, yield point, endurance limit, etc.
                    </p>
                </React.Fragment>
            ),
            actions: [
                loadInitialState('Solid')
            ]
        },
        {
            title: "Page 03 of xx",
            text: (
                <React.Fragment>
                    <p>
                    So, as you are reading, please click the Help menu above.
                    It will drop down to provide a list of entries (topics) to choose from.
                    Selecting <b>Index</b> on this list will bring up a new browser tab with the
                    list of available Help entries. You can switch back and forth between the tabs.
                    </p>
                    
                    <p>
                    Several of these entries are designed to bring new users up to speed
                    as quickly as possible.<br />
                    <br />
                    <b>Features</b> and <b>Introduction</b> cover a few of the concepts 
                    behind the program.<br />
                    <br />
                    <b>Terminology</b> explains some of the unique terms that the program
                    and its supporting documentation insist on using. 
                    ODOP is structured to be general and extensible to new kinds of designs.
                    The expectation is that this generality will pay off in the program's 
                    ability to solve the really hard problems.<br />
                    <br />
                    <b>Getting Started</b>  provides a tour of the main page plus
                    makes a few suggestions on how new users should attack the program.<br />
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 04 of xx",
            text: (
                <React.Fragment>
                    <p>
                    In the rest of this section of the tutorial we will cover the basic analysis
                    and solution features offered by ODOP. 
                    First, we will see how the Independent Variables
                    (inputs <b>TO</b> the design equations) can be changed and how these changes
                    are immediately reflected in the values of the Dependent Variables
                    (outputs <b>FROM</b> the design equations). 
                    </p>
                    
                    <p>
                    We'll work with the Rectangular Solid (simple box) design type that 
                    is illustrated on the next page.
                    </p>
                    <br />
                </React.Fragment>
            )
        },
        {
            title: "Page 05 of xx",
            text: (
                <React.Fragment>
                   <img src="designtypes/Solid/RectangularSolidDiagram.png" alt="Rectangular Solid diagram"/>
                </React.Fragment>
            )
        },
        {
            title: "Page 06 of xx",
            text: (
                <React.Fragment>
                    <p>
                    This is a good time to take a close look at existing values.
                    You may need to scroll down to see everything.
                    The 70 pound maximum constraint on Weight and the 108 inch
                    maximum on Length+Girth are values that the US Postal Service
                    and many other participants in the package shipping industry impose 
                    on items that they will accept.
                    </p>
                    
                    <p>
                    In the process of moving to the next page, the tutorial will impose a new value 
                    for an input (Independent Variable) ... the Length dimension of our rectangular solid. 
                    Take note of the current value of Volume or Weight so that you can see the 
                    impact of the change.
                    </p>
                    
                    <p>
                    When you click on Next, the tutorial will impose a value of 20 inches on Length.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 07 of xx",
            text: (
                <React.Fragment>
                    <p>
                    The tutorial has now entered a value of 20 inches for Length. 
                    In the shorthand summary that will be used in the remaining tutorial 
                    and demo sessions, the change was:
                    </p>
                    
                    <p>
                    CHANGE  Length  20.0<br />
                    </p>
                    
                    <p>
                    Notice how the outputs (Dependent Variables) have immediately updated to reflect
                    the change.
                    The remaining Independent Variable values remain as established by the initialState
                    that was imposed at the start of this session. 
                    </p>
                </React.Fragment>
            ),
            actions: [
                changeSymbolValue("Length",20)
            ]
        },
        {
            title: "Page 08 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Okay, that wasn't really very exciting. 
                    The objective here is to illustrate how ODOP can do simple analysis. 
                    Given the physical description of the object under consideration, 
                    ODOP can use the mathematical model to predict aspects of its performance.
                    For the rectangular solid, that is things like Volume, Weight, etc.
                    For a spring, we will be speaking in terms of spring Rate, stresses, 
                    factor of safety, cycle life, etc.
                    </p>
                    
                    <p>
                    Ready for another example ?
                    </p>
                    
                    <p>
                    When you click on Next, the tutorial will impose a value of 12 inches on Height.<br />
                    <br />
                    CHANGE Height 12
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 09 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Well, that brought a little color into the ODOP world !
                    The design now exceeds the 70 pound constraint on Weight.
                    Since a constraint is violated, this design is considered to be
                    "Not Feasible".
                    A Search (<b>Action : Search</b> menu) will be required to
                    find values of free (not FIXed) Independent Variables such that 
                    constraints are not violated.
                    </p>
                    
                    <p>
                    Before we get into Search, let's suppose that we really don't 
                    want the Search process to change the 20 inch value for Length that 
                    we established earlier.
                    When you click Next, the tutorial will check the checkbox 
                    (to the right of the Value entry field) 
                    to put Length into FIXed status.
                    </p>
                </React.Fragment>
            ),
            actions: [
                changeSymbolValue("Height",12)
            ]
        },
        {
            title: "Page 10 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Now, the FIX checkbox for Length is checked.
                    </p>
                    
                    <p>
                    By having Length in FIXed status, the search will be able to adjust
                    only the values of Width and Height to find a design that does not 
                    exceed the 70 pound maximum weight.
                    Of course, the entire collection of Dependent Variables will respond 
                    to any changes in the Independent Variables.
                    </p>
                    <br />
                </React.Fragment>
            ),
            actions: [
                fixSymbolValue('Length')
            ]
        },
        {
            title: "Page 11 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Now that we have expressed what we want the design to accomplish,
                    we will ask the Search algorithm (<b>Action : Search</b> menu) for a solution.
                    Specifically, Search will find values of the free Independent Variables
                    that cause the Constraints and FIXes to be satisfied.
                    </p>

                    <p>
                    If the program can find a solution that satisfies all the constraints,
                    it will display "<b>FEASIBLE</b>" in the Result section (immediately below these words).  
                    If a satisfactory solution is found, but one or more constraints remain violated by a
                    trivial amount, the program will display "<b>MARGINALLY FEASIBLE</b>" in the Result section.
                    </p>
                </React.Fragment>
            ),
        },
        {
            title: "Page 12 of xx",
            text: (
                <React.Fragment>
                    <p>We have a solution. Please take a moment to scroll through and view the values.</p>
                    
                    <p>
                    Indeed, the design now weighs less than 70 pounds.
                    Also, Length has remained at 20 inches as specified. 
                    </p>
                </React.Fragment>
            ),
            actions: [
                search()
            ]
        },
        {
            title: "Page 13 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Finally, this session will demonstrate how it is possible to specify
                    the value of Girth, a Dependent Variable.
                    </p>
                    
                    <p>
                    While the tutorial has imposed:<br /><br />
                    FIX Girth 35
                    </p>
                    <p>
                    Again a Search will be required to establish values for the Independent Variables
                    such that the FIXed value of Girth is established while simultaneously keeping Weight 
                    below the 70 pound maximum.
                    </p>
                    
                </React.Fragment>
            )
        },
        {
            title: "Page 10 of xx",
            text: (
                <React.Fragment>
                    <p>
                    Girth is now FIXed at a value of 35.
                    The FIX is implemented as a weighted double-sided constraint.
                    </p>
                    
                    <p>
                    Look for the results on the next page.
                    <br /><br />
                    </p>
                    
                    <p>
                    <br /><br />
                    </p>
                </React.Fragment>
            ),
            actions: [
                fixSymbolValue('Girth', 35)
            ]
        },
        {
            title: "Page 11 of xx",
            text: (
                <React.Fragment>
                    <p>
                    We have a solution. Please take a moment to scroll through and view the values.
                    </p>
                    
                    <p>
                    The design is complete.
                    </p>
                    
                    <p>
                    This is a good time to think about saving the design for potential access in the future.
                    You can use the <b>File : Save As...</b> menu item to save the design into the Design Library.  
                    Alternatively, it should be possibile to use the print features of the browser to
                    send one or more of the Reports to a local printer or perhaps save to a .PDF file.
                    Your browser documentation should provide more details.
                    </p>
                </React.Fragment>
            ),
            actions: [
                search()
            ]
        },
        {
            title: "Page 12 of xx",
            text: (
                <React.Fragment>
                    <p>
                    </p>
                    
                    <p>
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 13 of xx (last page)",
            text: (
                <React.Fragment>
                    <p>
                    Remember that it is always possible to restart a given session of
                    the ODOP demo / tutorial. 
                    If at any point you become curious about "Why does
                    the tutorial do it that way ?", finish that tutorial section
                    normally, then return to the point in question later.  
                    Cancel out of the tutorial session at the point of your question, 
                    and then take the existing state of the program and try it your way. 
                    You are encouraged to experiment with the program. 
                    You are not likely to break it or wear it out !
                    </p>
                    
                    <p>Several more tutorial sessions are planned. 
                    They will have names like tutor1, tutor2, ... etc. 
                    Refer to the documentation section (Help entry) covering the Tutorial 
                    for a list of the Tutorial and DEMO topics.</p>
                    
                    <p>If you do not wish to continue with more demonstration problems, 
                    you can experiment with the various ODOP:Spring features, menus and reports. 
                    The HELP menu is a good place to start. </p>
                    <br />
                </React.Fragment>
            )
        }
    ]
}
