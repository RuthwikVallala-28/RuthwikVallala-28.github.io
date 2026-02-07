db.emp.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:{
                    if:{$gt:["$salary",3000]},
                    then: "Grade A",
                    else: "Grade B",
                },
            },

        },
    },
])

db.emp.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $switch:{
                branches:[
                    {case:{$gt:["$salary",3000]},then:"Grade A"},
                    {case:{$gt:["$salary",2500]},then:"Grade B"},
                    {case:{$gt:["$salary",2000]},then:"Grade c"},
                ],
                default:"Grade D"
            }
        }
    }}
])