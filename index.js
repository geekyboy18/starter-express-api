const express = require("express");
const app = express();
app.use(express.static(__dirname));
app.all("/", (req, res) => {
	console.log("Just got a request!");
	res.send(
		`<html>
    <head>
   <script type="text/javascript" src="./script.js"></script>
   <script type="text/javascript">
      	
        var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      	};
       	
        function screenPop() {
                sforce.opencti.screenPop({
                type: sforce.opencti.SCREENPOP_TYPE.NEW_RECORD_MODAL, 
                params: {entityName: "Account"}, 
                callback: callback  });
        }
    </script>
    </head>
    <body>
        <button onclick="screenPop();">New Account</button>
    </body>
    </html>`
	);
});
app.listen(process.env.PORT || 3000);
