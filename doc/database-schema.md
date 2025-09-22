# Database schema

## Users

```ts
{
    "_id": ObjectId("1"),
    "first_name": "Name",
    "last_name": "Surname",
    "email": "example@gmail.com",
    "password": "HashedPassword",
    "image"?: 1010101010110,
    "created_at": ISODate("2024-01-01T14:30:00Z"),
    "updated_at"?: ISODate("2024-01-01T14:30:00Z"),
    "role": "student|teacher|admin",
    "data": {
      // user - related data, maybe user class, subject taught  by the teacher, everything can be useful about the user profile
    }
}
```

## Exams

```ts
[
  {
    _id: ObjectId(""),
    name: "Esame di Matematica",
    created_at: ISODate("2024-01-20T10:00:00Z"),
    updated_at: ISODate("2024-01-20T10:00:00Z"),
    created_by: ObjectId(""), //id del docente che fa l'esame
    schedule_date: ISODate("2024-01-20T10:00:00Z"), // data dell'esame
    max_time: 90,
    questions: [
      {
        _id: ObjectId("..."),
        text: "Qual è il risultato di 5 + 5?",
        type: "multiple_choice",
        answers: [
          { _id: ObjectId("..."), answer: "10", isCorrect: true },
          { _id: ObjectId("..."), answer: "2", isCorrect: false },
        ],
      },
      {
        _id: ObjectId("..."),
        text: "Quanto fa 10 / 2 ?",
        type: "multiple_choice",
        answers: [
          { _id: ObjectId("..."), answer: "10", isCorrect: false },
          { _id: ObjectId("..."), answer: "5", isCorrect: true },
        ],
      },
    ],
  },
];
```

## Subscriptions

```ts
[
  {
    _id: ObjectId(""),
    student_id: ObjectId(""),
    exam_id: ObjectId(""),
    questions: [
      {
        question_id: ObjectId("..."),
        responses: [
          {
            answer_id: ObjectId("..."),
          },
        ],
      },
    ],
  },
];
```
