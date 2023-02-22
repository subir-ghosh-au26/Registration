import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FirstStep = (props) => {
  const navigate = useNavigate();
  const { user } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      emobile: user.emobile,
      department: user.department
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    navigate("/second");
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            {...register("name", {
              required: "Name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Name should contain only characters."
              }
            })}
            className={`${errors.name ? "input-error" : ""}`}
          />
          {errors.name && (
            <p className="errorMsg">{errors.name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("email", {
              required: "Email name is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })}
            className={`${errors.email ? "input-error" : ""}`}
          />
          {errors.email && (
            <p className="errorMsg">{errors.email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="number"
            name="mobile"
            placeholder="Enter your mobile no"
            autoComplete="off"
            {...register("mobile", {
              required: "Mobile No is required.",
            })}
            className={`${errors.mobile ? "input-error" : ""}`}
          />
          {errors.mobile && (
            <p className="errorMsg">{errors.mobile.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Emergency Contact No</Form.Label>
          <Form.Control
            type="number"
            name="emobile"
            placeholder="Enter your emergency contact no"
            autoComplete="off"
            {...register("emobile", {
              required: "Mobile No is required.",
            })}
            className={`${errors.emobile ? "input-error" : ""}`}
          />
          {errors.emobile && (
            <p className="errorMsg">{errors.emobile.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            placeholder="Enter your department"
            autoComplete="off"
            {...register("department", {
              required: "Department is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Please enter valid department."
              }
            })}
            className={`${errors.department ? "input-error" : ""}`}
          />
          {errors.department && (
            <p className="errorMsg">{errors.department.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </motion.div>
    </Form>
  );
};

export default FirstStep;