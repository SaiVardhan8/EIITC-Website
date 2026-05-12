import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ReactPlayer from 'react-player';
// import dynamic from 'next/dynamic';

// Dynamically load react-player so it doesn't run on the server
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="text-center my-6 px-4">
        <h2 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-4 py-2 text-lg md:text-xl">
             Careers
        </h2>
            </div>
      
      <div className="w-full h-64 md:h-96 relative bg-gray-200">
        <Image 
          src="/careerslogo.jpg" 
          alt="Edvenswa Team in Office" 
          layout="fill" 
          objectFit="cover"
          priority
        />

      </div>


            <div className="text-center py-10 md:py-10 px-4">
      



       <h1 className="text-3xl md:text-5xl font-bold mb-4">Start your journey with Edvenswa</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Grow your career as we grow. Join Innovative IT Company. Powered By Engineering. Driven By Passion
        </p>
         <Link href="/JobPostings" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
            Explore Open Positions
          </Link>
 
 </div>
      
      {/* <div className="container mt-20 px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md -mt-10 relative z-10 max-w-4xl mx-auto">
          <p className="text-gray-700 text-sm">
            <strong>GUIDING PRINCIPLE</strong>
          </p>
          <p className="text-gray-700 mt-2">
            Agile workflows are the industry-wide standard and have been implemented by many organizations. However, at Edvenswa, it stands as our foremost guiding principle.
          </p>
          <p className="text-gray-700 mt-4">
            We firmly believe that by placing utmost importance on the happiness, work/life balance, creativity and passion of our team, we create a winning situation for everyone involved - including our valued clients!
          </p>
        </div>
      </div> */}

      <div className='justify-center items-center flex flex-col md:flex-row gap-6 container mx-auto py-8 '>
        <div>
            <h3 className="inline-block uppercase tracking-wider text-gray-800 font-semibold bg-gray-200 px-2 py-1">
                PEOPLE FIRST
            </h3>
            <div className="mt-4">
                <p className='text-black-800 text-justify text-xl leading-relaxed'>“We prioritize our people above all else.” It’s a phrase commonly used, but rarely implemented by many organizations. However, at Edvenswa, it stands as our foremost guiding principle.
                    <br/><br />
                    We firmly believe that by placing utmost importance on the happiness, work/life balance, and professional growth of our team, we create a winning situation for everyone involved – including our valued clients.
                </p>
            </div>
        </div>
      </div>
      
      {/* <div className="container mx-auto px-4 py-8">
        <div className="w-full aspect-video relative">
          <Image 
            src="/images/team-video-thumbnail.jpg" 
            alt="Edvenswa Team Video" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-brand-teal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="container mx-auto px-4 py-8">
        <div className="w-full aspect-video"> */}
          {/* <ReactPlayer
            url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7039131624336199680?compact=1"
            width="100%"
            height="100%"
            controls
          /> */}
          {/* <ReactPlayer url="https://www.youtube.com/watch?v=your_video_id" /> */}
        {/* </div>
      </div> */}
    </section>
  );
};

export default Hero;