import dayjs from "dayjs";
import validator from "validator";
import { z } from "zod";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const LoginFormSchema = z.object({
  email: z
    .string({
      required_error: "A Matrícula deve conter pelo menos 3 caracteres",
      invalid_type_error: "A Matrícula deve conter pelo menos 3 caracteres"
    })
    .min(3, { message: "A Matrícula deve conter pelo menos 3 caracteres" }),
  password: z
    .string({
      required_error: "A Senha deve conter pelo menos 8 caracteres",
      invalid_type_error: "A Senha deve conter pelo menos 8 caracteres"
    })
    .min(8, { message: "A Senha deve conter pelo menos 8 caracteres" })
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;

export const CreateAccessRequestSchema = z
  .object({
    name: z
      .string({
        required_error: "Item obrigatório"
      })
      .trim()
      .min(1, "Item obrigatório")
      .max(128, "Excedeu o número máximo de caracteres"),
    socialName: z
      .string()
      .trim()
      .max(128, "Excedeu o número máximo de caracteres")
      .transform((val) => {
        if (val === "") {
          return undefined;
        }

        return val;
      })
      .optional(),
    enrollment: z
      .string({
        required_error: "Item obrigatório"
      })
      .trim()
      .min(3, { message: "A Matrícula deve conter pelo menos 3 caracteres" }),
    email: z
      .string({
        required_error: "Item obrigatório"
      })
      .email("Por favor insira um endereço de e-mail válido"),
    birthDate: z.date({
      required_error: "Item obrigatório",
      invalid_type_error: "Item obrigatório"
    }),
    sex: z.object(
      {
        id: z.string().min(1, "O Sexo é obrigatório"),
        name: z.string()
      },
      {
        required_error: "Item obrigatório"
      }
    ),
    phoneNumber: z
      .string({
        required_error: "Item obrigatório",
        invalid_type_error: "Item obrigatório"
      })
      .refine(
        (val) => validator.isMobilePhone(`${+55} ${val}`, "pt-BR"),
        "Digite um número válido"
      ),
    password: z
      .string({
        required_error: "Item obrigatório"
      })
      .trim()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
    confirmPassword: z
      .string({
        required_error: "Item obrigatório"
      })
      .min(1)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As Senhas não correspondem",
    path: ["confirmPassword"]
  });

export type CreateAccessRequestFormData = z.infer<
  typeof CreateAccessRequestSchema
>;

export const ForgotPasswordFormSchema = z.object({
  email: z.string().email("Por favor insira um endereço de e-mail válido")
});

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordFormSchema>;

export const ResetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As Senhas não correspondem",
    path: ["confirmPassword"]
  });

export type ResetPasswordFormData = z.infer<typeof ResetPasswordFormSchema>;
