import { z } from "zod";
import { Tool } from "core/index.ts";

const objSchema = z.object({
  command: z.literal("read-files"),
});

const FileSystemTool: Tool<typeof objSchema> = {
  handler: (input) => {
    return { content: JSON.stringify(input) };
  },
};

console.log(FileSystemTool.handler({ command: "read-files" }));
