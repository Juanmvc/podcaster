This is a podcast project created using next 14 and react 18

## Description of the project

In this application you can listen to the podcasts that itunes has in its free api. The application loads the 50 podcasts from its api and allows a local filtering for a quick search among them. It also saves the last podcast visited locally (for 24 hours) so that you can continue listening at another time without the need to load it again.

The application has three views:

Podcast list view

![imagen](https://github.com/user-attachments/assets/57e136d3-9fd4-4286-accb-9f38b9ea3118)



View of the details of a podcast with the list of episodes

![imagen](https://github.com/user-attachments/assets/e0ac40b1-50ad-4bb9-ae54-7596d4fea531)



Details view of an episode where you can listen it

![imagen](https://github.com/user-attachments/assets/911375e7-12fa-4510-9851-59b481c3108e)



## Getting Started

To install dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

To make the production build:

```bash
npm run build
```


To start the production build:

```bash
npm run start
```

To start storybook with all components used in the app:

```bash
npm run storybook
```

You can also run the tests created using jest with:

```bash
npm run test
```

You can run the e2e tests created using cypress with (keep in mind that first you would have to have an instance of the app running on localhost:3000):

```bash
npm run e2e:chrome
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Podcaster app.
Open [http://localhost:6006](http://localhost:6006) with your browser to see the Storybook app.

## Technical decisions for the project

### Technologies 

In this application it has been decided to use tanstack to persist some data of the last visited podcast to improve the user experience. The latest version of Next has also been used to improve its loading time when using SSR. Scss has been used to make it easier to work with styles as it adds variables, functions, loops...

Jest has been used for unit testing and cypress has been used for e2e testing due to its wide and almost standardised use for this type of applications.

### Entity Design
**Readonly Attributes**: In the entities I have developed, I have chosen to use readonly attributes instead of private ones. This is because these attributes should be immutable, and do not require getter methods for access, as they do not need prior computations or interpretations. For more complex entities, I would consider making the attributes private and use getters and setters as needed. Also, I would be inclined to use a "create" design pattern rather than directly instantiating entities in the project, especially if they require additional business logic or validations during creation.

### Organization of Components and Projects
**Standalone Components**: In larger projects, I would be inclined to move component definitions out of Storybook, placing them in a separate package. This would allow sharing these components as dependencies between different projects, improving code reusability and maintainability.
  
**Core Package**: In larger projects or with multiple applications, I would consider centralizing the business logic (including infrastructure, application and domain) in a "core" external package. This would facilitate reuse and access to this logic by other applications, promoting a more modular and scalable architecture.

