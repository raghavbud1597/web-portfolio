const styles = {
  
    heading2: "font-poppins text-slate-600 font-semibold xs:text-[48px] text-[40px] xs:leading-[76px] leading-[66px] w-full my-10",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};
  
export const layout = {
    pageWrapper: `w-full ${styles.flexCenter} flex-col`,
    sectionWrapper: `xl:max-w-[1280px] w-full ${styles.paddingX} xl:px-0 overflow-hidden`,
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};
  
export default styles;