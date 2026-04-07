module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Joshua 🚀" }),
  };
};

module.exports.health = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "UP" }),
  };
};

module.exports.users = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { id: 1, name: "Joshua" },
      { id: 2, name: "DevOps Learner" }
    ]),
  };
};
