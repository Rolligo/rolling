import CardList from "components/CardList";
import * as S from "./PostIdPage.style";
import NavBar from "components/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import fetch from "apis/utils/fetch";
import { Button } from "components/Button";
import NavBarSub from "components/NavBarSub";

function PostIdPage() {
  const [wishDelete, setWishDelete] = useState(false);
  const { id } = useParams();
  const { data } = useRequest({
    options: {
      url: `recipients/${id}/`,
    },
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
      <NavBarSub data={data} />
      <S.MainDiv>
        {isEditMode ? (
          <>
            <S.DeleteButton>
              <Button size="full" onClick={handleDeleteClick}>
                삭제하기
              </Button>
            </S.DeleteButton>
            <S.DeleteButtonOnPc>
              <Button size="sm" onClick={handleDeleteClick}>
                삭제하기
              </Button>
            </S.DeleteButtonOnPc>
          </>
        ) : (
          <S.EditButton>
            <Link to={editURL}>
              <S.StyledOutlinedButton size="sm">
                편집하기
              </S.StyledOutlinedButton>
            </Link>
          </S.EditButton>
        )}
        <CardList isEditMode={isEditMode} id={id} />
      </S.MainDiv>
    </S.Background>
  );
}

export default PostIdPage;
