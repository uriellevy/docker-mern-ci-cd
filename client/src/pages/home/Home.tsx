import { Container, Grid, Skeleton } from '@mantine/core'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const child = <Skeleton height={140} radius="md" animate={true} />

const Home = () => {
  const recipes = useSelector((state: RootState) => state.recipes)
  // const [authToken, setAuthToken] = useState("");
  // console.log(authToken)

  // useEffect(() => {
  //   const token = Cookies.get('authToken');
  //   if (token) {
  //     setAuthToken(token);
  //   }
  // }, []);

  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home