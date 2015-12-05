angular.module('app.services')
.service('ProjectNotes', ['$resource', 'appConfig', function($resource,appConfig){
        return $resource(appConfig.baseUrl +'/projects/:id/notes/:noteId',{
                id:'@id',
                noteId:'@noteId'
            },{
                update: {
                    method: 'PUT'
            },
                get:{
                    method: 'GET',
                    transformResponse: function(data, headers){
                        var headerGetter = headers();
                        if(headerGetter['content-type'] == 'application/json'||
                           headerGetter['content-type'] == 'text/json'){
                            var dataJson = JSON.parse(data);
                            if(dataJson.hasOwnProperty('data')){
                                dataJson = dataJson.data;
                            }
                            return dataJson[0];
                        }
                        return data;
                    }
                }
        });
    }]);