import {
  dynamodbCreateTable,
  dynamodbDescribeTable,
  dynamodbDeleteTable,
} from './aws';

const init = async () => {
  const TABLE_NAME = 'vendors';

  const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    TableName: TABLE_NAME,
    KeySchema: [{ AttributeName: 'twitterId', KeyType: 'HASH' }],
    AttributeDefinitions: [
      { AttributeName: 'twitterId', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };

  //   const table = dynamodbDescribeTable(TABLE_NAME);

  //   if (table instanceof Error) {
  dynamodbCreateTable(vendorsTableParams);
  //   } else {
  // dynamodbDeleteTable(TABLE_NAME);
  //   }
};

init();
