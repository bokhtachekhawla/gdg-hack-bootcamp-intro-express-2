async function middleware(req,res,next) {
    console.log("midlleware is running");
    next();
}

module.exports = {middleware}

