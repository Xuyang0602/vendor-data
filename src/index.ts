import {
  dynamodbCreateTable,
  dynamodbDescribeTable,
  dynamodbDeleteTable,
  dynamodbCreateRecord,
} from './aws';
import vendors from './data/vendors';

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

  const firstVendors = vendors[0];

  //   const table = dynamodbDescribeTable(TABLE_NAME);

  //   if (table instanceof Error) {
  //   dynamodbCreateTable(vendorsTableParams);
  //   } else {
  // dynamodbDeleteTable(TABLE_NAME);
  //   }
  await dynamodbCreateRecord(TABLE_NAME, firstVendors);
};

init();
