const spotifyApi = require("../config/spotify.config")


module.exports.home = (req, res)=>{
  res.render("home")
}


module.exports.search = (req, res) => {
  // console.log(req.query)
  spotifyApi.searchArtists(req.query.search)
  
  .then(data => {
    console.log(spotifyApi)
    console.log('The received data from the API: ', data.body.artists.items);
    res.render('artist-search-results', {artist : data.body.artists.items })
    // ----> 'HERE'S WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
  })
  .catch(err => console.log('The error while searching artists occurred: ', err));

}

module.exports.albums = (req, res) => {
  spotifyApi
  .getArtistAlbums(req.params.artistId)
  .then((data )=> {
    res.render("albums", {albums : data.body.items})
    console.log(data.body);
   

  })
  .catch(err => console.log('The error while searching artists occurred: ', err));

}
module.exports.tracks = (req, res) => {
  spotifyApi
  .getAlbumsTracks(req.params.albumId)
  .then((data )=> {
    console.log(data.body.items)
    res.render("albums", {albums : data.body.items})
    console.log(data.body);
   

  })
  .catch(err => console.log('The error while searching artists occurred: ', err));

}

