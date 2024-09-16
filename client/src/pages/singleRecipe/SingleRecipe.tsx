import { useParams } from 'react-router-dom';
import { useGetRecipeQuery } from '../../features/recipes/RecipeApi';
import classes from "./SingleRecipe.module.scss";
import { Card, Image, Text, Group, Badge, Button, ActionIcon, NavLink, Container, Paper, RingProgress, Center, rem } from '@mantine/core';
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { RiProgress6Fill } from "react-icons/ri";
import { CONSTS } from '../../consts/consts';

const DIFFICULTY_STATS = {
    "Easy": {progress: 33, color: "green"},
    "Medium": {progress: 66, color: "yellow"},
    "Hard": {progress: 100, color: "red"},
}

const SingleRecipe = () => {
    const { id } = useParams<{ id: string }>();
    const { data: recipe, error, isLoading } = useGetRecipeQuery(id || "");
    const { PREP_TIME, COOK_TIME, SERVINGS, DIFFICULTY_LEVEL } = CONSTS.SINGLE_RECIPE;


    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while fetching
    }

    if (error) {
        return <div>Error loading recipe</div>; // Show an error message if something goes wrong
    }

    if (!recipe) {
        return <div>Recipe not found</div>; // Handle the case where the recipe is not found
    }

    return (
        <Container className={classes.singleRecipeContainer} maw={700} >
            <Card withBorder radius="md" p="md" className={classes.cardWrapper}>
                <Card.Section>
                    <Image src={recipe.recipe.image.url} alt={recipe.recipe.image.alt} height={300} />
                </Card.Section>
                <Card.Section className={classes.section} mt="md">
                    <Group justify="apart">
                        <Text fz="lg" fw={500}>
                            {recipe.recipe.name}
                        </Text>
                        <Badge size="sm" variant="light">
                            {recipe.recipe.cuisine}
                        </Badge>
                    </Group>
                    <Paper withBorder radius="md" p="xs">
                        <Group>
                            <RingProgress
                                size={80}
                                roundCaps
                                thickness={8}
                                sections={[{ value: DIFFICULTY_STATS[recipe.recipe.difficulty].progress, color: DIFFICULTY_STATS[recipe.recipe.difficulty].color }]}
                                label={
                                    <Center>
                                        <RiProgress6Fill style={{ width: rem(20), height: rem(20) }} />
                                    </Center>
                                }
                            />
                            <div>
                                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                                    {DIFFICULTY_LEVEL}
                                </Text>
                                <Text fw={700} size="xl">
                                    {recipe.recipe.difficulty}
                                </Text>
                            </div>
                        </Group>
                    </Paper>
                </Card.Section>

                <Card.Section className={classes.section} mt="md">
                    <Group gap={5}>
                        <AiFillLike size={25} />
                        <Text fz="lg" fw={400}>
                            {recipe.recipe.likes.length}
                        </Text>
                    </Group>
                </Card.Section>
                <Card.Section className={classes.section}>
                    <div className={classes.stats}>
                        <Text size="xs">
                            {COOK_TIME}
                        </Text>
                        <Text fw={'bold'} size="sm">
                            {`${recipe.recipe.cookTime} (min)`}
                        </Text>
                    </div>
                    <div className={classes.stats}>
                        <Text size="xs">
                            {PREP_TIME}
                        </Text>
                        <Text fw={'bold'} size="sm">
                            {`${recipe.recipe.prepTime} (min)`}
                        </Text>
                    </div>
                    <div className={classes.stats}>
                        <Text size="xs">
                            {SERVINGS}
                        </Text>
                        <Text fw={'bold'} size="sm">
                            {`${recipe.recipe.servings} Persons`}
                        </Text>
                    </div>
                </Card.Section>
            </Card>
        </Container>
    );
}

export default SingleRecipe