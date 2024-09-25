import {
    TextInput,
    Paper,
    Title,
    Container,
    Button,
    SimpleGrid,
    NumberInput,
    Select,
    Group,
    ActionIcon,
    Switch,
    Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';
import classes from "./NewRecipe.module.scss";
import { CONSTS } from '../../consts/consts';
import { MdDelete } from "react-icons/md";
import { useCreateRecipeMutation } from '../../features/recipes/RecipeApi';
import { SpicyLevel } from '../../types/recipeTyps';
import { notifications } from '@mantine/notifications';

const spicyLevelOptions = [
    { value: SpicyLevel.None, label: "None" },
    { value: SpicyLevel.A_little_Spicy, label: "A little Spicy" },
    { value: SpicyLevel.Spicy, label: "Spicy" },
    { value: SpicyLevel.Hot, label: "Hot" },
    { value: SpicyLevel.Very_Hot, label: "Very Hot" },
    { value: SpicyLevel.Extremely_Hot, label: "Extremely Hot" },
];

const schema = z.object({
    name: z.string().min(2, { message: 'Min 2 letters required' }),
    cuisine: z.string().min(2, { message: 'Min 2 letters required' }),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    prepTime: z.number().min(0, { message: 'Prep time must be at least 0' }),
    cookTime: z.number().min(0, { message: 'Cook time must be at least 0' }),
    servings: z.number().min(1, { message: 'Servings must be at least 1' }),
    image: z.object({
        alt: z.string().min(1, { message: 'Image description is required' }),
        url: z.string().url({ message: 'Invalid URL' }),
    }),
    ingredients: z.array(
        z.object({
            amount: z.object({
                value: z.number().min(1, { message: 'Amount must be at least 1' }),
                units: z.string().min(1, { message: 'Units are required' }),
            }),
            ingredient: z.string().min(1, { message: 'Ingredient is required' }),
        })
    ),
    instructions: z.array(z.string().min(1, { message: 'Instruction step is required' })),
});

const NewRecipe = () => {
    const { TITLE, SUBMIT_TITLE } = CONSTS.NEW_RECIPE;
    const [createRecipe/* , { isLoading, isError, isSuccess } */] = useCreateRecipeMutation();
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            ingredients: [],
            instructions: [],
            image: {
                alt: '',
                url: '',
            },
            prepTime: 0,
            cookTime: 0,
            servings: 0,
            cuisine: '',
            difficulty: '',
        },
        validate: zodResolver(schema),
    });


    const addIngredient = () => {
        form.insertListItem('ingredients', { amount: { value: 1, units: '' }, ingredient: '' });
    };

    const removeIngredient = () => {
        form.removeListItem('ingredients', form.getValues().ingredients.length - 1);
    };

    const addStep = () => {
        form.insertListItem('instructions', '');
    };

    const removeStep = () => {
        form.removeListItem('instructions', form.getValues().instructions.length - 1);
    };

    const handleSubmit = async (values: any) => {
        // console.log(values)
        try {
            await createRecipe(values).unwrap();
            notifications.show({
                title: 'Default notification',
                message: 'Do not forget to star Mantine on GitHub! 🌟',
            })
        } catch (error) {
            console.error('Failed to create recipe:', error);
        }
    };

    return (
        <Container size={750} my={40} className={classes.newRecipeContainer}>
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <Title ta="center" className={classes.title}>
                    {TITLE}
                </Title>

                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
                        <TextInput
                            label="Recipe Name"
                            placeholder="Enter Recipe Name"
                            name='name'
                            {...form.getInputProps('name')}
                            required
                        />
                        <TextInput
                            label="Cuisine"
                            placeholder="Enter Cuisine"
                            name='cuisine'
                            {...form.getInputProps('cuisine')}
                            required
                        />
                        <Select
                            comboboxProps={{ withinPortal: true }}
                            data={['Easy', 'Medium', 'Hard']}
                            placeholder="Recipe difficulty"
                            label="Diffuculty"
                            defaultValue="Easy"
                            {...form.getInputProps('difficulty')}
                        />
                    </SimpleGrid>
                    <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
                        <NumberInput
                            label="Prep Time (minutes)"
                            placeholder="Enter Prep Time"
                            name="prepTime"
                            variant="filled"
                            {...form.getInputProps('prepTime')}
                            required
                        />
                        <NumberInput
                            label="Cook Time (minutes)"
                            placeholder="Enter Cook Time"
                            name="cookTime"
                            variant="filled"
                            {...form.getInputProps('cookTime')}
                            required
                        />
                        <NumberInput
                            label="Servings"
                            placeholder="Enter Servings number"
                            name="servings"
                            variant="filled"
                            {...form.getInputProps('servings')}
                            required
                        />
                    </SimpleGrid>
                    <SimpleGrid cols={{ base: 1, sm: 3 }} mt="xl">
                        <TextInput
                            label="Image url"
                            placeholder="Enter Image URL"
                            name="url"
                            variant="filled"
                            {...form.getInputProps('image.url')}
                            required
                        />
                        <TextInput
                            label="Image description"
                            placeholder="Enter Image description"
                            name="alt"
                            variant="filled"
                            {...form.getInputProps('image.alt')}
                            required
                        />
                        <Select
                            comboboxProps={{ withinPortal: true }}
                            data={spicyLevelOptions.map(option => ({ value: option.value.toString(), label: option.label }))}
                            placeholder="Spicy Level"
                            label="Spicy Level"
                            defaultValue="None"
                            {...form.getInputProps('spicyLevel')}
                        />
                    </SimpleGrid>
                    <SimpleGrid cols={{ base: 1, sm: 1 }} mt="xl">
                        <Switch
                            label="Vegan"
                            {...form.getInputProps('isVegan')}
                        />
                    </SimpleGrid>

                    <Stack>
                        <Title order={4} mt="xl">
                            Ingredients
                        </Title>
                        {form.values.ingredients.map((_, index) => (
                            <Group key={index} mt="xs" align="center" >
                                <NumberInput
                                    label="Amount"
                                    placeholder="Value"
                                    {...form.getInputProps(`ingredients.${index}.amount.value`)}
                                    required
                                />
                                <TextInput
                                    label="Units"
                                    placeholder="Units"
                                    {...form.getInputProps(`ingredients.${index}.amount.units`)}
                                    required
                                />
                                <TextInput
                                    label="Ingredient"
                                    placeholder="Ingredient Name"
                                    {...form.getInputProps(`ingredients.${index}.ingredient`)}
                                    required
                                />
                            </Group>
                        ))}

                        <Group gap={10} className={classes.btnWrapper}>
                            <Button
                                variant="outline"
                                onClick={addIngredient}
                            >
                                Add Ingredient
                            </Button>
                            <ActionIcon
                                color="red"
                                onClick={removeIngredient}
                                variant="light"
                                size="lg"
                                disabled={form.values.ingredients.length === 1}
                            >
                                <MdDelete />
                            </ActionIcon>
                        </Group>
                    </Stack>

                    <Stack>
                        <Title order={4} mt="xl">
                            Instructions
                        </Title>
                        {form.values.instructions.map((_, index) => (
                            <Stack key={index} mt="xs" align="flex-start">
                                <TextInput
                                    label="Step"
                                    placeholder="Step"
                                    {...form.getInputProps(`instructions.${index}`)}
                                    required
                                />
                            </Stack>
                        ))}

                        <Group gap={10}>
                            <Button
                                variant="outline"
                                onClick={addStep}
                            >
                                Add Step
                            </Button>
                            <ActionIcon
                                color="red"
                                onClick={removeStep}
                                variant="light"
                                size="lg"
                                disabled={form.values.instructions.length === 1}
                            >
                                <MdDelete />
                            </ActionIcon>
                        </Group>
                    </Stack>

                    <Button type='submit' fullWidth mt="xl">
                        {SUBMIT_TITLE}
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}

export default NewRecipe