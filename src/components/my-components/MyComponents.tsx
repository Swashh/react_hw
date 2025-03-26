import {FC} from 'react'

type MyComponentPropType = { text: string }

const MyComponents: FC<MyComponentPropType> = ({text}) => {
    return <div>{text}</div>
}

export default MyComponents


