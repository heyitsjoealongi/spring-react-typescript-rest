# Frontend Log - Spring React Typescript REST

## Colors

DARK PRIMARY COLOR #616161
LIGHT PRIMARY COLOR #F5F5F5
PRIMARY COLOR #9E9E9E
TEXT / ICONS #212121
ACCENT COLOR #CDDC39
PRIMARY TEXT #212121
SECONDARY TEXT #757575
DIVIDER COLOR #BDBDBD

## Structure

```bash
// React -%- ////

// Packages -%- ////

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////

// System -%- ////
```

## Environment Variables
```bash
REACT_APP_NOT_SECRET_CODE=react-app-not-secret-value
```

## Emotion Styled Classes ``

```bash
flexDirection
flexWrap
flexFlow
justifyContent
alignItems
alignContent
alignSelf
borderStyle
borderWidth
borderColor
borderRadius
```

## Mapping Components

- [Documentation](https://react.dev/learn/rendering-lists)

```bash
const items = [
    {
        "id": 0,
        "example": 'example',
    },
]

{items.map((data) =>(
    <div key={data?.id}>
        {data?.example}
    </div>
))}
```

## Emotion Styled Objects

- [Documentation](https://emotion.sh/docs/object-styles)

```bash
import { css } from '@emotion/react'

return(
    <div
        css={{
            color: 'yellow',
        }}
    >
      Yellow
    </div>
)
```

## Emotion Styled Components

- [Documentation](https://emotion.sh/docs/styled)

```bash
import styled from "@emotion/styled";

const Button = styled.button`
  color: yellow;
`

return(<Button>Click me</Button>)
```

## Emotion Flex (Styled Components)

- [Documentation](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```bash
const List = styled.div`
    display: flex;
    flexDirection: row;
    flexWrap: nowrap;
    flexFlow: row nowrap;
    justifyContent: flex-start;
    alignItems: flex-start;
    alignContent: flex-start;
    height: auto;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    gap: 0;
    background: none;
    border:none;
`

const ListItem = styled.div`
    order: 0;
    flex: 1;
    align-self: auto;
    height: auto;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    background: none;
    border:none;
`
```

## Prop Types

- [Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
type Props = {
 prop: string;
}

export default function Function(props: Props) {}
```

## Mapping Prop Types

- [Documentation](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
type Props = {
 prop: string;
}

type Props = {
  props: {
    prop: string;
  }[];
};

{props?.prop.map((data) => ({data?.prop ? data?.prop : ''}))}
```

## @Types (typeRoots)

- [Documentation](https://www.typescriptlang.org/tsconfig#typeRoots)


## Amplify Configuration (amplify.yaml)

```bash
version: 1
applications:
  - backend:
      phases:
        build:
          commands:
            - '# Execute Amplify CLI with the helper script'
            - amplifyPush --simple
    frontend:
      phases:
        preBuild:
          commands:
            - yarn install --production --force --legacy-peer-deps
        build:
          commands:
            - echo "REACT_APP_DEFAULT_APP_TITLE" >> .env 
            - echo "REACT_APP_START_TIME" >> .env 
            - yarn build
      artifacts:
        baseDirectory: build
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: frontend
```

## Recoil State [Object]

```bash
import {
  atom,
} from 'recoil';

export const exampleState = atom({
    key: 'example', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
```

## Recoil State [Setter]

```bash
import {
  useRecoilState,
} from 'recoil';
import { exampleState } from '../../recoil/atoms/exampleAtom';

const [example, setExample] = useRecoilState(exampleState);

useEffect(() => {
    setTimeout(() => {
        setExample(true)
    }, 1000);
    return () => {
        example
    }
}, [])
```

## Recoil State [Getter]

```bash
import {
  useRecoilValue
} from 'recoil';
import { exampleState } from '../../recoil/atoms/exampleAtom';

const example = useRecoilValue(exampleState);

if(example){

} else{

}
```