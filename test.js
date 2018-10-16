/**
 * Created by mapbar_front on 2018/10/16
 */
function PubSub() {
    this.handles = {
        eventName: {
            eventsList: [],
            isOne: false,
        }
    }
}
PubSub.prototype.subscribe = function (eventName, callback) {
    let EventsList = [];
    if (arguments.length < 2) {
        throw new TypeError('arguments error');
    }
    if (Reflect.has(this.handles, eventName)) {
        EventsList = this.handles[eventName].eventsList;
    } else {
        this.handles[eventName] = {
            eventsList: [callback],
            isOne: false,
        };
    }
    EventsList.push(callback);
}
PubSub.prototype.subscribeOne = function (eventName, callback) {
    let EventsList = [];
    if (arguments.length < 2) {
        throw new TypeError('arguments error');
    }
    if (Reflect.has(this.handles, eventName)) {
        EventsList = this.handles[eventName].eventsList;
    } else {
        this.handles[eventName] = {
            eventsList: [callback],
            isOne: true,
        };
    }
    EventsList.push(callback);
}
PubSub.prototype.notify = function (eventName, ...rest) {
    if (this.handles[eventName]) {
        let EventsList = this.handles[eventName].eventsList, i = 0, isOne = this.handles[eventName].isOne;
        if (EventsList) {
            for (; i < EventsList.length; i++) {
                EventsList[i].apply(this, rest)
            }
        }
        if (isOne) {
            this.unsubscribe(eventName)
        }
    }
    return this;
}
PubSub.prototype.unsubscribe = function (eventName, callback) {
    if (callback) {
        const callbacks = this.handles[eventName].eventsList;
        for (let i = 0; i < callbacks.length; i++) {
            if (callbacks[i] === callback) {
                this.handles[eventName].eventsList.splice(i, 1);
                break;
            }
        }
    } else {
        delete this.handles[eventName];
    }
    return this;
}


const myPub = new PubSub();

myPub.subscribe('event', function (data) {
    console.log('触发');
    console.log(data)
})
document.getElementById('btn').onclick = function () {
    myPub.notify('event', 123);
}
