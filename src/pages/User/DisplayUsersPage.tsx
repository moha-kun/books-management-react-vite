import { Link } from "react-router-dom"
import UsersList from "../../components/User/UsersList"
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { User } from "../../models/User"
import axios from "../../axios"

function DisplayUsersPage() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('/users').then(res => setUsers(res.data))
    }

    const handleDeleteBook = (id: number) => {
        axios.delete(`/users/${id}`).then(() => fetchData())
    }

  return (
    <div>
      <div className="page-header">
        <h1>Users Management</h1>
        <Link to="add-new">
          <Button variant="primary">Create New</Button>
        </Link>
      </div>
      <UsersList
        users={users}
        handleDeleteBook={handleDeleteBook}
      />
    </div>
  )
}

export default DisplayUsersPage
