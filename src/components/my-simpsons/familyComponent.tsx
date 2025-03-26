import {simpsons} from "../../data/simpsonsArr.tsx";
import CharacterComponent from "./characterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) =>
                    <CharacterComponent key={index} item={value}>
                        {value.info}
                    </CharacterComponent>)
            }
        </div>
    );
};