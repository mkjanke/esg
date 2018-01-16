{
  "Requirements": [
    {
      "Index": "RES-HAR",
      "Category": "Resiliency",
      "Context": "Hardware",
      "Goals": "Goals: When hardware component fails, the repair or replacement of the failed hardware must be treatable as routine system maintenance rather than as a service affecting outage or emergency.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the MTTR must not be dependent on the response time of hardware vendors, the availability of repair parts or the availability of staff. The availability of the system therefore must be decoupled from the availability of any single hardware component or any individual staff person.",
      "Requirement": "Requirement: Failure of a single hardware component shall not cause user detectable loss of business functionality for an elapsed time more than Metric. After an elapsed time no longer than Metric, the user will be able to continue business functionality.",
      "Scale": "Scale: Seconds duration, business day, elapsed time.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "RES-SOF",
      "Category": "Resiliency",
      "Context": "Software",
      "Goals": "Goals: When an operating system or run time instance fails, the recovery of the failed component must be treatable as routine system maintenance rather than as a service affecting outage or emergency.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the MTTR must not be dependent on the response time of staff, manual recovery processes, or the clock time required diagnosing the failure. The availability of the system therefore must be decoupled from the availability of any single software component or any individual staff person.",
      "Requirement": "Requirement: Failure of a single operating system or runtime instance shall not cause user detectable loss of business functionality for an elapsed time greater than Metric. After an elapsed time no longer than Metric, the user will be able to continue business functionality.",
      "Scale": "Scale: Seconds duration, business day, elapsed time.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "RES-ENV",
      "Category": "Resiliency",
      "Context": "Environment",
      "Goals": "Goals: When a component fails that affects the power or cooling required by a system, the repair or replacement of the failed component must be treatable as routine system maintenance rather than as a service affecting outage or emergency.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the MTTR should not be dependent on the response time of vendors, the availability of repair parts or the availability of staff. The availability of the system therefore must be decoupled from the availability of any single environmental component.",
      "Requirement": "Requirement: Failure of a single environmental component shall not cause user detectable loss of business functionality for an elapsed time more than Metric. After an elapsed time no longer than Metric, the user will be able to continue business functionality.",
      "Scale": "Scale: Seconds duration, business day, elapsed time.",
      "Status": "Approved, Requirement"
    },
    {
        "Index": "REC-COM",
        "Category": "Recoverability",
        "Context": "Component",
        "Goals": "Goals: When a failed component is recovered, the recovered component must be functionally identical to the failed component, the recovery process must be systematic, must occur with minimal or no user detectable outage, and must not require scheduled system outages.",
        "Rationale": "Rationale: If the availability of the system is sufficiently critical, the recovery of failed hardware or software components must be a predictable, systematic process, must require a minimum of work effort; and must not affect the functionality, availability or performance of the system.",
        "Requirement": "Requirement: The recovery of a failed component shall not cause user detectable loss of business functionality for more than Metric. The recovery of the failed component shall require no more than Metric elapsed time.",
        "Scale": "Scale: Loss of functionality: Duration, elapsed time. Component Recovery: duration elapsed time.",
        "Status": "Approved, Requirement"
    },
    {
      "Index": "REC-SIT",
      "Category": "Recoverability",
      "Context": "Site",
      "Goals": "Goals: When a site becomes unavailable, the recovery of the systems hosted at the site must occur at an alternate site within a pre-established elapsed time and with an acceptable data loss. The system at the alternate site must be capable of meeting all pre-failure functional and non-functional requirements.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the system must be capable of being recovered at an alternate site within a reasonable time frame and must be capable of running from the alternate site for an extended period of time.",
      "Requirement": "Requirement: Failure of a site shall not cause user detectable loss of business functionality for an elapsed time more than Metric. After an elapsed time no longer than Metric, the user will be able to resume business functionality with data loss no more than Metric.",
      "Scale": "Scale: Elapsed time, availability: Duration",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "RECO-CON",
      "Category": "Recoverability",
      "Context": "Configuration",
      "Goals": "Goals: When a system becomes unavailable as a result of a modification of the configuration of the system, the system must be recoverable to a pre-failure state using a pre-determined configuration, within a pre-established elapsed time, and with an acceptable level of data loss. The recovered system configuration must be identical to the pre-failed state.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the system must be capable of being recovered from failed configuration changes within a reasonable time frame and with functionality identical to its pre-failure state.",
      "Requirement": "Requirement: Failure of a system because of modification of the configuration of the system shall not cause user detectable loss of business functionality for an elapsed time more than Metric. After an elapsed time no longer than Metric, the user will be able to resume pre-failed state business functionality with data loss no more than Metric.",
      "Scale": "Scale: Elapsed time, availability: Hours duration. Elapsed time, data loss: Minutes duration ",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "REC-LOG",
      "Category": "Recoverability",
      "Context": "Logical",
      "Goals": "Goals: When a system becomes unavailable because of a modification of business data outside of normal business processes, the system must be recoverable to a pre-failure state within a pre-established elapsed time, and with an acceptable data loss. The recovered system must be capable of meeting all pre-failure functional and non-functional requirements.",
      "Rationale": "Rationale: If the availability or integrity of the system is sufficiently critical, the system must be capable of being recovered from modification of business data within a reasonable time frame and with functionality identical to a pre-failure state.",
      "Requirement": "Requirement: Modification of business data outside of normal business process shall not cause user detectable loss of business functionality for an elapsed time more than Metric. After an elapsed time no longer than Metric, the user will be able to resume business functionality with data loss no more than Metric.",
      "Scale": "Scale: Elapsed time, availability: Duration. Elapsed time, data loss: Duration.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "MAI-COM",
      "Category": "Maintainability",
      "Context": "Component",
      "Goals": "Goals: Systems must be designed such that the frequency and duration of service affecting maintenance windows are minimized. Systems must be designed such that routine maintenance of system components may be performed during business hours with no user detectable loss of business functionality. The number of maintenance operations that require outages should be minimized.",
      "Rationale": "Rationale: If the availability of the system is sufficiently critical, the user expectation for maintenance related outages will be such that systems of moderate complexity can no longer be scheduled with off line maintenance windows of acceptable frequency and duration. To meet availability goals, most system maintenance will need to be performed while users are accessing the system.",
      "Requirement": "Requirement: Routine system patching, system configuration, maintenance of individual system and environmental components shall not cause user detectable loss of business functionality for an amount of time greater than Metric. After an elapsed time no longer than Metric, the user will be able to continue business functionality. System upgrades shall not cause user detectable loss of business functionality for an amount of time greater than Metric. After an elapsed time no longer than Metric, the user will be able to continue business functionality.",
      "Scale": "Scale: Hours duration, elapsed time, cumulative total per period.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-CFI",
      "Category": "Security",
      "Context": "Configuration Integrity",
      "Goals": "Goals: When the configuration of a system is modified outside of normal processes, system must be able to detect the unauthorized modification, and must be recoverable to a pre-modified state using a pre-determined configuration. No more than an acceptable data loss should result from the unplanned configuration. The recovered system must be capable of meeting all pre-modification functional and non-functional requirements. Sufficient logging and auditing must be in place to determine the source of the modification. The response to unauthorized modification must follow a pre-determined process or plan.",
      "Rationale": "Rationale: If the confidentiality and integrity of the data managed by the system is sufficiently critical, the system must have the ability to prevent unauthorized modifications to system configuration and data, the system must be able to determine the source of system modifications, and the system must be capable of being recovered from unauthorized configuration changes with functionality identical to a pre-modified state.",
      "Requirement": "Requirement: Unauthorized modification of the configuration of the system and system managed data shall be recoverable to a point in time of Metric. System changes will be logged to Metric. The response to modification of system configuration or system managed data shall meet Metric.",
      "Scale": "Scale: Log Content: Log contains Action performed, Individual, IP address, date and time. Log Retention: Duration, Days.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-DCL",
      "Category": "Security",
      "Context": "Data Classification",
      "Goals": "Goals: All data must have an assigned owner or business department and be classified to protect the confidentiality and integrity of the data and to comply with applicable state and federal laws and regulations.",
      "Rationale": "Rationale: Implementing security controls requires data ownership and classification so the appropriate controls can be implemented commensurate with the classification level. Data owners have primary authority and accountability for the data.",
      "Requirement": "Requirement: In addition to state and federal laws, regulations, statutes and contractual agreements, applicable data must have an owner and be classified to Metric.",
      "Scale": "See Minnesota State Procedure 5.23.2 http://www.minnstate.edu/board/procedure/523p2.html",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-DAC",
      "Category": "Security",
      "Context": "Data Access",
      "Goals": "Goals: A system must have the ability to control and monitor access and modification to a system and the data managed by the system. The ability to access and modify the data must be limited to authorized individuals. The authorization must be dependent on current work assignment, job function or other business requirement.",
      "Rationale": "Rationale: Limiting an individual’s access to only the systems and data they need to complete work assignments or job duties mitigates inappropriate access or modification of protected or confidential data.",
      "Requirement": "Requirement: Access to data must be granted to individuals by the data owner or person authorized to grant access. Access must be revoked when it is no longer required for the individual’s work assignment or job duties. Logging of access must be implemented to Metric. Security controls must be implemented to Metric.",
      "Scale": "[TBD]",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-AWT",
      "Category": "Security",
      "Context": "Awareness and Training",
      "Goals": "Goals: System administrative personnel have the knowledge and skills to effectively implement, manage and maintain the system sufficient to meet non-functional requirements.",
      "Rationale": "Rationale: System administrative personnel must have the skills, knowledge and/or experience to effectively implement requirements defined by Federal or State law, statute, regulations, contractual agreements, Board Policies, System Procedures or guidelines and non-functional requirements.",
      "Requirement": "Requirement: System administrative personnel must have knowledge, skills and/or experience according to Metric.",
      "Scale": "Scale: Training Hours, Industry Certifications, Years of Experience.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-CFA",
      "Category": "Security",
      "Context": "Configuration Assessment",
      "Goals": "Goals:  A systems initial configuration must be resistant to unauthorized access or modification of configuration and data. The system must be maintained in a resistant configuration for the life of the system, and must be verified by appropriate means. System administration activities must be conducted with privileges limited to the minimum required to complete the activity.",
      "Rationale": "Rationale: If the confidentiality and integrity of the data managed by the system is critical, the system must be configured and maintained in a secure state, resistant to unauthorized configuration and data modifications. To ensure that the system is maintained in that state, the configuration of the system must be verified at periodic intervals.",
      "Requirement": "Requirement: The system must be configured to Metric. The configuration must be verified to Metric.  Administrative functions must be conducted according to Metric.",
      "Scale": "Scale: Configuration Standard: CIS Benchmark. Patch Management Interval: Duration, System guideline 5.23.1.5, Security Patch Management. Configuration Assessment: Interval, Days.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SCA-COM",
      "Category": "Scalability",
      "Context": "Component",
      "Goals": "Goals: Systems will be designed such that the capacity of the system can be increased or decreased by adding or removing hardware or software components.",
      "Rationale": "Rationale: If the availability and performance requirements of a system are sufficiently critical, the system must have the capability of cost effectively matching the system capacity to system load.",
      "Requirement": "Requirement: Additions to, or subtractions from the capacity of a system shall not cause user detectable loss of business functionality for an elapsed time more than Metric.",
      "Scale": "Scale: Availability: Duration, elapsed time.",
      "Status": "Approved, Requirement"
    },
    {
      "Index": "SEC-DEN",
      "Category": "Security",
      "Context": "Data Encryption",
      "Goals": "Goals: Data classified as Highly Restricted or Restricted must not be exposed to unauthorized parties. When Highly Restricted or Restricted data is stored or transmitted in a manner that may result in exposure, the data must be rendered unreadable to the unauthorized party.",
      "Rationale": "Rationale: Data stewards are obligated to minimize the probability of unintentional exposure of Highly Restricted or Restricted data to unauthorized parties.",
      "Requirement": "Requirement: When data classified as Highly Restricted or Restricted is stored outside of a higher risk network or perimeter, the data will be stored non-readable to Metric. When data classified as Highly Restricted or Restricted is physically or logically transported or transmitted to a higher risk network or perimeter, the data will be rendered non-readable to Metric.",
      "Scale": "Transport Encryption: [TBD] Storage Encryption: System Guideline 5.23.1.2, Encryption for Mobile Computing and Storage, Devices, Subpart A and B. Key Recovery: System Guideline 5.23.1.2, Encryption for Mobile Computing and Storage, Devices, Subpart D ",
      "Status": "Approved, Requirement"
    }
]
}
