const fs = require('fs');
const gemini = require('gemini-server');
const proc = require('process');

const options = {
	cert: fs.readFileSync('cert.pem'),
	key: fs.readFileSync('key.pem')
};

const app = gemini(options);

app.on('/desserts/kulfi',(req,res) => {
	const content = fs.readFileSync('recipes/desserts/kulfi.gmi');
	res.data(content, mimeType='text/gemini');
});

app.listen(() => {
	console.log("Listening...");
});

proc.on('SIGINT', () => {
	console.info("Interrupted");
	process.exit(0);
});
