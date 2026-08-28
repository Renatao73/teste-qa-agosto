const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const api = require('../../../services/DemoblazeApi');
const {
  createUser,
  createCartCookie,
} = require('../../../utils/dataFactory');

let user;
let response;
let cartCookie;
let cartResponse;

Given('que possuo um novo usuário para API', () => {
  user = createUser();
});

Given('que possuo um usuário já cadastrado via API', () => {
  user = createUser();
  api.signup(user).then((res) => {
    expect(res.status).to.eq(200);
  });
});

Given('que possuo um usuário cadastrado para autenticação', () => {
  user = createUser();
  api.signup(user).then((res) => {
    expect(res.status).to.eq(200);
  });
});

Given('que possuo uma identificação dinâmica de carrinho', () => {
  cartCookie = createCartCookie();
});

When('envio uma requisição de cadastro', () => {
  api.signup(user).then((res) => {
    response = res;
  });
});

When('envio novamente uma requisição de cadastro', () => {
  api.signup(user).then((res) => {
    response = res;
  });
});

When('envio uma requisição de login com credenciais válidas', () => {
  api.login(user).then((res) => {
    response = res;
  });
});

When('envio uma requisição de login com senha inválida', () => {
  api.login({ ...user, password: `${user.password}_INCORRETA` }).then((res) => {
    response = res;
  });
});

When('adiciono os produtos 1, 10 e 8 via API', () => {
  [1, 10, 8].forEach((productId) => {
    api.addToCart(cartCookie, productId).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});

When('consulto o carrinho via API', () => {
  api.viewCart(cartCookie).then((res) => {
    cartResponse = res;
    response = res;
  });
});

Then('a API deve retornar status 200', () => {
  expect(response.status).to.eq(200);
});

Then('o tempo de resposta deve estar dentro do limite definido', () => {
  expect(response.duration).to.be.lessThan(Number(Cypress.env('responseTimeLimitMs')));
});

Then('a resposta de cadastro não deve retornar erro', () => {
  expect(String(response.body)).not.to.contain('errorMessage');
  expect(String(response.body)).not.to.contain('This user already exist.');
});

Then('a resposta deve informar que o usuário já existe', () => {
  expect(String(response.body)).to.contain('This user already exist.');
});

Then('a resposta deve conter um token de autenticação', () => {
  expect(response.body).to.be.a('string');
  expect(response.body).to.contain('Auth_token:');
});

Then('a resposta deve informar senha incorreta', () => {
  expect(String(response.body)).to.contain('Wrong password.');
});

Then('o contrato do carrinho deve conter os três produtos informados', () => {
  expect(cartResponse.body).to.be.an('array');

  const productIds = cartResponse.body.map((item) => item.prod_id);
  expect(productIds).to.include.members([1, 10, 8]);

  cartResponse.body.forEach((item) => {
    expect(item).to.have.property('id');
    expect(item).to.have.property('cookie');
    expect(item).to.have.property('prod_id');
  });
});
