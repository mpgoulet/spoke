class sourceConfig {
  constructor(sourceRequest) {
    this.sourceRequest = sourceRequest;
    this.sources = getSources(sourceRequest);
  }

  getSources = sourceRequest => {
    // console.log(sourceRequest);
  };
}
