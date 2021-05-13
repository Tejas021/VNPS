import { useState } from "react";

const PoliceForm = ({ onAdd }) => {
  const [name, setname] = useState([]);
  const [phone, setphone] = useState([]);
  const [complain, setcomplain] = useState([]);
  const [date, setdate] = useState([]);
  const user=localStorage.getItem('id')
  const onAdd1 = (e) => {
    e.preventDefault();
    console.log(onAdd);

    if (name === "") {
      alert("Please add your name");
      return;
    }
    onAdd({ name, phone, complain, date ,user});
  };

  return (
    <div
      className="container-fluid p-3 border border-info"
      style={{ width: "80%" }}
    >
      <h2 className="m-2 text-center">Police Complain</h2>
      <h5 className="" style={{ textAlign: "left" }}>
        Enter the following info:
      </h5>
      <form className="justify-content-center" onSubmit={onAdd1}>
        <div className="form-row row">
          <div className="form-group col-md-6 m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6 m-2">
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>

          <div className="form-group col-md-6 m-2">
            <input
              type="text"
              min="0"
              max="20"
              className="form-control"
              placeholder="Complain"
              value={complain}
              onChange={(e) => {
                setcomplain(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6 m-2">
            <input
              type="date"
              min="0"
              max="80"
              className="form-control"
              placeholder="Date"
              value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="m-3 btn btn-info">
          Add
        </button>
      </form>
    </div>
  );
};

export default PoliceForm;
