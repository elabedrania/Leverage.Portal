import axios from "axios";

const CompanyDataService={}

CompanyDataService.createCompanyData = async function(data){
    return await axios.post('http://127.0.0.1:3001/api/companyData', data);
}

export default CompanyDataService;