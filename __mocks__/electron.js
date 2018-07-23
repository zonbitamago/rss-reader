module.exports = {
  ipcRenderer: {
    send: jest.fn()
  },
  remote: {
    app: {
      getPath: () => {
        return "";
      }
    }
  }
};
