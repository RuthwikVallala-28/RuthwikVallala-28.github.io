db.emp.updateOne(
    {email:"amy@gmail.com"},
    {$set:{salary:3500}}           // update the salary
)

db.emp.updateOne(
    {email:"abc@gmail.com"},
    {$set:{salary:3500},_id:0},
    {upsert:true}                // if it is there it will update or it will insert
)

db.emp.updateOne(
    {email:"abc@gmail.com"},
    {$set:{name:"ABC"}},
    {upsert:true}                //  Upsert-->if it is there it will update or it will insert
)

db.emp.deleteOne(
    {email:"abc@gmail.com"}
)