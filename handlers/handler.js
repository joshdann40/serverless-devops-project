const { DynamoDBClient, PutItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "ap-south-1" });

// GET /
module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello Joyana 🚀" }),
  };
};

// GET /health
module.exports.health = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "UP" }),
  };
};

// GET /users
module.exports.users = async () => {
  const data = await client.send(
    new ScanCommand({
      TableName: "UsersTable",
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(data.Items),
  };
};

// POST /users
module.exports.createUser = async () => {
  await client.send(
    new PutItemCommand({
      TableName: "UsersTable",
      Item: {
        id: { S: Date.now().toString() },
        name: { S: "Joshua" },
      },
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Users added successfully" }),
  };
}g
