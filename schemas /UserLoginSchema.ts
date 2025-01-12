import {z} from "zod";

const userSchema = z.object({
    token: z.string(),
    user: z.object({
        email: z.string(),
        name: z.string(),
    })
})
export const userLoginHttpResponse = z.object({
    data: userSchema,
    status: z.literal(200),
});

export default userSchema