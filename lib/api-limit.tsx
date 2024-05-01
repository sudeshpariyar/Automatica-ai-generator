import { MAX_FREE_REQUEST } from "@/constant";
import { auth } from "@clerk/nextjs/server";
import prismadb from "./prismadb";

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  const userAPILimit = await prismadb.nonSubscribedAPILimit.findUnique({
    where: {
      userId: userId,
    },
  });
  if (userAPILimit) {
    await prismadb.nonSubscribedAPILimit.update({
      where: { userId: userId },
      data: { count: userAPILimit.count + 1 },
    });
  } else {
    await prismadb.nonSubscribedAPILimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userAPILimit = await prismadb.nonSubscribedAPILimit.findUnique({
    where: { userId: userId },
  });

  if (!userAPILimit || userAPILimit.count < MAX_FREE_REQUEST) {
    return true;
  } else {
    return false;
  }
};
