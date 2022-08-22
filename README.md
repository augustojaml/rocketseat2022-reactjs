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
- [DT Money](https://app.rocketseat.com.br/node/projeto-03/group/estrutura-visual/lesson/introducao-41)

### Libs

- [phosphoricons](https://phosphoricons.com/)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [styled-component]https://styled-components.com/
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [react-hook-form](https://react-hook-form.com/)
- [arialkit](https://github.com/ariakit/ariakit)
- [headlessui](https://headlessui.com/)
- [chakra-ui](https://chakra-ui.com/)
- [radix-ui](https://www.radix-ui.com/)
- [polished](https://polished.js.org/docs/)
- [json-server](https://github.com/typicode/json-server)
- [axios](https://axios-http.com/docs/intro)
- [react-loading](https://github.com/fakiolinho/react-loading)
- [user-context-selector](https://github.com/dai-shi/use-context-selector#readme)

`Validação de foumularios`

- [yup](https://github.com/jquense/yup)
- [joi](https://github.com/sideway/joi)
- [zod](https://github.com/colinhacks/zod)
- [@hookform/resolver](https://www.npmjs.com/package/@hookform/resolvers)
- [TypeScript Error Translator](https://ts-error-translator.vercel.app/)

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

### Reduces


### Perfomance

- Por que um componente renderiza
  - Hook changed (Mudou estado, context, reduce, useEffect...)
  - Props Changed (Mudou propriedades)
  - Parent rerendered (Componente pai renderizou)

- Qual fluxo da rederização
  - O react recria a html
  - Compara a versão recriada com o html anterior
  - Se mudou algo, o html é rescrito

- Memo
  - Mudou algo no hooks ou nas props (deep camparison)
  - Comparar com a versão anterior dos hooks e props
  - Se mudou algo, ele vai permitir a nova renderização
