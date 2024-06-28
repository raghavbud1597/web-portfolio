const Button = ({ text = "Hire Me", link = "#", type = "primary" }) => {
  const btnStyle = {
    btn: `
        relative
        inline-block
        border-2
        border-solid
        uppercase
        no-underline
        font-semibold
        before:absolute
        before:content-[''] 
        before:top-[6px]
        before:left-[-3px]
        before:w-[calc(100%+6px)]
        before:h-[calc(100%-12px)]
        before:ease-in-out
        before:duration-500 
        before:scale-y-100
        before:delay-500
        before:hover:scale-y-0
        after:absolute
        after:content-[''] 
        after:left-[6px]
        after:top-[-3px]
        after:h-[calc(100%+6px)]
        after:w-[calc(100%-12px)]
        after:ease-in-out
        after:duration-500 
        after:scale-x-100
        after:delay-500
        after:hover:scale-x-0
    `,
    muted: `
        px-4
        py-2
        border-slate-300
        text-slate-400
        before:bg-slate-50
        after:bg-slate-50
    `,
    primary: `
        px-4
        py-2
        border-slate-300
        text-slate-400
        before:bg-slate-50
        after:bg-slate-50
    `,
    light: `
        px-4
        py-2
        border-slate-50
        text-slate-50
        before:bg-slate-700
        after:bg-slate-700
    `,
    large: `
        px-20
        py-4
        border-slate-400
        text-slate-500
        before:bg-slate-50
        after:bg-slate-50
    `,
    btnText: `
        relative
        z-10
        text-xl
    `,
  };
  return (
    <a
      href={link}
      className={`${btnStyle.btn} ${btnStyle[type]}`}
      target="blank"
    >
      <span className={`${btnStyle.btnText}`}>{text}</span>
    </a>
  );
};

export default Button;
