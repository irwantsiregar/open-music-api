const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler,
    options: {
      auth: 'openmusicsapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler,
    options: {
      auth: 'openmusicsapp_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}',
    handler: handler.deletePlaylistHandler,
    options: {
      auth: 'openmusicsapp_jwt',
    },
  },

  // {
  //   method: 'POST',
  //   path: '/playlists/{playlistId}/songs',
  //   handler: handler.postSongPlaylistsHandler,
  // },
  // {
  //   method: 'GET',
  //   path: '/playlists/{playlistId}/songs',
  //   handler: handler.getSongPlaylistsHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/playlists/{playlistId}/songs',
  //   handler: handler.deleteSongPlaylistsHandler,
  // },

];

module.exports = routes;