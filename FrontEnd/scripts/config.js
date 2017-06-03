define([],function(){
    return {
        Host:function(){
         return location.origin   
        },
        API_URL_V1:function(){
            return this.Host() + "/api/v1/"
        }
    }
})