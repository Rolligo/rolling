import COMPLETED from "assets/images/icons/completed.svg";

function CopyToClipboard() {
  return (
    <>
      <img src={COMPLETED} />
      <span>URL이 복사 되었습니다.</span>
    </>
  );
}

export default CopyToClipboard;
