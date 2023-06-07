const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // aqui inserimos o datatype da coluna criada
    phoneNum: DataTypes.STRING,
  });
    (async () => {
      await sequelize.sync({ force: true });

      const sara = User.build({
        fullName: 'Sara Silva Santos',
        email: 'sara.ss@trybe.com',
      });
        console.log(sara instanceof User); // true
        console.log(sara.fullName); // "Sara Silva Santos"
        await sara.save(); 
        console.log('Pessoa salva no banco de dados!');
      
//////////////////////////////////////////
      const lucas = await User.create({
        fullName: 'Lucas Silva Santos',
        email: 'lucas.ss@trybe.com',
      });
      lucas.set({
        fullName: "Pedro Silva Santos",
        email: "pedro.ss@trybe.com"
      });
      // O nome ainda está "Lucas Silva Santos" no banco de dados!
      await lucas.save();
      // Agora o nome foi atualizado para "Pedro Silva Santos", e o email para pedro.ss@trybe.com no banco de dados!
//////////////////////////////////////////
    })();

  return User;
};
//////////////////////////////////////////
// const sara2 = await User.create({
//   fullName: 'Sara Silva Santos',
//   email: 'sara.ss@trybe.com',
//   });
//   console.log(sara instanceof User); // true
//   console.log(sara.name); // "Sara Silva Santos"
//////////////////////////////////////////
  // const sara3 = await User.create({
  //   fullName: 'Sara Silva Santos',
  //   email: 'sara.ss@trybe.com',
  // });
  // console.log(sara.fullName); // "Sara Silva Santos"
  // O nome ainda está "Sara Silva Santos" no banco de dados!
  // sara.fullName = "Jane Doe";
  
  // Agora o nome foi atualizado para "Jane Doe" no banco de dados!

  // const mario = await User.create({ fullName: "Mario Bors" });
  // console.log(mario.fullName); // "Mario Bors"
  // await mario.destroy();
  // Agora essa entrada não existe mais no banco de dados!
//////////////////////////////////////////

module.exports = UserModel;