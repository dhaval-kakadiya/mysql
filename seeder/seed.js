const db =require('../config/db');
const{ User } = db

module.exports = async () => {
  try {
    const email= process.env.EMAIL
    const admin = await User.findOne({where:{email}})
    if (!admin) {
      const user = {
        first_name:  process.env.FIRST_NAME,
        last_name : process.env.LAST_NAME,
        email : process.env.EMAIL,
        password:  process.env.PASSWORD,
        role : 'admin'
      }
      
      const newUser = await User.create(user)
      console.log('Admin Seeded')
      console.log(newUser);
    } else {
      console.log('Admin exist')
    }
  } catch (error) {
    console.log(error)
  }
}
