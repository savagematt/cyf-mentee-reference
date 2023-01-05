# Running the tests in VSCode

Install:
https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest

Click the green arrow next to the test you want to run:

![run tests from vscode](docs/run-tests.png)

# FAQ

## When running tests "SyntaxError: Cannot use import statement outside a module"

You need to set `--experimental-vm-modules` in your `NODE_OPTIONS` when running Jest.

```

    Details:

    /Users/matt/dev/oss/cyf-mentee-reference/arrays/map.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import {animals} from "./animals.js";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module
```
