import axios from "axios";

const PersonalDataService = {}

PersonalDataService.createPersonalData = async function(data){
    return await axios.post('http://127.0.0.1:3001/api/personaldata',data)
}

export default PersonalDataService;

