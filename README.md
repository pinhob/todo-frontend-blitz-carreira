# Todo Ebytr

Neste repositório está o **Front-end do desafio técnico da Ebytr**. É uma aplicação de **Todo List que permite que o usuário insira, edite, gerencie o status e exclua tarefas**.

## Contexto do desafio
> A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas. Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

## Stack utilizada
<p align="center">
  <img alt="MERN Stack" align="center" width="362" height="160" src="https://user-images.githubusercontent.com/20286747/154488744-6248dda0-e602-4291-97b8-b2682db9c9a2.jpeg">
</p>


Para este desafio utilizei a stack **MERN**. Neste repositório você encontra a aplicação em **React**.

## Rodando o projeto
### Pré-requisitos: 

Para rodar este projeto é necessário que você tenha instalado:
* **Node**, na versão `14.6` ou maior;
* **NPM**, na versão `7.21`ou maior;

### Clonando o repositório

Clone o repositório inserindo os seguintes comandos em seu terminal: 
```
git clone git@github.com:pinhob/todo-frontend-blitz-carreira.git
cd todo-frontend-blitz-carreira
```
### Instalando as dependências
Dentro do diretório do projeto, rode em seu terminal o comando para instalar as dependências: 
```
npm install
```
Com isso será descarregado o `node_modules` e instalada as seguintes dependências:
* **create-react-app**
* **React Hook Form**

### Rodando o projeto
Execute o projeto com o comando:
```
npm start
```
### Rodando a suíte de testes
Foram criados diferentes testes para validar a funcionalidade e usabilidade da aplicação. Você pode rodá-los utilizando o comando:

```
npm run test
```
Ou de forma individual utilizando o comando:
```
npm run test <nome-do-arquivo>

npm run test todolist
npm run test todo
npm run test form
```

## Próximos passos
Alguns dos próximos passos para a aplicação são:
* **Integrar com o Back-end e armazenar a lista de tarefas do usuário**;
* **Carregar as tarefas já inseridas quando a aplicação for recarregada**;
* **Aumentar a cobertura de testes dos compoentes**;
* Adicionar a dependência *React Select* para estilizar os campos de `select` dos formulários de inserção e edição de _todos_;
* Adicionar a dependência *Font Awesome* para estilizar os botões de `Editar` e `Deletar` de cada _todo_;
* Corrigir detalhes de estilização, como o posicionamento dos componentes na tela;

---
_Parte da estrutura deste repositório se inspiroou na do colega [Murilo Valença](https://github.com/murilorsv14/Desafio-Tecnico-Ebytr). Obrigado por compartilhar com a gente, Murilo!_ :rocket:
