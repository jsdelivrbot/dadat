const tbp = require('thepiratebay')
const express = require('express')
const app=express()
var data="hiiiiiii"

app.get('/:name',(req,res) =>
{
    tbp.search(req.params.name,{
      category:205
    }).then(results => console.log(data=results))
    .catch(err => console.log(err))

    res.send("{'api':"+JSON.stringify(data)+"}")
})

var port=process.env.PORT || 8080
app.listen(port,()=> console.log(`im listneing at   ${port}`));
