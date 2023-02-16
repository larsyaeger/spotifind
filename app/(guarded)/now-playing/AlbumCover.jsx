import Image from 'next/image';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

export default function AlbumCover({ src, width, height, classNames, uri }) {
  return (
    <m.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{
        default: {
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
      <Link className="flex shrink-0" href={`/songs/${uri}`}>
        <Image
          alt="album-cover"
          className={`rounded-3xl cursor-pointer transition duration-200 ease-out hover:scale-105 ${classNames}`}
          height={height}
          src={src}
          width={width}
        />
      </Link>
    </m.div>
  );
}
