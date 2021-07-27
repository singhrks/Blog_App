import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Your Blog</span>
        
      </div>
      <img
        className="headerImg"
        src="https://images2.alphacoders.com/506/506370.jpg"
        alt=""
      />
    </div>
  );
}
