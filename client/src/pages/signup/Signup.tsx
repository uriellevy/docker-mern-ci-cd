import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
  SimpleGrid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import classes from "./Signup.module.scss";
import { useCreateUserMutation } from '../../features/users/UserApi';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useTranslation } from 'react-i18next';

const schema = z.object({
  name: z.object({
    first: z
      .string()
      .min(2, { message: 'Name should have at least 2 letters' }),
    last: z
      .string()
      .min(2, { message: 'Name should have at least 2 letters' }),
  }),
  image: z.object({
    url: z.string().url({ message: "Url should be valid" }),
    alt: z.string().min(2, { message: "Image alt should have at least 2 letters" }),
  }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one symbol" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Specify the path for the error message
});

const Signup = () => {
  const { t } = useTranslation();
  const [createUser/* , { isLoading, isError, isSuccess } */] = useCreateUserMutation();
  const navigate = useNavigate();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: { firstName: "", last: "" }, image: { url: "", alt: "" }, email: '', password: "", confirmPassword: "" },
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: any) => {
    form.validate();

    try {
      const res = await createUser(values);
      if (!res.error) {
        navigate("/login");
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

  return (
    <Container size={550} my={40} className={classes.loginContainer}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Title ta="center" className={classes.title}>
          {t("SIGNUP.TITLE")}
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="First Name"
              placeholder="Your first name"
              name="first"
              variant="filled"
              required
              {...form.getInputProps('name.first')}
            />
            <TextInput
              label="Last Name"
              placeholder="Your last name"
              name="last"
              variant="filled"
              required
              {...form.getInputProps('name.last')}
            />
          </SimpleGrid>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Image Url"
              placeholder="Enter url"
              name="url"
              variant="filled"
              required
              {...form.getInputProps('image.url')}
            />
            <TextInput
              label="Image Alt"
              placeholder="Enter image name"
              name="alt"
              variant="filled"
              required
              {...form.getInputProps('image.alt')}
            />
          </SimpleGrid>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            required
            mt="md"
            {...form.getInputProps('confirmPassword')}
          />
          <Button type="submit" fullWidth mt="xl">
            {t("SIGNUP.SUBMIT_TITLE")}
          </Button>
        </Paper>
      </form>
    </Container>
  );
}

export default Signup