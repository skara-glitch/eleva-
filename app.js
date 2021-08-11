const express = require('express');
const app= express();
const cors=require('cors')


function food1(num){
    var food={
        "food_name" : "northIndian",
        "plates" : num
    }
    return food;
}
function food2(num){
    var food={
        "food_name" : "southIndian",
        "plates" : num
    }
    return food;
}
app.use(cors())
app.get("/zomato_order_food1",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food1(ordered_plates)
    response.json(order);
});

app.post("/swiggy_order_food1",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food1(ordered_plates)
    response.json(order);
});

app.put("/dunzo_order_food1",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food1(ordered_plates)
    response.json(order);
});

app.delete("/dominos_order_food1",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food1(ordered_plates)
    response.json(order);
});

app.get("/zomato_order_food2",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food2(ordered_plates)
    response.json(order);
});

app.post("/swiggy_order_food2",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food2(ordered_plates)
    response.json(order);
});

app.put("/dunzo_order_food2",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food2(ordered_plates)
    response.json(order);
});

app.delete("/dominos_order_food2",function (request,response) {
    var ordered_plates= request.query.plates;
    var  order= food2(ordered_plates)
    response.json(order);
});

app.listen(4002);
console.log("server program started running at port 4002");