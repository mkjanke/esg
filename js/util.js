export var jsonObjMetrics = {}; //yes, I know thses are global
export var metrics_json_file = "../req/req-metric.json";

export var jsonObjNFR = {}; 
export var nfr_json_file = "../nfr/nfr-body.json";

//These functions Use
//jQuery - get JSON from server
//datatables.net library - load and populate Metric table

export function LoadMetricsFromJSON() {
    $.get(metrics_json_file, function (data) {
        jsonObjMetrics = data.Metrics;
        $('#MetricTable').DataTable({
            "data": jsonObjMetrics,
            "columns": [
                { "data": "METRIC-LABEL" },
                { "data": "METRIC" },
                {
                    "data": "REPLACEDBY",
                    "defaultContent": ""
                },
                {
                    "data": "REPLACES",
                    "defaultContent": ""
                }
            ]
        });
    }, 'json');
    //Nuke the 'wait' messsage
    $('#wait').text("");
}

export function LoadNFRSFromJSON() {
    $.get(nfr_json_file, function (data) {
        jsonObjNFR = data.Metrics;
        $('#NFRTable').DataTable({
            "data": jsonObjNFR,
            "columns": [
                { "data": "Index" },
                { "data": "Category" },
                { "data": "Context"},
                { "data": "Goals" },
                { "data": "Rationale" },
                { "data": "Requirement" },
                { "data": "Scale" },
                { "data": "Status" }
            ]
        });
    }, 'json');
    //Nuke the 'wait' messsage
    $('#wait').text("");
}
