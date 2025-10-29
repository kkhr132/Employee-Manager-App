const { request } = require("./src/app");
const app =require("./src/app.js")

const port = process.env.PORT || 4500

app.listen(port,() => {
    console.log(`the app is listen at http://localhost:${port}`);
})