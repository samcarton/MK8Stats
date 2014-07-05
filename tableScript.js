$(document).ready( function () {        
    $('#CharacterTable').dataTable( {
        scrollX: true,
        paging: false,
        searching: false,
        info: false,
        "ajax": "CharacterTable.json",
        "columns": [
            {"data": "characters"},
            {"data": "speed"},
            {"data": "speedWater"},
            {"data": "speedAir"},
            {"data": "speedAntigravity"},
            {"data": "acceleration"},
            {"data": "weight"},
            {"data": "handling"},
            {"data": "handlingWater"},
            {"data": "handlingAir"},
            {"data": "handlingAntigravity"},
            {"data": "traction"},
            {"data": "miniturbo"},
            {"data": "totalAmount"}
        ]
    } );
    
    $('#BodyTable').dataTable( {
        scrollX: true,
        paging: false,
        searching: false,
        info: false,
        "ajax": "BodyTable.json",
        "columns": [
            {"data": "bodyType"},
            {"data": "bodyName"},
            {"data": "speed"},
            {"data": "speedWater"},
            {"data": "speedAir"},
            {"data": "speedAntigravity"},
            {"data": "acceleration"},
            {"data": "weight"},
            {"data": "handling"},
            {"data": "handlingWater"},
            {"data": "handlingAir"},
            {"data": "handlingAntigravity"},
            {"data": "traction"},
            {"data": "miniturbo"},
            {"data": "totalAmount"}
        ]
    } );
    
    $('#TireTable').dataTable( {
        scrollX: true,
        paging: false,
        searching: false,
        info: false,
        "ajax": "TireTable.json",
        "columns": [            
            {"data": "tireName"},
            {"data": "speed"},
            {"data": "speedWater"},
            {"data": "speedAir"},
            {"data": "speedAntigravity"},
            {"data": "acceleration"},
            {"data": "weight"},
            {"data": "handling"},
            {"data": "handlingWater"},
            {"data": "handlingAir"},
            {"data": "handlingAntigravity"},
            {"data": "traction"},
            {"data": "miniturbo"},
            {"data": "totalAmount"}
        ]
    } );
    
    $('#GliderTable').dataTable( {
        scrollX: true,
        paging: false,
        searching: false,
        info: false,
        "ajax": "GliderTable.json",
        "columns": [
            {"data": "gliderName"},
            {"data": "speed"},
            {"data": "speedWater"},
            {"data": "speedAir"},
            {"data": "speedAntigravity"},
            {"data": "acceleration"},
            {"data": "weight"},
            {"data": "handling"},
            {"data": "handlingWater"},
            {"data": "handlingAir"},
            {"data": "handlingAntigravity"},
            {"data": "traction"},
            {"data": "miniturbo"},
            {"data": "totalAmount"}
        ]
    } );
} );
