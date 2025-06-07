let currentTabId = 0;

const handlers = {
  'get-current-tab': async () => {
    try {
      const tab = await chrome.tabs.get(currentTabId);
      return { title: tab.title };
    } catch (e) {
      return { title: undefined };
    }
  }
};

function setCurrentTabId(id) {
  currentTabId = id;
}

module.exports = { handlers, setCurrentTabId };
