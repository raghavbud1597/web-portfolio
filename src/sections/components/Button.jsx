import styles from '../../styles'

const Button = ({
        text = 'Hire Me',
        link = '#'
    }) => {
    const btnStyle = {
        btn: `
            inline-block
            px-6
            py-2
            bg-sky-500
            rounded-full
            text-white
            font-semibold
            no-underline
            shadow-md
            hover:bg-red-500
            hover:shadow-lg
        `
    }
    return (
        <a 
            href={link} 
            className={`${btnStyle.btn}`}
        >
            {text}
        </a>
    )
}

export default Button