
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.content}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Pavel" id="2"/>
                <DialogItem name="Mariya" id="3"/>
                <DialogItem name="Valery" id="4"/>
                <DialogItem name="Sasha" id="5"/>
                <DialogItem name="Dmitriy" id="6"/>
                <DialogItem name="Yaroslava" id="7"/>
            </div>
            <div className={s.messages}>
                <Message content="How are you?"/>
                <Message content="Hello"/>
                <Message content="abracadabra"/>
                <Message content="Why?"/>
                <div className={s.message}></div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>abracadabra</div>
                <div className={s.message}>Why?</div>
            </div>
        </div>
    )
}

export default Dialogs