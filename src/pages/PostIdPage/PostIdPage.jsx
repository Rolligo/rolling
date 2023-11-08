import CardList from "components/CardList";
import * as S from "./PostIdPage.style";
import NavBar from "components/NavBar";
import OutlinedButton from "components/StyledButtons/OutlinedButton";
import { Link, useLocation, useParams } from "react-router-dom";
import PrimaryButton from "components/StyledButtons/PrimaryButton";
import useRequest from "hooks/useRequest";

function PostIdPage() {
  const { id } = useParams();
  const { data } = useRequest({
    deps: [id],
    url: `https://rolling-api.vercel.app/1-4/recipients/${id}/`,
  });

  const location = useLocation();
  const currentPath = location.pathname;
  const editURL = `${currentPath}/edit`;
  const isEditMode = currentPath.endsWith("/edit");

  return (
    <S.Background
      $backgroundColor={data?.backgroundColor}
      $backgroundImageURL={data?.backgroundImageURL}
    >
      <S.NavBarContainer>
        <NavBar showButton={false} />
      </S.NavBarContainer>
      {/* <Header /> */}
      <S.MainDiv>
        {isEditMode ? (
          <>
            <S.DeleteButton>
              <PrimaryButton>삭제하기</PrimaryButton>
            </S.DeleteButton>
            <S.DeleteButtonOnPc>
              <PrimaryButton smallSize width="9.2rem">
                삭제하기
              </PrimaryButton>
            </S.DeleteButtonOnPc>
          </>
        ) : (
          <S.EditButton>
            <Link to={editURL}>
              <OutlinedButton smallSize width="9rem">
                편집하기
              </OutlinedButton>
            </Link>
          </S.EditButton>
        )}
        <CardList isEditMode={isEditMode} id={id} />
      </S.MainDiv>
    </S.Background>
  );
}

export default PostIdPage;
