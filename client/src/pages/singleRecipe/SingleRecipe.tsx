import { useParams } from 'react-router-dom';
import { useGetRecipeQuery } from '../../features/recipes/RecipeApi';
import classes from "./SingleRecipe.module.scss";
import { Card, Image, Text, Group, Badge, Container, Paper, RingProgress, Center, rem, Button, Loader } from '@mantine/core';
import { AiFillLike } from "react-icons/ai";
import { RiProgress6Fill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const DIFFICULTY_STATS = {
    "Easy": { progress: 33, color: "green" },
    "Medium": { progress: 66, color: "yellow" },
    "Hard": { progress: 100, color: "red" },
}

const SingleRecipe = () => {
    const {t} = useTranslation();
    const { id } = useParams<{ id: string }>();
    const { data: recipe, isLoading } = useGetRecipeQuery(id || "");
    const user = useSelector((state: RootState) => state.auth.user);
    const isCurrentUserCard = recipe?.recipe.userId === user?._id;

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <Container className={classes.singleRecipeContainer} maw={700} >
            {isLoading ?
                <Loader />
                :
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
                                        {t("SINGLE_RECIPE.DIFFICULTY_LEVEL")}
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
                        {isCurrentUserCard &&
                            <Group gap={5}>
                                <Button color='var(--mantine-color-pink-9)'><FaTrashAlt /></Button>
                                <Button color='var(--mantine-color-blue-9)'><FaRegEdit size={18} /></Button>
                            </Group>
                        }
                    </Card.Section>
                    <Card.Section className={classes.section}>
                        <div className={classes.stats}>
                            <Text size="xs">
                                {t("SINGLE_RECIPE.COOK_TIME")}
                            </Text>
                            <Text fw={'bold'} size="sm">
                                {`${recipe.recipe.cookTime} (min)`}
                            </Text>
                        </div>
                        <div className={classes.stats}>
                            <Text size="xs">
                                {t("SINGLE_RECIPE.PREP_TIME")}
                            </Text>
                            <Text fw={'bold'} size="sm">
                                {`${recipe.recipe.prepTime} (min)`}
                            </Text>
                        </div>
                        <div className={classes.stats}>
                            <Text size="xs">
                                {t("SINGLE_RECIPE.SERVINGS")}
                            </Text>
                            <Text fw={'bold'} size="sm">
                                {`${recipe.recipe.servings} Persons`}
                            </Text>
                        </div>
                    </Card.Section>
                    <Card.Section className={`${classes['section']} ${classes["ingredients"]}`} style={{ justifyContent: "flex-start", gap: "10px", flexWrap: "wrap" }}>
                        {recipe.recipe.ingredients.map((ingredient, index) => (
                            <Badge key={index} color="blue">{`${ingredient.ingredient}: ${ingredient.amount.value}${ingredient.amount.units}`}</Badge>
                        ))}
                    </Card.Section>
                    <Card.Section className={`${classes['section']} ${classes["instructions"]}`} style={{ display: "block" }}>
                        <Text fw={700} td="underline">{t("SINGLE_RECIPE.STEPS")}</Text>
                        {recipe.recipe.instructions.map((instruction, index) => (
                            <Text key={index} tt="capitalize" fs="italic">{`${index + 1}.${instruction}`}</Text>
                        ))}
                    </Card.Section>
                </Card>
            }
        </Container>
    );
}

export default SingleRecipe;