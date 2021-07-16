import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './User.module.css'
import axios from 'axios'

const User = () => {
    const [users, setUser] = useState([])
    const [checkedUser,setChecked] = useState([])

    const checkHandler = (id) => {
        setChecked( checkedUser.includes(id) ? checkedUser.filter((user) => user !== id)
            : [...checkedUser, id])
    }
    const checkAll = () =>{
        setChecked (
            checkedUser.length !== users.length ?users.map((user)=>user.id) :[]
        )
}
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUser(data))
    }, [])
    return (
        <>
            <table className={classes.User } >
                <thead>
                <h2 className={classes.h2} >Список сотрудников</h2>
                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <input className='mr-2 leading-tight'
                           type="checkbox"
                           onChange={checkAll}
                           checked= {users.length === checkedUser.length }
                    />
                    <span>Check All</span>
                </tr>
                </thead>
                <tbody className={classes.User}>
                {
                    users.map(({name, id,username, phone}) => (
                        <tr className={checkedUser.includes(id)? 'bg-secondary': ''} >
                            <th> {id} </th>
                            <th> {name} </th>
                            <th> {username} </th>
                            <th> {phone}</th>
                            <th>

                                <input
                                    type="checkbox"
                                    onChange={() =>checkHandler(id)}
                                    checked={checkedUser.includes(id)}
                                />
                            </th>
                        </tr>
                        )
                    )
                }

                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="5">
                        {
                            users.filter((user) => checkedUser.includes(user.id))
                                .map((user) => user.name).join(',')
                        }
                    </td>
                </tr>
                </tfoot>
            </table>
        </>
    );
};

export default User;