$("#user_in").keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        search();
    }
});

function search() {
    var query = $("#user_in").val();
    setResults(null);
    let results = [];
    if (query.matches(/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}$/g)) {
        query = query.replace("-", "");
        // search for UUID
    } else {
        // search for username
    }
    // search for IP
    // search for region
    setResults(results)
}

function setResults(results) {
    $("#results").html(results);
}