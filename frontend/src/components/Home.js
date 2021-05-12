import React from "react";
import { useState, useEffect } from "react";
import PoliceForm from "./PoliceForm";
import MedicalForm from "./MedicalForm";
import FireForm from "./FireForm";
import Complains from "./Complains";


const Home = ({username}) => {
  const [policecomplains, setpolicecomplains] = useState([]);
  const [medicalcomplains, setmedicalcomplains] = useState([]);
  const [firecomplains, setfirecomplains] = useState([]);
  const [dislpayPolice, setdislpayPolice] = useState(false);
  const [dislpayMedical, setdislpayMedical] = useState(false);
  const [dislpayFire, setdislpayFire] = useState(false);

  useEffect(() => {
    const getPoliceComplain = async () => {
      const data = await fetch(
        "http://localhost:8000/api/policecomplain"
      ).then((response) => response.json());
      setpolicecomplains(data);
    };
    const getFireComplain = async () => {
      const data = await fetch(
        "http://localhost:8000/api/firecomplain"
      ).then((response) => response.json());
      setfirecomplains(data);
    };
    const getMedicalComplain = async () => {
      const data = await fetch(
        "http://localhost:8000/api/medicalcomplain"
      ).then((response) => response.json());
      setmedicalcomplains(data);
    };
    getPoliceComplain();
    getMedicalComplain();
    getFireComplain();
  }, []);

  const addPoliceComplain = async (complain) => {
    const res = await fetch("http://localhost:8000/api/policecomplain/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complain),
    });
    const data = await res.json();

    setpolicecomplains([...policecomplains, data]);
  };

  const addFireComplain = async (complain) => {
    const res = await fetch("http://localhost:8000/api/firecomplain/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complain),
    });
    const data = await res.json();

    setfirecomplains([...firecomplains, data]);
  };

  const addMedicalComplain = async (complain) => {
    const res = await fetch("http://localhost:8000/api/medicalcomplain/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(complain),
    });
    const data = await res.json();

    setmedicalcomplains([...medicalcomplains, data]);
  };

  return (
    <div>

     <p className='text-start text-success my-3'>How u doin {username}</p>
      <h1>Welcome to VNPS</h1>

      <div className="  text-start">
        <button
          className="m-2 btn btn-outline-info  float-right"
          onClick={(e) => {
            setdislpayPolice(!dislpayPolice);
            setdislpayMedical(false);
            setdislpayFire(false);
          }}
        >
          Police Emergency
        </button>
        <button
          className="m-2 btn btn-outline-danger  float-right"
          onClick={(e) => {
            setdislpayMedical(!dislpayMedical);
            setdislpayPolice(false);
            setdislpayFire(false);
          }}
        >
          Medical Emergency
        </button>
        <button
          className=" m-2 btn btn-outline-warning  float-right"
          onClick={(e) => {
            setdislpayFire(!dislpayFire);
            setdislpayMedical(false);
            setdislpayPolice(false);
          }}
        >
          Fire Emergency
        </button>
      </div>

      {dislpayPolice && <PoliceForm onAdd={addPoliceComplain} />}
      {dislpayMedical && <MedicalForm onAdd={addMedicalComplain} />}
      {dislpayFire && <FireForm onAdd={addFireComplain} />}

      <Complains complains={policecomplains} type={"police"} />
      <Complains complains={firecomplains} type={"fire"} />
      <Complains complains={medicalcomplains} type={"medical"} />
    </div>
  );
};

export default Home;
