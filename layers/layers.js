var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_responsigunungkidulfaruqgunungkidul_kc_1 = new ol.format.GeoJSON();
var features_responsigunungkidulfaruqgunungkidul_kc_1 = format_responsigunungkidulfaruqgunungkidul_kc_1.readFeatures(json_responsigunungkidulfaruqgunungkidul_kc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_responsigunungkidulfaruqgunungkidul_kc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_responsigunungkidulfaruqgunungkidul_kc_1.addFeatures(features_responsigunungkidulfaruqgunungkidul_kc_1);
var lyr_responsigunungkidulfaruqgunungkidul_kc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_responsigunungkidulfaruqgunungkidul_kc_1, 
                style: style_responsigunungkidulfaruqgunungkidul_kc_1,
                popuplayertitle: 'responsi gunungkidul faruq — gunungkidul_kc',
                interactive: true,
    title: 'responsi gunungkidul faruq — gunungkidul_kc<br />\
    <img src="styles/legend/responsigunungkidulfaruqgunungkidul_kc_1_0.png" /> 94,06 - 96,13<br />\
    <img src="styles/legend/responsigunungkidulfaruqgunungkidul_kc_1_1.png" /> 96,13 - 97,14<br />\
    <img src="styles/legend/responsigunungkidulfaruqgunungkidul_kc_1_2.png" /> 97,14 - 97,84<br />\
    <img src="styles/legend/responsigunungkidulfaruqgunungkidul_kc_1_3.png" /> 97,84 - 98,62<br />\
    <img src="styles/legend/responsigunungkidulfaruqgunungkidul_kc_1_4.png" /> 98,62 - 100,36<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_responsigunungkidulfaruqgunungkidul_kc_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_responsigunungkidulfaruqgunungkidul_kc_1];
lyr_responsigunungkidulfaruqgunungkidul_kc_1.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'join_Rasio Jenis Kelamin': 'join_Rasio Jenis Kelamin', });
lyr_responsigunungkidulfaruqgunungkidul_kc_1.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'join_Rasio Jenis Kelamin': 'TextEdit', });
lyr_responsigunungkidulfaruqgunungkidul_kc_1.set('fieldLabels', {'fid': 'header label - always visible', 'WADMKC': 'inline label - always visible', 'join_Rasio Jenis Kelamin': 'inline label - always visible', });
lyr_responsigunungkidulfaruqgunungkidul_kc_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});