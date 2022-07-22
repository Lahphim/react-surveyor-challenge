import { FormEvent } from 'react';
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
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { formLoginActions } from '@/reducers/FormLogin';
import { loginUser } from '@/reducers/FormLogin/actions';
import { isFormSubmitting } from '@/reducers/FormLogin/selectors';
import { Login } from '@/types/form';

export const formLoginTestIds = {
  base: 'form-login',
  inputEmail: 'form-login__input-email',
  inputPassword: 'form-login__input-password',
  labelEmail: 'form-login__label-email',
  labelPassword: 'form-login__label-password',
  submit: 'form-login__submit',
};

const validateSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().max(16).required(),
  })
  .required();

const FormLogin = () => {
  const dispatch = useAppDispatch();

  const { errorList: formLoginErrors } = useAppSelector((state) => state.login);
  const isSubmitting = useAppSelector(isFormSubmitting);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>({
    resolver: yupResolver(validateSchema),
  });

  const onSubmit: SubmitHandler<Login> = async (data) => {
    dispatch(loginUser(data));
  };

  const handleChange = (_event: FormEvent) => {
    dispatch(formLoginActions.reset());
  };

  return (
    <>
      <FlashToast
        mt="6"
        title="Error"
        messageList={[
          errors.email?.message || '',
          errors.password?.message || '',
        ].concat(formLoginErrors)}
      />

      <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
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
              isDisabled={isSubmitting}
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
              isDisabled={isSubmitting}
              data-test-id={formLoginTestIds.inputPassword}
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              width="full"
              isLoading={isSubmitting}
              loadingText="Signing in"
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
