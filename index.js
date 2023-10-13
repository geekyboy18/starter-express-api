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
            console.log(Object.keys(response.returnValue)[1]);
             
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      	};
       function searchAndScreenPop() {
                //Invokes API method
                // queryParams : 'Key1=value1&Key2=value2',
                sforce.opencti.searchAndScreenPop({ 
                    searchParams : 'Burlington Textiles Corp of America',
                    callType : sforce.opencti.CALL_TYPE.INBOUND,
                    deferred: false,
                    callback : callback 
                });
        }

        var callbackForPopUp = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      	};
       	function screenPop() {
                sforce.opencti.screenPop({
                type: sforce.opencti.SCREENPOP_TYPE.NEW_RECORD_MODAL, 
                params: {scope:”Account”}, 
                callback: callback  });
        	}
    </script>
    </head>
    <body>
        <button onclick="searchAndScreenPop();">searchAndScreenPop</button>
        <button onclick="screenPop();">ScreenPop</button>
    </body>
    </html>`
	);
});
app.listen(process.env.PORT || 3000);
