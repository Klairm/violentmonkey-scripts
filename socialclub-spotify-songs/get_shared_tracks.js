// ==UserScript==
// @name        Get shared spotify tracks
// @match        https://socialclub.rockstargames.com/member/*
// @grant        none
// @version     0.1
// @author      Klairm
// @description A script that saves the URI for all the spotify tracks you shared in the radio in-game into a file.
// @require     https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.min.js
// ==/UserScript==

function onClick(){
  // Get all the spotify  posts and get the URI, then save to a txt file
  let uriTracks = [];
  document.querySelectorAll("div[data-ui-name=share_spotify_songFeedCard]").forEach(i => {
  uriTracks.push(i.children[0].children[1].children[0].src.split("track:")[1].toString())
  uriTracks.push("\n")

})
  let tracksFile = new Blob(uriTracks, {type: "text/plain;charset=utf-8"});
  saveAs(tracksFile,"uri_tracks.txt")

  }

function createButton(){
  let button = document.createElement('button'), btnStyle = button.style
  button.type = "button"
  button.innerHTML = "Save spotify tracks"
  button.addEventListener (
    "click", onClick, false
);


  document.querySelector("div.ProfileHeader__navInner__V15Pu").append(button)




}

function main(){
  setTimeout(function(){
    createButton()
  },2000)

}

main()



