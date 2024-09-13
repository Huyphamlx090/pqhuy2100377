import express from'express';
import dotenv from'dotenv/config';
import { default as date } from './date';
import getURL from './getURL';
import viewEngine from './viewEngine';
const app = express()
const port= process.env.PORT
viewEngine(app);
// dotenv.config()
app.get('/ejs', (req, res) => {
    res.render('test');
});
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.get( '/' , (req,res)  =>  {
    res.send ('Hello Word!')
})
app.get( '/about' , (req,res)  =>  {
    res.send ('Hello Word!.Page about')
})
app.get( '/date' , (req,res)  =>  {
    res.send(`${date()} <br>`);
    res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' });
})
app.get('/geturl',(req, res)=>{
    res.status(200).set({'Content-Type': 'text/html; charset=utf-8' });
    res.send(`${getURL.getPath(req)}<br/>`);
    res.send(`${getURL.getParamsURL(req)}<br/>`);
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

