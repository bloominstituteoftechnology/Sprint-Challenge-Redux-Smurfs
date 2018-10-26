import React from 'react'; 

const UpdateSmurfForm = props => {
    return(
    <form>
        <input placeholder={props.friend.name} />
        <input placeholder={props.friend.height} />
        <input placeholder={props.friend.age} />
    </form>
    )
}

export default UpdateSmurfForm; 