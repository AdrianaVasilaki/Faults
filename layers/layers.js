var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_HERAKLION_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "HERAKLION_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/HERAKLION_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2782936.708685, 4197733.640800, 2811101.094965, 4230658.670191]
                            })
                        });
var lyr_GIS_TOPO_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "GIS_TOPO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GIS_TOPO_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2795467.977315, 4209928.846319, 2795678.445016, 4210084.579236]
                            })
                        });
var lyr_Faults_Mikroz_cropped_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Faults_Mikroz_cropped",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Faults_Mikroz_cropped_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2794889.655407, 4208774.898679, 2796542.639031, 4210311.523003]
                            })
                        });
var format_possible_faults_4 = new ol.format.GeoJSON();
var features_possible_faults_4 = format_possible_faults_4.readFeatures(json_possible_faults_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_possible_faults_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_possible_faults_4.addFeatures(features_possible_faults_4);
var lyr_possible_faults_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_possible_faults_4, 
                style: style_possible_faults_4,
                interactive: true,
                title: '<img src="styles/legend/possible_faults_4.png" /> possible_faults'
            });
var format_visible_faults_5 = new ol.format.GeoJSON();
var features_visible_faults_5 = format_visible_faults_5.readFeatures(json_visible_faults_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_visible_faults_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_visible_faults_5.addFeatures(features_visible_faults_5);
var lyr_visible_faults_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_visible_faults_5, 
                style: style_visible_faults_5,
                interactive: true,
                title: '<img src="styles/legend/visible_faults_5.png" /> visible_faults'
            });
var format_faults_major_6 = new ol.format.GeoJSON();
var features_faults_major_6 = format_faults_major_6.readFeatures(json_faults_major_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faults_major_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faults_major_6.addFeatures(features_faults_major_6);
var lyr_faults_major_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_faults_major_6, 
                style: style_faults_major_6,
                interactive: true,
                title: '<img src="styles/legend/faults_major_6.png" /> faults_major'
            });
var format_SeisimicLines_7 = new ol.format.GeoJSON();
var features_SeisimicLines_7 = format_SeisimicLines_7.readFeatures(json_SeisimicLines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeisimicLines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeisimicLines_7.addFeatures(features_SeisimicLines_7);
var lyr_SeisimicLines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeisimicLines_7, 
                style: style_SeisimicLines_7,
                interactive: true,
    title: 'Seisimic Lines<br />\
    <img src="styles/legend/SeisimicLines_7_0.png" /> 1<br />\
    <img src="styles/legend/SeisimicLines_7_1.png" /> 2<br />\
    <img src="styles/legend/SeisimicLines_7_2.png" /> <br />'
        });
var format_egsa_8 = new ol.format.GeoJSON();
var features_egsa_8 = format_egsa_8.readFeatures(json_egsa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egsa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egsa_8.addFeatures(features_egsa_8);
var lyr_egsa_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_egsa_8, 
                style: style_egsa_8,
                interactive: true,
                title: '<img src="styles/legend/egsa_8.png" /> egsa'
            });
var format_egsa1_9 = new ol.format.GeoJSON();
var features_egsa1_9 = format_egsa1_9.readFeatures(json_egsa1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egsa1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egsa1_9.addFeatures(features_egsa1_9);
var lyr_egsa1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_egsa1_9, 
                style: style_egsa1_9,
                interactive: true,
                title: '<img src="styles/legend/egsa1_9.png" /> egsa1'
            });
var format_Photos_10 = new ol.format.GeoJSON();
var features_Photos_10 = format_Photos_10.readFeatures(json_Photos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_10.addFeatures(features_Photos_10);
var lyr_Photos_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_10, 
                style: style_Photos_10,
                interactive: true,
                title: '<img src="styles/legend/Photos_10.png" /> Photos'
            });
var format_Photos_tagged_11 = new ol.format.GeoJSON();
var features_Photos_tagged_11 = format_Photos_tagged_11.readFeatures(json_Photos_tagged_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_tagged_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_tagged_11.addFeatures(features_Photos_tagged_11);
var lyr_Photos_tagged_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_tagged_11, 
                style: style_Photos_tagged_11,
                interactive: true,
                title: 'Photos_tagged'
            });

lyr_Googlesatellite_0.setVisible(true);lyr_HERAKLION_modified_1.setVisible(true);lyr_GIS_TOPO_2.setVisible(true);lyr_Faults_Mikroz_cropped_3.setVisible(true);lyr_possible_faults_4.setVisible(true);lyr_visible_faults_5.setVisible(true);lyr_faults_major_6.setVisible(true);lyr_SeisimicLines_7.setVisible(true);lyr_egsa_8.setVisible(true);lyr_egsa1_9.setVisible(true);lyr_Photos_10.setVisible(true);lyr_Photos_tagged_11.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_HERAKLION_modified_1,lyr_GIS_TOPO_2,lyr_Faults_Mikroz_cropped_3,lyr_possible_faults_4,lyr_visible_faults_5,lyr_faults_major_6,lyr_SeisimicLines_7,lyr_egsa_8,lyr_egsa1_9,lyr_Photos_10,lyr_Photos_tagged_11];
lyr_possible_faults_4.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_visible_faults_5.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_faults_major_6.set('fieldAliases', {'Id': 'Id', 'Code': 'Code', });
lyr_SeisimicLines_7.set('fieldAliases', {'id': 'id', 'Seism_Line': 'Seism_Line', 'By': 'By', });
lyr_egsa_8.set('fieldAliases', {'χ': 'χ', 'Y': 'Y', 'H': 'H', 'ID': 'ID', });
lyr_egsa1_9.set('fieldAliases', {'χ': 'χ', 'Y': 'Y', 'H': 'H', 'ID': 'ID', });
lyr_Photos_10.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Photos_tagged_11.set('fieldAliases', {'fid': 'fid', });
lyr_possible_faults_4.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_visible_faults_5.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_faults_major_6.set('fieldImages', {'Id': 'Range', 'Code': 'TextEdit', });
lyr_SeisimicLines_7.set('fieldImages', {'id': 'TextEdit', 'Seism_Line': 'TextEdit', 'By': 'TextEdit', });
lyr_egsa_8.set('fieldImages', {'χ': 'TextEdit', 'Y': 'TextEdit', 'H': 'TextEdit', 'ID': 'TextEdit', });
lyr_egsa1_9.set('fieldImages', {'χ': 'TextEdit', 'Y': 'TextEdit', 'H': 'TextEdit', 'ID': 'TextEdit', });
lyr_Photos_10.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Photos_tagged_11.set('fieldImages', {'fid': '', });
lyr_possible_faults_4.set('fieldLabels', {'LAYER': 'no label', });
lyr_visible_faults_5.set('fieldLabels', {'LAYER': 'no label', });
lyr_faults_major_6.set('fieldLabels', {'Id': 'no label', 'Code': 'no label', });
lyr_SeisimicLines_7.set('fieldLabels', {'id': 'no label', 'Seism_Line': 'no label', 'By': 'no label', });
lyr_egsa_8.set('fieldLabels', {'χ': 'no label', 'Y': 'no label', 'H': 'no label', 'ID': 'no label', });
lyr_egsa1_9.set('fieldLabels', {'χ': 'no label', 'Y': 'inline label', 'H': 'no label', 'ID': 'no label', });
lyr_Photos_10.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Photos_tagged_11.set('fieldLabels', {'fid': 'no label', });
lyr_Photos_tagged_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});