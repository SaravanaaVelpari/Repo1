//schema for DB03
{
    _id : mongoose.Schema.ObjectId,
    category_id: Number,
    category_gender:String,
    category_name: String,
    service_list:{
        service_id: Number,
        service_name: String,
        average_time: Number
    }

}


// sample data - every object/entry is a Category

{
    _id : 1,
    category_id: 11,
    category_gender:'M',
    category_name: 'Cut & Style',
    service_list:{
        service_id: 03,
        service_name: ' Standard Hair Cut',
        average_time: 30
    }
}


// schema sample for DB02 (location)  - every object/entry is an area

{
    _id : 1
    city_id: 01,
    city_name:'Chennai',
    area_id: 252,
    area_name:'Mount Road',
    coordinates: {
        type: [Number],
        default: [0, 0],
      }
}