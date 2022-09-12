import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribe = [];
    // this.storeSub = null;

    this.prepare();
  }

  // setings components
  prepare() {}

  // return sample components
  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // subscribe event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribe.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  // initialize sample components
  // add dom listeners
  init() {
    this.initDomListeners();
  }

  // destroy sample components
  // destroy dom listeners
  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach((unsub) => unsub());
    // this.storeSub.unsubscribe();
  }
}
