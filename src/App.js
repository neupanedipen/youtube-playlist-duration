import React, { useState } from 'react';
import PlaylistSummary from 'youtube-playlist-summary'
import moment from 'moment';
import spinner from '../src/assets/spinner.svg'

function App() {

  const [playlistUrl, setPlaylistUrl] = useState('');
  const [allDetails, setAllDetails] = useState({})
  const [display, setDisplay] = useState(false)
  const [loading, setLoading] = useState(false);
  let allDurations = [];
  let playlistID;
  let len;
  const api = process.env.REACT_APP_API_KEY;

  //Configuration for youtube-playlist-summary
  const config = {
    GOOGLE_API_KEY: api,
    PLAYLIST_ITEM_KEY: ['publishedAt', 'title', 'description', 'videoId', 'videoUrl'],
  }

  const ps = new PlaylistSummary(config)

  const getVideoDetails = async (id, len) => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=${id}&key=${api}`)
    const data = await response.json()
    let timeInMS = moment.duration(data.items[0].contentDetails.duration).asMilliseconds();
    allDurations.push(timeInMS)

    if (allDurations.length === len) {
      const totalDuration = await allDurations.reduce((acc, curr) => {
        return acc + curr;
      })
      let totalDurationinSec = (totalDuration / 1000);
      speedFormats(totalDurationinSec)
    }
  }

  const handleClick = async () => {
    if (playlistUrl) {
      setLoading(true)
      //Get playlist id from the URL
      const reg = /[&?]list=([^&]+)/i
      const match = reg.exec(playlistUrl);
      playlistID = match[1];
      //Get video details for each video id in the playlist
      const result = await ps.getPlaylistItems(playlistID)
      let videoIds = result.items.map(item => item.videoId)
      len = result.items.length
      videoIds.map((videoId) => getVideoDetails(videoId, len))
    }
    else {
      alert("Enter a valid URL")
    }
  }

  //To format the seconds into hours, minutes and seconds
  const formatTime = (sec) => {
    let hours = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    let seconds = Math.ceil(sec % 60); //Ceil the seconds
    return {
      hours,
      min,
      seconds
    }
  }

  //Time for different speeds and average 
  const speedFormats = (secs) => {
    let oneX, onePointTwoFiveX, onePointFiveX, onePointSevenFiveX, twoX, average, noOfVids;
    oneX = formatTime(secs);
    onePointTwoFiveX = formatTime(secs / 1.25)
    onePointFiveX = formatTime(secs / 1.5)
    onePointSevenFiveX = formatTime(secs / 1.75)
    twoX = formatTime(secs / 2);
    average = formatTime(secs / len);
    noOfVids = len;
    setLoading(false);
    setDisplay(true)
    setAllDetails({ oneX, onePointTwoFiveX, onePointFiveX, onePointSevenFiveX, twoX, average, noOfVids })
    setPlaylistUrl("")
  }


  return (
    <>
      <div className="container pt-2">
      <div className="ribbon">
        <a href="https://github.com/neupanedipen/youtube-playlist-duration" target={'_blank'}>Fork me on GitHub</a>
      </div>
        <hr />
        <h2 className='my-4'><strong>Youtube Playlist Length</strong></h2>
        <hr />
        <div className="input-group">
          <input type="text" className="form-control no-outline" placeholder="Enter Playlist URL" value={playlistUrl} onChange={e => setPlaylistUrl(e.target.value)} />
          <span className="text no-outline"><button type="button" className="btn btn-primary " onClick={handleClick}>Get Length</button></span>
        </div>
        <p className='intro-help'><strong>Example:</strong> https://www.youtube.com/playlist?list=PLTxhk835mIdJgdTORxj8xPOkb-ceoue7A</p>
        <>
          {
            loading && (
              <div className='loader my-3'>
                <img src={spinner} alt='Loading..' />
              </div>
            )
          }
        </>
        <>
          {(loading === false && display) && ((
            <div className="display-length my-5">
              <h2>{`Total duration of this playlist is ${allDetails.oneX.hours} hours ${allDetails.oneX.min} minutes ${allDetails.oneX.seconds} seconds`}</h2>
              <hr />
              <p>{`No of videos: ${allDetails.noOfVids}`}</p>
              <p>{`Duration At 1.25X: ${allDetails.onePointTwoFiveX.hours} hours ${allDetails.onePointTwoFiveX.min} minutes ${allDetails.onePointTwoFiveX.seconds} seconds`}</p>
              <p>{`Duration At 1.5X: ${allDetails.onePointFiveX.hours} hours ${allDetails.onePointFiveX.min} minutes ${allDetails.onePointFiveX.seconds} seconds`}</p>
              <p>{`Duration At 1.75X: ${allDetails.onePointSevenFiveX.hours} hours ${allDetails.onePointSevenFiveX.min} minutes ${allDetails.onePointSevenFiveX.seconds} seconds`}</p>
              <p>{`Duration At 2X: ${allDetails.twoX.hours} hours ${allDetails.twoX.min} minutes ${allDetails.twoX.seconds} seconds`}</p>
              <hr />
              <p>{`Average duration of video is ${allDetails.average.hours} hours ${allDetails.average.min} minutes ${allDetails.average.seconds} seconds`}</p>
            </div>
          ))
          }
        </>
      </div>
    </>
  );
}

export default App;
