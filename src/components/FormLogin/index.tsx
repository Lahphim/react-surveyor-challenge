import { useForm, SubmitHandler } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import FlashToast from '@/components/FlashToast';

export const formLoginTestIds = {
  base: 'form-login',
  inputEmail: 'form-login__input-email',
  inputPassword: 'form-login__input-password',
  labelEmail: 'form-login__label-email',
  labelPassword: 'form-login__label-password',
  submit: 'form-login__submit',
};

interface FormInput {
  email: string;
  password: string;
}

const validateSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(validateSchema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <>
      <FlashToast
        mt="6"
        title="Error"
        messageList={[
          errors.email?.message || '',
          errors.password?.message || '',
        ]}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid mt="8" spacing="6" data-test-id={formLoginTestIds.base}>
          <FormControl>
            <FormLabel
              htmlFor="email"
              data-test-id={formLoginTestIds.labelEmail}
            >
              Email
            </FormLabel>
            <Input
              {...register('email')}
              id="email"
              data-test-id={formLoginTestIds.inputEmail}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              htmlFor="password"
              data-test-id={formLoginTestIds.labelPassword}
            >
              Password
            </FormLabel>
            <Input
              {...register('password')}
              id="password"
              type="password"
              data-test-id={formLoginTestIds.inputPassword}
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              width="full"
              data-test-id={formLoginTestIds.submit}
            >
              Sign in
            </Button>
          </FormControl>
        </SimpleGrid>
      </form>
    </>
  );
};

export default FormLogin;
