const {createInterface} = require("node:readline");
const rl = createInterface({
  input : process.stdin,
  output : process.stdout
});

exports.input = (text)=>{
  return new Promise((resolve)=>{
    rl.question(text, (answer)=>{
      resolve(answer);
    });
  });
};

exports.closeInput = (text) => {
  console.clear;
  console.log(text);
  rl.close();
};