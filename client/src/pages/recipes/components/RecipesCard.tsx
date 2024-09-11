import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import { IRecipe } from '../../../types/recipeTyps';
import classes from "../Recipes.module.scss"

interface IRecipesCardProps {
    recipe: IRecipe
}

const RecipesCard = ({recipe}:IRecipesCardProps) => {

  console.log(decodeURIComponent(recipe.image.url))
  
    return (
      <Card withBorder radius="md" p="md" className={classes.card} maw={350}>
        <Card.Section>
          <Image src={decodeURIComponent(recipe.image.url)} alt={recipe.image.alt} height={180} />
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
            <AiFillLike size={25}/>
            <Text fz="lg" fw={400}>
              {recipe.likes.length}
            </Text>
          </Group>
        </Card.Section>
  
        <Group mt="xs">
          <Button radius="md" style={{ flex: 1 }}>
            Show details
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <FaHeart className={classes.like}/>
          </ActionIcon>
        </Group>
      </Card>
    );
}

export default RecipesCard