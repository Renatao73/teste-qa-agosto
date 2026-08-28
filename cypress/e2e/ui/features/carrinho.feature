# language: pt
@ui @carrinho
Funcionalidade: Compra e manipulação do carrinho
  Como cliente da loja
  Quero gerenciar produtos no carrinho
  Para validar a persistência dos itens selecionados

  Cenário: Adicionar três produtos, remover o monitor e validar persistência
    Dado que acesso a página inicial para realizar uma compra
    Quando adiciono um celular "Samsung galaxy s6" ao carrinho
    E adiciono um monitor "Apple monitor 24" ao carrinho
    E adiciono um computador "Sony vaio i5" ao carrinho
    E acesso o carrinho de compras
    Então os três produtos devem estar presentes no carrinho
    Quando removo o monitor "Apple monitor 24"
    E atualizo a página do carrinho
    Então o monitor "Apple monitor 24" não deve estar presente
    E devem restar apenas o celular "Samsung galaxy s6" e o computador "Sony vaio i5"
