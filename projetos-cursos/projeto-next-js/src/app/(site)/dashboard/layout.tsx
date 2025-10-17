
export const metadata = {
    title: "Painel do Site - Dashboard",
    description: "Esse é o painel do site"
}

export default function DashboardLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <>  
            { /* Podemos fixar um header específico para o dashboard */ }
            <h3>Header do dashboard</h3>
            <br />
            { /* Renderiza a página filha (Dashboard, Settings) */ }
            { children }
        </> 
    )
}
