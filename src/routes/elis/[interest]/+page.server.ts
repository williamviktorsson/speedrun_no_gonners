import { prisma } from "$lib";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  // find elis interests
  let interest = await prisma.interest.findFirst({
    where: { id: Number(params.interest) },
  });

  return { interest };
}) satisfies PageServerLoad;

export const actions: Actions = {
  edit: async ({ request, cookies, params }) => {
    const data = await request.formData();
    const description = data.get("description")!.toString()!;

    let interest = await prisma.interest.update({
      where: { id: Number(params.interest) },
      data: {
        description,
      },
    });
  },
};
