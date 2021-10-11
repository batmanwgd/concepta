---
title: "Zillow API Connector"
description: "Connectors - Zillow API Connector."
lead: "Connectors - Zillow API Connector."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  doks:
    parent: "connectors"
weight: 630
toc: true
---

## Configuring the Connector

In order to run these notebooks you will need a Zillow account and a Zillow Web Service Id (ZWSID). If you do not already have a ZWSID, you should register at <a href="https://www.zillow.com/webservice/Registration.htm" target="_blank">Zillow webservice registration</a> and apply forr ZWSID in your account settings. If you have forgot your ZWSID, you can ask Zillow to remind it at <a href="https://www.zillow.com/webservice/APIReminder.htm" target="_blank">ZWSID API Reminder</a>.

_**Note:** Your ZWSID must be set as value of the `zws-id` query parameter of your request._

## Running the Connector

Make a call on the https://localhost:8081/zillow URL

## Connector XML
```xml
<?xml version="1.0" encoding="UTF-8"?>
<mule xmlns:scripting="https://www.mulesoft.org/schema/mule/scripting" xmlns:data-mapper="https://www.mulesoft.org/schema/mule/ee/data-mapper" xmlns:tracking="https://www.mulesoft.org/schema/mule/ee/tracking" xmlns:oauth2="https://www.mulesoft.org/schema/mule/oauth2" xmlns:http="https://www.mulesoft.org/schema/mule/http" xmlns="https://www.mulesoft.org/schema/mule/core" xmlns:doc="https://www.mulesoft.org/schema/mule/documentation"
	xmlns:spring="https://www.springframework.org/schema/beans" version="EE-3.6.0"
	xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="https://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans-current.xsd
https://www.mulesoft.org/schema/mule/core https://www.mulesoft.org/schema/mule/core/current/mule.xsd
https://www.mulesoft.org/schema/mule/http https://www.mulesoft.org/schema/mule/http/current/mule-http.xsd
https://www.mulesoft.org/schema/mule/oauth2 https://www.mulesoft.org/schema/mule/oauth2/current/mule-oauth2.xsd
https://www.mulesoft.org/schema/mule/ee/tracking https://www.mulesoft.org/schema/mule/ee/tracking/current/mule-tracking-ee.xsd
https://www.mulesoft.org/schema/mule/ee/data-mapper https://www.mulesoft.org/schema/mule/ee/data-mapper/current/mule-data-mapper.xsd
https://www.mulesoft.org/schema/mule/scripting https://www.mulesoft.org/schema/mule/scripting/current/mule-scripting.xsd">
    <http:listener-config name="HTTP_Listener_Configuration" host="0.0.0.0" port="8081" doc:name="HTTP Listener Configuration"/>
    <oauth2:token-manager-config name="Token_Manager_Config" doc:name="Token Manager Config"/>
   	<http:request-config name="HTTP_Request_Zillow" protocol="HTTPS" host="zillow.com" port="443" basePath="/webservice" doc:name="HTTP Request Configuration">
        <http:raml-api-configuration location="100apis/zillow/api.raml"/>
    </http:request-config>
    <flow name="raml-test-zillowFlow">
        <http:listener config-ref="HTTP_Listener_Configuration" path="/zillow" doc:name="HTTP"/>
        <http:request config-ref="HTTP_Request_Zillow" path="/GetChart.htm" method="GET" doc:name="HTTP">  
            <http:request-builder>
                <http:query-param paramName="zws-id" value="{Your ZWSID}"/>
                <http:query-param paramName="zpid" value="48749425"/>
                <http:query-param paramName="unit-type" value="percent"/>
            </http:request-builder>
        </http:request>
        <logger message="#[payload]" level="INFO" doc:name="Logger"/>
    </flow>
</mule>
```

#### TODO:
- Test connector to ensure currently works properly
- Explain each aspect of the connector
- Explain various data points and how they connect to TE
- Explain how data scorecards can be created to leverage the TE platform or "sell" the TE platform's success easier

![Zillow Connectors Example](../../images/Zillow_API_ConnectorRequest_BLURRED.png)