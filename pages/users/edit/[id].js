import { AddEdit } from 'components/users';
import { userService } from 'service';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}