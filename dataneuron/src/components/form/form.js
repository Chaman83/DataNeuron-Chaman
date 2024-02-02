import React, { useState } from "react";
import { Resizable } from "react-resizable";

const UserForm = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);

    const onResize = (event, { size }) => {
        setWidth(size.width);
        setHeight(size.height);
    };

    return (
        <Resizable height={height} width={width} onResize={onResize}>
            <div style={{ width: width + 'px', height: height + 'px', border:'3px'}}>
                <form>
                    <label>Name:</label><br />
                    <input type="text" placeholder="John" />
                </form>
            </div>
        </Resizable>
    );
};

export default UserForm;
