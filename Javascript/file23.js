const url = "https://jsonplaceholder.typicode.com/users";
const main = async()=>{
    const res = await fetch(url);
    const data = await res.json();
    data.map((i)=>{
        console.log(i);
    });
};

main();