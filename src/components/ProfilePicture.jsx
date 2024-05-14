import styles from "../styles";
import { profilePicture } from "../assets";

const ProfilePicture = () => {
  const profilePictureStyle = {
    sectionWrapper: `relative 
        w-[250px] 
        h-[250px]
        bg-slate-200
        rounded-full
        overflow-hidden
        md:w-[300px]
        md:h-[300px]
        lg:w-[400px]
        lg:h-[400px]
        before:absolute
        before:inset-x-[80px]
        before:inset-y-[-5px]
        before:hover:inset-x-[0px]
        before:hover:inset-y-[-20px]
        md:before:inset-x-[100px]
        md:before:inset-y-[-8px]
        lg:before:inset-x-[140px]
        lg:before:inset-y-[-10px]
        before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500
        before:transition-all
        before:animate-spin-slow
        after:absolute
        after:inset-[6px]
        after:bg-slate-200
        after:z-1
        after:rounded-full`,
    imgWrapper: `absolute
        inset-[20px]
        border-4
        border-slate-200
        z-10
        rounded-full
        overflow-hidden
        ${styles.flexCenter}`,
    img: `absolute 
        top-0 
        left-0 
        w-full 
        h-full 
        bg-cover 
        transition-all 
        hover:opacity-0`

    
};
  return (
    <section className={`${profilePictureStyle.sectionWrapper}`}>
      <div className={`${profilePictureStyle.imgWrapper}`}
      >
        <img
          src={profilePicture}
          alt="Profile Picture"
          className={`${profilePictureStyle.img}`}
        />
        <div className="flex flex-col">
            <h2>Let&apos;s Connect</h2>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Download CV
            </button>
        </div>
        
      </div>
    </section>
  );
};

export default ProfilePicture;
