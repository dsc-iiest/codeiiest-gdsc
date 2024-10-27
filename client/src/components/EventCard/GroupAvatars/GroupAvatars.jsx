import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';

const CustomAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
    '& .MuiAvatarGroup-avatar': {
        width: 40,
        height: 40,
        border: "none"
    },
    '& .MuiAvatarGroup-add': {
        width: 40,
        height: 40,
        border: "none"
    },
}));

export default function GroupAvatars({ peopleDataArray }) {
    return (
        <CustomAvatarGroup max={4}  >
            {peopleDataArray.map((people, ind) =>
                <Avatar
                    key={ind} alt={people.name} src={`/assets/profile-pics/${people.img}`} />
            )}
        </CustomAvatarGroup>
    );
}   