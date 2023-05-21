import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const adminRouter = createTRPCRouter({
    addProject: protectedProcedure
        .input(
            z.object({
                name: z.string(),
                githubRepo: z.string().url(),
                previewUrl: z.string().url().optional(),
                description: z.string().optional(),
            })
        )
        .query(async ({ ctx, input }) => {
            try {
                await ctx.prisma.project.create({
                    data: input,
                });
            } catch (e) {
                console.error(e);
            }
        }),
});
