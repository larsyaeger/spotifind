import Link from 'next/link';
import AlbumCover from '../now-playing/AlbumCover';

export default function AlbumTile({
  track: { albumCoverUrl, trackName, artist, uri }
}) {
  return (
    <Link href={`/songs/${uri}`}>
      <div className="flex flex-col items-center font-primary p-8">
        <AlbumCover height={200} src={albumCoverUrl} width={200} />
        <p className="font-bold text-2xl text-primary pt-2 pb-1 text-center  line-clamp-2">
          {trackName}
        </p>
        <p className="font-semibold text-lg text-secondary pt-1 pb-2 text-center">
          {artist}
        </p>
      </div>
    </Link>
  );
}
