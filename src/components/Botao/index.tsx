import React from 'react';
import style from './style.module.scss'

// interface IProps {
//     children: React.ReactNode;
// }

// class Botao extends React.Component<IProps> {
//     type?: "button"| "submit" | "reset" | undefined
//     render() {
//         const { type = "button" } =this.props
//         return (
//             <button type={type} className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

// export default Botao;



interface props {
    children: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

class Botao extends React.Component<props> {
    render() {
        const { type = 'button' } = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;