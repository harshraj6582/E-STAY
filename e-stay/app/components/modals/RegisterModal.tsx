// @ts-nocheck
'use client'

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState, useCallback } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import Modal from './Modals';

import userRegisterModal from '@/app/hooks/useRegisterModal';

const RegisterModal = () => {
  const registerModal = userRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: ' ',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div>
        <Modal disabled={isLoading}>
          isOpen={registerModal.isOpen}
          title="Register"
          actionLabel="Continue"
          onClose={registerModal.onClose}
          onSubmit={handleSubmit(onSubmit)}
        </Modal>
      </div>
    </>
  );
};

export default RegisterModal;
