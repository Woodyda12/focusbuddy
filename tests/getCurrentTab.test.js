const { handlers, setCurrentTabId } = require('../src/background');

describe('get-current-tab handler', () => {
  beforeEach(() => {
    global.chrome = {
      tabs: {
        get: jest.fn(async (id) => ({ id, title: 'Fake Tab' })),
      },
    };
    setCurrentTabId(1);
  });

  afterEach(() => {
    delete global.chrome;
  });

  it('returns the current tab title', async () => {
    const result = await handlers['get-current-tab']();
    expect(result).toEqual({ title: 'Fake Tab' });
    expect(global.chrome.tabs.get).toHaveBeenCalledWith(1);
  });
});
