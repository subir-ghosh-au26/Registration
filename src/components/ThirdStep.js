import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThirdStep = (props) => {
    const navigate = useNavigate();
  const { user } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      Gender: user.Gender,
      Marital_Status: user.Marital_Status,
      Category: user.Category,
      Official_Address: user.Official_Address,
      Residential_Address: user.Residential_Address
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    navigate("/final");

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
          <Form.Label>Gender: </Form.Label>
          <input {...register("Gender", { required: true })} type="radio" value="Male" />Male
      <input {...register("Gender", { required: true })} type="radio" value="Female" />Female
      <input {...register("Gender", { required: true })} type="radio" value="Other" />Other
          {errors.gender && (
            <p className="errorMsg">{errors.gender.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Marital Status: </Form.Label>
          <input {...register("Marital_Status", { required: true })} type="radio" value="Married" />Married
      <input {...register("Marital_Status", { required: true })} type="radio" value="Unmarried" />Unmarried
      <input {...register("Marital_Status", { required: true })} type="radio" value="Divorced" />Divorced
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Category: </Form.Label>
        <select {...register("Category", { required: true })}>
        <option value="SC">Select</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="BC/MBC">BC/MBC</option>
        <option value="EWS">EWS</option>
        <option value="GENERAL">GENERAL</option>
      </select>

        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Official Address</Form.Label><br/>
          <textarea {...register("Official_Address", {required: true, maxLength: 1000})} />
          {errors.Official_Address && (
            <p className="errorMsg">{errors.Official_Address.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="first_name">
          <Form.Label>Residential Address</Form.Label><br/>
          <textarea {...register("Residential_Address", {required: true, maxLength: 1000})} />
          {errors.Residential_Address && (
            <p className="errorMsg">{errors.Residential_Address.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default ThirdStep;
