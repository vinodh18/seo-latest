
function vzguiRenderQuotes(data) {
	if (document.getElementById("vz-gui-header-container") != null) { 	// Test if the global header functionality is present and that it is finished loading enough to be ready to add the quotes
       VZGLOBALUI.stocks.construct(data);
	} else {
       setTimeout(function() { vzguiRenderQuotes(data); } , 100);
	}
}

vzguiRenderQuotes({
"date":"12/16/2015 4:06PM EST",
"quotes": [
  {
    "symbol":"VZ",
    "last":46.51,
    "change":0.96
  },
  {
    "symbol":"DOW",
    "last":17749.09,
    "change":224.18
  },
  {
    "symbol":"NSDQ",
    "last":5071.13,
    "change":75.77
  },
  {
    "symbol":"SP500",
    "last":2073.07,
    "change":29.66
  }
]
});
