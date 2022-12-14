//-------------------------------------------------------------------------------------------------
// IMPORTS
import Snow from "react-snow-effect";
//-------------------------------------------------------------------------------------------------
// CSS INLINE STYLING USING TAILWIND
let hover_style =
  "text-black hover: text-blue-200 hover:scale-125 bg h-full hover:text-bold hover: text-black hover:overline rounded-3xl text-2xl from-cyan-100 hover:text-bold ";
let increase_size = "hover: style-125 ";
let header_style =
  "   badge rounded-pill text-bg-white font-mono text-white h-full rounded-2x1 border-spacing-2 nav-link active ";

let background = "bg-zinc-900 p-2";
let navigation_bar_style =
  " rounded-bl-full rounded-br-full nav-justified navbar navbar-dark bg-white nav p-1 bg-color-grey relative flex flex-row shadow-xl justify-center border-y-2 border-black border-";
//-------------------------------------------------------------------------------------------------

function Navbar() {
  return (
    <>
      <div className={background}>
        <nav className={navigation_bar_style}>
          <a className={header_style} href="#Journey">
            <a className={hover_style}>[Journey] </a>
          </a>

          <a className={header_style} href="#Projects">
            <a className={hover_style}>[Projects] </a>
          </a>

          <a className={header_style} href="#Skills">
            <a className={hover_style}>[Skills] </a>
          </a>

          <a className={header_style}>
            <a className={hover_style} href="mailto:abhan03@bu.edu">
              [Contact]{" "}
            </a>
          </a>
        </nav>
      </div>

      <Snow
        style={{
          position: "absolute",
          zIndex: "-100",
          width: "100%",
          height: "100%",
          color: "red",
        }}
        color={"#FFFFFF"}
        numFlakes={500}
        snowflakeSize={10}
        animationInterval={20}
        animationDuration={2500}
      />
    </>
  );
}
export default Navbar;
