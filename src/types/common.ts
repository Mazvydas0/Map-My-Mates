import { z } from "zod";
export type userFormData = {
  userEmail: string;
  userPassword: string;
  confirmedPassword: string;
  userFirstName: string;
  userLastName: string;
  userAddress: string;
};

export const loginSchema = z.object({
  userEmail: z
    .string()
    .nonempty({ message: "This field is required." })
    .email({ message: "Invalid email address" }),
  userPassword: z.string().nonempty({ message: "This field is required." }),
  confirmedPassword: z
    .string()
    .nonempty({ message: "This field is required." }),
  userFirstName: z.string().nonempty({ message: "This field is required." }),
  userLastName: z.string().nonempty({ message: "This field is required." }),
  userAddress: z.string().nonempty({ message: "This field is required." }),
});
