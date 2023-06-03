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

## Multiples of 9

```bash
9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180, 189, 198, 207, 216, 225, 234, 243, 252, 261, 270, 279, 288, 297, 306, 315, 324, 333, 342, 351, 360, 369, 378, 387, 396, 405, 414, 423, 432, 441
```

## Structure

```bash
// React -%- ////

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////
```

## SVG in React

```bash
import { ReactComponent as SVG } from './example.svg';
```

## Environment Variables

```bash
REACT_APP_NOT_SECRET_CODE=react-app-not-secret-value
```

## Mapping Components

-   [Documentation](https://react.dev/learn/rendering-lists)

```bash
const items = [
    {
        "id": 0,
        "example": 'example',
    },
]

{items?.map((data) =>(
    <div key={data?.id}>
        {data?.example}
    </div>
))}
```

## Emotion Styled Objects

-   [Documentation](https://emotion.sh/docs/object-styles)

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

-   [Documentation](https://emotion.sh/docs/styled)

```bash
import styled from "@emotion/styled";

const Button = styled.button`
  color: yellow;
`

return(<Button>Click me</Button>)
```

## Emotion Flex (Styled Components)

-   [Documentation](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

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

-   [Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
-   [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
type Props = {
 prop: string;
}

export default function Function(props: Props) {}
```

## Mapping Prop Types

-   [Documentation](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
-   [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
type Props = {
 prop: string;
}

type Props = {
  props: {
    prop: string;
  }[];
};

{props?.['prop']?.map((data) => ({data?.['prop'] ? data?.['prop'] : ''}))}
```

## Declared Types

-   [Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
-   [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
export type Types = {
  types: string;
};

export default function Function(types: Types) {}
```

## Mapping Declared Types

-   [Documentation](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
-   [Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/app_menu_link/getting-started/app_menu_link_type_example/)

```bash
export type Types = {
  types: string;
};

export type Types = {
  types: {
    types: string;
  }[];
};

{types?.map(({types} : Types) => ({types ? types : ''}))}
```

## @Types (typeRoots)

-   [Documentation](https://www.typescriptlang.org/tsconfig#typeRoots)

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
            - echo "REACT_APP_URL" >> .env
            - echo "REACT_APP_DELAY" >> .env
            - echo "REACT_APP_SLIDER_DELAY" >> .env
            - echo "REACT_APP_DEFAULT_APP_TITLE" >> .env
            - echo "REACT_APP_DEFAULT_APP_DESCRIPTION" >> .env
            - echo "REACT_APP_DEFAULT_MENU_TITLE" >> .env
            - echo "REACT_APP_DEFAULT_EMAIL" >> .env
            - echo "REACT_APP_DEFAULT_PHONE_NUMBER" >> .env
            - echo "REACT_APP_MIDDLEWARE_USERNAME" >> .env
            - echo "REACT_APP_MIDDLEWARE_PASSWORD" >> .env
            - echo "REACT_APP_MIDDLEWARE_SECRET" >> .env
            - echo "REACT_APP_MIDDLEWARE_URL" >> .env
            - echo "REACT_APP_AUTHORIZATION_ENDPOINT" >> .env
            - echo "REACT_APP_ARTICLE_LIST_ENDPOINT" >> .env
            - echo "REACT_APP_TOPIC_LIST_ENDPOINT" >> .env
            - echo "REACT_APP_CONTENTS_SEARCH_ENDPOINT" >> .env
            - echo "REACT_APP_CONTENTS_SEARCH_PARAMETER" >> .env
            - echo "REACT_APP_ANALYTICS_LIST_ENDPOINT" >> .env
            - echo "REACT_APP_ANALYTICS_ADD_ENDPOINT" >> .env
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

## Amplify Auth - Sign In (Object)

Additional to this response, Amplify generates user data objects in the local storage

```bash
{
    "username": "",
    "pool": {
        "userPoolId": "",
        "clientId": "",
        "client": {
            "endpoint": "",
            "fetchOptions": {}
        },
        "advancedSecurityDataCollectionFlag": true,
        "storage": {
            "amplify-auto-sign-in": "true",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.accessToken": "",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.clockDrift": "0",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.refreshToken": "",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.LastAuthUser": "",
            "amplify-signin-with-hostedUI": "false",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.userData": "",
            "loglevel": "",
            "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.idToken": ""
        }
    },
    "Session": null,
    "client": {
        "endpoint": "https://cognito-idp.<REGION>.amazonaws.com/",
        "fetchOptions": {}
    },
    "signInUserSession": {
        "idToken": {
            "jwtToken": "",
            "payload": {
                "sub": "",
                "email_verified": true,
                "iss": "",
                "cognito:username": "",
                "origin_jti": "",
                "aud": "",
                "event_id": "",
                "token_use": "",
                "auth_time": 0,
                "name": "",
                "exp": 0,
                "iat": 0,
                "jti": "",
                "email": ""
            }
        },
        "refreshToken": {
            "token": ""
        },
        "accessToken": {
            "jwtToken": "",
            "payload": {
                "sub": "",
                "iss": "",
                "client_id": "",
                "origin_jti": "",
                "event_id": "",
                "token_use": "",
                "scope": "",
                "auth_time": 0,
                "exp": 0,
                "iat": 0,
                "jti": "",
                "username": ""
            }
        },
        "clockDrift": 0
    },
    "authenticationFlowType": "USER_SRP_AUTH",
    "storage": {
        "amplify-auto-sign-in": "true",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.accessToken": "",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.clockDrift": "0",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.refreshToken": "",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.LastAuthUser": "",
        "amplify-signin-with-hostedUI": "false",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.userData": "",
        "loglevel": "",
        "CognitoIdentityServiceProvider.6n48moogq7vctmvnkpj5snkvg4.collectedview.idToken": ""
    },
    "keyPrefix": "",
    "userDataKey": "",
    "attributes": {
        "sub": "",
        "email_verified": true,
        "name": "",
        "email": ""
    },
    "preferredMFA": ""
}
```

## Amplify Auth - User Attributes (Object)

Storing and retrieving the dynamic `userDataKey` allows for extracting the user data from local storage

```bash
{
  "UserAttributes": [
    { "Name": "sub", "Value": "" },
    { "Name": "email_verified", "Value": "true" },
    { "Name": "name", "Value": "" },
    { "Name": "email", "Value": "" }
  ],
  "Username": ""
}
```

## Amplify Auth - Sign Up (Object)

```bash
{
  "username": "",
  "pool": {
    "userPoolId": "",
    "clientId": "",
    "client": {
      "endpoint": "",
      "fetchOptions": {}
    },
    "advancedSecurityDataCollectionFlag": true,
    "storage": {
      "loglevel": "INFO",
      "amplify-auto-sign-in": "true"
    }
  },
  "Session": null,
  "client": {
    "endpoint": "",
    "fetchOptions": {}
  },
  "signInUserSession": null,
  "authenticationFlowType": "",
  "storage": {
    "loglevel": "",
    "amplify-auto-sign-in": "true"
  },
  "keyPrefix": "",
  "userDataKey": ""
}
```
