/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

var films = [];
var series = [];
var tekenfilms = [];

// Genereer een stapel films en series. Natuurlijk zou hier echte data moeten komen.
for (i = 1; i <= 20; i++)
{
    films.push({
        "Naam": "Film " + i, 
        "Genre": "Genre " + i,
        "OmschrijvingKort": "Korte omschrijving film " + i,
        "Omschrijving": "Dit is een langere omschrijving voor film " + i + "."
    });
    
    series.push({
        "Naam": "Serie " + i, 
        "Genre": "Genre " + i,
        "OmschrijvingKort": "Korte omschrijving serie " + i,
        "Omschrijving": "Dit is een langere omschrijving voor serie " + i + "."
    });
    
    tekenfilms.push({
        "Naam": "Tekenfilm " + i, 
        "Genre": "Genre " + i,
        "OmschrijvingKort": "Korte omschrijving tekenfilm " + i,
        "Omschrijving": "Dit is een langere omschrijving voor tekenfilm " + i + "."
    });
}

$(document).ready(function() {
    var output = '';

    $.each(films, function(index,value) {
        output += "<li id=" + index + "><a href=\"#filmdetail\"><img src=\"img/logo.png\"><h2>" + value.Naam + "</h2><p>" + value.OmschrijvingKort + "</p></a></li>";
    });
    
    $("#filmList").append(output).listview().listview("refresh");
    
    output = '';
    
    $.each(series, function(index,value) {
        output += "<li id=" + index + "><a href=\"#seriedetail\"><img src=\"img/logo.png\"><h2>" + value.Naam + "</h2><p>" + value.OmschrijvingKort + "</p></a></li>";
    });
    
    $("#seriesList").append(output).listview().listview("refresh");
    
    output = '';
    
    $.each(tekenfilms, function(index,value) {
        output += "<li id=" + index + "><a href=\"#tekenfilmdetail\"><img src=\"img/logo.png\"><h2>" + value.Naam + "</h2><p>" + value.OmschrijvingKort + "</p></a></li>";
    });
    
    $("#tekenfilmList").append(output).listview().listview("refresh");
    
    
    
    $("a[href='#filmdetail']").click(function(e) { 
        listItem = $(e.target);
        
        while ($(listItem).prop("tagName") != "LI")
        {
            listItem = $(listItem).parent();
        }
        id = $(listItem).attr("id"); 
        film = films[id];
        
        filmInfo = $("#filmInfo");
        
        $(".titel", filmInfo).html(film.Naam);
        $(".genre", filmInfo).html(film.Genre);
        $(".omschrijving", filmInfo).html(film.Omschrijving);
        
        $(filmInfo).table().table( "refresh" );
    });
    
    $("a[href='#seriedetail']").click(function(e) { 
        listItem = $(e.target);
        
        while ($(listItem).prop("tagName") != "LI")
        {
            listItem = $(listItem).parent();
        }
        id = $(listItem).attr("id"); 
        serie = series[id];
        
        serieInfo = $("#serieInfo");
        
        $(".titel", serieInfo).html(serie.Naam);
        $(".genre", serieInfo).html(serie.Genre);
        $(".omschrijving", serieInfo).html(serie.Omschrijving);
        
        $(serieInfo).table().table( "refresh" );
    });
    
    $("a[href='#tekenfilmdetail']").click(function(e) { 
        listItem = $(e.target);
        
        while ($(listItem).prop("tagName") != "LI")
        {
            listItem = $(listItem).parent();
        }
        id = $(listItem).attr("id"); 
        tekenfilm = tekenfilms[id];
        
        tekenfilmInfo = $("#tekenfilmInfo");
        
        $(".titel", tekenfilmInfo).html(tekenfilm.Naam);
        $(".genre", tekenfilmInfo).html(tekenfilm.Genre);
        $(".omschrijving", tekenfilmInfo).html(tekenfilm.Omschrijving);
        
        $(tekenfilmInfo).table().table( "refresh" );
    });
});