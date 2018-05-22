# Random User Admin Panel

Random User Admin panel is a React app built with Create React App, Redux, CircleCi, Material UI, AWS, LocalStorage, and Lodash.

The application will fetch a random user from https://randomuser.me/api/1.0/, display profile information, and save that user's ID to LocalStorage.

Demo is available here: https://d26h9z3ts60a7n.cloudfront.net/

### Building project:

1. Clone the project from Github
2. In your terminal from the app's root directory run `npm i`
3. Start the app with `npm run start`
4. Re-generate documentation by running `npm run doc`

### Setup AWS S3 Bucket

1. Install AWS CLI tool `pip install awscli --upgrade --user` or for Homebrew users `brew install awscli`
2. Login to AWS Console, navigate to S3 bucket portal, and create a bucket called `random-user-admin-panel` and set its permissions to public.
3. Navigate to Properties tab and enable Static Website Hosting
4. Create new IAM user profile
5. Run `aws configure` and follow command prompts to add IAM credentials generated in previous step
6. Deploy app by running `npm run deploy`