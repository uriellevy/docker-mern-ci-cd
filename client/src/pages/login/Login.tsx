import { TextInput, PasswordInput, Anchor, Paper, Title, Text, Container, Button, NavLink, } from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import classes from "./Login.module.scss";
import { CONSTS } from '../../consts/consts';
import { useGoogleLoginUserMutation, useLoginUserMutation } from '../../features/users/UserApi';
import { notifications } from '@mantine/notifications';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../features/users/authSlice';
import Cookies from 'js-cookie';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one symbol" }),
});

const Login = () => {
  const { TITLE, NO_PASSWORD_YET, CREATE_ACCOUNT, SUBMIT_TITLE } = CONSTS.LOGIN;
  const [loginUser/* , { isLoading, isError, isSuccess } */] = useLoginUserMutation();
  const [googleLoginUser/* , { isLoading, isError, isSuccess } */] = useGoogleLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { email: '', password: "" },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: any) => {
    form.validate();

    try {
      const res = await loginUser(values);
      // @ts-ignore
      if (!res.error) {
        const authToken = Cookies.get('authToken');
        authToken && dispatch(setAuthToken(authToken));
        navigate("/recipes");
      }
      notifications.show({
        // @ts-ignore
        title: res.data ? res.data.message : res.error.data.message,
        message: '',
        color: res.error ? "red" : "green",
      })
    } catch (error) {
      console.error(error)
    }
  };

  // const onGoogleLoginSubmit = async (credentialResponse: CredentialResponse) => {
  //   console.log(credentialResponse);  // Check if the response is valid
  //   try {
  //     const res = await fetch('http://localhost:8080/api/users/google-auth', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         credential: credentialResponse.credential,
  //         client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error with Google login:', error);
  //   }
  // }
  const onGoogleLoginSubmit = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse)
    try {
     const res = await googleLoginUser({ credential: credentialResponse.credential, client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID });
      // @ts-ignore
      if (!res.error) {
        const authToken = Cookies.get('authToken');
        authToken && dispatch(setAuthToken(authToken));
        navigate("/recipes");
      }
    } catch (error) {
      console.error('Error with Google login:', error);
    }
  }

  return (
    <Container size={550} my={40} className={classes.loginContainer}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Title ta="center" className={classes.title}>
          {TITLE}
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          {NO_PASSWORD_YET}
          <Anchor size="sm" component="button">
            <NavLink
              className={classes.createAccount}
              to="/signup"
              label={CREATE_ACCOUNT}
              c="dimmed" ta="center" color='' mt={5}
              component={RouterNavLink}
            />
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@gmail.com"
            {...form.getInputProps('email')}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
            required
            mt="md"
          />
          <Button type='submit' fullWidth mt="xl">
            {SUBMIT_TITLE}
          </Button>
          <GoogleLogin
            onSuccess={onGoogleLoginSubmit}
          />
        </Paper>
      </form>
    </Container>
  );
}

export default Login