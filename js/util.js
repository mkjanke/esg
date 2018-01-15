var jsonObjMetrics = {}; //yes, I know thses are global
var metrics_json_file = "../req/req-metric.json";

function LoadMetricsFromJSON() {
    //jQuery - get JSON from server
    //datatables.net library - load and populate Metric table
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
