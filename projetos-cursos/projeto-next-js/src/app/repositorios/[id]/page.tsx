
interface PageDetailProps {
    params: {
        id: string;
    }
}

async function getData(id: string) {
    
    console.log(id);
    const res = await fetch("https://api.github.com/users/devfraga/repos")

    return res.json()
}

export default async function RepositorioId( {params} : PageDetailProps) {

    const data = await getData(params.id);
    return (
        <div>
            <h1>Página do repositório {params.id}</h1>
        </div>
    )
}