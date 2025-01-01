import { UnstyledButton, Group, Avatar, Text, Loader } from '@mantine/core';
import classes from './UserButton.module.scss';
import { UserPayload } from '../../features/users/authSlice';
import { useGetUsersByIdQuery } from '../../features/users/UserApi';

interface UserButtonProps {
  user: UserPayload
}

export function UserButton({ user }: UserButtonProps) {
  const { data: userData, isLoading } = useGetUsersByIdQuery(user._id);

  return (
    <UnstyledButton className={classes.user}>
      {isLoading ? <Loader color="blue" size="xl" />
        :
        <Group>
          <Avatar
            src={userData?.user.image.url}
            radius="xl"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {`${userData?.user.name.first} ${userData?.user.name.last}`}
            </Text>
            <Text c="dimmed" size="xs">
              {userData?.user.email}
            </Text>
          </div>
        </Group>
      }
    </UnstyledButton>
  );
}