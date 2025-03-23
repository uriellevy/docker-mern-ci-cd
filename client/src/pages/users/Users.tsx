import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Loader } from '@mantine/core';
import classes from './Users.module.scss';
import { useGetUsersQuery } from '../../features/users/UserApi';

const Users = () => {
  const { data, isLoading } = useGetUsersQuery();

  const [selection, setSelection] = useState(['1']);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((user) => user !== id) : [...current, id]
    );

  if (isLoading) return <Loader color="blue" size="xl" />

  const rows = data?.users.map((user) => {
    const selected = selection.includes(user._id);
    return (
      <Table.Tr key={user._id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(user._id)} onChange={() => toggleRow(user._id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={user.image.url} radius={26} />
            <Text size="sm" fw={500}>
              {`${user.name.first} ${user.name.last}`}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{user.email}</Table.Td>
        <Table.Td>{user.email}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                checked={selection.length === data?.users.length}
                indeterminate={selection.length > 0 && selection.length !== data?.users.length}
              />
            </Table.Th>
            <Table.Th>User</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

export default Users