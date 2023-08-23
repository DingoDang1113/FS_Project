import React from "react";
import {Tree, TreeNode} from 'react-organizational-chart';
import Header from "../Header/Header";

const OrgChart = () =>{

    return (

        <>
            <Header />
            <Tree label={<div>Root</div>}>
                <TreeNode label={<div>Child 1</div>}>
                    <TreeNode label={<div>Grand Child</div>} />
                </TreeNode>
            </Tree>
        
        
        </>

    );
}

export default OrgChart;