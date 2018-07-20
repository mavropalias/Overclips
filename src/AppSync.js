interface IAppSyncConfig {
  graphqlEndpoint: string;
  region: string;
  authenticationType: string;
  apiKey: string;
}

export const appSyncConfig: IAppSyncConfig = {
  graphqlEndpoint:
    'https://3l5r6pxy2fa67am6uvyze6ucoe.appsync-api.us-east-2.amazonaws.com/graphql',
  region: 'us-east-2',
  authenticationType: 'API_KEY',
  apiKey: 'da2-a2k4zdmp6jaefdmifvljhhn2yy'
};
