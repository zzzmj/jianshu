## 

## combineReducers

使用 combineReducers 可以拆分Redux中的Reducer

```js
import {combineReducers} from 'redux'
import { reducer as headReducer } from '../common/header/store'

const reducer = combineReducers({
    header: headReducer
})

export default reducer
```

## immutable.js

生成不可变对象, 避免了我们在Reducer中重复拷贝state, 损失性能

使用`fromJS`将对象变为 `immutable`对象, 通过set和get方法设置属性和获取属性

