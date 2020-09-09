class MyEventEmitter extends EventTarget {
  emit(eventName) {
    this.dispatchEvent(new Event(eventName));
    console.log(eventName)
  }
  on(eventName, callback) {
    this.addEventListener(eventName, callback);
  }
}

const emitter = new MyEventEmitter();

export default emitter;