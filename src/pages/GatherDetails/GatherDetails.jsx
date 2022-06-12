import React, { useState } from "react";
import { Input, SelectInput } from "../../components";

const GatherDetails = () => {
  // const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const onChange = (e, state) => {
    state(e.target.value);
  };

  const countriesOption = ["India", "Africa", "Europe"];

  return (
    <div className="w-100 d-flex justify-content-center flex-column">
      <p className="h2">Please enter your details</p>
      <div className="w-75 m-auto border d-flex justify-content-center flex-column">
        <Input
          type={"text"}
          label={"Name : "}
          value={name}
          className={"h5"}
          name={"name"}
          onChange={onChange}
          changingState={setName}
          placeholder={"Enter your name"}
        />
        <Input
          type={"text"}
          label={"Email : "}
          value={email}
          className={"h5"}
          name={"eamil"}
          onChange={onChange}
          changingState={setEmail}
          placeholder={"Enter your Email"}
        />
        <SelectInput
          options={countriesOption}
          name={"country"}
          label={"Countries : "}
          setInput={setCountry}
        />
        <div>
          <button className="w-25">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default GatherDetails;
