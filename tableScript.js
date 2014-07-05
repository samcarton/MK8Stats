// based on Spazit's table from http://www.reddit.com/r/wiiu/comments/270x4z/mario_kart_8s_hidden_stats_table_with_pretty/
$(document).ready( function () {        
    var characterTable = $('#CharacterTable').dataTable( {
        "dom": 'C<"clear">Rlfrtip',
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
    new $.fn.dataTable.FixedColumns( characterTable, {
        leftColumns: 1
    } );
    
    var bodyTable = $('#BodyTable').dataTable( {
        "dom": 'C<"clear">Rlfrtip',
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
    new $.fn.dataTable.FixedColumns( bodyTable, {
        leftColumns: 2
    } );
    
    var tireTable = $('#TireTable').dataTable( {
        "dom": 'C<"clear">Rlfrtip',
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
    new $.fn.dataTable.FixedColumns( tireTable, {
        leftColumns: 1
    } );
    
    var gliderTable = $('#GliderTable').dataTable( {
        "dom": 'C<"clear">Rlfrtip',
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
    new $.fn.dataTable.FixedColumns( gliderTable, {
        leftColumns: 1
    } );
    
} );

