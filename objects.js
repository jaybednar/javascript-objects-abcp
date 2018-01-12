var playlist = {'Gemini Syndrome': "\"Babylon\""};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

function removePlaylist(obj, artist) {
  delete obj[artist];
  return obj;
} 