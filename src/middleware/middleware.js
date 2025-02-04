async function middleware(req,res,next) {
    const {name,email} = req.body;
    if (!name || !email) {
        console.log("error")
        return res.status(400).json({messege:"name and email are required"})
    }
    console.log("midlleware is running");
    next();
}

module.exports = {middleware}

