import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  SimpleGrid,
} from '@mantine/core';
import { CONSTS } from '../../consts/consts';
import classes from "./Signup.module.scss";

const Signup = () => {
  const { TITLE, SUBMIT_TITLE } = CONSTS.SIGNUP;

  return (
    <Container size={550} my={40} className={classes.loginContainer}>
      <Title ta="center" className={classes.title}>
        {TITLE}
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="First Name"
            placeholder="Your first name"
            name="firstName"
            variant="filled"
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Your last name"
            name="lastName"
            variant="filled"
            required
          />
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Image Url"
            placeholder="Enter url"
            name="url"
            variant="filled"
            required
          />
          <TextInput
            label="Image Alt"
            placeholder="Enter image name"
            name="alt"
            variant="filled"
            required
          />
        </SimpleGrid>
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          {SUBMIT_TITLE}
        </Button>
      </Paper>
    </Container>
  );
}

export default Signup