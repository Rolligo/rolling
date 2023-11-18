import DeferredComponent from "../DeferredComponent";
import * as S from "./PaperListSkeleton.style";

function PaperListSkeleton() {
  return (
    <DeferredComponent>
      <S.SkeletonContainer>
        <S.SkeletonCard />
        <S.SkeletonCard />
        <S.SkeletonCard />
        <S.SkeletonCard />
      </S.SkeletonContainer>
    </DeferredComponent>
  );
}

export default PaperListSkeleton;
