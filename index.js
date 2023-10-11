const express = require("express");
const app = express();
app.all("/", (req, res) => {
	console.log("Just got a request!");
	res.send(`<html>
	<head>
		<script type="text/javascript" src="./script.js"></script>
		<script type="text/javascript">
			var callback = function (response) {
				if (response.success) {
					console.log("API method call executed successfully! returnValue:", response.returnValue);
				} else {
					console.error("Something went wrong! Errors:", response.errors);
				}
			};
			function searchAndScreenPop() {
				//Invokes API method
				sforce.opencti.searchAndScreenPop({ searchParams: "Acme", queryParams: "Key1=value1&Key2=value2", callType: sforce.opencti.CALL_TYPE.INBOUND, deferred: false, callback: callback });
			}
		</script>
	</head>
	<body>
		<button onclick="searchAndScreenPop();">searchAndScreenPop</button>
	</body>
</html>
`);
});
app.listen(process.env.PORT || 3000);
