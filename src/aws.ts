import AWS from 'aws-sdk';
import { AWSRegions } from './types/aws';

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

// 3 - delete a table

// 4 - create a record
