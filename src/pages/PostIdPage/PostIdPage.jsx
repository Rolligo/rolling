import CardList from "components/CardList";
import * as S from "./PostIdPage.style";
import NavBar from "components/NavBar";
import OutlinedButton from "components/StyledButtons/OutlinedButton";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "components/StyledButtons/PrimaryButton";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import fetch from "apis/utils/fetch";

function PostIdPage() {
  const [wishDelete, setWishDelete] = useState(false);
  const { id } = useParams();
  const { data } = useRequest({
    url: `recipients/${id}/`,
  });
  const location = useLocation();
  const currentPath = location.pathname;
  const editURL = `${currentPath}/edit`;
  const isEditMode = currentPath.endsWith("/edit");
  const navigate = useNavigate();

  const deletePaper = async () => {
    try {
      if (!wishDelete) return;
      const response = await fetch({
        url: `/recipients/${id}/`,
        method: "DELETE",
      });
      if (response.status !== 204) {
        throw new Error("롤링 페이퍼 삭제 실패");
      }
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = () => {
    setWishDelete(true);
  };

  useEffect(() => {
    deletePaper();
  }, [wishDelete]);

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
              <PrimaryButton onClick={handleDeleteClick}>
                삭제하기
              </PrimaryButton>
            </S.DeleteButton>
            <S.DeleteButtonOnPc>
              <PrimaryButton
                onClick={handleDeleteClick}
                smallSize
                width="9.2rem"
              >
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
