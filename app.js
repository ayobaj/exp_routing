const express = require('express');
const app = express();
const path = require('path');
const port = 5000;


//i made use of a middleware that is why you've got next passed in as parameter to the CB function 
const Time = (req, res, next) => {
    const date = new Date();
    const weekDay = date.getDay();
    const hour = date.getHours();

    // the condition

    {weekDay >= 1 && weekDay <=5 && hour >= 9 && hour < 17 ? 
    
        next() : res.send('Time out. Check back during 9am - 5pm  (Mon - Fri) ')
    }
}


app.use(express.static(path.join(__dirname, 'public')));
app.use(Time);


// i set the template engine as ejs and the views directory with the path.join method

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/services', (req, res) => {
    res.render('services')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
});