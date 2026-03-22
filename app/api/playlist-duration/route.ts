import { NextRequest, NextResponse } from "next/server";
import moment from "moment";

type PlaylistItemResponse = {
  items: {
    contentDetails?: {
      videoId?: string;
    };
  }[];
  nextPageToken?: string;
  error?: unknown;
};

type VideoDetailsResponse = {
  items?: {
    contentDetails: {
      duration: string;
    };
  }[];
};

type TimeFormat = {
  hours: number;
  min: number;
  seconds: number;
};

type PlaylistResponse = {
  oneX: TimeFormat;
  onePointTwoFiveX: TimeFormat;
  onePointFiveX: TimeFormat;
  onePointSevenFiveX: TimeFormat;
  twoX: TimeFormat;
  average: TimeFormat;
  noOfVids: number;
};

const formatTime = (sec: number): TimeFormat => {
  return {
    hours: Math.floor(sec / 3600),
    min: Math.floor((sec % 3600) / 60),
    seconds: Math.ceil(sec % 60),
  };
};

const speedFormats = (secs: number, len: number): PlaylistResponse => ({
  oneX: formatTime(secs),
  onePointTwoFiveX: formatTime(secs / 1.25),
  onePointFiveX: formatTime(secs / 1.5),
  onePointSevenFiveX: formatTime(secs / 1.75),
  twoX: formatTime(secs / 2),
  average: formatTime(secs / len),
  noOfVids: len,
});

const extractPlaylistId = (url: string): string | null => {
  const reg = /[&?]list=([^&]+)/i;
  const match = reg.exec(url);
  return match ? match[1] : null;
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const { playlistUrl } = await req.json();

    const playlistID = extractPlaylistId(playlistUrl);

    if (!playlistID) {
      return NextResponse.json(
        { error: "Invalid playlist URL" },
        { status: 400 },
      );
    }

    const videoIds: string[] = [];
    let pageToken: string | undefined = "";

    // FETCH PLAYLIST ITEMS
    while (pageToken !== undefined) {
      const response: Response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=contentDetails&pageToken=${pageToken}&playlistId=${playlistID}&key=${apiKey}`,
        { cache: "no-store" },
      );

      const res: PlaylistItemResponse = await response.json();

      if (!response.ok || res.error) {
        return NextResponse.json(
          { error: "Failed to fetch playlist items" },
          { status: 400 },
        );
      }

      res.items.forEach((item) => {
        const id = item.contentDetails?.videoId;
        if (id) videoIds.push(id);
      });

      pageToken = res.nextPageToken;
    }

    const len = videoIds.length;

    if (!len) {
      return NextResponse.json({ error: "No videos found" }, { status: 400 });
    }

    // FETCH VIDEO DETAILS
    const durations = await Promise.all(
      videoIds.map(async (id) => {
        const response: Response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${id}&key=${apiKey}`,
          { cache: "no-store" },
        );

        const data: VideoDetailsResponse = await response.json();

        if (!response.ok || !data.items?.[0]) return 0;

        return moment
          .duration(data.items[0].contentDetails.duration)
          .asMilliseconds();
      }),
    );

    const totalDuration = durations.reduce((acc, curr) => acc + curr, 0);
    const totalSeconds = totalDuration / 1000;

    const result = speedFormats(totalSeconds, len);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
