# focusbuddy

## Running Tests

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the test suite:
   ```bash
   npm test
   ```

The test mocks `chrome.tabs.get` and checks that the `get-current-tab` handler
returns the title of the mocked tab.
