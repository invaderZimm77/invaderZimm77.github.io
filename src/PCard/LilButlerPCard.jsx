import "./PrjCard.css";
export default function LilButlerPCard() {
  return (
    <div className="project-card">
      <h4 className="project-title">Lil Butler</h4>
      <div className="lil-butler-thumbnail-container">
        <image
          src="/LilButlerThumb.png"
          alt="Image Missing."
          className="pCard-thumbnail"
        />
      </div>
      <div className="project-description">
        Lil Butler Is an assistant for Personal Assistants LLC.* . Track the
        little things about the clients like their likes/dislikes, preferences.
        Then the other employees will be able to read those notes. A message
        board of sorts if you will.
      </div>
      <div className="project-links">
        <a href="https://github.com/invaderZimm77/Little_Butler">
          Lil Butler - GitHub
        </a>
      </div>
    </div>
  );
}
