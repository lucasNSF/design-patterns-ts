# Design Patterns (with Typescript 🦝)

Criei este repositório originalmente para aplicar os conceitos dos design patterns que ando estudando. A escolha da linguagem é apenas por uma questão de costume.

Caso você queira colaborar com alguma alteração ou adição de algum design pattern, há uma sessão de [Colaborando](#colaborando) neste documento que informa o passo-a-passo para colaborar da forma que inicialmente pensei em ser construtiva.

## Executando

1. Instale as dependências do projeto rodando no terminal `npm i`
2. Para rodar o exemplo do design pattern desejado basta executar no terminal:

```bash
npm run app-NOME_DO_PATTERN
```

## Colaborando

### Adicionando um novo design pattern

1. Crie uma pasta com o nome do design pattern que deseja implementar em `src/patterns`
2. Crie um arquivo de nome `AppNOME_DO_PATTERN.ts` que será o código de execução principal.
3. No arquivo `package.json` adicione um comando rápido de execução do seu pattern em `scripts`:

```json
{
  "app-NOME_DO_PATTERN": "npm run build && node ./dist/patterns/SEU_ARQUIVO_PRINCIPAL.js",
  ...
}
```

### Documentando um design pattern

Caso queira documentar um design pattern, crie um arquivo com o nome do seu pattern com a extensão `.md` na pasta `docs`.
