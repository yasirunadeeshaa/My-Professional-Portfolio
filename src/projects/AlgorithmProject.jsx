import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  Calendar,
  Users,
  Sparkles,
  Monitor,
  Terminal,
  BookOpen,
  Network,
  GitBranch,
  FileInput,
  Gauge,
  Route,
  ListTree,
  Lightbulb,
  Bug,
  TrendingUp,
  FlaskConical,
  Check,
} from "lucide-react";

const technologies = [
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Graph Theory", icon: "🕸️", color: "#7c8cf8" },
  { name: "Adjacency Lists", icon: "🗂️", color: "#e879a0" },
  { name: "File I/O", icon: "📄", color: "#38bdf8" },
];

const projectStats = [
  { label: "Development Time", value: "10 Weeks", icon: <Calendar /> },
  { label: "Module", value: "Algorithms", icon: <BookOpen /> },
  { label: "Coursework Weight", value: "50%", icon: <BookOpen /> },
  { label: "Team Size", value: "1 Member", icon: <Users /> },
];

const features = [
  {
    icon: <FileInput size={20} />,
    title: "Network Parser",
    desc: "Reads a plain-text description of a flow network — node count plus a-b-c capacity triples — and builds a graph from it, handling any file in the specified format.",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Residual Graph",
    desc: "A FlowEdge class implicitly tracks both forward and backward capacities, so the residual graph never needs to be rebuilt between augmentations.",
  },
  {
    icon: <Route size={20} />,
    title: "BFS Augmenting Paths",
    desc: "Edmonds-Karp uses breadth-first search to find the shortest augmenting path from source to sink on every iteration, instead of arbitrary DFS.",
  },
  {
    icon: <Gauge size={20} />,
    title: "Bottleneck Augmentation",
    desc: "Each path's minimum residual capacity is computed and pushed through every edge along it, then the residual capacities are updated in both directions.",
  },
  {
    icon: <ListTree size={20} />,
    title: "Step-by-Step Trace",
    desc: "Every augmenting path is printed with its bottleneck capacity and the running flow value, so the final maximum flow is fully justified, not just asserted.",
  },
  {
    icon: <Network size={20} />,
    title: "Final Flow Report",
    desc: "Outputs the flow-versus-capacity for every edge in the network once no augmenting paths remain, confirming the maximum flow value.",
  },
];

const codeSnippet = `// Outer loop runs until no augmenting path remains
while (hasAugmentingPath(G, s, t)) {
    // Compute bottleneck capacity along the path
    // found by BFS, then augment flow accordingly
}

// BFS implementation - O(E) time complexity
private boolean hasAugmentingPath(FlowNetwork G, int s, int t) {
    Queue<Integer> queue = new LinkedList<>();
    queue.add(s);

    while (!queue.isEmpty() && !isVisited[t]) {
        int v = queue.remove();
        for (FlowEdge e : G.adj(v)) {
            // residual capacity check, mark visited,
            // record parent edge for path reconstruction
        }
    }
    return isVisited[t];
}`;

const cliOutput = `Flow network with 6 vertices and 9 edges:
0: 0->1 0/4   0->4 0/1
1: 1->2 0/2   1->3 0/1   1->5 0/1
2: 2->3 0/1   2->4 0/1
3: 3->4 0/2
4: 4->5 0/4

Running Edmonds-Karp (Ford-Fulkerson + BFS)...

Augmenting path 1: 0 -> 1 -> 5      bottleneck = 1   flow value = 1
Augmenting path 2: 0 -> 4 -> 5      bottleneck = 1   flow value = 2
Augmenting path 3: 0 -> 1 -> 2 -> 4 -> 5   bottleneck = 1   flow value = 3
Augmenting path 4: 0 -> 1 -> 3 -> 4 -> 5   bottleneck = 1   flow value = 4
Augmenting path 5: 0 -> 1 -> 2 -> 3 -> 4 -> 5   bottleneck = 1   flow value = 5

No augmenting path found. Algorithm terminated.

FINAL FLOW ASSIGNMENT
0 -> 1: flow = 4 / capacity = 4
0 -> 4: flow = 1 / capacity = 1
1 -> 2: flow = 2 / capacity = 2
1 -> 3: flow = 1 / capacity = 1
1 -> 5: flow = 1 / capacity = 1
2 -> 3: flow = 1 / capacity = 1
2 -> 4: flow = 1 / capacity = 1
3 -> 4: flow = 2 / capacity = 2
4 -> 5: flow = 4 / capacity = 4

MAXIMUM FLOW VALUE = 5`;

const decisions = [
  {
    q: "Why Edmonds-Karp over plain Ford-Fulkerson?",
    a: "Plain Ford-Fulkerson picks any augmenting path via DFS, which can degrade to O(E · max_flow) — exponential-feeling if capacities are large. Forcing every path to be the shortest one (via BFS) caps the number of augmentations at O(VE), turning the same algorithm into a guaranteed polynomial one for almost no extra code.",
  },
  {
    q: "Why not Dinic's or Push-Relabel instead?",
    a: "Both are asymptotically faster on dense graphs (O(V²E)), but they need extra machinery — level graphs and blocking flows for Dinic's, height functions and discharge operations for Push-Relabel. Given the coursework's networks are small and sparse, Edmonds-Karp's simplicity was the better trade-off; I flagged the faster alternatives in the report rather than over-engineering the implementation.",
  },
  {
    q: "Why adjacency lists over an adjacency matrix?",
    a: "A matrix gives O(1) edge lookups but costs O(V²) space regardless of how sparse the graph is. The benchmark networks have far fewer edges than V², so adjacency lists (O(V+E) space) were the more honest fit — and BFS over an adjacency list is already O(V+E), so there's no traversal cost being traded away.",
  },
  {
    q: "Why track residual capacity inside FlowEdge instead of a separate residual graph?",
    a: "Building a brand-new residual graph after every augmentation would mean re-deriving it from the flow network each iteration. Storing both forward and backward capacity directly on the edge object means the residual graph is always 'live' — augmenting flow on one edge automatically updates what's available on its reverse, with no separate rebuild step.",
  },
];

const challenges = [
  {
    title: "Reverse edges with zero original capacity",
    desc: "Augmenting a path can need to push flow backward along an edge that doesn't exist in the original network (capacity 0). The fix was to always create a paired reverse FlowEdge at construction time, even when its starting capacity is zero, so BFS can traverse it once forward flow opens it up.",
  },
  {
    title: "Reconstructing the path after BFS",
    desc: "BFS alone tells you the sink is reachable, not which path got you there. I tracked a 'parent edge' array during the traversal so the bottleneck and the full path could be reconstructed by walking backward from sink to source once the search finished.",
  },
  {
    title: "Bottleneck calculation across mixed forward/backward edges",
    desc: "When a path includes a reverse edge, the residual capacity available is the original edge's already-pushed flow, not its capacity. I had to be careful that the bottleneck calculation used residual capacity consistently for both edge directions, not just capacity minus flow on forward edges.",
  },
  {
    title: "Parser robustness",
    desc: "The brief only guarantees the input format loosely (node count, then a-b-c triples), so the parser needed to tolerate trailing whitespace and blank lines without assuming a fixed line count — solved by reading tokens rather than splitting strictly by line.",
  },
];

const comparisonTable = [
  { algo: "Ford-Fulkerson (DFS)", time: "O(E · max_flow)", note: "Simple, but can be slow with large integer capacities" },
  { algo: "Edmonds-Karp (BFS) — used here", time: "O(V E²)", note: "Guaranteed polynomial, simple to implement" },
  { algo: "Dinic's Algorithm", time: "O(V² E)", note: "Faster on larger or denser graphs" },
  { algo: "Push-Relabel", time: "O(V³) / O(V²√E)", note: "Best for very dense networks, more complex to implement" },
];

const improvements = [
  "Swap in Dinic's algorithm for networks with a high edge-to-node ratio, where its O(V²E) bound noticeably outperforms Edmonds-Karp.",
  "Add a small JUnit suite covering disconnected graphs, zero-capacity edges, and networks with multiple equal-length augmenting paths.",
  "Support multiple sources/sinks by introducing a super-source and super-sink, rather than assuming exactly one of each.",
  "Visualise the residual graph at each step, not just the final flow, to make the algorithm's reasoning easier to verify by eye.",
];

const testCases = [
  "Disconnected graph — no path from source to sink, maximum flow correctly returns 0",
  "Zero-capacity edges — confirmed they never get selected as part of an augmenting path",
  "Single edge source-to-sink — sanity check that flow equals the edge's capacity exactly",
  "Multiple shortest paths of equal length — verified BFS picks one deterministically without looping",
];

/* ─── component ─────────────────────────────────────────── */
const NetworkFlowDetail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("output");
  const navigate = useNavigate();
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="nf-root">
      {/* ── background ── */}
      <div className="nf-grid-bg" />
      <div className="nf-glow-1" />
      <div className="nf-glow-2" />

      <div className={`nf-inner ${isVisible ? "nf-in" : ""}`}>

        {/* ══════════════════ HERO ══════════════════ */}
        <section className="nf-hero">
          <div className="nf-hero-content">
            <div className="nf-hero-left">
              <button className="nf-back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </button>

              <div className="nf-eyebrow">
                <span className="nf-eyebrow-line" />
                <Sparkles size={13} />
                <span>Algorithms Coursework · 2025</span>
                <Sparkles size={13} />
                <span className="nf-eyebrow-line" />
              </div>

              <h1 className="nf-hero-title">
                Network Flow
                <br />
                <em className="nf-title-em">Algorithm Implementation</em>
              </h1>

              <p className="nf-hero-subtitle">
                A Java implementation of the Ford-Fulkerson method with the
                Edmonds-Karp optimization, built for the 5SENG003W
                Algorithms coursework at the University of Westminster.
                Parses arbitrary flow networks from file, finds a maximum
                flow via BFS-based augmenting paths, and reports every
                step along the way.
              </p>

              {/* stat cards */}
              <div className="hd-hero-stats">
                {projectStats.map((s, i) => (
                  <div key={i} className="hd-stat-card">
                    <div className="hd-stat-icon">{s.icon}</div>
                    <div>
                      <div className="hd-stat-value">{s.value}</div>
                      <div className="hd-stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="nf-hero-pills">
                {["Java", "Graph Algorithms", "Edmonds-Karp", "Big-O Analysis"].map((t) => (
                  <span key={t} className="nf-pill">{t}</span>
                ))}
              </div>

              <div className="nf-hero-actions">
                <button
                  className="nf-btn-primary"
                  onClick={() => window.open("https://github.com/yasirunadeeshaa/Find-Maximum-Flow-In-Graph", "_blank")}
                >
                  <Github size={17} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════ BODY ══════════════════ */}
        <div className="nf-body">

          {/* ── PROJECT DESCRIPTION + DETAILS ── */}
          <div className="nf-top-grid">

            {/* description card */}
            <div className="nf-card nf-card-desc">
              <p className="nf-eyebrow-sm">About the Project</p>
              <h2 className="nf-section-heading">What is it?</h2>
              <p className="nf-text">
                Built for the <strong>5SENG003W Algorithms</strong> coursework,
                this project models a directed flow network — capacities on
                edges, a source node generating flow, a sink node absorbing
                it — and computes the maximum amount of flow that can move
                from source to sink without violating any edge's capacity
                or breaking conservation at intermediate nodes.
              </p>
              <p className="nf-text">
                The brief required a data structure for the network, a
                parser that could read networks from a simple text format
                (a node count followed by edge triples), an algorithm that
                computes a provably correct maximum flow, and a report
                analysing its asymptotic performance.
              </p>
              <p className="nf-text">
                The network is represented with{" "}
                <code className="nf-code-inline">adjacency lists</code>{" "}
                rather than a matrix, which is more space-efficient for
                sparse graphs — O(V+E) instead of O(V²). A{" "}
                <code className="nf-code-inline">FlowEdge</code> class holds
                both forward and backward capacities so the residual graph
                is always available without extra bookkeeping.
              </p>
              <p className="nf-text">
                For the algorithm itself, plain Ford-Fulkerson was extended
                with the <strong>Edmonds-Karp</strong> rule: instead of
                picking augmenting paths arbitrarily, a{" "}
                <code className="nf-code-inline">BFS</code> always finds the
                shortest one first. That single change moves the worst-case
                running time from potentially exponential to a guaranteed
                polynomial O(VE²), while keeping the implementation close to
                the textbook version of Ford-Fulkerson.
              </p>
            </div>

            {/* details sidebar */}
            <div className="nf-card nf-card-details">
              <p className="nf-eyebrow-sm">Project Details</p>

              {[
                ["Type",      "Java Console Project"],
                ["Status",    <span className="nf-status-done"><span className="nf-status-dot"/>Completed</span>],
                ["Module",    "5SENG003W · Algorithms"],
                ["Weighting", "50% of module mark"],
                ["Deadline",  "29 Apr 2025"],
                ["Role",      "Solo Developer"],
                ["Category",  "University Coursework"],
              ].map(([label, val], i) => (
                <div key={i} className="nf-info-row">
                  <span className="nf-info-label">{label}</span>
                  <span className="nf-info-value">{val}</span>
                </div>
              ))}

              <div className="nf-divider-thin" />

              <p className="nf-eyebrow-sm" style={{ marginTop: 20 }}>Learning Outcomes</p>
              <div className="nf-lo-list">
                <div className="nf-lo-item">Design &amp; implementation of data structures and algorithms</div>
                <div className="nf-lo-item">Analysing and predicting algorithmic performance</div>
                <div className="nf-lo-item">Using API-provided collections effectively</div>
                <div className="nf-lo-item">Defining and implementing novel algorithms</div>
              </div>

              <div className="nf-divider-thin" />

              <p className="nf-eyebrow-sm" style={{ marginTop: 20 }}>Platform</p>
              <div className="nf-platform-row">
                <div className="nf-platform-item">
                  <Terminal size={20} /><span>CLI</span>
                </div>
                <div className="nf-platform-item">
                  <Monitor size={20} /><span>Desktop</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── TECHNOLOGIES ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Stack</p>
              <h2 className="nf-section-heading">Technologies Used</h2>
            </div>
            <div className="nf-tech-grid">
              {technologies.map((t, i) => (
                <div key={i} className="nf-tech-card" style={{ "--tc": t.color }}>
                  <span className="nf-tech-indicator" />
                  <span className="nf-tech-icon">{t.icon}</span>
                  <span className="nf-tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FEATURES ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">How It Works</p>
              <h2 className="nf-section-heading">Core Components</h2>
            </div>
            <div className="nf-feature-grid">
              {features.map((f, i) => (
                <div key={i} className="nf-feature-card">
                  <div className="nf-feature-icon">{f.icon}</div>
                  <h3 className="nf-feature-title">{f.title}</h3>
                  <p className="nf-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CODE & CLI PREVIEW ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Under the Hood</p>
              <h2 className="nf-section-heading">See It Run</h2>
            </div>

            <div className="nf-tab-row">
              <button
                className={`nf-tab-btn ${activeTab === "output" ? "nf-tab-active" : ""}`}
                onClick={() => setActiveTab("output")}
              >
                <Terminal size={15} />
                <span>CLI Output</span>
              </button>
              <button
                className={`nf-tab-btn ${activeTab === "code" ? "nf-tab-active" : ""}`}
                onClick={() => setActiveTab("code")}
              >
                <BookOpen size={15} />
                <span>Source Snippet</span>
              </button>
            </div>

            <div className="nf-code-frame">
              <div className="nf-code-bar">
                <div className="nf-code-dots">
                  <span className="nf-dot nf-dot-r" />
                  <span className="nf-dot nf-dot-y" />
                  <span className="nf-dot nf-dot-g" />
                </div>
                <div className="nf-code-filename">
                  {activeTab === "output" ? "terminal — java MaxFlow bridge_1.txt" : "MaxFlow.java"}
                </div>
              </div>
              <pre className={`nf-code-block ${activeTab === "output" ? "nf-cli-block" : ""}`}>
                <code>{activeTab === "output" ? cliOutput : codeSnippet}</code>
              </pre>
            </div>

            <p className="nf-text" style={{ marginTop: 18 }}>
              Running the program against the <code className="nf-code-inline">bridge_1.txt</code>{" "}
              benchmark (6 vertices, 9 edges) finds 5 augmenting paths and a
              maximum flow of 5 from source to sink — the tab above shows
              the exact trace and the final per-edge flow assignment.
            </p>
          </div>

          {/* ── PERFORMANCE ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Performance Analysis</p>
              <h2 className="nf-section-heading">Order of Growth</h2>
            </div>
            <p className="nf-text">
              Each BFS traversal over the residual graph runs in O(V+E), which
              simplifies to O(E) for connected graphs. Edmonds-Karp bounds the
              number of augmenting paths at O(VE), since every augmentation
              increases the shortest-path distance from source to sink by at
              least one step. Multiplying the two gives the overall worst-case
              time complexity:
            </p>
            <div className="nf-bigO">O(V · E²)</div>
            <p className="nf-text">
              Space complexity is O(V+E) for the adjacency-list graph, plus
              O(V) for the visited and parent-edge arrays used during each
              BFS. For larger or denser networks, the report notes that
              Push-Relabel or Dinic's algorithm — both O(V²E) — would scale
              better, but Edmonds-Karp was chosen here for its simplicity and
              its guaranteed polynomial bound relative to plain
              Ford-Fulkerson.
            </p>
          </div>

          {/* ── DESIGN DECISIONS ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Why I Built It This Way</p>
              <h2 className="nf-section-heading">Design Decisions &amp; Trade-offs</h2>
            </div>
            <div className="nf-qa-list">
              {decisions.map((d, i) => (
                <div key={i} className="nf-qa-item">
                  <div className="nf-qa-q">
                    <Lightbulb size={16} />
                    <span>{d.q}</span>
                  </div>
                  <p className="nf-qa-a">{d.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── ALGORITHM COMPARISON ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Wider Context</p>
              <h2 className="nf-section-heading">Max-Flow Algorithms Compared</h2>
            </div>
            <div className="nf-table-wrap">
              <table className="nf-table">
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Time Complexity</th>
                    <th>Best Suited For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className={row.algo.includes("used here") ? "nf-table-active" : ""}>
                      <td>{row.algo}</td>
                      <td><code className="nf-code-inline">{row.time}</code></td>
                      <td>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── CHALLENGES ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Problem Solving</p>
              <h2 className="nf-section-heading">Challenges I Ran Into</h2>
            </div>
            <div className="nf-feature-grid">
              {challenges.map((c, i) => (
                <div key={i} className="nf-feature-card">
                  <div className="nf-feature-icon"><Bug size={20} /></div>
                  <h3 className="nf-feature-title">{c.title}</h3>
                  <p className="nf-feature-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── TESTING ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Verification</p>
              <h2 className="nf-section-heading">Testing Approach</h2>
            </div>
            <p className="nf-text">
              Beyond the provided benchmarks, I checked the implementation
              against a handful of edge cases designed to break naive
              max-flow implementations:
            </p>
            <div className="nf-test-list">
              {testCases.map((t, i) => (
                <div key={i} className="nf-test-item">
                  <span className="nf-test-icon"><Check size={14} /></span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── FUTURE IMPROVEMENTS ── */}
          <div className="nf-card nf-card-full">
            <div className="nf-section-header">
              <p className="nf-eyebrow-sm">Looking Back</p>
              <h2 className="nf-section-heading">What I'd Improve With More Time</h2>
            </div>
            <div className="nf-improve-list">
              {improvements.map((imp, i) => (
                <div key={i} className="nf-improve-item">
                  <span className="nf-improve-icon"><TrendingUp size={16} /></span>
                  <p>{imp}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* /nf-body */}

      </div>

      {/* ═══════════════════════ STYLES ═══════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Root ── */
        .nf-root {
          position: relative; min-height: 100vh;
          background: #080c14; overflow: hidden;
          font-family: 'DM Sans', sans-serif; color: #f0f4ff;
        }

        /* ── Background ── */
        .nf-grid-bg {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none; z-index: 0;
        }
        .nf-glow-1 {
          position: fixed; top: -180px; right: -160px;
          width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(124,140,248,0.10) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: nf-drift1 20s ease-in-out infinite alternate;
        }
        .nf-glow-2 {
          position: fixed; bottom: -120px; left: -80px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(232,121,160,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: nf-drift2 25s ease-in-out infinite alternate;
        }
        @keyframes nf-drift1 { from{transform:translate(0,0)} to{transform:translate(-60px,50px)} }
        @keyframes nf-drift2 { from{transform:translate(0,0)} to{transform:translate(50px,-40px)} }

        /* ── Inner ── */
        .nf-inner {
          position: relative; z-index: 1;
          opacity: 0; transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .nf-inner.nf-in { opacity: 1; transform: translateY(0); }

        /* ══════════ HERO ══════════ */
        .nf-hero {
          position: relative; min-height: 70vh;
          display: flex; align-items: center;
          padding: 120px 64px 80px; overflow: hidden;
        }
        .nf-hero-content {
          position: relative; z-index: 2;
          max-width: 880px; margin: 0 auto; width: 100%;
          display: flex; justify-content: center;
        }
        .nf-hero-left {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
        }

        /* back btn */
        .nf-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px; color: #94a3b8;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; align-self: center;
          margin-bottom: 32px; font-family: 'DM Sans', sans-serif;
        }
        .nf-back-btn:hover { background: rgba(255,255,255,0.10); color: #f0f4ff; transform: translateX(-4px); }

        /* eyebrow */
        .nf-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 600; letter-spacing: 3px;
          text-transform: uppercase; color: #a4acbb; margin-bottom: 24px;
          justify-content: center;
        }
        .nf-eyebrow-line { display: block; width: 32px; height: 1px; background: #4a5568; }
        .nf-eyebrow-sm {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #4a5568; margin-bottom: 10px;
        }

        /* title */
        .nf-hero-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(42px, 5vw, 62px); font-weight: 400;
          line-height: 1.05; letter-spacing: -2px; color: #f0f4ff; margin-bottom: 24px;
        }
        .nf-title-em {
          font-style: italic;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        .nf-hero-subtitle {
          font-size: 17px; line-height: 1.75; color: #a4a7ac;
          font-weight: 500; max-width: 560px; margin: 0 auto 28px;
        }

        /* pills */
        .nf-hero-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; justify-content: center; }
        .nf-pill {
          padding: 6px 14px;
          background: rgba(124,140,248,0.10);
          border: 1px solid rgba(124,140,248,0.22);
          border-radius: 50px; color: #a5b4fc;
          font-size: 12px; font-weight: 600; letter-spacing: 0.3px;
        }

        /* stat cards */
        .hd-hero-stats { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 36px; }
        .hd-stat-card {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: rgba(11,17,32,0.75);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          backdrop-filter: blur(12px);
          transition: border-color 0.3s ease, transform 0.3s ease;
          flex: 1 1 160px;
        }
        .hd-stat-card:hover { border-color: rgba(124,140,248,0.35); transform: translateY(-3px); }
        .hd-stat-icon {
          width: 42px; height: 42px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; flex-shrink: 0;
        }
        .hd-stat-value {
          font-family: 'DM Serif Display', serif;
          font-size: 22px; font-weight: 400; color: #f0f4ff;
          background: linear-gradient(120deg, #7c8cf8, #e879a0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1; margin-bottom: 3px;
        }
        .hd-stat-label { font-size: 11px; color: #4a5568; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }

        /* action buttons */
        .nf-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .nf-btn-primary {
          position: relative; display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border: none; border-radius: 0; cursor: pointer;
          clip-path: polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px);
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif; overflow: hidden; isolation: isolate;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          background: #0d1424; color: #7dd3fc; box-shadow: inset 0 0 0 1px rgba(125,211,252,0.35);
        }
        .nf-btn-primary::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(100deg,#06b6d4,#7c3aed);
          transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); z-index: -1;
        }
        .nf-btn-primary:hover { color: #fff; box-shadow: none; }
        .nf-btn-primary:hover::before { transform: translateX(0); }

        /* ══════════ BODY ══════════ */
        .nf-body {
          max-width: 1280px; margin: 0 auto;
          padding: 40px 64px 90px;
          display: flex; flex-direction: column; gap: 24px;
        }

        /* cards */
        .nf-card {
          background: #0b1120;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 36px;
          transition: background 0.3s ease;
        }
        .nf-card:hover { background: #0f1929; }
        .nf-card-full { border-radius: 20px; }

        /* top 2-col grid */
        .nf-top-grid {
          display: grid; grid-template-columns: 1.6fr 1fr;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; overflow: hidden;
        }
        .nf-card-desc  { border-radius: 0; border: none; }
        .nf-card-details { border-radius: 0; border: none; border-left: 1px solid rgba(255,255,255,0.05); }

        /* section header */
        .nf-section-header { margin-bottom: 32px; }
        .nf-section-heading {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(28px, 3vw, 38px); font-weight: 400;
          line-height: 1.1; letter-spacing: -1px; color: #f0f4ff;
          margin-bottom: 0;
        }
        .nf-text { font-size: 15px; color: #94a3b8; line-height: 1.8; margin-bottom: 16px; font-weight: 300; }
        .nf-text:last-child { margin-bottom: 0; }
        .nf-code-inline {
          font-family: 'Monaco', monospace; font-size: 13px;
          background: rgba(124,140,248,0.10); color: #a5b4fc;
          padding: 2px 6px; border-radius: 5px;
        }

        /* info rows */
        .nf-info-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nf-info-row:last-of-type { border-bottom: none; }
        .nf-info-label { font-size: 11px; color: #4a5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .nf-info-value { font-size: 13px; color: #f0f4ff; font-weight: 600; }
        .nf-status-done { display: flex; align-items: center; gap: 7px; color: #86efac; }
        .nf-status-dot {
          width: 7px; height: 7px; border-radius: 50%; background: currentColor;
          animation: nf-pulse 2s ease-in-out infinite;
        }
        @keyframes nf-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.3)} }
        .nf-divider-thin { height: 1px; background: rgba(255,255,255,0.05); margin: 4px 0; }

        /* learning outcomes */
        .nf-lo-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
        .nf-lo-item {
          position: relative; padding-left: 16px;
          font-size: 12.5px; color: #94a3b8; line-height: 1.5; font-weight: 400;
        }
        .nf-lo-item::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c8cf8;
        }

        /* platform */
        .nf-platform-row { display: flex; gap: 10px; margin-top: 8px; }
        .nf-platform-item {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 14px 10px;
          background: rgba(124,140,248,0.08); border: 1px solid rgba(124,140,248,0.18);
          border-radius: 12px; color: #a5b4fc; font-size: 12px; font-weight: 600;
          transition: all 0.3s ease;
        }
        .nf-platform-item:hover { background: rgba(124,140,248,0.15); transform: translateY(-3px); }

        /* tech grid */
        .nf-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.03);
          border-radius: 14px; overflow: hidden;
        }
        .nf-tech-card {
          display: flex; align-items: center; gap: 12px;
          padding: 16px 18px; background: #0d1525;
          transition: background 0.3s ease; position: relative; overflow: hidden;
        }
        .nf-tech-card:hover { background: #111d35; }
        .nf-tech-indicator {
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--tc); opacity: 0; transition: opacity 0.3s ease;
        }
        .nf-tech-card:hover .nf-tech-indicator { opacity: 1; }
        .nf-tech-icon { font-size: 24px; flex-shrink: 0; }
        .nf-tech-name { font-size: 14px; font-weight: 600; color: #f0f4ff; }

        /* feature grid */
        .nf-feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 16px;
        }
        .nf-feature-card {
          padding: 22px;
          background: #0d1525;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .nf-feature-card:hover { background: #111d35; border-color: rgba(124,140,248,0.25); transform: translateY(-3px); }
        .nf-feature-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(124,140,248,0.12); color: #7c8cf8; margin-bottom: 14px;
        }
        .nf-feature-title { font-size: 15px; font-weight: 700; color: #f0f4ff; margin-bottom: 8px; }
        .nf-feature-desc { font-size: 13px; color: #64748b; line-height: 1.65; font-weight: 300; }

        /* tabs */
        .nf-tab-row { display: flex; gap: 10px; margin-bottom: 18px; }
        .nf-tab-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px; color: #64748b;
          font-size: 12px; font-weight: 700; letter-spacing: 0.4px;
          text-transform: uppercase; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.25s ease;
        }
        .nf-tab-btn:hover { background: rgba(255,255,255,0.08); color: #cbd5e1; }
        .nf-tab-active {
          background: rgba(124,140,248,0.14);
          border-color: rgba(124,140,248,0.4);
          color: #a5b4fc;
        }

        /* code frame */
        .nf-code-frame { border-radius: 14px; overflow: hidden; background: #1e293b; }
        .nf-code-bar {
          display: flex; align-items: center; gap: 14px; padding: 14px 18px;
          background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .nf-code-dots { display: flex; gap: 7px; }
        .nf-dot { width: 11px; height: 11px; border-radius: 50%; }
        .nf-dot-r { background: #ff5f57; } .nf-dot-y { background: #febc2e; } .nf-dot-g { background: #28c840; }
        .nf-code-filename { color: #64748b; font-size: 12px; font-family: 'Monaco', monospace; }
        .nf-code-block {
          margin: 0; padding: 24px; background: #0a0e1a;
          color: #c4cad6; font-family: 'Monaco', monospace;
          font-size: 13px; line-height: 1.8; overflow-x: auto;
          max-height: 480px; overflow-y: auto;
        }
        .nf-cli-block { color: #4ade80; }
        .nf-code-block::-webkit-scrollbar { width: 6px; height: 6px; }
        .nf-code-block::-webkit-scrollbar-thumb { background: rgba(124,140,248,0.3); border-radius: 10px; }

        /* big-O callout */
        .nf-bigO {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(32px, 4vw, 46px);
          text-align: center; padding: 28px 0;
          margin: 8px 0 20px;
          color: #f0f4ff;
          background: rgba(124,140,248,0.06);
          border: 1px solid rgba(124,140,248,0.2);
          border-radius: 14px;
          letter-spacing: 1px;
        }

        /* design decisions Q&A */
        .nf-qa-list { display: flex; flex-direction: column; gap: 22px; }
        .nf-qa-item {
          padding: 20px 22px;
          background: #0d1525;
          border: 1px solid rgba(255,255,255,0.05);
          border-left: 2px solid rgba(124,140,248,0.4);
          border-radius: 12px;
        }
        .nf-qa-q {
          display: flex; align-items: center; gap: 10px;
          font-size: 14.5px; font-weight: 700; color: #f0f4ff; margin-bottom: 10px;
        }
        .nf-qa-q svg { color: #facc15; flex-shrink: 0; }
        .nf-qa-a { font-size: 13.5px; color: #94a3b8; line-height: 1.75; font-weight: 300; margin: 0; }

        /* comparison table */
        .nf-table-wrap { overflow-x: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); }
        .nf-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .nf-table thead th {
          text-align: left; padding: 14px 18px;
          background: #0d1525; color: #4a5568;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nf-table tbody td {
          padding: 14px 18px; color: #94a3b8;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-weight: 300;
        }
        .nf-table tbody tr:last-child td { border-bottom: none; }
        .nf-table tbody tr.nf-table-active td {
          color: #f0f4ff; background: rgba(124,140,248,0.07); font-weight: 500;
        }
        .nf-table tbody tr.nf-table-active td:first-child { font-weight: 700; }

        /* test list */
        .nf-test-list { display: flex; flex-direction: column; gap: 10px; margin-top: 6px; }
        .nf-test-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 16px;
          background: #0d1525; border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px; font-size: 13.5px; color: #cbd5e1; font-weight: 400;
        }
        .nf-test-icon {
          display: flex; align-items: center; justify-content: center;
          width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
          background: rgba(74,222,128,0.12); color: #4ade80;
        }

        /* improvements list */
        .nf-improve-list { display: flex; flex-direction: column; gap: 12px; }
        .nf-improve-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px;
          background: #0d1525; border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
        }
        .nf-improve-icon {
          display: flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
          background: rgba(232,121,160,0.12); color: #e879a0;
        }
        .nf-improve-item p { margin: 0; font-size: 13.5px; color: #94a3b8; line-height: 1.7; font-weight: 300; }

        /* ══════════ RESPONSIVE ══════════ */
        @media (max-width: 1100px) {
          .nf-hero { padding: 100px 40px 60px; }
          .nf-body { padding-left: 40px; padding-right: 40px; }
          .nf-top-grid { grid-template-columns: 1fr; }
          .nf-card-details { border-left: none; border-top: 1px solid rgba(255,255,255,0.05); }
        }
        @media (max-width: 768px) {
          .nf-hero { padding: 80px 24px 50px; min-height: auto; }
          .nf-body { padding-left: 24px; padding-right: 24px; }
          .nf-tech-grid { grid-template-columns: repeat(2, 1fr); }
          .nf-feature-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .nf-hero-title { font-size: 36px; }
          .nf-btn-primary { width: 100%; justify-content: center; }
          .nf-tech-grid { grid-template-columns: 1fr; }
          .nf-table { font-size: 12px; }
          .nf-table thead th, .nf-table tbody td { padding: 10px 12px; }
        }
      `}</style>
    </div>
  );
};

export default NetworkFlowDetail;