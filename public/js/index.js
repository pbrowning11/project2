// The API object contains methods for each kind of request we'll make
var API = {
  submitBar: function (bar) {
    return $.ajax({
      type: "POST",
      url: "/submit",
      data: bar
    });
  },
  createCrawl: function (crawl) {
    return $.ajax({
      type: "POST",
      url: "/create",
      data: crawl
    })
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  editCrawl: function (info) {
    return $.ajax({
      type: "PUT",
      url: "/edit",
      data: info
    })
  }
};

function toDatabase() {
  var groupname=Math.floor(Math.random() * 10000000000);
  var colletedBarArray = []
    for (let l = 1; l <= 8; l++) {
      if($("#bar"+l).val()!=="default"){
        var tempHolder=parseInt($('#bar'+l).val().trim())
        console.log(tempHolder);
        colletedBarArray.push(tempHolder);
      }

    }
  console.log(colletedBarArray);
    $.post("/api/googleapi/", {crawlName:groupname,barList:colletedBarArray.toString() })
    .then(function() {
      console.log("I am here")
      window.location.href = "/crawl/"+groupname;
    });
}

function loadBarSelection() {
  let choice = $("#neighborhood").val();
  window.location.assign ( "/api/neighborhood/" + choice);
}

$("#createCrawlBtn").on("click", loadBarSelection);
$("#barSubmit").click( function(event) {
  event.preventDefault();
  toDatabase()
})