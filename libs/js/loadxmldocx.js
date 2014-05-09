function loadXMLDoc(url) 
{
	var xmlDoc;
	try
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	}
	catch(e)
	{
		try
		{
			var oXmlHttp = new XMLHttpRequest() ;
			oXmlHttp.open( "GET", url, false ) ;
			oXmlHttp.send(null) ; 
			return oXmlHttp.responseXML;
		}
		catch(e)
		{
			return;
		}
	}
	xmlDoc.async=false;
	xmlDoc.load(url);
	return xmlDoc;
}