const user = {
  name:"sato",
  great:() => {
    let name = "saito";
    console.log(`こんにちは！${user.name}です`);
    console.log(`こんにちは！${name}です`);
  }
}
user.great(); 
// こんにちは！satoです
// こんにちは！saitoです