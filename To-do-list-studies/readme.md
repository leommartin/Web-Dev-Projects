## 📝 To-Do List Studies – Week Planner

Uma aplicação web interativa para organização de tarefas semanais. O projeto permite que usuários adicionem, visualizem, concluam e removam tarefas, com visualização por dia da semana.

### 🚀 Funcionalidades

* ✅ Adicionar tarefas com:

  * Nome
  * Dia da semana
  * Horário de início e término
* 📅 Visualização das tarefas:

  * Lista geral com todas as tarefas
  * Tabelas organizadas por dia da semana
* 🧹 Marcar tarefas como concluídas
* 🗑️ Remover tarefas individualmente
* 💾 Salvamento automático no navegador com `localStorage`
* 🧪 Tarefa de exemplo exibida apenas no primeiro acesso
* 🧼 Ocultação inteligente de seções quando não há tarefas
* 🖱️ Interface com modal para cadastro (sem recarregar a página)


### 💻 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* Modularização via **ES Modules**


### 📁 Estrutura do projeto

```
To-do-list/
├── index.html
├── style/
│   ├── globals.css
|   ├── buttons.css
|   ├── icons.css
|   ├── modal.css
|   ├── table.css
├── scripts/
│   ├── main.js         # Lógica principal da aplicação
│   ├── modal.js        # Controle do modal de cadastro
│   ├── render.js       # Renderização das tarefas nas tabelas
│   ├── storage.js      # Interação com localStorage
│   └── utils.js        # Funções auxiliares (ex: ordenação, dias da semana)
└── README.md
```

### 🧪 Como testar

1. Clone o repositório:
   ```bash
   git clone https://github.com/leommmartin/Projects.git
   ```
2. Acesse o diretório `To-do-list-studies` e abra o arquivo `index.html` no navegador.
   (Não é necessário instalar nada.)

### 🔒 Observações

* Este projeto **não possui backend**. Todos os dados são armazenados **localmente no navegador** via `localStorage`.
* Por isso, ao abrir o projeto em outro navegador/dispositivo, ele começará vazio (exceto pela tarefa de exemplo no primeiro acesso).

### 📌 Próximos passos (ideias)

* Filtro por tarefa concluída
* Tema escuro
* Adicionar descrição as tarefas (no cadastro e ao clicar em uma célula com o nome da tarefa)

### 👤 Autor

Feito por **Leonardo Marin Mendes Martin**
[LinkedIn](https://www.linkedin.com/in/leonardo-marin-mendes-martin-9555271a3) • [GitHub](https://github.com/leommartin)

