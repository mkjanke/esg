{
  "$id": "https://github.com/mkjanke/esg/nfr/nfr.schema.json",
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Non Functional Requirement",
  "description": "A representation of a non-functional requirement, loosely based on Simmons/Intel 2011",
  "properties": {
    "required": [ "Index", "Category", "Context", "Goals", "Rationale", "Requirement", "Scale", "Status" ],
    "type": "object",
    "Index": {
      "type": "string",
      "description": "Unique identifier."
    },
    "Category": {
      "enum": [ "Resiliency", "Recoverability", "Scalability", "Maintainability" ],
      "description": "Category: A text field representing the category that the requirement is classified under in the NFR Model."
    },
    "Context": {
      "enum": [ "Hardware", "Software" ],
      "description": "Context: A text field representing the requirement, unique within a category."
    },
    "Goals": {
      "type": "string",
      "description": "Goals: Natural language description of the intent of the requirement and how it supports one or more of the general goals. The Goal is equivalent to 'Gist:' in Planguage or 'Ambition' in (Simmons/Intel 2011)."
    },
    "Rationale": {
      "type": "string",
      "description": "Rationale: The reason that the requirement exists. Expressed in natural language. "
    },
    "Requirement": {
      "type": "string",
      "description": "Requirement: The requirement to which the system will be held, expressed in constrained natural language."
    },
    "Scale": {
      "type": "string",
      "description": "Scale: The scale of measure used to quantify the requirement."
    },
    "Status": {
      "type": "string",
      "description": "Status: One of Draft, Approved, Revised, or other constrained choice of statuses matching the requirements implementing process."
    }
  }
}
