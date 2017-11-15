module.exports = {
  ipcRenderer: {
    send: jest.genMockFunction()
  },
  remote: {
    app: {
      getPath: () => {
        return '';
      }
    }
  }
};
