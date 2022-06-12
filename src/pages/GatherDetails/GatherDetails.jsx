import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, SelectInput } from "../../components";
import { saveDetails } from "../../servicecalls/backend-service-call";
import { isNullish } from "../../servicecalls/utilities";

const GatherDetails = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [noTravelers, setNoTravelers] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e, state) => {
    state(e.target.value);
  };
  const onSubmit=async (e)=>{
    e.preventDefault();
    setLoading(true)
    const data={
      name,
      email,
      country,
      noTravelers,
      budget
    }
    if(!isNullish(data)){
      const resp = await saveDetails(data);
      alert(resp.message);
      navigate("/details/"+email);
    }else{
      alert("Validation error")
    }
    setLoading(false)
  }

  const countriesOption = ["India", "Africa", "Europe"];

  return (
    <div className="w-100 d-flex justify-content-center flex-column">
      <p className="h2">Please enter your details</p>
      <form onSubmit={(e)=>onSubmit(e)} className="w-50 m-auto border d-flex justify-content-center flex-column">
        <Input
          type={"text"}
          label={"Name : "}
          value={name}
          required={true}
          pattern="[A-Za-z0-9]+"
          title={"Aplhabest and Numbers only ( No special characters or punctuation)"}
          className={"h5"}
          name={"name"}
          onChange={onChange}
          changingState={setName}
          placeholder={"Enter your name"}
        />
        <Input
          type={"email"}
          label={"Email : "}
          value={email}
          required={true}
          className={"h5"}
          name={"eamil"}
          onChange={onChange}
          changingState={setEmail}
          placeholder={"Enter your Email"}
        />
        <SelectInput
          options={countriesOption}
          selected={country}
          required={true}
          name={"country"}
          label={"Countries : "}
          setInput={setCountry}
        />
        <Input
          type={"text"}
          label={"No of Travelers : "}
          value={noTravelers}
          required={true}
          className={"h5"}
          pattern={'[0-9]+'}
          title={"Enter only numbers"}
          name={"No of travelers"}
          onChange={onChange}
          changingState={setNoTravelers}
          placeholder={"Travelers count"}
        />
        <Input
          type={"text"}
          label={"Budget per person : "}
          value={budget}
          required={true}
          pattern={'[0-9]+'}
          title={"Enter only numbers"}
          className={"h5"}
          name={"budget"}
          onChange={onChange}
          changingState={setBudget}
          placeholder={"Budget per person"}
        />
        <div>
          <button className="w-25 btn btn-danger" disabled={loading} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default GatherDetails;
