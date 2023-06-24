# Frontend Log - Spring React Typescript REST

## Structure

```bash
// React -%- ////

// Packages -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////

// System -%- ////
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

## Styled Objects

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

## Styled Components

- [Documentation](https://emotion.sh/docs/styled)

```bash
import styled from "@emotion/styled";

const Button = styled.button`
  color: yellow;
`

return(<Button>Click me</Button>)
```

## Flex (Styled Components)

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
- [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)

```bash
type Props = {
 prop: string;
}

export default function Function(props: Props) {}
```

## Mapping Prop Types

- [Documentation](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)

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
