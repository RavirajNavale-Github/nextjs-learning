import Image from "next/image";
import image from '../../../public/57768.jpg'
import image1 from '../../../public/51261.jpg'

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen pt-10">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Hello Bloggers
          </h2>
          <p className="mb-4">
          Welcome to 'Blog.com', where stories come alive and knowledge is shared. Our mission is to create a vibrant community of readers and writers who are passionate about exploring diverse topics and sharing their unique perspectives.
          </p>
          <p>
          At 'Blog.com', we believe in the power of words to inspire, inform, and entertain. Our blog is a hub for high-quality, engaging content that resonates with readers. 
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image className="w-full rounded-lg" src={image1} alt="office content 1"/>
          <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={image} width={500} height ={500} alt="office content 2"/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
