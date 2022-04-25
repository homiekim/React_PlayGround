module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // id는 mySQL에서 기본적으로 넣어 줌
    userid: {
      type: DataTypes.STRING(30),
      allowNull : false, // 필수 요부
      unique : true, // 고유값 설정
    },
    nickname : {
      type: DataTypes.STRING(30),
      allowNull : false, // 필수 요부
    },
    password : {
      type: DataTypes.STRING(100),
      allowNull : false, // 필수 요부
    },
  },{
    // 한글 저장
    charset : 'utf8',
    collate : 'utf8_general_ci',
  });
 
  return User;
}