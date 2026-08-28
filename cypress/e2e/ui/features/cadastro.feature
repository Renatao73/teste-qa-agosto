# language: pt
@ui @cadastro
Funcionalidade: Criação de conta
  Como novo cliente da loja
  Quero criar uma conta
  Para utilizar as funcionalidades da aplicação

  Cenário: Cadastrar um novo usuário com dados válidos
    Dado que acesso a página inicial do DemoBlaze
    E possuo dados válidos para um novo usuário
    Quando realizo o cadastro desse usuário
    Então devo visualizar a mensagem de cadastro realizado com sucesso

  Cenário: Validar erro ao cadastrar usuário já existente
    Dado que já existe um usuário cadastrado
    E acesso a página inicial do DemoBlaze
    Quando tento cadastrar novamente o mesmo usuário
    Então devo visualizar a mensagem de usuário já existente
