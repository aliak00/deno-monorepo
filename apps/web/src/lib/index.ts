// place files you want to import through the `$lib` alias in this folder.
import { z } from "zod";
import { type Tool } from "core/index.ts";

const objSchema = z.object({
  command: z.literal("read-files"),
});

export const FileSystemTool: Tool<typeof objSchema> = {
  handler: (input) => {
    return { content: JSON.stringify(input) };
  },
};
