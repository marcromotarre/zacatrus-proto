import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";


const a = async (req, res, id) => {
  const room = await prisma.game.findMany({
    where: {
      id: id,
    },
  });

  res.json(room);
};

export default a;
