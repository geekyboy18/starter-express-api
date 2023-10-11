const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.all("/", (req, res) => {
	console.log("Just got a request!");
	res.send("Hello");
});
app.listen(process.env.PORT || 3000);
