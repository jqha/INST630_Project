function makeChart1(records) {
  var methodLabels = records.map(function (d) {
    return d.Method;
  });

  var recordsData = records.map(function (d) {
    return +d.Records;
  });

  const chart1 = document.getElementById("chart1").getContext("2d");

  const barChart = new Chart(chart1, {
    type: "bar",
    options: {      plugins: {
        title: {
          display: true,
          text: "Methods vs. Records Compromised",
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
    data: {
      labels: methodLabels,
      datasets: [
        {
          label: "Records Compromised",
          data: recordsData,
          backgroundColor: "navy",
        },
      ],
    },
  });
}

function makeChart3(records) {
  var organizationLabels = records.map(function (d) {
    return d["Organization Type"];
  });

  var recordsData = records.map(function (d) {
    return +d.Records;
  });

  const chart3 = document.getElementById("chart3").getContext("2d");

  const doughnutChart = new Chart(chart3, {
    type: "doughnut",
    options: {
      plugins: {
        title: {
          display: true,
          text: "Comparison of Sectors Affected",
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
    data: {
      labels: organizationLabels,
      datasets: [
        {
          data: recordsData,
          backgroundColor: [
            "#4d00b3",
            "#0000b3",
            "red",
            "brown",
            "orange",
            "green",
            "magenta",
            "olivedrab",
            "#976319",
            "cyan",
            "yellow",
            "grey",
            "darkcyan",
            "purple",
            "black",
            "peru",
            "lawngreen",
            "khaki",
            "darkkhaki",
            "royalblue",
            "turquoise",
            "white",
            "gold",
            "#c3b091",
            "#00b300",
            "mediumseagreen",
            "darkseagreen",
            "firebrick",
            "saddlebrown",
            "deepskyblue",
            "springgreen",
            "#20b0bd",
            "#004d00",
          ],
        },
      ],
    },
  });
}

function makeChart4(records) {
  var yearLabels = records.map(function (d) {
    return d.Year;
  });

  var accidentallyExposed = records.map(function (d) {
    return +d["accidentally exposed"];
  });

  var accidentallyPublished = records.map(function (d) {
    return +d["accidentally published"];
  });

  var accidentallyUploaded = records.map(function (d) {
    return +d["accidentally uploaded"];
  });

  var misconfig = records.map(function (d) {
    return +d["data exposed by misconfiguration"];
  });

  var hacked = records.map(function (d) {
    return +d["hacked"];
  });

  var imHacked = records.map(function (d) {
    return +d["improper setting, hacked"];
  });

  var inside = records.map(function (d) {
    return +d["inside job"];
  });

  var insHacked = records.map(function (d) {
    return +d["inside job, hacked"];
  });

  var intLost = records.map(function (d) {
    return +d["intentionally lost"];
  });

  var lostStole = records.map(function (d) {
    return +d["lost / stolen computer"];
  });

  var lostStoleMed = records.map(function (d) {
    return +d["lost / stolen media"];
  });

  var misPo = records.map(function (d) {
    return +d["misconfiguration/poor security"];
  });

  var poSe = records.map(function (d) {
    return +d["poor security"];
  });

  var poSeHacked = records.map(function (d) {
    return +d["poor security / hacked"];
  });

  var poSeIns = records.map(function (d) {
    return +d["poor security/inside job"];
  });

  var pub = records.map(function (d) {
    return +d["publicly accessible Amazon Web Services (AWS) server"];
  });

  var rogue = records.map(function (d) {
    return +d["rogue contractor"];
  });

  var socEngine = records.map(function (d) {
    return +d["social engineering"];
  });

  var unknown = records.map(function (d) {
    return +d["unknown"];
  });

  var unprotected = records.map(function (d) {
    return +d["unprotected api"];
  });

  var unsecured = records.map(function (d) {
    return +d["unsecured S3 bucket"];
  });

  const chart4 = document.getElementById("chart4").getContext("2d");

  const stackedChart = new Chart(chart4, {
    type: "bar",
    data: {
      labels: yearLabels,
      datasets: [
        {
          label: "Accidentally Exposed",
          data: accidentallyExposed,
          backgroundColor: "blue",
        },
        {
          label: "Accidentally Published",
          data: accidentallyPublished,
          backgroundColor: "lightBlue",
        },
        {
          label: "Accidentally Uploaded",
          data: accidentallyUploaded,
          backgroundColor: "darkBlue",
        },
        {
          label: "Misconfiguration",
          data: misconfig,
          backgroundColor: "red",
        },
        {
          label: "Hacked",
          data: hacked,
          backgroundColor: "green",
        },
        {
          label: "Improper Setting/Hacked",
          data: imHacked,
          backgroundColor: "purple",
        },
        {
          label: "Inside Job",
          data: inside,
          backgroundColor: "gray",
        },
        {
          label: "Inside Job/Hacked",
          data: insHacked,
          backgroundColor: "maroon",
        },
        {
          label: "Intentionally Lost",
          data: intLost,
          backgroundColor: "aqua",
        },
        {
          label: "Lost/Stolen Computer",
          data: lostStole,
          backgroundColor: "sienna",
        },
        {
          label: "Lost/Stolen Media",
          data: lostStoleMed,
          backgroundColor: "coral",
        },
        {
          label: "Misconfiguration/Poor Security",
          data: misPo,
          backgroundColor: "darkMagenta",
        },
        {
          label: "Poor Security",
          data: poSe,
          backgroundColor: "yellowOrange",
        },
        {
          label: "Poor Security/Hacked",
          data: poSeHacked,
          backgroundColor: "Crimson",
        },
        {
          label: "Poor Security/Insider Job",
          data: poSeIns,
          backgroundColor: "olive",
        },
        {
          label: "Publicly Accessible Server",
          data: pub,
          backgroundColor: "lightGreen",
        },
        {
          label: "Rogue Contractor",
          data: rogue,
          backgroundColor: "black",
        },
        {
          label: "Social Engineering",
          data: socEngine,
          backgroundColor: "gold",
        },
        {
          label: "Unknown",
          data: unknown,
          backgroundColor: "saddleBrown",
        },
        {
          label: "Unprotected API",
          data: unprotected,
          backgroundColor: "pink",
        },
        {
          label: "Unsecured S3 Bucket",
          data: unsecured,
          backgroundColor: "paleGreen",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Data Breach Methods over Time",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });
}

function httpGetAsync(theUrl, callback) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  }
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
  xmlHttpReq.send(null);
}

function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); 
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}
//console.log(httpGet('https://haveibeenpwned.com/api/v3/breaches'));

var obj = JSON.parse(httpGet('https://haveibeenpwned.com/api/v3/breaches'));
//var jsonTest = httpGet('https://haveibeenpwned.com/api/v3/breaches'); // Works, is the JSON 
//var data = JSON.parse(httpGet('https://haveibeenpwned.com/api/v3/breaches'))

//console.log(obj)

///////////////////////////////////////////////////////////
function makeChart2(records) {
  var year;
  var breachDate;
  var dateArray = [];
  var map = new Map();
  var recordsArray =[];
  
  // Go through all records obtained, looking at the BreachDate and taking the year, then adding each unique year to the array 'dateArray'
  for(var k in records) {
      if(records[k] instanceof Object) {
          year = new Date(records[k].BreachDate).getFullYear();
          if (!dateArray.includes(year)) {
            dateArray.push(year);
          }
      } else {
          document.write(records[k] + "<br>");
      };
  }
  
  dateArray.sort();
  
  for(let i = 0; i < dateArray.length; i++) {
    map.set(dateArray[i], 0);
  }
  
  for(var k in records) {
      if(records[k] instanceof Object) {
        console.log(records[k]);
        var currentRecordYear = new Date(records[k].BreachDate).getFullYear();
        var currentRecords = map.get(currentRecordYear) + records[k].PwnCount;
        map.set(currentRecordYear, currentRecords)
      } else {
          document.write(records[k] + "<br>");
      };
  }

  map.forEach((values,keys)=>{
    recordsArray.push(values);
  })

  const chart2 = document.getElementById("chart2").getContext("2d");

  const lineChart = new Chart(chart2, {
    type: "line",
    options: {
            plugins: {
        title: {
          display: true,
          text: "HaveIBeenPwned Records Compromised (" + dateArray[0] + "-" + dateArray[dateArray.length - 1] + ")",
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
    data: {
      labels: dateArray,
      datasets: [
        {
          label: "Records Compromised",
          data: recordsArray,
          borderColor: "red",
        },
      ],
    },
  });
}

function makeChart4(records) { 
  var isVerified = 0;
  var isFabricated = 0;
  var isSensitive = 0;
  var isRetired = 0;
  var isSpamList = 0;
  var isMalware = 0;
  var noDataBreaches = records.length;
  
  for(var k in records) {
      if(records[k] instanceof Object) {
          //console.log(records[k]);
          if(records[k].IsVerified === true) {
            isVerified++;
          }   
          if(records[k].IsFabricated === true) {
            isFabricated++;
          }         
          if(records[k].IsSensitive === true) {
            isSensitive++;
          }
          if(records[k].IsRetired === true) {
            isRetired++;
          }   
          if(records[k].IsSpamList === true) {
            isSpamList++;
          }         
          if(records[k].IsMalware === true) {
            isVerified++;
          }
      } else {
          document.write(records[k] + "<br>");
      };
  }
  console.log(isVerified);
  console.log(isFabricated);
  console.log(isSensitive);
  console.log(isRetired);
  console.log(isSpamList);
  console.log(isMalware);
  console.log(noDataBreaches);
  
  const chart4 = document.getElementById("chart4").getContext("2d");
  const stackedChart = new Chart(chart4, {
    type: "bar",    
    options: {
      plugins: {
        title: {
          display: true,
          text: "HaveIBeenPwned Data Breach Attributes" + " (of " + noDataBreaches + " total breaches)",
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
    data: {
      labels: ['IsVerified (' + isVerified + ")", 
               'IsFabricated (' + isFabricated + ")", 
               'IsSensitive (' + isSensitive + ")", 
               'IsRetired (' + isRetired + ")", 
               'IsSpamList (' + isSpamList + ")", 
               'IsMalware (' + isMalware + ")"],
      datasets: [{
        label: '# Records',
        data: [isVerified, isFabricated, isSensitive, isRetired, isSpamList, isMalware],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)'
        ],
        borderWidth: 1
      }],
    },
  });
}



// Request data using D3
d3.csv("Data_Breach_Method_Records.csv").then(makeChart1);
makeChart2(obj);
d3.csv("Data_Breach_Organization_Type_Records.csv").then(makeChart3);
//d3.csv("Data_Breach_Year_Sector.csv").then(makeChart4);
makeChart4(obj);