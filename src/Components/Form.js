import React from "react";
import "../App.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};


//Submission
const onSubmit = (values) => {
  console.log(values);
};


// Validation
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "* Required";
  }

  if (!values.email) {
    errors.email = "* Required";
  }

  if (!values.password) {
    errors.password = "* Required";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="col form-control">
          <label style={{ marginRight: "10px" }}>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>

          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="col form-control">
          <label style={{ marginRight: "10px" }}>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="col form-control">
          <label style={{ marginRight: "10px" }}>Password</label>
          <input
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="col">
          <button
            style={{ backgroundColor: "green", border: "none" }}
            type="submit"
          >
            Submit
          </button>
        </div>

        <h5>{formik.values.name}</h5>
      </form>
    </div>
  );
};

export default Form;
