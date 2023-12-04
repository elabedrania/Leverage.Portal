import axios from "axios";
const UserService = {}

UserService.register = async function(data){
    return await axios.post('http://127.0.0.1:3001/api/register', data);
}

export default UserService;