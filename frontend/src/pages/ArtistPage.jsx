import { useLoaderData } from "react-router-dom";
import ReactPlayer from "react-player";

export default function ArtistPage() {
  const data = useLoaderData();

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center my-16">Artists</h1>
      <ul>
        {data.map((d) => (
          <>
            <li key={d.id}>{d.name}</li>
            <ReactPlayer url={d.playlist_url} controls />
          </>
        ))}
      </ul>
    </div>
  );
}
