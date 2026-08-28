# language: pt
@api
Funcionalidade: API de cadastro, autenticação e carrinho
  Como QA
  Quero validar os principais serviços do DemoBlaze
  Para garantir os contratos básicos e regras de negócio

  Cenário: Criar um novo usuário via API
    Dado que possuo um novo usuário para API
    Quando envio uma requisição de cadastro
    Então a API deve retornar status 200
    E o tempo de resposta deve estar dentro do limite definido
    E a resposta de cadastro não deve retornar erro

  Cenário: Impedir cadastro duplicado via API
    Dado que possuo um usuário já cadastrado via API
    Quando envio novamente uma requisição de cadastro
    Então a API deve retornar status 200
    E a resposta deve informar que o usuário já existe

  Cenário: Realizar login válido via API
    Dado que possuo um usuário cadastrado para autenticação
    Quando envio uma requisição de login com credenciais válidas
    Então a API deve retornar status 200
    E a resposta deve conter um token de autenticação

  Cenário: Validar login com senha inválida via API
    Dado que possuo um usuário cadastrado para autenticação
    Quando envio uma requisição de login com senha inválida
    Então a API deve retornar status 200
    E a resposta deve informar senha incorreta

  Cenário: Adicionar produtos e consultar o carrinho via API
    Dado que possuo uma identificação dinâmica de carrinho
    Quando adiciono os produtos 1, 10 e 8 via API
    E consulto o carrinho via API
    Então a API deve retornar status 200
    E o contrato do carrinho deve conter os três produtos informados
