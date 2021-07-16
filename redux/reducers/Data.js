import axios from "axios";

const initialState = {
    users:[]
}


const GET_USER = 'GET_USER'

export function getUser(user) {
    return async (dispatch) => {
        const { data: user } =await axios (`https://jsonplaceholder.typicode.com/users/${user}`)
dispatch ({type :'GET_USER ',user})
    }

}