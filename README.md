# Typescript Example Project

## Quickstart

1. Install the dependencies with `npm install`
2. Run the application with `npm start`

## File Structure 🗂️

Components contains all generic components that are shared across screens. They should be generic and reusable, and be testable in isolation.

Data contains everything to do with external requests, api calls. Everything that leaves our application should do so through our api.ts file.

[Enums](https://www.typescriptlang.org/docs/handbook/enums.html) contains enums! These help us keep control of 'magic values'. Things we need to access in a lot of different places and/ or may change in the future.

[Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html) contains both our **internal** and **server** interfaces. Internal interfaces are only used for items in our frontend, while server interfaces contain both **requests** (what we're going to send the backend) and **responses** (what we're going to receive from the backend).

Styles contains our global style files that should be made available across our whole application. Individual component styles are kept alongside their TSX file.

Utils are for handy functions that are available project-wide, these should have good descriptive names so other developers can quickly check whether the function they're looking for exists.

Views contains our different application views (pages/ screens). Generally any requests should be activated here so that any children components don't have to, e.g. If we have a 'User Details' view, we should dispatch our request to getUserDetails from here.

## Routing 🛣️

This project uses [React Router](https://reactrouter.com/) for routing. All of our routing logic is inside our App.tsx file. To access parameters we can do useParams. In this example I am using an interface to type our incoming parameters:

```
interface UserViewParameters {
	userId: string;
}

let { userId } = useParams<UserViewParameters>();
```

## Typescript 🦾

This project uses [Typescript](https://www.typescriptlang.org/) to help us out with documenting our code as we go. One of the main benefits is that we have access to [interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html). Using interfaces with our components tells us exactly which props are required in order to use that component. See below for how to create components with their own interface:

```
interface MyComponentProps {
  requiredProp: boolean;
  optionalProp?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({
  requiredProp,
  optionalProp,
}) => {
	//your component here
};
```

Now when want to use our example component, it will show a visual error when we don't give it the required prop.

## Testing 🧪

This project uses [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (RTL), which both come out of the box with Create React App (CRA).

All component files should have an associated test file with it. It's really important to test components _in isolation_ so they're not affected by anything external.

There is a customRender function in utils/testUtils that should be used whenever you want to do a render, which wraps the UI element in a router so you don't have to!

## Code Quality 🌟

This project uses [Prettier](https://prettier.io/) to help us out with formatting our code. We use most of the defaults, but we can override this in our .prettierrc file. You should install the Prettier VSCode extension, and can configure it to format on save, so all your code is automatically formatted.

If you want to format all the files in the repository, use the 'format' script in the terminal.
