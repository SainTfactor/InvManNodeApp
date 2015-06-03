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
        intel.xdk.device.hideSplashScreen();
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
        app.runAjax();
    },
    runAjax: function(id){
        var ciid = $("#searchBox").val() == "" ? 1001 : $("#searchBox").val();
        intel.xdk.services.iodocs_._InventoryManagerJsonFeed.partInfoByCiId({"CiId":ciid}).success(function(data){
            $("#ResultsBox").html(data.item_cd + ", " + data.item_nm);
        });
        //alert( partInfoByCiId(1001));
    }
};

app.initialize();