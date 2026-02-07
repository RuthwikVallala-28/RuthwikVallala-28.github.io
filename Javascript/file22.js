const verify = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve("pass");
      } else {
        reject("Access Denied");
      }
    }, 2000);
  });
};

const admit = (flag) => {
  if (flag === "pass") {
    console.log("Welcome");
  }
};

const main = async()=>{
    try{
    const result = await verify(20);
    admit(result);
    }
    catch(err){
        console.log(err);
    }
}
main();