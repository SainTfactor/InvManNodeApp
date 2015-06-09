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
        //intel.xdk.device.hideSplashScreen();
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $("#searchButton")[0].addEventListener("click", this.searchClick, false);
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
        
    },
    // Update DOM on a Received Event
    searchClick: function() {
        $("#ResultsBox").html("Waiting...");
        
        console.log("onetwothree");
        
        //cordova.plugins.barcodeScanner.scan(
        var scanner;
        try
        {            
            //scanner = cordova.require("cordova/plugin/BarcodeScanner");
            //scanner = cordova.require("com.phonegap.plugins.barcodescanner.BarcodeScanner");
            scanner = cordova.require("cordova/plugin/BarcodeScanner");            
        }
        catch(err)
        {
            alert(err);
        }
        
        scanner.scan(
            function (result) {
                app.runAjax(result.text, $("#targetIP").val());
                /*alert(result);
                alert("We got a barcode\n" +
                      "Result: " + result.text + "\n" +
                      "Format: " + result.format + "\n" +
                      "Cancelled: " + result.cancelled);*/
            }, 
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
        
        
        
        $("#ResultsBox").html("Waiting...");
        //app.runAjax($("#searchBox").val() == "" ? 1001 : $("#searchBox").val());
    },
    runAjax: function(id, iptarg){
        var ciid = id;
        var ip = iptarg;
        intel.xdk.services.iodocs_._InventoryManagerJsonFeed.partInfoByCiId({"CiId":ciid, "TargetServer": ip}).success(function(data){
            $("#ResultsBox").html(data.item_cd + ", " + data.item_nm);
        }).error(function(){        
            $("#ResultsBox").html("Error - your connection to the server failed.<br />Make sure you are connected to the internet and try again");
        });
        //alert( partInfoByCiId(1001));
    }
};

app.initialize();