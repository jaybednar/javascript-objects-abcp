var playlist = {'Gemini Syndrome': "\"Babylon\""};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}