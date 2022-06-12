import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../servicecalls/backend-service-call";

const ShowDetails = () => {
  let { email } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDetails = async (mail) => {
    setLoading(true);
    const res = await getDetails(mail);
    if (res.status) {
      setDetails(res?.details);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDetails(email);
  }, [email]);

  return (
    <div>
      <div className="h3 text-center">Hello {email} Your saved details</div>
      <div>
        {loading ? (
          <h4>Loading please wait...</h4>
        ) : (
          <>
            {details?.map((detail) => {
              return (
                <div className="text-capitalize border w-75 m-auto my-2 d-flex justify-content-begin flex-column" key={detail.id}>
                  <h5>name : {detail.name}</h5>
                  <h5>email : {detail.email}</h5>
                  <h5>country : {detail.country}</h5>
                  <h5>noTravelers : {detail.noTravelers}</h5>
                  <h5>budget : {detail.budget}</h5>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default ShowDetails;
