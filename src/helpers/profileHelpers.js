/**
 * process top tracks data
 * @param   {[]} tracks array of tracks from the saved tracks
 * @return  {[]}      an array of top tracks with needed info
 */
export const getTracks = tracks => {
  const topTracks = tracks.map(track => {
    return {
      uri: track.track.id,
      trackName: track.track.name,
      artist: track.track.artists[0],
      albumName: track.track.album.name,
      posterUrl: track.track.album.images[0].url
    };
  });

  return topTracks;
};

/**
 * @param   {[]} tracks array of tracks objects
 * @return  {[]}        array of artist ids
 */
export const getTopArtistIds = (tracks, amount) => {
  const ids = [];

  tracks.slice(0, amount).forEach(track => {
    ids.push(track.artist.id);
  });

  return ids;
};

/**
 * @param   {[]} tracks array of tracks objects
 * @return  {[]}        array of track ids
 */
export const getTopTrackIds = (tracks, amount) => {
  const ids = [];

  tracks.slice(0, amount).forEach(track => {
    ids.push(track.id);
  });

  return ids;
};
