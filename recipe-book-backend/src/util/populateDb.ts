import { Connection, createConnection, getRepository } from "typeorm";
import {
  Ingredient,
  Recipe,
  RecipeIngredient,
  ShoppingList,
  User,
} from "../entities";

const ormConfig = require("../config/ormConfig");

interface UserDto {
  firstName: string;
  lastName: string;
  age: number;
}

interface RecipeIngredientDto {
  name: string;
  amount: number;
}

interface RecipeDto {
  name: string;
  description?: string;
  authorId: number;
  ingredients: RecipeIngredientDto[];
}

async function createUsers() {
  const dummyUsers: UserDto[] = [
    { firstName: "John", lastName: "Doe", age: 44 },
    { firstName: "Jane", lastName: "Doe", age: 34 },
    { firstName: "Aria", lastName: "Stark", age: 21 },
  ];

  const userRepository = getRepository(User);
  const shoppingListRepository = getRepository(ShoppingList);

  for (const dummyUser of dummyUsers) {
    let user = await userRepository.create(dummyUser);
    await userRepository.save(user);

    let shoppingList = new ShoppingList();
    shoppingList.user = user;
    await shoppingListRepository.save(shoppingList);
  }
}

async function createIngredient(name: string): Promise<Ingredient> {
  const ingredientRepository = getRepository(Ingredient);
  let ingredient = await ingredientRepository.findOne({ name });
  if (!ingredient) {
    ingredient = await ingredientRepository.create({ name });
    await ingredientRepository.save(ingredient);
  }
  return ingredient;
}

async function createRecipeIngredient(
  recipe: Recipe,
  ingredient: Ingredient,
  amount: number,
) {
  const recipeIngredientRepository = getRepository(RecipeIngredient);

  // connect recipe with ingredient
  let recipeIngredient = await recipeIngredientRepository.findOne({
    recipe,
    ingredient,
  });

  if (recipeIngredient) {
    recipeIngredient.amount += amount;
  } else {
    recipeIngredient = await recipeIngredientRepository.create({
      recipe,
      ingredient,
      amount,
    });
  }

  return await recipeIngredientRepository.save(recipeIngredient);
}

async function createRecipes() {
  const dummyRecipes: RecipeDto[] = [
    {
      name: "Schnitzel",
      description: "A huge and tasty schnitzel with fries.",
      authorId: 1,
      ingredients: [
        { name: "meat", amount: 1 },
        { name: "fries", amount: 25 },
        { name: "tomato", amount: 2 },
      ],
    },
    {
      name: "Fries",
      description: "Fries with salt - we all love them!",
      authorId: 1,
      ingredients: [{ name: "fries", amount: 100 }],
    },
    {
      name: "Pizza",
      description: "Traditional Italian pizza.",
      authorId: 2,
      ingredients: [
        { name: "base", amount: 1 },
        { name: "tomato", amount: 5 },
        { name: "mozzarella", amount: 1 },
        { name: "green olive", amount: 10 },
      ],
    },
  ];

  const recipeRepository = getRepository(Recipe);
  for (const { name, description, authorId, ingredients } of dummyRecipes) {
    let userRepository = await getRepository(User);
    let author = await userRepository.findOne({ id: authorId });
    let recipe = await recipeRepository.create({ name, description, author });
    await recipeRepository.save(recipe);

    // create ingredients
    for (const { name, amount } of ingredients) {
      let ingredient = await createIngredient(name);

      // create recipe-ingredient relation containing amount
      await createRecipeIngredient(recipe, ingredient, amount);
    }
  }
}

export async function populateDb() {
  await createUsers();
  await createRecipes();

  // eslint-disable-next-line no-console
  console.log("All data has been imported!");
}

createConnection(ormConfig)
  .then(async (connection: Connection) => {
    await connection.dropDatabase();
    await connection.runMigrations();

    // eslint-disable-next-line no-console
    console.log("Prepopulate DB...");
    return populateDb();
  })
  .catch((error: string) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
