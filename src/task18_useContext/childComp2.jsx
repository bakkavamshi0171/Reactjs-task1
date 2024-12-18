// ChildComp2.js
import React, { useContext } from 'react';
import { MyContext } from './parentComp';



export default function ChildComp2() {
    const { name, setName } = useContext(MyContext);

    const changeName = () => {
        setName("Bakka vamshi");
    };

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}
