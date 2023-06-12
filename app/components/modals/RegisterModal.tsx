"use client";

import React, { useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "@/app/hooks/useRegisterMode";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import Button from "../Button";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
  const registerlModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  
    

    
    axios
      
      .post("/api/register", data)
      .then(() => {
        registerlModal.onClose();
      })
      .catch((err) =>  {
        console.log(err);

        toast.error("Somehing went wrong ");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airb" subtitle="Create an account" />
      <Input
        register={register}
        id="email"
        label="Email"
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        register={register}
        id="name"
        label="Name"
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        register={register}
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={()=>{signIn('github')}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div>
          <div className="flex flex-row items-center gap-2 justify-center">
            Already have an account
          </div>
          <div className="text-neutral-800 cursor-pointer hover:underline" onClick={registerlModal.onClose}>
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerlModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerlModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
