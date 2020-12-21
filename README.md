# `Application is stored on AWS`

## [Amplify](https://us-east-2.console.aws.amazon.com/amplify/home?region=us-east-2#)
Amplify Console is the control center for your full-stack app inside AWS.
`amplify pull --appId PROJECT_KEY --envName BRANCH_NAME`
[Documentation](https://docs.amplify.aws/cli)

## SES - [Simple Email Service](https://us-east-2.console.aws.amazon.com/ses/home?region=us-east-2#verified-sender-details:domain)
There is verified identity custom mail domain.

## [Route 53](https://console.aws.amazon.com/route53/v2/hostedzones?#ListRecordSets)
Domain `*.*` is not available for transfer, so connection between AWS Amplify and domain arranged through third-party library.

## [Analytics Pinpoint](https://console.aws.amazon.com/pinpoint/home?region=us-east-1#/apps) - check website activity
[User Pools](https://console.aws.amazon.com/cognito/users/?region=us-east-1#) - User pools are user directories that provide sign-up and sign-in options for your app users.
[Identity Pools](https://console.aws.amazon.com/cognito/federated/?region=us-east-1) - Identity pools provide AWS credentials to grant your users access to other AWS services. 
![Pinpoint analytics](https://github.com/plakhtiin/optim-api/blob/main/pinpoint.png)
## [Work Mail](https://eu-west-1.console.aws.amazon.com/workmail/v2/home?region=eu-west-1#/)
Registered and defined email address with custom domain name.

## [Identity and Access Management (IAM)](https://console.aws.amazon.com/iam/home?region=us-east-2#/home)
Web service helps you securely control access to AWS resources (mailbox, analytics).

# Frontend
### OptimApp - Angular application
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

Tech stack:
* Angular
* Angular Material
* AWS Amplify

#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Or execute command `npm run build`.
#### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Backend - [Admin UI](https://us-east-2.admin.amplifyapp.com/admin/login)
### Tech stack:
* Node.js
* Express
### Amplify functions:
* createFeedback
* createPhoneRequest
### Amplify layer (common code for functions):
* sendMail - with all necessary access tokens.
