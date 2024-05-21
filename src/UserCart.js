import React from 'react';

const UserCart = (props) => {
    console.log(props)

    const { name, age, email } = props;


    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default UserCart;
