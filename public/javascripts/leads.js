function deleteLead(leadID) {
    $.ajax({
        url: '/lead/' + leadID + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({leadID}),
        method: 'POST',
        success: ((res) => {
            console.log("Result : ", res);
            $("#" + leadID).remove();
        }),
        error: ((err) => {
            console.log("Error : ", err);
        })
    })
}