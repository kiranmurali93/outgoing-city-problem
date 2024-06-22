# Problem: Find out the cities which don't have outgoing path.

Example Input

```
direct_paths = 
   (NewYork -> Washington), 
   (Washington -> Chicago),
   (Chicago -> Austin)
   (Chicago -> NewYork)
   (Washington -> Houston)
```

Example Output

```[Austin, Houston]```

----

## Solution

### Implementation 1
- ``test.js`` contains a simple solution implemented in js.

### Implementation 2

- Created a web app with most minimal external libraries.
- ``index.html`` contains the ui to accept the inputs, list the added paths and finally a button to get cities with no outgoing path.
- ``index.js`` contains the api endpoints.