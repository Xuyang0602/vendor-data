import AWS from 'aws-sdk';
import { AWSRegions } from './types/aws';
import { Vendor } from './types/twitter';
import { marshall } from '@aws-sdk/util-dynamodb';

AWS.config.update({ region: AWSRegions.US_EAST_1 });

const { DynamoDB } = AWS;

const dynamodb = new DynamoDB();

// 1 - Create a table
export const dynamodbCreateTable = async (
  params: AWS.DynamoDB.CreateTableInput
) => {
  try {
    const result = await dynamodb.createTable(params).promise();
    console.log(result);
    return result;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error('dynamodbCreateTable error object unknown type');
  }
};

// 2 - Describe a table
export const dynamodbDescribeTable = async (tableName: string) => {
  try {
    const table = await dynamodb
      .describeTable({ TableName: tableName })
      .promise();

    console.log('Table retrieved', table);

    return table;
  } catch (err) {
    if (err instanceof Error) {
      return err;
    }
    throw new Error(
      'dynamodbDescribeTable error object unknown type'
    );
  }
};

// 3 - delete a table
export const dynamodbDeleteTable = async (tableName: string) => {
  try {
    const res = await dynamodb
      .deleteTable({ TableName: tableName })
      .promise();

    console.log(`Table ${tableName} is deleted`, res);

    return res;
  } catch (err) {
    if (err instanceof Error) {
      return err;
    }
    throw new Error('dynamodbDeleteTable error object unknown type');
  }
};

// 4 - create a record
export const dynamodbCreateRecord = async (
  tableName: string,
  item: Vendor
) => {
  try {
    await dynamodb
      .putItem({
        TableName: tableName,
        Item: marshall(item),
      })
      .promise();
    console.log('Record created');
  } catch (err) {
    if (err instanceof Error) {
      return err;
    }
    throw new Error('dynamodbCreateRecord error object unknown type');
  }
};
