function transform(parsedResponse, environmentContext){
    
    var proxyResponse = {};
    
    var link = getLink(environmentContext.reqScheme, environmentContext.proxyHost, 
                        environmentContext.basepath, environmentContext.pathsuffix,
                        environmentContext.itemId);
                        
    proxyResponse.links = {collection: { apigeeHref: link }};

    
    if(isArray(parsedResponse)){
        proxyResponse.total = parsedResponse.length;
        proxyResponse.data = getDataArray(parsedResponse);
    }
    else if(!isArray(parsedResponse)){
        proxyResponse.data = parsedResponse;
    }
    
    return proxyResponse;
}

function getDataArray(parsedResponse){
    var data = [];
    for(var i in parsedResponse)
    {
        data.push(parsedResponse[i]);
    }
    return data;
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

function getLink(reqScheme, proxyHost, basepath, pathsuffix, itemId){
    var link = null;
    if(itemId){
        link = reqScheme + '://' + proxyHost + basepath + pathsuffix;
    } else {
        link = reqScheme + '://' + proxyHost + basepath + pathsuffix;
    }
    return link;
}


