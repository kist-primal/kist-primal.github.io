import { useState } from "react";

const NAV = ["Home", "Research", "Publications", "Members", "Contact"];

const research = [
  { title: "Autonomous Navigation", desc: "Self-driving systems for complex urban environments using LiDAR and vision fusion.", icon: "🤖" },
  { title: "Multi-Robot Systems", desc: "Cooperative planning and communication for heterogeneous robot teams.", icon: "🔗" },
  { title: "3D Scene Understanding", desc: "Real-time semantic mapping and object recognition from point clouds.", icon: "🌐" },
];

const pubs = [
  { title: "Robust LiDAR-Visual SLAM in Dynamic Environments", authors: "J. Kim, S. Park, H. Lee", venue: "IEEE RA-L 2025", tag: "Journal" },
  { title: "Cooperative Path Planning for Multi-UAV Coverage", authors: "S. Park, M. Choi", venue: "ICRA 2025", tag: "Conference" },
  { title: "Real-time 3D Object Detection on Edge Devices", authors: "H. Lee, J. Kim, Y. Seo", venue: "IROS 2024", tag: "Conference" },
  { title: "Semantic Map Merging for Multi-Robot Exploration", authors: "M. Choi, S. Park", venue: "T-RO 2024", tag: "Journal" },
];

const members = [
  { name: "Prof. Minjun Kim", role: "Principal Investigator", img: "👨‍🔬" },
  { name: "Soyeon Park", role: "Ph.D. Candidate", img: "👩‍💻" },
  { name: "Hyunwoo Lee", role: "Ph.D. Student", img: "👨‍💻" },
  { name: "Minji Choi", role: "M.S. Student", img: "👩‍🎓" },
  { name: "Yujin Seo", role: "M.S. Student", img: "👨‍🎓" },
  { name: "Donghyun Kang", role: "Undergraduate Intern", img: "🧑‍💻" },
];

const news = [
  { date: "2025.11", text: "Paper accepted to IEEE RA-L 2025!" },
  { date: "2025.09", text: "Two papers accepted to ICRA 2025." },
  { date: "2025.03", text: "Welcome new M.S. students Yujin and Donghyun!" },
  { date: "2024.12", text: "Best Paper Award at IROS 2024 Workshop." },
];

export default function App() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", color: "#1a1a2e", background: "#fafbfe", minHeight: "100vh" }}>
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e8eaf0",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a8c", letterSpacing: -0.5 }}>
            <span
              style={{ background: "linear-gradient(135deg, #2d3a8c, #5b6abf)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              ARI Lab
            </span>
            <span style={{ fontSize: 12, color: "#888", fontWeight: 400, marginLeft: 8 }}>KAIST</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => setActive(n)}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: active === n ? 600 : 400,
                  color: active === n ? "#2d3a8c" : "#555",
                  background: active === n ? "#eef0ff" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      {active === "Home" && (
        <>
          <section
            style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d3a8c 50%, #5b6abf 100%)", color: "white", padding: "80px 24px 70px" }}
          >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <p style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>KAIST School of Computing</p>
              <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.2, marginBottom: 16, maxWidth: 700 }}>
                Autonomous Robotics & Intelligence Laboratory
              </h1>
              <p style={{ fontSize: 18, opacity: 0.85, maxWidth: 600, lineHeight: 1.6, marginBottom: 32 }}>
                We build intelligent robots that perceive, reason, and act in complex real-world environments.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => setActive("Research")}
                  style={{
                    padding: "12px 28px",
                    borderRadius: 10,
                    border: "none",
                    background: "white",
                    color: "#2d3a8c",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  Our Research →
                </button>
                <button
                  onClick={() => setActive("Publications")}
                  style={{
                    padding: "12px 28px",
                    borderRadius: 10,
                    border: "2px solid rgba(255,255,255,0.4)",
                    background: "transparent",
                    color: "white",
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  Publications
                </button>
              </div>
            </div>
          </section>

          {/* News */}
          <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: "#1a1a2e" }}>📢 News</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {news.map((n, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "baseline", padding: "12px 0", borderBottom: "1px solid #eee" }}>
                  <span style={{ fontSize: 13, color: "#2d3a8c", fontWeight: 600, minWidth: 80 }}>{n.date}</span>
                  <span style={{ fontSize: 15, color: "#333" }}>{n.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Research Preview */}
          <section style={{ background: "#f0f2f8", padding: "48px 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Research Areas</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                {research.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "white",
                      borderRadius: 14,
                      padding: 28,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{r.icon}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#2d3a8c" }}>{r.title}</h3>
                    <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Research Page */}
      {active === "Research" && (
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Research</h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 16 }}>Our lab focuses on three interconnected research areas.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {research.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  borderLeft: "4px solid #2d3a8c",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{r.icon}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#2d3a8c" }}>{r.title}</h3>
                </div>
                <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7 }}>{r.desc}</p>
                <div style={{ marginTop: 16, padding: "12px 16px", background: "#f8f9ff", borderRadius: 8, fontSize: 13, color: "#666" }}>
                  📄 Related publications: {i + 2} papers • 🔬 Active projects: {i + 1}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications Page */}
      {active === "Publications" && (
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Publications</h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 16 }}>Selected publications from our lab.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {pubs.map((p, i) => (
              <div key={i} style={{ background: "white", borderRadius: 12, padding: "24px 28px", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "#666", marginBottom: 4 }}>{p.authors}</p>
                    <p style={{ fontSize: 13, color: "#2d3a8c", fontWeight: 500 }}>{p.venue}</p>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      padding: "4px 12px",
                      borderRadius: 20,
                      background: p.tag === "Journal" ? "#eef0ff" : "#f0faf0",
                      color: p.tag === "Journal" ? "#2d3a8c" : "#2a7a2a",
                      fontWeight: 600,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                  {["PDF", "BibTeX", "Code"].map((b) => (
                    <button
                      key={b}
                      style={{
                        fontSize: 12,
                        padding: "4px 12px",
                        borderRadius: 6,
                        border: "1px solid #ddd",
                        background: "white",
                        color: "#555",
                        cursor: "pointer",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Members Page */}
      {active === "Members" && (
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Members</h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 16 }}>Our team of researchers and students.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
            {members.map((m, i) => (
              <div
                key={i}
                style={{ background: "white", borderRadius: 14, padding: 24, textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #eef0ff, #d8dcf0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: 36,
                  }}
                >
                  {m.img}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", marginBottom: 4 }}>{m.name}</h3>
                <p style={{ fontSize: 13, color: "#2d3a8c" }}>{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Page */}
      {active === "Contact" && (
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Contact</h2>
          <p style={{ color: "#666", marginBottom: 36, fontSize: 16 }}>Get in touch with our lab.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <div style={{ background: "white", borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16, color: "#2d3a8c" }}>📍 Location</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
                Room N1-123, Building N1
                <br />
                KAIST, 291 Daehak-ro
                <br />
                Yuseong-gu, Daejeon 34141
                <br />
                South Korea
              </p>
            </div>
            <div style={{ background: "white", borderRadius: 14, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16, color: "#2d3a8c" }}>📬 Email</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
                General: ari-lab@kaist.ac.kr
                <br />
                Prof. Kim: minjun@kaist.ac.kr
              </p>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: "20px 0 12px", color: "#2d3a8c" }}>🎓 Prospective Students</h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                We are always looking for motivated students. Please send your CV and transcripts to Prof. Kim.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer
        style={{ background: "#1a1a2e", color: "rgba(255,255,255,0.6)", padding: "32px 24px", marginTop: 48, textAlign: "center", fontSize: 13 }}
      >
        <p>© 2025 Autonomous Robotics & Intelligence Laboratory, KAIST</p>
      </footer>
    </div>
  );
}
