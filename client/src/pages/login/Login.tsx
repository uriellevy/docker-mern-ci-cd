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
import { NavLink as RouterNavLink } from 'react-router-dom';
import classes from "./Login.module.scss";
import { CONSTS } from '../../consts/consts';

const Login = () => {
  const { TITLE, NO_PASSWORD_YET, CREATE_ACCOUNT, SUBMIT_TITLE } = CONSTS.LOGIN;

  return (
    <Container size={550} my={40} className={classes.loginContainer}>
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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          {SUBMIT_TITLE}
        </Button>
      </Paper>
    </Container>
  );
}

export default Login