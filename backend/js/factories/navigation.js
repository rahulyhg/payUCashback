var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http,$state) {
    var navigation={};
    var defaultNav=true;
    function initiateNavigation() {
    if($.jStorage.get("profile")){
        var defaultNav=false;
        console.log("$.jStorage.get('profile').accessLevel",$.jStorage.get("profile").accessLevel);
        if($.jStorage.get("profile").accessLevel=="Super Admin"){
            console.log("inside super admin navigation block");
            var navigation = [{
                name: "User",
                classis: "active",
                sref: "#!/page/viewUser//"
            }, {
                name: "Cashback Merchant",
                classis: "active",
                sref: "#!/page/viewMerchant//"
            },{
                name: "Cashback Rules",
                classis: "active",
                sref: "#!/page/viewRule//"
            }, {
                name: "Marketing Merchant",
                classis: "active",
                sref: "#!/page/viewMarketingMerchant//"
            },{
                name: "Marketing Rules",
                classis: "active",
                sref: "#!/page/viewMarketingRule//"
            },{
                name: "Performance",
                classis: "active",
                sref: "#!/page/viewPerformance//"
            },{
                name: "Mailer List",
                classis: "active",
                sref: "#!/page/viewMailerList//"
            },{
                name: "Exposure Rule",
                classis: "active",
                sref: "#!/page/viewExposureRule//"
            },{
                name: "Merchant Category",
                classis: "active",
                sref: "#!/page/viewExposureMerchantCategory//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Creator"){
            var navigation = [{
                name: "Cashback Merchant",
                classis: "active",
                sref: "#!/page/viewMerchant//"
            },{
                name: "Rule",
                classis: "active",
                sref: "#!/page/viewRule//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Executor"){
            var navigation = [{
                name: "Cashback Merchant",
                classis: "active",
                sref: "#!/page/viewMerchant//"
            },{
                name: "Rule",
                classis: "active",
                sref: "#!/page/viewRule//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Viewer"){
            var navigation = [{
                name: "Cashback Merchant",
                classis: "active",
                sref: "#!/page/viewMerchant//"
            },{
                name: "Rule",
                classis: "active",
                sref: "#!/page/viewRule//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Marketing Creator" || $.jStorage.get("profile").accessLevel=="Marketing Executor" || $.jStorage.get("profile").accessLevel=="Marketing Viewer" ){
            var navigation = [{
                name: "Marketing Merchant",
                classis: "active",
                sref: "#!/page/viewMarketingMerchant//"
            },{
                name: "Marketing Rule",
                classis: "active",
                sref: "#!/page/viewMarketingRule//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Performance"){
            var navigation = [{
                name: "Performance",
                classis: "active",
                sref: "#!/page/viewPerformance//"
            }, {
                name: "Marketing Merchant",
                classis: "active",
                sref: "#!/page/viewMarketingMerchant//"
            },{
                name: "Marketing Rules",
                classis: "active",
                sref: "#!/page/viewMarketingRule//"
            }
            ];
        } else if($.jStorage.get("profile").accessLevel=="Merchant Exposure"){
            var navigation = [{
                name: "Mailer List",
                classis: "active",
                sref: "#!/page/viewMailerList//"
            },{
                name: "Merchant Exposure Rules",
                classis: "active",
                sref: "#!/page/viewExposureRule//"
            },{
                name: "Merchant Categories",
                classis: "active",
                sref: "#!/page/viewExposureMerchantCategory//"
            }
            ];
        }
    }else{
        var defaultNav=true;
        var navigation = [{
            name: "Cashback Merchant",
            classis: "active",
            sref: "#!/page/viewMerchant//"
        },{
            name: "Cashback Rules",
            classis: "active",
            sref: "#!/page/viewRule//"
        }, {
            name: "Marketing Merchant",
            classis: "active",
            sref: "#!/page/viewMarketingMerchant//"
        },{
            name: "Marketing Rules",
            classis: "active",
            sref: "#!/page/viewMarketingRule//"
        },{
            name: "Performance",
            classis: "active",
            sref: "#!/page/viewPerformance//"
        }
        ];
        $state.go("login");

    }
    
}

    return {
        getnav: function () {
            if($.jStorage.get("profile")){
                var defaultNav=false;
                console.log("$.jStorage.get('profile').accessLevel",$.jStorage.get("profile").accessLevel);
                if($.jStorage.get("profile").accessLevel=="Super Admin"){
                    console.log("inside super admin navigation block");
                    var navigation = [{
                        name: "User",
                        classis: "active",
                        sref: "#!/page/viewUser//"
                    }, {
                        name: "Cashback Merchant",
                        classis: "active",
                        sref: "#!/page/viewMerchant//"
                    },{
                        name: "Cashback Rules",
                        classis: "active",
                        sref: "#!/page/viewRule//"
                    }, {
                        name: "Marketing Merchant",
                        classis: "active",
                        sref: "#!/page/viewMarketingMerchant//"
                    },{
                        name: "Marketing Rules",
                        classis: "active",
                        sref: "#!/page/viewMarketingRule//"
                    },{
                        name: "Performance",
                        classis: "active",
                        sref: "#!/page/viewPerformance//"
                    },{
                        name: "Mailer List",
                        classis: "active",
                        sref: "#!/page/viewMailerList//"
                    },{
                        name: "Exposure Rule",
                        classis: "active",
                        sref: "#!/page/viewExposureRule//"
                    },{
                        name: "Rule Category",
                        classis: "active",
                        sref: "#!/page/viewExposureMerchantCategory//"
                    },{
                        name: "Exposure Merchants",
                        classis: "active",
                        sref: "#!/page/viewExposureMerchant//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Creator"){
                    var navigation = [{
                        name: "Cashback Merchant",
                        classis: "active",
                        sref: "#!/page/viewMerchant//"
                    },{
                        name: "Rule",
                        classis: "active",
                        sref: "#!/page/viewRule//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Executor"){
                    var navigation = [{
                        name: "Cashback Merchant",
                        classis: "active",
                        sref: "#!/page/viewMerchant//"
                    },{
                        name: "Rule",
                        classis: "active",
                        sref: "#!/page/viewRule//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Viewer"){
                    var navigation = [{
                        name: "Cashback Merchant",
                        classis: "active",
                        sref: "#!/page/viewMerchant//"
                    },{
                        name: "Rule",
                        classis: "active",
                        sref: "#!/page/viewRule//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Marketing Creator" || $.jStorage.get("profile").accessLevel=="Marketing Executor" || $.jStorage.get("profile").accessLevel=="Marketing Viewer" ){
                    var navigation = [{
                        name: "Marketing Merchant",
                        classis: "active",
                        sref: "#!/page/viewMarketingMerchant//"
                    },{
                        name: "Marketing Rule",
                        classis: "active",
                        sref: "#!/page/viewMarketingRule//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Performance"){
                    var navigation = [{
                        name: "Performance",
                        classis: "active",
                        sref: "#!/page/viewPerformance//"
                    }, {
                        name: "Marketing Merchant",
                        classis: "active",
                        sref: "#!/page/viewMarketingMerchant//"
                    },{
                        name: "Marketing Rules",
                        classis: "active",
                        sref: "#!/page/viewMarketingRule//"
                    }
                    ];
                } else if($.jStorage.get("profile").accessLevel=="Merchant Exposure"){
                    var navigation = [{
                        name: "Mailer List",
                        classis: "active",
                        sref: "#!/page/viewMailerList//"
                    },{
                        name: "Merchant Exposure Rules",
                        classis: "active",
                        sref: "#!/page/viewExposureRule//"
                    },{
                        name: "Merchant Categories",
                        classis: "active",
                        sref: "#!/page/viewExposureMerchantCategory//"
                    }
                    ];
                }
            }else{
                var defaultNav=true;
                var navigation = [{
                    name: "Cashback Merchant",
                    classis: "active",
                    sref: "#!/page/viewMerchant//"
                },{
                    name: "Cashback Rules",
                    classis: "active",
                    sref: "#!/page/viewRule//"
                }, {
                    name: "Marketing Merchant",
                    classis: "active",
                    sref: "#!/page/viewMarketingMerchant//"
                },{
                    name: "Marketing Rules",
                    classis: "active",
                    sref: "#!/page/viewMarketingRule//"
                },{
                    name: "Performance",
                    classis: "active",
                    sref: "#!/page/viewPerformance//"
                }
                ];
                $state.go("login");
        
            }

            // if(defaultNav==true){
            //     initiateNavigation();
            //     // if($.jStorage.get("profile"))
            //     console.log("hgvghsc");
            //     return navigation;
            //     // $state.reload();
            // }else{
            //     console.log("hgvghsc_else");
                return navigation;
            // }
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            console.log("inside profile",$.jStorage.get("accessToken"));
            var data = {
                _id: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'User/getOne', data).then(function (data) {
                console.log("inside profile -> http.post",data.data);
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
            // $http.post(adminurl + 'User/profile', data).then(function (data) {
            //     data = data.data;
            //     if (data.value === true) {
            //         $.jStorage.set("profile", data.data);
            //         callback();
            //     } else {
            //         errorCallback(data.error);
            //     }
            // });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },
        playSelectedEmail: function (ruleArr, callback) {
            console.log("inside navigationservice playSelectedEmail",ruleArr);

            // url: 'http://172.31.2.124:8080/playnow',
            $http({
                url: 'http://172.31.12.15:8080/playnow',
                method: 'POST',
                data: ruleArr,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                // data = data.data;
                callback(data);

            });
        },
        
        playSelectedMarketingRule: function (ruleArr, callback) {
            console.log("inside navigationservice playSelectedMarketingRule",ruleArr);
            $http({
                url: 'http://172.31.12.15:8080/scheduler-0.0.2-SNAPSHOT/generate',
                method: 'POST',
                data: ruleArr,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                // data = data.data;
                callback(data);

            });
        },

        playSelectedPerformanceRule: function (ruleArr, callback) {
            console.log("inside navigationservice playSelectedPerformanceRule",ruleArr);
            $http({
                url: 'http://172.31.12.15:8080/Marketing_Performance-1.0-SNAPSHOT/performance',
                method: 'POST',
                data: ruleArr,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                // data = data.data;
                callback(data);

            });
        },
        playSelectedExposureMerchantCategoryRule: function (ruleArr, callback) {
            console.log("inside navigationservice playSelectedExposureMerchantCategoryRule",ruleArr);
            $http({
                url: 'http://172.31.12.15:8090/merchantExposure',
                method: 'POST',
                data: ruleArr,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                // data = data.data;
                callback(data);

            });
        },
        viewQueryModal: function (ruleObject, callback) {
            console.log("inside navigationservice viewQueryModal",ruleObject);
            $http({
                url: 'http://172.31.12.15:8080/verifyquery',
                method: 'POST',
                data: ruleObject,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                callback(data);
            });
        },
        viewMarketingQueryModal: function (ruleObject, callback) {
            console.log("inside navigationservice viewMarketingQueryModal",ruleObject);
            $http({
                url: 'http://172.31.12.15:8080/verifyquery',
                method: 'POST',
                data: ruleObject,
                withCredentials: false
            }).then(function (data) {
                console.log("######",data);
                callback(data);
            });
        },

        viewSingleExposureMerchantModal: function (id, callback) {
            $http.post(adminurl + 'ExposureMerchant/viewSingleExposureMerchantModal', {
                _id: id
            }).then(function (data) {
                data = data.data;
                console.log("data in viewSingleExposureMerchantModal inside navigation service",data);
                callback(data);

            });
        },

    };
});