import deployingNextjs from '@/videos/skapadapp.mp4';
import Video from 'next-video';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Video
        className='max-w-4xl'
        src={deployingNextjs}
      />
    </main>
  );
}
