import React from 'react'

const user = {
    name: 'bart',
    age:9
}

const MyContext = React.createContext(user);

export {MyContext} 