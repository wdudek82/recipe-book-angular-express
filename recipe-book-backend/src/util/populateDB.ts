import { getConnection, getRepository } from "typeorm";
import { Ingredient, Recipe, User } from "../services/api/entities";

async function createUser() {
  const userRepository = getRepository(User);
  const user = new User();

  const userExist = await userRepository.find({
    firstName: "Wojtek",
    lastName: "Dudek",
  });

  if (!userExist.length) {
    user.firstName = "Wojtek";
    user.lastName = "Dudek";
    user.age = 37;
    user.email = "";
    user.password = "admin123";
    await userRepository.save(user);
  }
}

async function createIngredients() {
  const ingredientRepository = getRepository(Ingredient);
  for (const name of ["fries", "meat", "tomato", "eggs", "salad"]) {
    if (!(await ingredientRepository.findOne({ name }))) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Ingredient)
        .values([{ name }])
        .execute();
    }
  }
}

async function createRecipes() {
  // const recipeRepository = getRepository(Recipe);
  // if () {}
}

export async function populateDb() {
  await createUser();
  await createIngredients();
  await createRecipes();
}
