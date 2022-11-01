import './App.css';
import Card from './components/UI/Card'
import AddUserForm from './components/addUser/AddUserForm';
import UsersList from './components/usersList/UsersList'
import { useState } from 'react';
import Modal from './components/UI/Modal/Modal'



function App() {
  const [modal, setModal] = useState(false)
  // handler functions
  const closeModal = ()=> {
    setModal(false)
  }

  //
  const [users, setUser] = useState([])
  const [error, setError] = useState([])
  const handleNewUser = (data) =>
  {
    setUser(prev => {
      return [...prev, data]
    })
  }
  const handleError = (err) => {
    setError(err)
    setModal(true)
  }
  return (
    <div>
      <div className='app'>
        <Card>
          <AddUserForm onUserAdd={handleNewUser} onError={handleError}/>
        </Card>
        <Card>
          <UsersList list={users} />
        </Card>
      </div>
      <Modal onError={modal} onClose={closeModal}>{error}</Modal>
    </div>

  );
}

export default App;
