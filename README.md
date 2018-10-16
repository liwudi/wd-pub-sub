# wd-pub-sub

一个简单的发布订阅的模式的实现

## how to use

```js
import PubSub from 'wd-pub-sub';

// 绑定一个事件名为event的自定义事件
PubSub.subscribe('event', function (data) {
   console.log('触发');
   console.log(data);
});

// 触发事件名为event的自定义事件
PubSub.notify('event', 123);
```
## API

### subscribe(eventName, callback);
发布一个自定义的事件

### unsubscribe(eventName, callback);
接触一个自定义的事件

### subscribeOne(eventName, callback);
发布一个只触发一次的自定义事件

### notify(eventName, callback);
触发已经发布的自定义事件

