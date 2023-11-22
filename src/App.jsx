import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if(values.firstName && values.lastName && values.email) setValid(true)
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };
  return (
    <>
      <div
        className="container px-5 py-5"
        style={{ background: "#79b453", borderRadius: "10px" }}
      >
        {submitted && valid ? (
          <div
            id="alertMsg"
            className="alert alert-primary"
            role="alert"
          >
            Success Registration Successfull !
          </div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onChange={(event) => {
                setValues({ ...values, firstName: event.target.value });
              }}
              value={values.firstName}
              placeholder="First Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {submitted && !values.firstName ? <div
              id="firstWarning"
              className="form-text"
              style={{ color: "red" }}
            >First name required</div>: null}
          </div>
          <div className="mb-3">
            <input
              onChange={(event) => {
                setValues({ ...values, lastName: event.target.value });
              }}
              value={values.lastName}
              placeholder="Last Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="false"
            />
            {submitted && !values.lastName ? <div
              id="secondWarning"
              className="form-text"
              style={{ color: "red" }}
            >Last name required</div>: null}
          </div>
          <div className="mb-3">
            <input
              onChange={(event) => {
                setValues({ ...values, email: event.target.value });
              }}
              value={values.email}
              placeholder="Email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              autoComplete="off"
            />
            {submitted && !values.email ? <div
              id="thirdWarning"
              className="form-text"
              style={{ color: "red" }}
            >Email required</div>:null}
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
