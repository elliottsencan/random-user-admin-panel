# Random User Admin Panel

Random User Admin panel is a React app built with React, Redux, CircleCi, Material UI, AWS, LocalStorage, and Lodash.

The application will fetch a random user from https://randomuser.me/api/1.0/, display profile information, and save that user's ID to LocalStorage. Subsequent refreshes will read refetch the same user. An interface is exposed to the User to clear out this User seed and fetch a new random user.

[A hosted demo is available here](https://d26h9z3ts60a7n.cloudfront.net/)

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
6. Deploy app by running the command `npm run deploy`

### Exercise Difficulty: Moderate

I think this exercise touches on many different facets of modern web development, which makes it a great assessment of a developers abilities.

To do this project effectively, a developer needs knowledge of
- State Management
- CSS layouts
- Animations
- Testing
- Routing (Client side in this case)

I tried to showcase also some basic dev ops skills as well by utilizing CI/CD with CircleCI and an AWS S3 bucket.

### Reflection
I'd give this a `8/10` rating as a developer challenge. For improvements, I think an Auth flow would be a good test of a developers abilities, as well as writing some APIs to fetch accounts and billing data. I'd be more then happy to elaborate on this in this project if requested, I just ran over the allotted time period.