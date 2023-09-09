# deleteWebhook

Use this method to remove webhook integration if you decide to switch back to getUpdates. If successful, the method will return True.

## Parameters:

| Parameter              | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `drop_pending_updates` | Pass True to drop all pending updates. **Type:** `boolean` |

## Return Type:

`true`

## Usage:

```javascript
bot
  .deleteWebhook({
    drop_pending_updates: true, // Pass True to drop all pending updates
  })
  .then((data) => {
    console.log(data); // Output: true
  });
```
