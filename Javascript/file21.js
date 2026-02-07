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

 verify(23).then((a)=>admit(a)).catch((err)=>console.log(err))

//verify(5).then((a)=>admit(a)).catch((err)=>console.log(err))