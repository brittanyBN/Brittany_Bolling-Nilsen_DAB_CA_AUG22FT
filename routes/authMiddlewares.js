const db = require("../models");
const UserServices = require("../services/UserService");
const userServices = new UserServices(db);

    const isAdmin = async (req, res, next) => {
        console.log(req.user);
        if(!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }


const user = await userServices.getUserById(req.user.id);
console.log(req.user);
if (user.dataValues.Role.role !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
}
return next();
}

module.exports = isAdmin;