import Menu from "../menu/Menu";
import BackToHome from "../ui/backToHome";

export default function MutualFriend() {
  return (
    <div>
      <BackToHome />

      <div className=" flex items-center justify-center">
        Mutual friend logic will be implemented here
      </div>

      <div className="absolute z-10 bg-[#0a3d62] px-4 py-2 rounded flex ml-auto right-3 top-3">
        <Menu />
      </div>
    </div>
  );
}
