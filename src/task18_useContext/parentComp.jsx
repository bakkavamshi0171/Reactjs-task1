// ParentFunctioncomp.js
import React, { createContext, useState } from 'react';
import ChildComp1 from './childComp1';

export const MyContext = createContext();

export default function ParentFunctioncomp() {
    const [name, setName] = useState("vamshi");

    return (
        <div>
            <MyContext.Provider value={{ name, setName }}>
                <ChildComp1 />
            </MyContext.Provider>
        </div>
    );
}
