 db.emp.find(
     {department:"HR"},   //  It will filter according to deparment hr and display
 )
 db.emp.find(
     {department:"HR"},   //filter
     {name:1}             //It will give you name(which is column) 1(which is True) others are by default Zero(false)
                            // it will print the name of the deparment hr
)
db.emp.find(
   {department:"HR"},
   {name:1,email:1}     // it will print the name and email of the deparment hr
)

db.emp.find(
     {department:"HR"},
     {_id:0,name:1,email:1}     // it will remove the id in the statement.
 )

db.emp.find(
    {},                     // filter is empty
    {name:1,_id:0}          // it will give only names 
)

db.emp.find().sort({name:1});  // sort the names ascending order
db.emp.find().sort({name:-1});  // sort the names decsending order

db.emp.find(
    {},
    {_id:0,name:1}
).sort({name:1})                // gives only name in sorted order

db.emp.find(
    {},
    {_id:0,name:1}
).sort({name:1}).limit(3);      //gives only names and also with the limit 3 memebers


db.emp.find(
    {},
    {_id:0,name:1}
).sort({name:1}).limit(3).skip(1)  //gives only names and also with the limit 3 memebers and also skipping 1 memeber

db.emp.find(
    {salary:{$gt:3000}},        // give me the salary greater than salary  ($gt)-->(greater than)
    {_id:0,name:1,salary:1}
)

db.emp.find(
    {salary:{$lt:3000}},        
    {_id:0,name:1,salary:1}    // give me the salary lesser than salary  ($gt)-->(lesser than)
)

db.emp.find(
    {salary:{$gte:3000}},         // give me the salary greater then equal salary  ($gte)-->(greater than equal)
    {_id:0,name:1,salary:1}    
)

db.emp.find(
    {salary:{$lte:3000}},         // give me the salary lesser then equal salary  ($lte)-->(lesser than equal)
    {_id:0,name:1,salary:1}    
)

db.emp.find(
    {department:{$eq:"HR"}}       // give me the equal to hr
)

db.emp.find(
    {department:{$ne:"HR"}}    // gives me the not equal to hr
)
