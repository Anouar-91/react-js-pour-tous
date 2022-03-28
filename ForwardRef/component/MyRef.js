import React from 'react'
const MyRef = React.forwardRef((props, ref ) => {
    console.log(props.name)
    console.log(ref)
    return (
        <div>
            <input ref={ref} type="text"/>
        </div>
    )
})

export default MyRef