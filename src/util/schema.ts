import { z } from "zod"

export const formSchema = z.object({
    firstname: z.string().min(2, { message: "must > 2" }).max(5, { message: "must < 5" }),
    lastname: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string()
        .regex(/^(05|06|07)\d{8}$/,
            { message: "Phone must start with 05, 06, or 07 and contain 10 digits" }
        ),
    phone2: z.string().optional(),
    password: z.string().min(8).max(20),
    passwordConfirm: z.string().min(8).max(20),
    account: z.enum(["personal", "company"]),
    companName: z.string().optional(),
    admin: z.boolean(),
    datestart: z.date({
        required_error: "A date of start is required.",
      }),
    age: z.preprocess(
        (val) => (val == "" ? undefined : Number(val)),
        z.number().optional(),
    )
}).refine(data => {
    return data.password === data.passwordConfirm
}, {
    message: "Passwords do not match",
    path: ["passwordConfirm"]
}).refine(data => {
    if (data.account === "company")
        return !!data.companName
    return true
}, {
    message: "Company is required",
    path: ["companName"]
}).refine(data => {
    if (data.phone2 == "" || (data.phone2 && /^(05|06|07)\d{8}$/.test(data.phone2)) )
        return true
    return false
}, {
    message: "Phone not valide",
    path: ["phone2"]
}).refine(data => {
    if (data.admin === true)
        return !!data.age
    return true
}, {
    message: "Age is required",
    path: ["age"]
})