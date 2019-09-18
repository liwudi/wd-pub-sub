# wd-pub-sub

一个简单的发布订阅的模式的实现

## 一、how to use

```
import PubSub from 'wd-pub-sub';

// 绑定一个事件名为event的自定义事件
PubSub.subscribe('event', function (data) {
   console.log(data);
});

// 触发事件名为event的自定义事件
PubSub.notify('event', 123);
```
## 二、API

### 1，发布一个自定义的事件
```javascript
subscribe(eventName, callback);
```
### 2，释放一个自定义的事件
```javascript
unsubscribe(eventName, callback);
```
### 3，发布一个只触发一次的自定义事件
```javascript
subscribeOne(eventName, callback);
```
### 4，触发已经发布的自定义事件
```javascript
notify(eventName, callback);
```


