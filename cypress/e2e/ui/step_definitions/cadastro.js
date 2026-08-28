const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const homePage = require('../../../pages/HomePage');
const signUpPage = require('../../../pages/SignUpPage');
const api = require('../../../services/DemoblazeApi');
const { createUser } = require('../../../utils/dataFactory');

let user;

Given('que acesso a página inicial do DemoBlaze', () => {
  homePage.visit();
});

Given('possuo dados válidos para um novo usuário', () => {
  user = createUser();
});

Given('que já existe um usuário cadastrado', () => {
  user = createUser();

  api.signup(user).then((response) => {
    expect(response.status).to.eq(200);
  });
});

When('realizo o cadastro desse usuário', () => {
  homePage.openSignUp();
  signUpPage.stubAlert();
  signUpPage.fillUsername(user.username);
  signUpPage.fillPassword(user.password);
  signUpPage.submit();
});

When('tento cadastrar novamente o mesmo usuário', () => {
  homePage.openSignUp();
  signUpPage.stubAlert();
  signUpPage.fillUsername(user.username);
  signUpPage.fillPassword(user.password);
  signUpPage.submit();
});

Then('devo visualizar a mensagem de cadastro realizado com sucesso', () => {
  signUpPage.assertAlert('Sign up successful.');
});

Then('devo visualizar a mensagem de usuário já existente', () => {
  signUpPage.assertAlert('This user already exist.');
});
