import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";


const FinalStep = (props) => {
  const { user } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
        photo: user.photo,
        sign: user.sign
      
    }
  });

  const onSubmit = (data) => {
    props.updateUser(data);


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
          <Form.Label>Photograph</Form.Label>
          <Form.Control
            type="file"
            name="photo"
            {...register("photo", {
              required: "Photograph is required.",
            })}
            className={`${errors.photo ? "input-error" : ""}`}
          />
          {errors.photo && (
            <p className="errorMsg">{errors.photo.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="first_name">
          <Form.Label>Signature</Form.Label>
          <Form.Control
            type="file"
            name="sign"
            {...register("sign", {
              required: "Signature is required.",
            })}
            className={`${errors.sign ? "input-error" : ""}`}
          />
          {errors.sign && (
            <p className="errorMsg">{errors.sign.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </motion.div>
    </Form>
  );
};

export default FinalStep;