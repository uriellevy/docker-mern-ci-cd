import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaPepperHot } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";
import { Card, Image, Text, Group, Badge, Button, ActionIcon, NavLink } from '@mantine/core';
import { IRecipe } from '../../../types/recipeTyps';
import classes from "../Recipes.module.scss"
import { CONSTS } from "../../../consts/consts";
import { NavLink as RouterNavLink } from 'react-router-dom';

interface IRecipesCardProps {
  recipe: IRecipe
}

const RecipesCard = ({ recipe }: IRecipesCardProps) => {
  const { SHOW_DETAILS, VEGAN_LABEL } = CONSTS.RECIPES;

  const recipeLevelIcons = Array.from({ length: +recipe.spicyLevel }, (_, i) => (
    <FaPepperHot key={i} size={15} color="#833030" />
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card} maw={350}>
      <Card.Section>
        <Image src={recipe.image.url} alt={recipe.image.alt} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {recipe.name}
          </Text>
          <Badge size="sm" variant="light">
            {recipe.cuisine}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {recipe.difficulty}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group gap={5}>
          <AiFillLike size={25} />
          <Text fz="lg" fw={400}>
            {recipe.likes.length}
          </Text>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group gap={5}>
          {recipe.isVegan && <Badge size="lg" variant="light" className={classes.badge} key={"Vegan"} leftSection={<LuVegan size={15} color="green" /> }>
            {VEGAN_LABEL}
          </Badge>}
          {+recipe.spicyLevel && <Badge size="lg" variant="light" className={classes.badge} key={"SpicyLevel"} leftSection={recipeLevelIcons}/>}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>

          <NavLink
            to={`/recipes/${recipe._id}`}
            label={SHOW_DETAILS}
            component={RouterNavLink}
            onClick={close}
          />
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <FaHeart className={classes.like} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default RecipesCard