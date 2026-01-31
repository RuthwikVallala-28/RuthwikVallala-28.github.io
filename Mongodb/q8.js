db.emp.updateMany(
    {},
    {$set:{points:0}}          // update all with having the points
)

db.emp.updateMany(
    {department:"HR"},
    {$set:{points:5}}          // update all with having the points
)

db.emp.updateMany(
    {},
    {$inc:{points:1}}          // update all with increment by 1 having the points
)

db.emp.updateMany(
    {},
    {$rename:{"points":"score"}}   // it will rename the points to score
)

db.emp.updateMany(
    {},
    {$unset:{"score":""}}            // it will unset the score or it will remove
)