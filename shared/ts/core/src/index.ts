import z from "zod";

const contentSchema = z.object({
  content: z.string(),
});

export type Tool<S extends z.ZodSchema> = {
  handler: (input: z.infer<S>) => z.infer<typeof contentSchema>;
};
