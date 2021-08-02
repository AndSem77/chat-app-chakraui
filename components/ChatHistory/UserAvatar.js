import { Avatar, AvatarBadge, Tooltip } from '@chakra-ui/react';

export default function UserAvatar({ name }) {
  return (
    <Tooltip label={name}>
      <Avatar name={name}>
        <AvatarBadge boxSize={4} bg='green.500' />
      </Avatar>
    </Tooltip>
  );
}
