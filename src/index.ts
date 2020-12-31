import { HttpApi } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class CdkSampleLib extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    const handler = new Function(this, 'HelloWorld', {
      handler: 'index.handler',
      code: Code.fromAsset('functions'),
      runtime: Runtime.NODEJS_12_X,
    });

    const api = new HttpApi(this, 'API', {
      defaultIntegration: new LambdaProxyIntegration({ handler }),
    });

    new cdk.CfnOutput(this, 'ApiURL', { value: api.url! });
  }
}