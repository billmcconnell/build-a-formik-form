import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) =>{
      alert('Login Successful');
    },
    validate: (values) =>{
      let errors = {};
      if(!values.email) errors.email = "Field required";
      if(!values.password) errors.password = "Field required";
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>email</div>
        <input
          id="emailField"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{color: 'red'}}>
            {formik.errors.email}</div>
        ): null}
        <div>password</div>
        <input
          id="pwsField"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pwsError" style={{color: 'red'}}>
            {formik.errors.password}
          </div>
        ): null}
        <button id='submitBtn' type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;