import styles from './AddUserForm.module.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const AddUserForm = (props)=>
{
    const [_name, setName] = useState('')
    const [_age, setAge] = useState(0)
    // userinput handlers
    const onNameChange = (el)=>
    {
        setName(el.target.value)
    }
    const onAgeChange  = (el)=>
    {   
        setAge(el.target.value)
    }
    // end
    // click add handler
    const onAddUser = (event)=>
    {
        let errors = []
        event.preventDefault()
        if(_name.trim().length > 0 && _age > 0)
        {
            props.onUserAdd({id:uuidv4(),name:_name, age:_age})
            setName('')
            setAge(0)
        }
        else{
            if(_age <= 0)
                errors.push({id: uuidv4(), message:'Age is invalid. cant be 0 or negative'})
            if(_name.trim().length <= 0)
                errors.push({id:uuidv4(), message:'Name input can\'t be empty'})

            props.onError(errors)
        }
            
    }
    //
    return(
        <form>
  
            <input value={_name} className={styles.cinput} id="name" placeholder='Username...' onChange={onNameChange}></input>
            <input value={_age} className={styles.cinput} type="number" id="age" onChange={onAgeChange}></input>
            <button  type='submit' className={styles.cbutton} onClick={onAddUser}>Create user</button>
        </form>
    )
}
export default AddUserForm;