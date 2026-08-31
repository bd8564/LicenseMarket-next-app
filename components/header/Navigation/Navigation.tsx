import NavigationRight from "./NavigationRight";
import NavigationLeft from "./NavigationLeft";
export default function Navigation() {
  return (
    <div
      className="flex justify-between items-center bg-black w-full 
                    px-6 py-4 flex-row-reverse"
    >
      <NavigationRight />
      <NavigationLeft />
    </div>
  );
}
