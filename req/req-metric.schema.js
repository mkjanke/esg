{
  "definitions": {},
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$id": "http://example.com/example.json",
  "type": "object",
  "properties": {
    "Metrics": {
      "$id": "/properties/Requirements",
      "type": "array",
      "items": {
        "$id": "/properties/Requirements/items",
        "type": "object",
        "properties": {
          "METRIC-LABEL": {
            "$id": "/properties/Requirements/items/properties/METRIC-LABEL",
            "type": "string",
            "title": "Metric Label",
            "description": "Unique Label",
            "default": "",
            "examples": [
              "MAI-COM-B1"
            ]
          },
          "METRIC": {
            "$id": "/properties/Requirements/items/properties/METRIC",
            "type": "string",
            "title": "NFR Metric",
            "description": "Metric Text",
            "default": "",
            "examples": [
              "Routine component maintenance and configuration changes will require a total of no more than four hours user detectable outage per month."
            ]
          }
        }
      }
    }
  }
}