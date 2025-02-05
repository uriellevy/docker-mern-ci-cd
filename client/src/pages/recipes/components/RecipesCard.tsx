import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaPepperHot } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";
import { Card, Image, Text, Group, Badge, Button, ActionIcon, NavLink } from '@mantine/core';
import { IRecipe } from '../../../types/recipeTyps';
import classes from "../Recipes.module.scss"
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useToggleRecipeLikeMutation } from "../../../features/recipes/RecipeApi";
import { useTranslation } from "react-i18next";

interface IRecipesCardProps {
  recipe: IRecipe
}

const RecipesCard = ({ recipe }: IRecipesCardProps) => {
  const { t } = useTranslation();
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const [toggleRecipeLike] = useToggleRecipeLikeMutation();
  const isCardLiked = token && user && recipe.likes.includes(user._id);

  const recipeLevelIcons = Array.from({ length: +recipe.spicyLevel }, (_, i) => (
    <FaPepperHot key={i} size={15} color="#833030" />
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card} maw={350} style={{ height: 460, justifyContent: "space-between" }}>
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
      {token &&
        <Card.Section className={classes.section} mt="md">
          <Group gap={5}>
            <AiFillLike size={25} />
            <Text fz="lg" fw={400}>
              {recipe.likes.length}
            </Text>
          </Group>
        </Card.Section>}

      <Card.Section className={classes.section} mt="md">
        <Group gap={5}>
          {recipe.isVegan && <Badge size="lg" variant="light" className={classes.badge} key={"Vegan"} leftSection={<LuVegan size={15} color="green" />}>
            {t("RECIPES.VEGAN_LABEL")}
          </Badge>}
          {+recipe.spicyLevel && <Badge size="lg" variant="light" className={classes.badge} key={"SpicyLevel"} leftSection={recipeLevelIcons} />}
        </Group>
      </Card.Section>
      {token &&
        <Group mt="xs">
          <Button radius="md" style={{ flex: 1 }}>
            <NavLink
            className="nav-link"
              to={`/recipes/${recipe._id}`}
              label={t("RECIPES.SHOW_DETAILS")}
              component={RouterNavLink}
              onClick={close}
              styles={{
                root: {
                  backgroundColor: "transparent",
                },
              }}
            />
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <FaHeart
              className={classes.like}
              onClick={() => toggleRecipeLike(recipe._id)}
              color={`${isCardLiked ? "rgb(131, 48, 48)" : "grey"}`} />
          </ActionIcon>
        </Group>
      }
    </Card>
  );
}

export default RecipesCard