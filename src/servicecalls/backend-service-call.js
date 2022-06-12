import axios from "axios";

const backendUrl = "http://localhost:8080";

const saveDetails = async (details) => {
  console.log("Details => ", details);
  return axios.post(`${backendUrl}/saveDetails`,details).then((resp)=>{
      return resp.data;
  }).catch((err)=>{
      console.log(err);
      return false
  })
};
const getDetails = async (email) => {
  console.log("Details => ", email);
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
