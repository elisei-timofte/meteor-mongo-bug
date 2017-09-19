# meteor-mongo-bug
replicates a mongo bug

My problem is that on the server (meteor shell) a mongo query returns nothing (as expected), but the minimongo driver on the client, returns an object.

This is the query: 
````
Elements.findOne({
  "_id": "1UniqIdForMyTest",
  "$or": [
    {
      "_items": {
        "$not": {
          "$elemMatch": {
            "type": "%"
          }
        }
      }
    },
    {
      "_items": {
        "$elemMatch": {
          "type": "%",
          "value": "rejected"
        }
      }
    },
    {
      "_items": {
        "$elemMatch": {
          "type": "%",
          "value": "reopened"
        }
      }
    }
  ]
})
````

Step to reproduce the issue:

1. run the app
2. Run the query in `meteor shell` -> outputs nothing
3. Run the query in the browser console -> returns the object

After some research I've noticed that if I remove the `$not` query (`{"_items":{"$not":{"$elemMatch":{"type":"%"}}}}`) it works fine. 

My meteor release is 1.5.2
I mention that I'm updating from METEOR@1.4.3.2. The bug is present on 1.5.1 and 1.5.2 (I couldn't check older versions)

