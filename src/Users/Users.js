import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export const Users = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(res.data)
        }
        getData()
    }, [])

    const usersName = data.map(user => <Link key={user.id} to={`/user/${user.id}`} data-testid="user-name">{user.name}</Link>)

    return (
        <div data-testid="users-page">
            {usersName}
        </div>
    )
}