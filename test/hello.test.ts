import * as cdk from '@aws-cdk/core';
import { CdkSampleLib } from '../src/index';
import '@aws-cdk/assert/jest';

test('create app', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app);
  new CdkSampleLib(stack, 'TestStack');
  expect(stack).toHaveResource('AWS::Lambda::Function');
  expect(stack).toHaveResource('AWS::ApiGatewayV2::Api');
  expect(stack).toHaveResource('AWS::ApiGatewayV2::Integration');
});