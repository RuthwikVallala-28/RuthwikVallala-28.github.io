db.emp.aggregate(
    {$sort:{name:1}},
);

db.emp.aggregate(
    {$limit:3},
);

db.emp.aggregate(
    {$skip:1},
);

db.emp.aggregate(
    {$match:{department:"HR"}},
    {$sort:{name:1}},
    {$limit:3},
    {$skip:1},
    {$project:{name:1,email:1}}
);