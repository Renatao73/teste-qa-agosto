function randomSuffix() {
  return `${Date.now()}_${Math.floor(Math.random() * 100000)}`;
}

function createUser() {
  return {
    username: `qa_${randomSuffix()}`,
    password: 'Qa@123456',
  };
}

function createCartCookie() {
  return `user=qa_cart_${randomSuffix()}`;
}

function createRequestId() {
  return `qa-${randomSuffix()}-${Math.floor(Math.random() * 100000)}`;
}

module.exports = {
  createUser,
  createCartCookie,
  createRequestId,
};
