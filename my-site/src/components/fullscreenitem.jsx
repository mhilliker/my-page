import React from "react";

function FullscreenItem(props) {
    return (
        <div className="fullscreenItem" id={props.id}>
            {props.children}
        </div>
    );
}

export default FullscreenItem;