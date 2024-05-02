import { z } from "zod";
import { schemaForm } from "../schemas/schemaForm";

export type FormProps = z.infer<typeof schemaForm>