# API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Get | /api/animals/all | No | Get all animals in database | An Array of animal objects |
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