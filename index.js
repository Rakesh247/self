var app = require('express')();
var path = require('path');
var bodyParser = require('body-parser');
const exec = require('child_process').exec;

app.use(bodyParser.json({
    limit:'50mb'
}));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/start',function(req,res){
        exec('echo "helloWorld"',
        (error, stdout, stderr) => {
            if(!error){
                console.log(`${stdout}`);
                res.status(200).send("Successfully Started the App");
            }else{
                console.log("error while starting app : ",`${stderr}`);
                res.status(500).send("Error Occured while starting the app");
            }          
            
        });
})

app.get('/restart',function(req,res){
    exec('echo "helloWorld"',
    (error, stdout, stderr) => {
        if(!error){
            console.log(`${stdout}`);
            res.status(200).send("Successfully restarted the App");
        }else{
            console.log("error while restarting app : ",`${stderr}`);
            res.status(500).send("Error Occured while restarting the app");
        }          
    });
})

app.listen(8080,function(){
    console.log("Listening on port 8080");
})
