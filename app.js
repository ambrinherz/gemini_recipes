const fs = require('fs');
const gemini = require('gemini-server');
const proc = require('process');

const options = {
	cert: fs.readFileSync('cert.pem'),
	key: fs.readFileSync('key.pem')
};

const app = gemini(options);

app.on('/desserts/kulfi',(req,res) => {
	res.file('recipes/desserts/kulfi.gmi');
});

app.on('/desserts/empanadas',(req,res) => {
    res.file('recipes/desserts/Sweet_Empanadas.gmi');
});
app.listen(() => {
	console.log("Listening...");
});

proc.on('SIGINT', () => {
	console.info("Interrupted");
	process.exit(0);
});
