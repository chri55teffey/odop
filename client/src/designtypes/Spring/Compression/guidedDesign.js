import React from 'react';
export const execute = {
    steps: [
        {
            title: "Session Now In Progress",
            text: (
                <React.Fragment>
                    <p>
                    Welcome to the "Guided Design" tutorial session
                    for the compression spring design type.
                    This session is appropriate for a situation where you are creating a 
                    design from the original problem specification as opposed to validating
                    an existing or hypothetical design.
                    </p>
                    
                    <p>
                    It is recommended that before working through this session, 
                    you take the opportunity to view some of the other, 
                    more introductory, tutorial and demo sessions.
                    This session is different than other sessions in that it 
                    provides only high-level guidance for a spring design workflow and 
                    does not actually execute any design changes. 
                    You supply numbers and menu selections following step-by-step instructions 
                    and explanations provided to guide you through the design process.
                    </p>
                    
                    <p>
                    This approach is possible because the sessions are "live" and not
                    a simple playback of a previous recording.  
                    The main page has simply been displaced downward by the text in this  
                    light green section.
                    All the menus and other inputs to the program remain available and active.
                    With only a bit of coaching provided by this session, 
                    you are expected to enter values and execute menu selections appropriate to the
                    design problem at hand.
                    </p>
                    
                    <p>
                    Where the other tutorial and demo sessions start by imposing a known
                    starting design or initial state, 
                    this session allows the previously existing design to be carried forward.
                    It is helpful if the design brought into this session 
                    is a plausible spring so as to provide a reasonable starting point 
                    for the operations to come later. 
                    For example, a value of zero for any of the spring dimensions can
                    create an unneccessary challenge in getting the search algorithm started. 
                    </p>
                    
                    <p>
                    To continue with this session, just click the "Next" button as you finish
                    reading each page. 
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 02 of 13",
            text: (
                <React.Fragment>
                    <p>
                    One of the points of this session is to illustrate that frequent use of the 
                    File : Save As... feature provides the opportunity to easily go back to a 
                    previous point in the design process. 
                    Before saving a design, it is a good practice to update the Comment field with notes
                    for future reference.  Use the File : Properties... menu.
                    Establishing a naming scheme with a common prefix like "ProjectX" 
                    is helpful in having a presentation with related designs clustered together.
                    <br /><br />
                    So, if you wish to preserve your existing design, 
                    <br />
                    <b> use the File : Save As... menu now.</b>
                    </p>
                
                    <p>
                    The next screen displays a diagram illustrating the major steps that this session 
                    guides you through.
                    The diagram is intended only as a "big picture" conceptual starting point as it is
                    significantly simplified as compared to the detail provided in the session.
                    <br />
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 03 of 13",
            text: (
                <React.Fragment>
                    <table>
                    <tbody>
                        <tr>
                            <td width="60%">
                            <img src="designtypes/Spring/Compression/SpringDesignWorkflowDiagram1.png" alt="Spring Design Workflow Diagram"/>
                            </td>
                            <td width="40%">
                                <p>
                                This workflow is intended for design from original problem specifications, not design validation.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%">
                            <img src="designtypes/Spring/Compression/SpringDesignWorkflowDiagram2.png" alt="Spring Design Workflow Diagram"/>
                            </td>
                            <td width="40%">
                                <p>
                                To start, enter what is known about requirements for the design.
                                <br /><br />
                                Leaving wire diameter free (not Fixed or constrained) allows the search  
                                to select a non-standard wire size.
                                <br /><br /><br /><br /><br /><br /><br /><br />
                                If a feasible solution is not available, exit.
                                Consider the posibility that the design is over-specified.
                                Additional information is available in On-line Help topics.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%">
                            <img src="designtypes/Spring/Compression/SpringDesignWorkflowDiagram3.png" alt="Spring Design Workflow Diagram"/>
                            </td>
                            <td width="40%">
                                <p>
                                Seek &nbsp;  Min Weight, Max Cycle Life, Min Outside Diameter, Min Solid Height, Min Rate, etc.
                                <br /><br /><br /><br /> 
                                Select  a standard wire size from the built-in tables.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%">
                            <img src="designtypes/Spring/Compression/SpringDesignWorkflowDiagram4.png" alt="Spring Design Workflow Diagram"/>
                            </td>
                            <td width="40%">
                                <p>
                                Another search is required to adjust other variables to compensate for the change in wire diameter.
                                <br /><br /><br /><br /> 
                                Select the nearest entry from a built-in catalog of stock springs.  Confirm if requirements are met.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <br />
                    <p>
                     After reviewing the diagram, use the "Next" button to continue.
                     </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 04 of 13",
            text: (
                <React.Fragment>
                    <p>
                    This is the time to express your objectives (goals, requirements) for the design at hand 
                    in terms of constraints (Min & Max) and Fixes.
                    </p>
                    
                    <p>
                    For the moment, leave wire diameter (Wire_Dia) free.  
                    This allows the search to manipulate wire diameter as necessary to achieve those goals.
                    Selecting an available wire size happens later in the session.
                    </p>
                    
                    <p>
                    Notice that several constraints are established by default.  
                    For example, you should see established constraints on quantities like
                    Coils_A, Deflect_1, L_Stroke, ID_Free, FS_2, FS_Solid and %_Avail_Deflect.
                    These constraints are helpful in guiding the search to deliver a good spring design.
                    Without similar constraints, the search can "cheat", producing a result that is
                    mathematically possible but not particularly helpful in terms of a usable spring design.
                    You should feel free to experiment with different values for these constraint levels.
                    </p>
                    
                    <p>
                    <b>Fill in the values and checkboxes now.</b>
                    </p>
                    
                    <p>
                    Use the "Next" button to proceed after your inputs are complete.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 05 of 13",
            text: (
                <React.Fragment>
                    <p>
                    It is possible to use the tutorial "Back" button to return the active design 
                    to the beginning of any tutorial step to make corrections or additional inputs.
                    Better yet, learn to use File : Save As... during routine design activity.
                    If you want to preserve the option to easily return to this state of the design,
                    update the Comment field and use the File : Save As... menu.
                    </p>
                    
                    <p>
                    The preceding changes have likely caused the violation of one or more constraints.
                    If so, the current design is considered to be "infeasible" or "NOT FEASIBLE".
                    Next, a search is used to adjust values of the Independent Variables in an 
                    attempt to find a design that does not violate constraints.
                    </p>
                    
                    <p>
                    <b>Invoke the Search feature now.</b> &nbsp; Use the Action : Search menu above.
                    </p>
                    
                    <p>
                    Take a moment to look at the results.  
                    Use the "Next" button to continue.
                    </p>
                    
                    <br />
                </React.Fragment>
            )
        },
        {
            title: "Page 06 of 13",
            text: (
                <React.Fragment>
                    <p>
                    If the "Feasibility:" result of the search is "NOT FEASIBLE", 
                    consider the possibility that some aspect of the design is over-specified.
                    More information on such a possibility is provided in this entry on the on-line help:
                    <a href="https://thegrumpys.github.io/odop/Help/designSituations" target="_blank" rel="noopener noreferrer"> Design situations: under-specified, properly specified, over-specified </a>
                    </p>
                    
                    <p>
                    Given that the design is properly specified but just not achievable within the available
                    space and material properties,
                    then it is likely necessary to accept compromise and adjust the goals for the design 
                    as expressed in terms of Fixes and constraint levels. 
                    This can be done manually.
                    Also, the On-line Help provides a description of the 
                    <a href="https://thegrumpys.github.io/odop/Help/trade" target="_blank" rel="noopener noreferrer"> Trade </a>
                    feature and instruction on its use.
                    Trade can be used to gain a better understanding of exactly how much your constraints 
                    need to be adjusted in order to find the "nearest" feasible design.
                    </p>
                    
                    <p>
                    If the "Feasibility:" result of the search is "FEASIBLE" or "MARGINALLY FEASIBLE", 
                    then the Seek feature may be able to provide an optimized result. 
                    </p>
                    
                    <p>
                    This is a good time to take a close look at existing values.
                    Scroll down to see everything.
                    The Report tabs in the upper right offer additional information in a spring design specific format.
                    Again, if you want to preserve the option to easily return to this state of the design,
                    update the Comment field and use the File : Save As... menu.
                    </p>
                    
                    <p>
                    While it really doesn't make a lot of difference, 
                    if you are still positioned at a Report tab, 
                    you may want to switch back to the main "Design" tab before using the "Next" button to proceed.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 07 of 13",
            text: (
                <React.Fragment>
                    <p>
                    While the Seek feature can find the constrained extreme of any independent or dependent variable 
                    that is not in Fixed status, for compression springs, the most likely candidates are: 
                    min Weight, max Cycle_Life, min OD_Free, min L_Solid (solid height), min Rate and max Stroke.
                    </p>
                    
                    <p>
                    <b>Invoke Seek now.</b> &nbsp; Use the Action : Seek... menu above.
                    </p>
                    
                    <p>
                    When examining the results of Seek, you may notice that multiple constraints are
                    violated by a small amount.  
                    In this situation 
                    the design is classified as "MARGINALLY FEASIBLE" or even "NOT FEASIBLE".
                    This is normal.
                    The solution algorithm is finding a balance between the rewards and penalties of 
                    violating those constraints
                    </p>
                    
                    <p>
                    When ready, use the "Next" button to proceed.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 08 of 13",
            text: (
                <React.Fragment>
                    <p>
                    Take a moment to review the results. 
                    Is this a reasonable design that meets the original objectives ? &nbsp;
                    If not, try adjusting constraint levels and repeating Search and Seek.
                    </p>
                    
                    <p>
                    The next screen gets into selecting a standard wire size. 
                    But first, if this design seems like a good starting point, 
                    you should update the Comment field and ...
                    <br />
                    <b>Save the current design with a name like "ProjectX_Baseline"</b>.
                    <br /><br /> 
                    Saving this design keeps it available for re-use in a few more steps.
                    </p>
                    
                    <p>
                    Use the File : Save As... menu.
                    Then, use the "Next" button to continue.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 09 of 13",
            text: (
                <React.Fragment>
                    <p>
                    Use the Action : Select Size... menu to: 
                    <br />
                    <b>Select the nearest larger standard wire size.</b>
                    <br /><br />
                    Note that this operation leaves Wire_Dia in Fixed status.
                    </p>
                    
                    <p>
                    Even a small change in wire diameter has likely caused constraints to be violated.
                    This situation can be resolved.
                    <br /><br />
                    <b>Repeat &nbsp; Search &nbsp; and &nbsp; Seek</b>&nbsp;
                    with the new, now Fixed, standard wire diameter.
                    </p>
                    
                    <p>
                    If the result appears reasonable,
                    update the Comment and ...
                    <br />
                    <b>Save the design with a name like "ProjectX_Candidate1".</b>
                    </p>
                    
                    <p>
                    When ready, use the "Next" button to proceed.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 10 of 13",
            text: (
                <React.Fragment>
                    <p>
                    Now, just to be sure that we are not missing out on some interesting design possibility ... 
                    <br /><br />
                    <b>Restore that "baseline" design.</b> &nbsp; 
                    Use the File : Open... menu.
                    </p>
                    
                    <p>
                    This time, use the Action : Select Size... menu to:
                    <br />
                    <b>Select the nearest smaller standard wire size.</b>
                    <br /><br />
                    As before, use Search to resolve any constraint violations that have crept in
                    with the new, now Fixed, standard wire diameter.
                    If a feasible or marginally feasible design is available, 
                    use Seek to optimize it on the previously used (max or min) criteria.
                    </p>
                    
                    <p>
                    If using a smaller standard wire size does not permit any feasible or marginally feasible solutions,
                    go back and have a look at what might be possible with an even larger standard wire diameter.
                    Again, use Search to resolve any constraint violations that have crept in
                    with the new standard wire diameter.
                    Use Seek to optimize it on the previously used (max or min) criteria.
                    </p>
                    
                    <p>
                    If the result appears reasonable, update the Comment and ...
                    <br />
                    <b>Save the design with a name like "ProjectX_Candidate2".</b>
                    </p>
                    
                    <p>
                    When ready, use the "Next" button to proceed.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 11 of 13",
            text: (
                <React.Fragment>
                    <p>
                    At this point it is appropriate to do a careful comparison of the candidate designs.
                    If you are working with a wide-screen monitor,
                    it should be possible to set up a side-by-side comparison.
                    There is an On-line Help entry that describes how this can be done for Help content. 
                    You can follow the same browser window configuration to work with two
                    ODOP design sessions at the same time.
                    For additional details see:  
                    <a href="https://thegrumpys.github.io/odop/Help/wideScreen" target="_blank" rel="noopener noreferrer"> Side-by-side sessions on a wide-screen monitor </a>
                    </p>
                    
                    <p>
                    Aside from using a wide-screen monitor, 
                    it is also possible to use your browser's print feature to print each of the candidate designs
                    and lay the printed pages side-by-side on a physical desktop.
                    </p>
                    
                    <p>
                    When ready, use the "Next" button to proceed.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 12 of 13",
            text: (
                <React.Fragment>
                    <p>
                    Your preferred candidate design can be the basis for manufacturing a custom spring.
                    </p>

                    <p>
                    Our last step is to determine if there is an available catalog spring that meets 
                    the original design specifications. 
                    ODOP:Spring comes equipped with multiple spring catalogs, including:
                    <br /><br /> 
                    MS24585 Spring, Helical, Compression: For Loads Below 20 Pounds (SAE-AS24585)
                    <br /><br />
                    If necessary, 
                    use the File : Open... menu to: 
                    <br />
                    <b>Re-open the preferred candidate design.</b>
                    <br /><br />
                    </p>

                    <p>
                    <b>Use the Action : Select Catalog... menu</b> 
                    <br />
                    to review the four most similar designs in the catalog. 
                    The display of catalog entries is ranked by objective function value 
                    (OBJ is a measure of constraint violation).
                    Selecting a design from the catalog replaces the current design so that you can evaluate it.
                    More detail about standard design catalogs is available in the 
                    <a href="https://thegrumpys.github.io/odop/Help/SpringDesign/selectSizeCatalog" target="_blank" rel="noopener noreferrer"> Select Size and Select Catalog </a>
                     entry of On-line Help. 
                    </p>
                    
                    <p>
                    When ready, use the "Next" button to proceed.
                    </p>
                </React.Fragment>
            ),
        },
        {
            title: "Page 13 of 13",
            text: (
                <React.Fragment>
                    <p>
                    If there is something in the catalog that looks workable, 
                    the side-by-side browser configuration can be used to compare the details of the custom spring 
                    to the best of the catalog springs.
                    </p>
                    
                    <p>
                    As noted previously, it is possible to use the tutorial "Back" button to return the 
                    active design to the beginning of any step if any corrections or additional inputs are desired.
                    You may also open a previously saved design to resume from that point.
                    </p>
                    
                    <p>
                    This concludes this Guided Design section of the tutorial.
                    The mission here has been to introduce the process and best practices associated with using the 
                    ODOP:Spring software to design a full custom spring.
                    From there, this tutorial session illustrated how to check built-in catalogs to 
                    determine if a stock spring can come close to meeting the application requirements as 
                    originally expressed in terms of Fixes and constraints. 
                    At this point, you should have a sufficient understanding of the steps involved to
                    continue using the software for other opportunities in spring design.
                    </p>
                    
                    <p>
                    Your feedback is welcome.
                    Use the 
                    <a href="https://thegrumpys.github.io/odop/About/ContactUs" target="_blank" rel="noopener noreferrer"> Contact Us </a>
                    page of the On-line Help to find the appropriate contact information.
                    </p>
                    <br />
                    
                    <p>
                    When ready, use the "Exit" button to resume regular (non-tutorial) operation of the program 
                    with the existing design.
                    </p>
                </React.Fragment>
            )
        }
    ]
}