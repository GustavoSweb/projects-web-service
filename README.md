# Projects Api

Essa API foi desenvolvida para utilização pessoal, tendo como objetivo facilitar a adição de projetos e habilidades listadas no meu portifolio. Servindo para filtrar listar os projetos e habilidades.

## Endpoints

### GET /projects

Esse endpoint é responsavel por retornar a listagem de todos os projetos cadastrados no banco de dados.

#### Parametros

Nenhum
#### Respostas

##### OK! 200

caso essa resposta aconteça você vai receber a listagem de todos os projetos.

Exemplo de resposta:
``` json
[
    {
        "id": 1,
        "name": "Tefly Class",
        "description": "O TeflyClass é uma plataforma criada para apoiar o gerenciamento de atividades acadêmicas dentro das instituições de ensino. Ela permite que os representantes das turmas façam o upload de atividades, incluindo informações essenciais como datas de entrega, a importância de cada tarefa, e os arquivos necessários para sua execução. ",
        "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/Projects/TeflyClass.png",
        "repository": "https://github.com/GustavoSweb/TeflyClass",
        "production_time": "1 mês",
        "date_finalized": "2024-05-22T03:00:00.000Z",
        "url": "https://github.com/GustavoSweb/TeflyClass",
        "level": 5,
        "created_at": "2024-12-09T13:09:34.437Z",
        "updated_at": "2024-12-09T13:09:34.437Z",
        "skills": [
            {
                "id": 1,
                "name": "NodeJs",
                "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/icons8-node-js-144.png",
                "level": 1,
                "created_at": "2024-12-09T12:27:18.958Z",
                "updated_at": "2024-12-09T12:27:18.958Z"
            },
            {
                "id": 3,
                "name": "Tailwind",
                "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/128px-Tailwind_CSS_Logo.svg%20(1)%20(1).png",
                "level": 1,
                "created_at": "2024-12-09T17:34:41.123Z",
                "updated_at": "2024-12-09T17:34:41.123Z"
            },
            {
                "id": 2,
                "name": "NuxtJs",
                "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/Nuxt-JS-Logo.png",
                "level": 1,
                "created_at": "2024-12-09T13:12:48.623Z",
                "updated_at": "2024-12-09T13:12:48.623Z"
            }
        ]
    }
]
```
### GET /skills

Esse endpoint é responsavel por retornar a listagem de todas as habilidades cadastradas no banco de dados.

#### Parametros

Nenhum
#### Respostas

##### OK! 200

caso essa resposta aconteça você vai receber a listagem de todas as habilidades.

Exemplo de resposta:
``` json
[
    {
        "id": 1,
        "name": "NodeJs",
        "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/icons8-node-js-144.png",
        "level": 1,
        "created_at": "2024-12-09T12:27:18.958Z",
        "updated_at": "2024-12-09T12:27:18.958Z"
    },
    {
        "id": 2,
        "name": "NuxtJs",
        "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/Nuxt-JS-Logo.png",
        "level": 1,
        "created_at": "2024-12-09T13:12:48.623Z",
        "updated_at": "2024-12-09T13:12:48.623Z"
    },
    {
        "id": 3,
        "name": "Tailwind",
        "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/skills/128px-Tailwind_CSS_Logo.svg%20(1)%20(1).png",
        "level": 1,
        "created_at": "2024-12-09T17:34:41.123Z",
        "updated_at": "2024-12-09T17:34:41.123Z"
    }
]
```
### GET /skills/:id/projects

Esse endpoint é responsável por filtrar os projetos de acordo com a habilidade que foi utilizada.

#### Parametros

| Nome | Tipo | Obrigatório |                   Descrição                   | Exemplo |
| :--: | :--: | :---------: | :-------------------------------------------: | :-----: |
|  id  | Int  |     sim     | id da habilidade para a filtragem de projetos |    1    |

#### Respostas

##### OK! 200

Caso essa resposta ocorra, você receberá a listagem dos projetos que possuem a habilidade especificada

Exemplo de resposta:
``` json
[
    {
        "id": 1,
        "name": "Tefly Class",
        "description": "O TeflyClass é uma plataforma criada para apoiar o gerenciamento de atividades acadêmicas dentro das instituições de ensino. Ela permite que os representantes das turmas façam o upload de atividades, incluindo informações essenciais como datas de entrega, a importância de cada tarefa, e os arquivos necessários para sua execução. ",
        "urlBackground": "https://storage.googleapis.com/solar-galaxy-342621.appspot.com/Projects/TeflyClass.png",
        "repository": "https://github.com/GustavoSweb/TeflyClass",
        "production_time": "1 mês",
        "date_finalized": "2024-05-22T03:00:00.000Z",
        "url": "https://github.com/GustavoSweb/TeflyClass",
        "level": 5,
        "created_at": "2024-12-09T13:09:34.437Z",
        "updated_at": "2024-12-09T13:09:34.437Z",
        "skill_id": 1
    }
]
```
