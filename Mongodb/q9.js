db.emp.aggregate(
    {$match:{department:"HR"}}
)
db.emp.aggregate(
    {$project:{_id:1,name:0}}
)
db.emp.aggregate(
    {$match:{ department:"HR"}},     // it will match with the Hr and give those people
    {$project:{_id:1,name:1}},       // it will group hr people with display name
);

db.emp.aggregate(
    {$group:{_id:"$department",total:{$sum:"$salary"}}}    // it will combine all and make group and display department and salary
)
db.emp.aggregate(
    {$group:{_id:"$department",total:{$sum:"$salary"}}}
)