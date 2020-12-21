import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { API } from '@aws-amplify/api';
import AWSConfig from './aws-exports';
import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'us-east-1:POOL_ID',
    identityId: 'us-east-1:ID',
    region: 'us-east-1',
    clientId: 'CLIENT_ID',
  }
}
//Initialize Amplify
const analyticsConfig = {
  AWSPinpoint: {
    // Amazon Pinpoint App Client ID
    appId: 'APP_ID',
    clientId: 'CLIENT_ID',
    // Amazon service region
    region: 'us-east-1',
    mandatorySignIn: false,
  }
}
if (environment.production) {
  Analytics.configure(analyticsConfig)
}
Auth.configure(amplifyConfig);
API.configure(AWSConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
