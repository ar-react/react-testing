# Testing React with Jest & Typescript

_This is sample React App created using Vite (TypeScript) and contains below mentioned points -_

1. This React template is creted using Vite with TypeScript & Jest and React Testing Library(RTL)
2. Below I've mentioned how I configured JEST & RTL with this Vite React template.

## To Run the Project -

1. Clone the repo `git clone https://github.com/ar-react/react-testing.git`
2. Navigate to the project directory `cd project`
3. Install NPM Packages `npm install`
4. Run the project `npm run dev`
5. To run the test cases `npm run test`
6. To generate the test coverage `npm run test:coverage`

## JEST & RTL Configurations

```
npm i -D jest@29.7.0 jest-environment-jsdom@29.7.0
ts-jest@29.2.3 ts-node@10.9.2 identity-obj-proxy@3.0.0
@testing-library/jest-dom@6.4.8 @testing-library/react@16.0.0
@types/jest@29.5.12 @testing-library/user-event@14.5.2
```

> Note: When following this guide, it's important to use the specified versions of the packages to avoid potential issues. If you choose to use different versions, please refer to the package changelogs to ensure compatibility and prevent any unexpected problems..

## Configuring Jest with TypeScript

1. Create the **jest.config.ts** file at the root project level:

```
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    "^.+\\.svg": "<rootDir>/tests/mocks/svgMock.tsx"
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',
    }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

export default config;
```

2. Create the **tests/mocks/svgMock.tsx** file at the root project level:

```
export default "SvgrURL";
export const ReactComponent = "div";
```

> Configure Jest to work properly with SVGR.

3. Create the **tests/setupTests.ts** file

```
import '@testing-library/jest-dom';
```

> The `setupTests.ts` file is used to configure or set up the testing framework before each test. Importing `@testing-library/jest-dom` provides additional matchers for Jest that are useful for testing DOM nodes, such as `toBeInTheDocument()`.

4. Create **tsconfig.test.json** file under the project root level

```
{
  "compilerOptions": {
   "target": "ESNext",
   "module": "ESNext",
   "moduleResolution": "node",
   "esModuleInterop": true,
   "skipLibCheck": true,
   "strict": true,
   "jsx": "react-jsx",
   "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": ["**/*.test.tsx", "**/*.test.ts", "./jest.config.ts", "tests", "src"]
}
```

5. Update **package.json** file to add the following scripts

```
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "test": "jest", <===
  "test:watch": "jest --watch", <===
  "test:coverage": "jest --coverage" <===
},
```

6. Update `tsconfig.app.json` by adding the following

```
"include": [
  "src",
  "tests/setupTests.ts" <===
]
```

7. Write the first test
   > With the initial Vite-generated code in **App.tsx**, let's write a set of comprehensive tests using Jest and React Testing Library.

```
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("should render a heading 1", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );
  });

  describe("logos", () => {
    it("should render a Vite logo", () => {
      render(<App />);
      const img = screen.getByAltText("Vite logo");
      expect(img).toBeInTheDocument();
    });

    it("should render a Vite link", () => {
      const { container } = render(<App />);
      const viteLogo = container.querySelector("a[href='https://vite.dev']");
      expect(viteLogo).toBeInTheDocument();
    });

    it("should render a React logo", () => {
      render(<App />);
      const img = screen.getByAltText("React logo");
      expect(img).toBeInTheDocument();
    });

    it("should render a React link", () => {
      const { container } = render(<App />);
      const reactLogo = container.querySelector("a[href='https://react.dev']");
      expect(reactLogo).toBeInTheDocument();
    });
  });

  describe("Card", () => {
    it("should render a card", () => {
      const { container } = render(<App />);
      const card = container.querySelector(".card");
      expect(card).toBeInTheDocument();
    });

    it("should render a button", () => {
      render(<App />);
      expect(screen.getByRole("button")).toHaveTextContent("count is 0");
    });

    it("increments the count when the button is clicked", () => {
      render(<App />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(screen.getByText("count is 1")).toBeInTheDocument();
    });

    it("should render a paragraph", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p");
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent(
        "Edit src/App.tsx and save to test HMR"
      );
    });

    it("should render a code element", () => {
      const { container } = render(<App />);
      const code = container.querySelector("code");
      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent("src/App.tsx");
    });
  });

  describe("read-the-docs", () => {
    it("should render a paragraph", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p");
      expect(paragraph).toBeInTheDocument();
    });

    it("should render a paragraph with the class 'read-the-docs'", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p.read-the-docs");
      expect(paragraph).toBeInTheDocument();
    });

    it("should render a paragraph with the text 'Click on the Vite and React logos to learn more'", () => {
      render(<App />);
      expect(
        screen.getByText(/Click on the Vite and React logos to learn more/i)
      ).toBeInTheDocument();
    });
  });
});

```

8. Run the test and generate test coverate

```
npm run test // to run test cases
npm run test:coverage // to get the test coverage
```
