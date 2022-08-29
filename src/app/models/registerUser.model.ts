export interface RegisterUserRequest { // modelo de solicitud
    email: string,
    password: string,
    name: string
}

export interface RegisterUserResponse { // modelo de respuesta
    token: string,
    user: {
        createdAt: string,
        email: string,
        names: string,
        nickname: string
    }
}