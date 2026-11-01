export default function GridPreview() {
  return (
    <div className="project-art grid-art">
      <span className="art-note">INTERFACE CONCEPT / PROJECT PREVIEW</span>
      <div className="grid-preview">
        <div className="grid-title">
          <span>grid / playground</span>
          <span>↗</span>
        </div>
        <div className="sample-grid">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </div>
        <div className="grid-code">
          display: grid;
          <br />
          <span>grid-template-columns: repeat(3, 1fr);</span>
        </div>
      </div>
    </div>
  );
}
