import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";
import { withInfo } from "@storybook/addon-info";

storiesOf("Button", module)
  .add(
    "Basic button",
    withInfo(`
    ### Notes
    
    This is a simple button

    ### Usage
    ~~~js
    <Button onClick={() => alert('hello there')}>Click Here</Button>
    ~~~

  `)(() => <Button>Hello Button</Button>)
  )
  .add("with some emoji", () => (
    <Button gray>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("gray", () => (
    <div>
    <Button gray>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    <Button disabled>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
    </div>
  ));
