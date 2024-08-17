import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const listSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const GenresListSkeleton = () => {
  return (
    <List>
      {listSkeleton.map((s) => (
        <ListItem key={s} paddingY={"5px"}>
          <Skeleton height="32px" borderRadius={8} marginY={2} />
          <SkeletonText />
        </ListItem>
      ))}
    </List>
  );
};

export default GenresListSkeleton;
