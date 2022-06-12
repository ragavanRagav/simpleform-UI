import axios from "axios";

const backendUrl = false ? "http://localhost:8080" : "https://tagalysbackendtask.herokuapp.com";

const saveDetails = async (details) => {
  return axios.post(`${backendUrl}/saveDetails`,details).then((resp)=>{
      return resp.data;
  }).catch((err)=>{
      console.log(err);
      return false
  })
};
const getDetails = async (email) => {
  return axios
    .get(`${backendUrl}/details/${email}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

export { saveDetails, getDetails };
