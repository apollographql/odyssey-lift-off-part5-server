const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  async getTracksForHome() {
    return this.get("tracks");
  }

  async getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  async getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  async getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  async getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  async incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}

module.exports = TrackAPI;
