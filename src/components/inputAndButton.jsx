import { DivInputAndButton, Button} from '../styles/style';

    export const InputAndButton = ({ children, onClick }) => {
    return(
        <DivInputAndButton>
            <input type="text" />
            <Button onClick={onClick}>{children}</Button>
        </DivInputAndButton>
    )
}