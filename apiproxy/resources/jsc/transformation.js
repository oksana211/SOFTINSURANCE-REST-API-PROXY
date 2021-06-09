(function(){
    var parsedResponse = null;
    var originalResponse = context.getVariable("response.content");
    
    try{
        parsedResponse = JSON.parse(originalResponse);
    } catch (ex){
        print('Response was not formated as JSON');
    }
    
    const environmentContext = {
        reqScheme: context.getVariable("client.scheme"),
        proxyHost: context.getVariable("request_host"),
        basepath: context.getVariable("proxy.basepath"),
        pathsuffix: context.getVariable("proxy.pathsuffix"),
        itemId: context.getVariable("urirequest.id")
    }
    
    var response = null;
        
    if (parsedResponse !== null){
        response = transform(parsedResponse, environmentContext);
        context.setVariable('response.content', JSON.stringify(response, null, 2));
    }
})();

