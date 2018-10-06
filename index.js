const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/questions', (req,res) => {
	var questions = [
		{
			question: 'Czy jakość naszego życia i ludzkie przetrwanie oparte jest o prawidłowe rozpoznanie rzeczywistości?',
			mindYes: 4,
			mindNo: -8,
			egoYes: 1,
			egoNo: -1
		},
		{
			question: 'Czy uważasz podatki za formę kradzieży?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy mamy moralny obowiązek chronić środowisko naturalne, nawet jeśli nasze przetrwanie nie zależy od jego zachowania?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy moralnie uzasadnione jest zagwarantowanie minimalnego dochodu podstawowego dla najbiedniejszych?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy nierówności społeczne stanowią problem?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy Twoim zdaniem istnieje życie po śmierci?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy gdybyś mógł ocalić milion obcych Ci osób, zrobiłbyś to kosztem ukochanej Ci osoby?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy opieka zdrowotna, schronienie, pokarm lub dochód stanowi nieodzowne prawo człowieka?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy państwo winno chronić rynek przed monopolami?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		},
		{
			question: 'Czy pomaganie potrzebującym, obcym ludziom jest cnotą?',
			mindYes: 3,
			mindNo: -1,
			egoYes: 7,
			egoNo: -4
		}
	]
	res.json(questions);
	console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
