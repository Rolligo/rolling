import CardList from "components/CardList";
import * as S from "./MessageListPage.style";
import NavBar from "components/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useRequest from "hooks/useRequest";
import { useEffect, useState } from "react";
import { Button } from "components/Button";
import NavBarSub from "components/NavBarSub";
import { Helmet } from "react-helmet";

function MessageListPage() {
  const [wishDelete, setWishDelete] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const editURL = `${currentPath}/edit`;
  const isEditMode = currentPath.endsWith("/edit");
  const navigate = useNavigate();

  const {
    data: paperData,
    isLoading,
    error: loadError,
  } = useRequest({
    options: {
      url: `recipients/${id}/`,
    },
  });

  const { fetch: fetchDelete } = useRequest({
    skip: true,
    options: {
      url: `/recipients/${id}/`,
      method: "DELETE",
    },
  });

  const deletePaper = async () => {
    if (!wishDelete) return;
    if (!confirm("정말 삭제하시겠습니까?")) {
      setWishDelete(false);
      return;
    }
    const { error: deleteError } = await fetchDelete();
    if (deleteError) {
      throw new Error("롤링 페이퍼 삭제 실패");
    }
    navigate("/list");
  };

  const handleQuitClick = () => {
    navigate(currentPath.replace("/edit", ""));
  };

  const handleDeleteClick = () => {
    setWishDelete(true);
  };

  useEffect(() => {
    if (loadError) {
      alert("존재하지 않는 페이지입니다.");
      navigate("/list");
    }
  }, [loadError, navigate]);

  useEffect(() => {
    deletePaper();
  }, [wishDelete]);

  if (isLoading || loadError) {
    return;
  }

  return (
    <>
      <Helmet>
        <title>
          {isEditMode ? "롤링 페이퍼 편집 - Rolling" : "롤링 페이퍼 - Rolling"}
        </title>
      </Helmet>
      <S.Background
        $backgroundColor={paperData?.backgroundColor}
        $backgroundImageURL={paperData?.backgroundImageURL}
      >
        <S.NavBarContainer>
          <NavBar showButton={false} />
        </S.NavBarContainer>
        <NavBarSub data={paperData} />
        <S.MainDiv>
          {isEditMode ? (
            <>
              <S.DeleteButton>
                <Button size="full" onClick={handleDeleteClick}>
                  삭제하기
                </Button>
              </S.DeleteButton>
              <S.ButtonContainer>
                <S.StyledDeleteButton size="sm" onClick={handleDeleteClick}>
                  삭제하기
                </S.StyledDeleteButton>
                <S.StyledOutlinedButton size="sm" onClick={handleQuitClick}>
                  돌아가기
                </S.StyledOutlinedButton>
              </S.ButtonContainer>
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
    </>
  );
}

export default MessageListPage;
