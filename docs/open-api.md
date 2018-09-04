# OpenAPI接口文档

## 获取全部委托

`/open/api/all_order`

| 参数        | 填写类型 | 说明  |
| ---------- | ------- | ----- |
| symbol     | 必填     | 市场标记，btcusdt, 详情看下面 |
| pageSize   | 选填     | 页面大小 |
| page       | 选填     | 页码    |
| api_key    | 必填     | api_key | 
| time       | 必填     | 时间戳   |
| sign       | 必填     | 签名     |

```json
{
    "count":10,
    "orderList":[
        {
            "side":"BUY",
            "total_price":"0.10000000",
            "created_at":1510993841000,
            "avg_price":"0.10000000",
            "countCoin":"btc",
            "source":1,
            "type":1,
            "side_msg":"买入",
            "volume":"1.000",
            "price":"0.10000000",
            "source_msg":"WEB",
            "status_msg":"完全成交",
            "deal_volume":"1.00000000",
            "id":424,
            "remain_volume":"0.00000000",
            "baseCoin":"eth",
            "tradeList":[
                {
                    "volume":"1.000",
                    "feeCoin":"YLB",
                    "price":"0.10000000",
                    "fee":"0.16431104",
                    "ctime":1510996571195,
                    "deal_price":"0.10000000",
                    "id":306,
                    "type":"买入"
                }
            ],
            "status":2
        },
        {
            "side":"SELL",
            "total_price":"0.09900000",
            "created_at":1510993715000,
            "avg_price":"0.10000000",
            "countCoin":"btc",
            "source":1,
            "type":1,
            "side_msg":"卖出",
            "volume":"1.000",
            "price":"0.09900000",
            "source_msg":"WEB",
            "status_msg":"完全成交",
            "deal_volume":"1.00000000",
            "id":423,
            "remain_volume":"0.00000000",
            "baseCoin":"eth",
            "tradeList":[
                {
                    "volume":"1.000",
                    "feeCoin":"YLB",
                    "price":"0.10000000",
                    "fee":"0.16597075",
                    "ctime":1510993723973,
                    "deal_price":"0.10000000",
                    "id":261,
                    "type":"卖出"
                }
            ],
            "status":2
        }
    ]
}
```
## 获取全部成交记录

未完待续. . .
