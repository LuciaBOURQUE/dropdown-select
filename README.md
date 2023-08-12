# React-dropdown-ww

A simple dropdown with your mapped data.

You have several selection elements and you want your dropdown lists to maintain a certain consistency within your project?  
This component allows you to supply your elements in a simple and autonomous way by injecting the data that you keep thanks to the props.

## Installation

```shell
// With npm
npm install react-dropdown-ww --save

or

// With yarn
yarn add react-dropdown-ww
```

## Importing

```shell
import { Dropdown } from "react-dropdown-ww"
```

## Usage

```js
import React, { useState } from "react"
import { Dropdown } from "react-dropdown-ww"

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const flowers = [
  { value: "pivoine", label: "Pivoine" },
  { value: "dahlia", label: "Dahlia" },
  { value: "lilas", label: "Lilas" },
  { value: "oeillet", label: "Oeillet" },
  { value: "rosebranchue", label: "Rose Branchue" },
  { value: "symphorine", label: "Symphorine" },
    ]

    let options = flowers.map((flower) => (
    flower.label
    ))

  return (
    <div>
      <Dropdown
        label={"Title of your label"}
        title={"Title of your input dropdown"}
        name={"state"}
        state={inputValue}
        options={options}
        handleChange={handleChange}
      />
    </div>
  )
}
```

## Documentation of props component

Here you can control the following props by providing values for them :

| Name         | Type   | Example                                                     | Description                                                                             |
| ------------ | ------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| type        | string | "text"                                          | Type of input                                                                    |
| label        | string | "Types of flowers"                                          | Title of your label                                                                     |
| title        | string | "Choose your flowers"                                       | Title of your input dropdown                                                            |
| name         | string | "flowers"                                                   | Name of select and label attribut ; htlmFor, id, name                                    |
| isRequired        | boolean | true                                        | If set, input type hidden would be added in the component with required prop as true/false                                                                     |
| state        | func   | const [inputValue, setInputValue] = useState("")            | Control the value of the search input (changing this will update the available options) |
| options      | array  | const options = [{}]                                        | Specify the options the user can select from                                            |
| handleChange | func   | const handleChange = (e) => {setInputValue(e.target.value)} | Subscribe to change events                                                              |

## Author

Lucia Bourque