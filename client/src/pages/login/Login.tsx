import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  NavLink,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import { NavLink as RouterNavLink } from 'react-router-dom';
import classes from "./Login.module.scss";
import { CONSTS } from '../../consts/consts';

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
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { email: '', password: "" },
    validate: zodResolver(schema),
  });

  const handleSubmit = (values: any) => {
    // form.validate();
    console.log(values);
  };

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
            placeholder="you@mantine.dev"
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
        </Paper>
      </form>
    </Container>
  );
}

export default Login