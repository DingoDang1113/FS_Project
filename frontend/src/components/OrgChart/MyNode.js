import { Redirect } from "react-router-dom/cjs/react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import './MyNode.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const propTypes = {
    nodeData: PropTypes.object.isRequired
  };

const MyNode = ({nodeData}) => {
    const history = useHistory();
    // console.log('HAHAHAH',nodeData)
    const selectNode = () => {
        // return <Redirect to={`/users/profile/${nodeData.employeeId}`} />
        history.push(`/users/profile/${nodeData.employeeId}`)
        // alert('I am ')
    };

    return (
        <div onClick={selectNode} className="node-tile">
            <div className="position">{nodeData.title}</div>
            <div className="fullname">{nodeData.name}</div>
        </div>
    )
}

MyNode.protoTypes = propTypes;

export default MyNode;