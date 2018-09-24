# API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/animals/all | No | Get all animals in database | An Array of animal objects |
| Get | /api/animals/:animal | No | Get all animals of parameter type ("dogs", "pandas", "sloths", "aye-ayes", "cats") | An Array of animal objects |
| Post | /api/animals/vote | No | Update animal votes by sending back animal ID | The animal object that has been voted on |

## API Request & Response Formats

### GET /api/animals/all

#### Response: 
```
[
  {
    "id": 1,
    "type": "panda",
    "imgSrc": "panda1.jpg",
    "votes": 5
  },
  {
    "id": 2,
    "type": "panda",
    "imgSrc": "panda2.jpg",
    "votes": 3
  },
  {
    "id": 3,
    "type": "dog",
    "imgSrc": "dog1.jpg",
    "votes": 26
  }
]
```

### GET /api/animals/:animal

#### Response: 
```
[
  {
    "id": 1,
    "type": "panda",
    "imgSrc": "panda1.jpg",
    "votes": 5
  },
  {
    "id": 2,
    "type": "panda",
    "imgSrc": "panda2.jpg",
    "votes": 3
  }
]
```

### POST /api/animals/vote

#### Request: 
```
{
  "id": 1
}
```

#### Response: 
```
{
  "id": 1,
  "type": "panda",
  "imgSrc": "panda1.jpg",
  "votes": 5
}
```