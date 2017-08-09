const remote ={
  app : {
    getPath :function(str){return '.'}
  }
}

module.exports = {
  require: jest.genMockFunction(),
  match: jest.genMockFunction(),
  app: jest.genMockFunction(),
  remote: remote,
  dialog: jest.genMockFunction()
};
