import React from 'react'

export default function UserSelector(props) {
  return (
    <p className="section">
    users:

        { props.users && 
         props.users.map( (user , index) => {
             return(
                <label key={user}>
                <input 
                  onChange={()=>{props.handelchange(index)}}
                 // checked={ index === props.selectindex}
                 type="radio" 
                 name="user"/>
                {user}
            </label>
             )
         }

         )
        }
</p>
  )
}
