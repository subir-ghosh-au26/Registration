import React from "react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Progress from "./Progress";




const FinalStep = (props) => {

  const navigate = useNavigate();
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Saved!',
          'You have successfully registered.',
          'success'
        )
        navigate("/");
      }
      else{
        navigate('/final')
      }
    });
  };

  console.log(user)


  return (
    <>
    <Header/>
    <Progress/>
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
    </>
  );
};

export default FinalStep;