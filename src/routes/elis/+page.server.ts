import { prisma } from "$lib";
import type { Actions, PageServerLoad } from "./$types";

// laddar sidan
// data från server till klient
export const load = (async () => {

    // find user elis
  let elis = await prisma.user.findFirst({ where: { name: "Elis" } });

    // find elis interests
  let interests = await prisma.interest.findMany({ where: { User: elis } });

  return { interests };
}) satisfies PageServerLoad;

// saker som man kan göra när man submittar forms
// data från klient till server
export const actions: Actions = {};
