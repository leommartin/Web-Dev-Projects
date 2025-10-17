
import OwnerRepo from "@/components/OwnerRepo";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }

}


// async function getData() {

//   // https://api.github.com/users/devfraga/repos
//   const res = await fetch("https://api.github.com/users/devfraga/repos")

//   return res.json()
// }

async function delayFetch(url: string, delay: number) {
  
  // Simula um atraso na resposta da API
  // Promise faz uma espera de X milissegundos antes de continuar a execução do código
  // Resolve é uma função que é chamada quando a promessa é cumprida
  await new Promise( (resolve) => setTimeout(resolve, delay));  

  const response = await fetch(url, { next: {revalidate: 120} });

  // O fetch pode ter propriedades de cache e revalidação
  // { cache: 'no-store' } - não armazena em cache, toda vez que o usuário acessar a página, uma nova requisição será feita
  // next: {revalidate: 60} - revalida a cada 60 segundos, ou seja, a cada 60 segundos uma nova requisição será feita

  return response.json();

}

async function getData() {

  // https://api.github.com/users/devfraga/repos
  const data = await delayFetch("https://api.github.com/users/devfraga/repos", 0);

  return data;
}

// Como getData é uma função assíncrona, a Home também precisa ser assíncrona
export default async function Home() {

  const data : DataProps[] = await getData(); // Server Side, espera a resposta da API
  // Recebe um array com as propriedades de DataProps

  return ( 
    
    <main>

      <h1>Home Page</h1> <br />
      <span>Welcome to Home Page!</span> <br /> <br />
    
      <h3>Meus repositórios</h3> <br />
      { data.map( (item) => (

          <div key={item.id}>
            <strong>Repositório: </strong> <a href="">{item.name}</a>
            <br />

            <OwnerRepo // Componente recebe as props 
              avatar_url={item.owner.avatar_url}
              name={item.owner.login}
            />

            <br />
          </div>
        ))}

    </main>

  );

}