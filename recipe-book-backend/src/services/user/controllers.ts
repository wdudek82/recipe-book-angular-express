import { getRepository } from "typeorm";
import { User } from "../../entities";

export function getUsers() {
  return getRepository(User).find({
    relations: ["recipes"],
  });
}

export async function getUserById(id: number) {
  const user = await getRepository(User).findOne(
    { id },
    { relations: ["recipes"] },
  );

  if (!user) {
    return {};
  }
  return user;
}

