# WS行情

## 订阅-K线行情

`ws://stagingqa.365os.com/kline-api/ws`

**请求**
```json
{
    "event":"sub",
    "params":{
        "channel":"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1mo nth]",
        "cb_id":"自定义"
    }
}
```

**返回订阅状态1次**
```json
{
    "event_rep":"subed",
    "channel":"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month] ",
    "cb_id":"原路返回",
    "ts":1506584998239,
    "status":"ok"
}
```

**持续返回订阅消息**
```json
{
    "channel":"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]",
    "ts":1506584998239,
    "tick":{
        "id":1506602880,
        "amount":123.1221,
        "vol":1212.12211,
        "open":2233.22,
        "close":1221.11,
        "high":22322.22,
        "low":2321.22
    }
}
```

## 订阅-前24小时行情

未完待续. . .
