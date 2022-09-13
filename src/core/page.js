export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error('Not implemented');
  }

  afterRender() {}

  destroy() {}
}
