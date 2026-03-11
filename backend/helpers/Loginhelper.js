const bcrypt= require("bcrypt");
exports.comparePassword=async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}