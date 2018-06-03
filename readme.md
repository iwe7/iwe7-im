在线聊天组件

components

| selector  | 说明     |
|-----------|--------|
| im-outlet | IM布局组件 |
| im-form   | 消息填写发送 |


布局
| selector    | 说明  |
|-------------|-----|
| [imContent] | 内容区 |
| [imHeader]  | 头部  |
| [imFooter]  | 底部  |

功能
| selector            | 说明     |
|---------------------|--------|
| [imContentOf]       | 聊天内容列表 |
| [imContentTemplate] | 聊天内容模板 |
| [imAvatar]          | 头像     |
| [imMessage]         | 消息     |
| [imMine]            | 我发送的消息 |
| [imNickname]        | 昵称     |
| [imSend]            | 发送按钮   |
| [imSystem]          | 系统消息   |
| [imText]            | 文本消息   |

```html
<im-outlet [imContentOf]="list">
  <im-form imFooter>
    <button imSend>发送</button>
  </im-form>
</im-outlet>
```