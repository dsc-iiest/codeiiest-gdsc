import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { styled } from '@mui/material/styles';

const CustomAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
    '& .MuiAvatarGroup-avatar': {
        width: 25,
        height: 25,
    },
    '& .MuiAvatarGroup-add': {
        width: 25,
        height: 25,
    },
}));

export default function GroupAvatars({ peopleDataArray }) {
    return (
        <CustomAvatarGroup max={4}  >
            {peopleDataArray.map((people, ind) =>
                <Avatar
                    key={ind} alt={people.name} sx={{ width: 30, height: 30 }} src={`/assets/profile-pics/${people.img}`} />
            )}
        </CustomAvatarGroup>
    );
}   