import * as S from "./Relationship.style";

const RELATIONSHIPS = {
  default: {
    backgroundColor: "GRAY_100",
    textColor: "GRAY_500",
  },
  acquaintance: {
    text: "지인",
    backgroundColor: "ORANGE_100",
    textColor: "ORANGE_500",
  },
  colleague: {
    text: "동료",
    backgroundColor: "PURPLE_100",
    textColor: "PURPLE_600",
  },
  family: {
    text: "가족",
    backgroundColor: "GREEN_100",
    textColor: "GREEN_500",
  },
  friend: {
    text: "친구",
    backgroundColor: "BLUE_100",
    textColor: "BLUE_500",
  },
};

function Relationship({ children, relationship }) {
  const selectedRelationship =
    RELATIONSHIPS[relationship] ?? RELATIONSHIPS.default;
  return (
    <S.Container
      backgroundColor={selectedRelationship.backgroundColor}
      textColor={selectedRelationship.textColor}
    >
      {children ?? RELATIONSHIPS[relationship].text}
    </S.Container>
  );
}

export default Relationship;
