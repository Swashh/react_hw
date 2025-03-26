import {SimpsonsType} from "../../models/simpsonsModel.tsx";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: SimpsonsType,
    children: ReactNode
}

const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div>
            <h3 className='my-10'>{item.name} {item.surname}</h3>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;