This is a podcast project created using next 14 and react 18

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Podcaster app.
Open [http://localhost:6006](http://localhost:6006) with your browser to see the Storybook app.

## Technical decisions for the project

### Entity Design
**Readonly Attributes**: In the entities I have developed, I have chosen to use readonly attributes instead of private ones. This is because these attributes should be immutable, and do not require getter methods for access, as they do not need prior computations or interpretations. For more complex entities, I would consider making the attributes private and use getters and setters as needed. Also, I would be inclined to use a "create" design pattern rather than directly instantiating entities in the project, especially if they require additional business logic or validations during creation.

### Organization of Components and Projects
**Standalone Components**: In larger projects, I would be inclined to move component definitions out of Storybook, placing them in a separate package. This would allow sharing these components as dependencies between different projects, improving code reusability and maintainability.
  
**Core Package**: In larger projects or with multiple applications, I would consider centralizing the business logic (including infrastructure, application and domain) in a "core" package. This would facilitate reuse and access to this logic by other applications, promoting a more modular and scalable architecture.

### Limitations and Pending Solutions
**Router Events in Next.js 13 and 14**: It is not possible to use router.events in the new router of Next.js version 13 and 14. Therefore, I have not implemented the functionality that shows a visual warning to the user during the loading of a new page, although the Navbar component is prepared to receive that property and the animation is implemented. The solution proposed by Vercel is not completely satisfactory for my case, and a more detailed review is required to find a suitable alternative. You can follow the issue thread at the following link: https://github.com/vercel/next.js/discussions/41934.
