var locations = [
    [
          "48.464098, -123.313127 Cornett Building ",
        48.464098, -123.313127
    ],
    [
    		"48.464260, -123.310345 Clerihue Building ",
        48.464260, -123.310345
    ],
    [
    		"848.464748, -123.31331 David Strong Building  ",
        48.464748, -123.313318
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        cnt++;
          infowindow.setContent(locations[i][0]+cnt);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
   var cnt = 0;

function counting() {
cnt++;
alert(cnt);

}.

