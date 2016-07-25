app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.title = "Exhibit";
  $scope.artworks = [
    {title: "Whalers",
     url:"http://www.metmuseum.org/-/media/Images/Exhibitions/2016/Turner%20Whaling%20Pictures/Turner_Exh_Detail_Page_LargeDesktop_Large_and_MediumException_3360x1720_041116_v2.jpg?w=1440&hash=3CA865CB018514CE2072D4B9A350110CC1D49E0D",
     artist:"Joseph Mallord William Turner"},
    {title: "The Unfinished",
     url:"http://www.metmuseum.org/-/media/Images/Exhibitions/2016/Unfinished/Unfinished_Exh_Detail_Page_LargeDesktop_Large_and_MediumException_3360x1720_040716_v1.jpg?w=1440&hash=E9031C0582E107827009E07A2D53786E6AD07B5B",
     artist:"Janine Antoni, Lygia Clark, Jackson Pollock, and Robert Rauschenberg"},
    {title: "Manus x Machina",
     url:"http://www.metmuseum.org/-/media/Images/Exhibitions/2016/Manus%20X%20Machina/MxM_Exh_Detail_Page_LargeDesktop_Large_and_MediumException_3360x1720_040716_v1.jpg?w=1440&hash=9DCEAB8A9FCFCCA66262ECE11642D21335D4EFC6",
     artist:"Karl Lagerfeld"}
  ];

  $scope.slide = function(dir) {
    var artworks = $scope.artworks,
    artwork = {};
    if (dir === 'right') {
      first_item = artworks[0];
      artworks.shift();
      artworks.push(first_item);

    } else {
      artwork = artworks.pop();
      artworks.unshift(artwork);
    }
  }
}])