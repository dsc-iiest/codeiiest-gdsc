import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars({ peopleDataArray }) {
    return (
        <AvatarGroup max={4}>
            {peopleDataArray.map((people, ind) =>
                <Avatar key={ind} alt={people.name} src={`/assets/profile-pics/${people.img}`} />
            )}
        </AvatarGroup>
    );
}