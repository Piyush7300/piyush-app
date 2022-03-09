const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 300;

const static = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../template/views")
const partials_path = path.join(__dirname,"../template/partials")


app.set('viewengine','hbs');
app.set('views',template_path)
hbs.registerPartials(partials_path)
app.use(express.static(static))






app.get("",(req ,res)=>{
  res.render("index.hbs ");
})
app.get("/about",(req ,res)=>{
    res.render("about.hbs");
  })
  app.get("/weather",(req ,res)=>{
    res.render("weather.hbs");
  })
  app.get("*",(req ,res)=>{
    res.render("error.hbs",({
        errormsg: "opps something went wrong"
    }));
  })

app.listen(port,()=>{
    console.log(`server listen on the port ${port}`)
})