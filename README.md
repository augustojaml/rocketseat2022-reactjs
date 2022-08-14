# ReactJS

- [Reactjs](https://pt-br.reactjs.org/)
- React é uma biblioteca
- Rendering patters
  - SPA (Single Page Application)
  - SSR (Server side render)

### Compiladores

- [vite](https://vitejs.dev/)
- [snowpack](https://www.snowpack.dev/)

### Package Manage

- [nvm - Node Version Manager](https://github.com/nvm-sh/nvm)
- [n – Interactively Manage Your Node.js Versions](https://github.com/tj/n)

### Criando projeto vite

- Criar projeto com o comando abaixo e ao final acessar página do projeto e executar `yarn` para instalação das dependências

```
yarn create vite
```

### Projeto Figma

- [others](https://www.figma.com/community/file/1127351821076435124)
- [Rocket Help](https://www.figma.com/file/rQbh6GRPwiOTGqCXF01opn/Rocket-Help-Ignite-Lab-Community)
- [Ignite Time](<https://www.figma.com/file/3n0FjHGba29Spg7GUhjFeH/Ignite-Timer-(Community)?node-id=0%3A1>)

### Libs

- [phosphoricons](https://phosphoricons.com/)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [styled-component]https://styled-components.com/
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [react-hook-form](https://react-hook-form.com/)

`Validação de foumularios`

- [yup](https://github.com/jquense/yup)
- [joi](https://github.com/sideway/joi)
- [zod](https://github.com/colinhacks/zod)
- [@hookform/resolver](https://www.npmjs.com/package/@hookform/resolvers)

### Configurando o ESLINT

- yarn add -D eslint @rocketseat/eslint-config
- crie um arquivo na raiz do projeto chamado `.eslintrc.json`
- testando projeto `yarn eslint src --ext .ts,.tsx`
- Adicionar o escript no packetjson
  ```json
  "scripts": {
    ...
    "lint": "yarn eslint src --ext .ts,.tsx",
    "fix": "yarn eslint src --ext .ts,.tsx --fix"
  },
  ```

### Formularios com react

- Controlled: manter em tempo real a informação do estado
- Uncontrolled: busca os valores do estado somente quando for necessário

- Prop Drilling -> muitas propriedades apenas para comunicação entre componentes

- Context Api -> permite compartilhar entre varias componentes informações ao mesmo tempo
