import { useFormik } from "formik";
import InputFeild from "../input/InputFeild";
import { useEffect } from "react";
import * as Yup from "yup";

const FormikForm = ({ formId, setOpen, initialValue = "", dispatch }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "Invalid email address"
      ),
  });

  const { handleSubmit, handleChange, values, setValues, errors, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      validationSchema,
      onSubmit: (values) => {
        if (initialValue) {
          dispatch({ type: "EDIT_STUDENT", payload: values });
        } else {
          dispatch({ type: "ADD_STUDENT", payload: values });
        }
        setOpen(false);
        resetForm();
      },
    });

  useEffect(() => {
    if (initialValue) {
      setValues({ ...initialValue });
    }
  }, [initialValue]);

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <InputFeild
          label="Name:"
          PropsValue={{
            id: "name",
            size: "small",
            error:errors.name,
            helperText:errors.name,
            name: "name",
            value: values.name,
            onChange: handleChange,
          }}
        />

        <InputFeild
          label="Email:"
          PropsValue={{
            id: "email",
            size: "small",
            error:errors.email,
            helperText:errors.email,
            name: "email",
            value: values.email,
            onChange: handleChange,
          }}
        />
      </form>
    </>
  );
};

export default FormikForm;
