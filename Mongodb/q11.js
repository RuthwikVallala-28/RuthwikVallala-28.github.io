db.emp.find(
    {salary:{$gt:2000},
    department:"HR"
}
)

db.emp.find(
    { $or:[
        {salary:{$gt:2000}},
        {deparment:"HR"}
    ]

    }
)

db.emp.find(
    { $and:[{salary:{$gt:2000}},{department:"HR"}]},
    {name:1 , email:1},
)