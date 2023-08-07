import z from 'zod'

export interface CreateCourseInputDTO {
    id: string,
    name: string,
    lessons: number
}

export interface EditCourseInputDTO {
    idToEdit: string,
    id: string,
    name: string,
    lessons: number
}

export interface DeleteCourseInputDTO {
    idToDelete: string
}

export interface CreateCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export interface EditCourseOutputDTO {
    message: string,
    course: {
        id: string,
        name: string,
        lessons: number,
        createdAt: string
    }
}

export const CreateCourseSchema = z.object({
    id: z.string({
        required_error: "'id' é obrigatório.",
        invalid_type_error: "'id' deve ser do tipo string."
    }).min(1, "'id' deve ter pelo menos um caractere."),
    name: z.string({
        required_error: "'name' é obrigatório.",
        invalid_type_error: "'name' deve ser do tipo string."
    }).min(2, "'name' deve possuir pelo menos 2 caracteres."),
    lessons: z.number({
        required_error:"'lessons' é obrigatório.",
        invalid_type_error:"'lessons' deve ser um número positivo maior que 0."
    })
}).transform(data => data as CreateCourseInputDTO)

export const EditCourseSchema = z.object({
    idToEdit: z.string({
        required_error: "'id' é obrigatória.",
        invalid_type_error:"'id' deve ser do tipo string."
    }),
    id: z.string({
        required_error: "'id' é obrigatória.",
        invalid_type_error: "'id deve ser do tipo string."
    }).min(1, "'id' deve ter pelo menos um caractere."),
    name: z.string({
        required_error: "'name' é obrigatório.",
        invalid_type_error: "'name' deve ser do tipo string."
    }).min(2, "'name' deve possuir pelo menos dois caracteres."),
    lessons: z.number({
        required_error: "'price' é obrigatório.",
        invalid_type_error: "'price' deve ser do tipo number."
    })
}).transform(data => data as EditCourseInputDTO)