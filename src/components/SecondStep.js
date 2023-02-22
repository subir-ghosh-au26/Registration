import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SecondStep = (props) => {
    const navigate = useNavigate();
  const { user } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      designation: user.designation,
      dob: user.dob,
      doj: user.doj,
      salary: user.salary,
      gpay: user.gpay
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    navigate("/third");

  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Form.Group controlId="first_name">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            name="designation"
            placeholder="Enter your designation"
            autoComplete="off"
            {...register("designation", {
              required: "Designation is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Designation should contain only characters."
              }
            })}
            className={`${errors.designation ? "input-error" : ""}`}
          />
          {errors.designation && (
            <p className="errorMsg">{errors.designation.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Date of Joining</Form.Label>
          <Form.Control
            type="date"
            name="doj"
            autoComplete="off"
            {...register("doj", {
              required: "DOJ is required.",
            })}
            className={`${errors.doj ? "input-error" : ""}`}
          />
          {errors.doj && (
            <p className="errorMsg">{errors.doj.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            name="salary"
            placeholder="Enter your Salary"
            autoComplete="off"
            {...register("salary", {
              required: "Salary is required.",
            })}
            className={`${errors.salary ? "input-error" : ""}`}
          />
          {errors.salary && (
            <p className="errorMsg">{errors.salary.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Grade Pay</Form.Label>
          <Form.Control
            type="number"
            name="gpay"
            placeholder="Enter your Grade pay"
            autoComplete="off"
            {...register("gpay", {
              required: "Grade Pay is required.",
            })}
            className={`${errors.gpay ? "input-error" : ""}`}
          />
          {errors.gpay && (
            <p className="errorMsg">{errors.gpay.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="first_name">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            autoComplete="off"
            {...register("dob", {
              required: "DOB is required.",
            })}
            className={`${errors.dob ? "input-error" : ""}`}
          />
          {errors.dob && (
            <p className="errorMsg">{errors.dob.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default SecondStep;
