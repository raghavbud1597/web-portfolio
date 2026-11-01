export default function DashboardPreview() {
  return (
    <div className="project-art dashboard-art">
      <span className="art-note">INTERFACE CONCEPT / PROJECT PREVIEW</span>
      <div className="dashboard">
        <aside>
          <b>◈</b>
          <span className="side-active">▦</span>
          <span>↗</span>
          <span>▤</span>
          <span>⚙</span>
        </aside>
        <div className="dash-body">
          <div className="dash-top">
            <span>
              Overview <small> / Workspace</small>
            </span>
            <i>RB</i>
          </div>
          <div className="dash-heading">
            <div>
              <small>WORKSPACE ANALYTICS</small>
              <h3>A clearer perspective.</h3>
            </div>
            <span>Last 30 days ▾</span>
          </div>
          <div className="dash-stats">
            <div>
              <small>Revenue</small>
              <b>$24,860</b>
              <em>↗ 12.8%</em>
            </div>
            <div>
              <small>Active users</small>
              <b>8,492</b>
              <em>↗ 8.2%</em>
            </div>
            <div>
              <small>Conversion</small>
              <b>4.86%</b>
              <em>↗ 2.1%</em>
            </div>
          </div>
          <div className="chart">
            <div>
              <b>Revenue overview</b>
              <small> ● This month</small>
            </div>
            <svg
              viewBox="0 0 620 130"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <lineargradient id="fade" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#caee85" stopOpacity=".3"></stop>
                  <stop offset="1" stopColor="#caee85" stopOpacity="0"></stop>
                </lineargradient>
              </defs>
              <path
                d="M0 110L38 95L75 102L116 60L155 72L195 80L234 39L273 51L312 42L351 60L390 20L429 34L468 25L507 38L546 12L585 20L620 2V130H0Z"
                fill="url(#fade)"
              ></path>
              <path
                d="M0 110L38 95L75 102L116 60L155 72L195 80L234 39L273 51L312 42L351 60L390 20L429 34L468 25L507 38L546 12L585 20L620 2"
                stroke="#caee85"
                strokeWidth="2"
                fill="none"
              ></path>
            </svg>
            <div className="chart-months">
              <span>01 JUN</span>
              <span>08 JUN</span>
              <span>15 JUN</span>
              <span>22 JUN</span>
              <span>30 JUN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
