import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
const objDiv = styled.div`

`
const renderProject = (props) => {
    const obj = props
    return (
        <objDiv>
            {/* {obj.map((object, index) => (
                <li key={index}>{object}</li>
            ))} */}
        </objDiv>
    );
}

const mapStateToProps = (state) => {
    return {
        obj: state.projects
    }
}


export default connect(mapStateToProps)(renderProject);