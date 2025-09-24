


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {

    // É obrigatório passar todos os dados (nome, email, password) no Controller
    async execute( {name, email, password}: UserRequest ) {

        console.log(name);

        return { name: name };
    }
}

export { CreateUserService }