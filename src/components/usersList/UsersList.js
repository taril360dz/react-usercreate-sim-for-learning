import styles from './UsersList.module.css'

const UsersList = (props) => 
{
    if(props.list.length === 0)
        return <div><p>No users on this list</p></div>
    
        return props.list.map(user =>
        {
            return <div key={user.id} className={styles.user}><p>{user.name}</p><p>{user.age} years old</p></div>
        })

}

export default UsersList;