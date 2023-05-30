const EventEmitter = require("events");

class EventManager {
  constructor() {
    if (!EventManager.instance) {
      EventManager.instance = new EventEmitter();
    }
  }

<<<<<<< HEAD
  // eslint-disable-next-line class-methods-use-this
=======
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
  getInstance() {
    return EventManager.instance;
  }
}

module.exports = new EventManager();
