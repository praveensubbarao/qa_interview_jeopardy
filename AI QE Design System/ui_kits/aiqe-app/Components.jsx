/* global React */
const { useState } = React;

// ---------- Button ---------------------------------------------------------
function Button({ variant = 'primary', size = 'md', icon, children, onClick, type = 'button' }) {
  const cls = `aiqe-btn aiqe-btn-${variant} aiqe-btn-${size}`;
  return (
    <button type={type} className={cls} onClick={onClick}>
      {icon && <i data-lucide={icon} className="aiqe-btn-icon" />}
      <span>{children}</span>
    </button>
  );
}

// ---------- Badge ----------------------------------------------------------
function Badge({ status = 'neutral', live = false, children }) {
  return (
    <span className={`aiqe-badge aiqe-badge-${status}${live ? ' is-live' : ''}`}>
      <span className="aiqe-badge-dot" />
      {children}
    </span>
  );
}

// ---------- Sidebar --------------------------------------------------------
function Sidebar({ active, onNavigate }) {
  const items = [
    { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
    { id: 'runs',     label: 'Runs',     icon: 'play-circle' },
    { id: 'agents',   label: 'Agents',   icon: 'brain-circuit' },
    { id: 'suites',   label: 'Suites',   icon: 'flask-conical' },
    { id: 'signals',  label: 'Signals',  icon: 'activity' },
    { id: 'analytics',label: 'Analytics',icon: 'bar-chart-3' },
  ];
  const meta = [
    { id: 'integrations', label: 'Integrations', icon: 'git-branch' },
    { id: 'settings',     label: 'Settings',     icon: 'settings-2' },
  ];
  return (
    <aside className="aiqe-sidebar">
      <div className="aiqe-sidebar-brand">
        <img src="../../assets/logo-aiqe-mark.svg" alt="" width="28" height="28" />
        <div className="aiqe-sidebar-brand-text">
          <div className="aiqe-sidebar-brand-name">AI QE</div>
          <div className="aiqe-sidebar-brand-org">acme · production</div>
        </div>
      </div>
      <nav className="aiqe-sidebar-section">
        <div className="aiqe-sidebar-eyebrow">Workspace</div>
        {items.map(it => (
          <button
            key={it.id}
            className={`aiqe-sidebar-item${active === it.id ? ' is-active' : ''}`}
            onClick={() => onNavigate(it.id)}>
            <i data-lucide={it.icon} />
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <nav className="aiqe-sidebar-section">
        <div className="aiqe-sidebar-eyebrow">Manage</div>
        {meta.map(it => (
          <button key={it.id} className="aiqe-sidebar-item" onClick={() => onNavigate(it.id)}>
            <i data-lucide={it.icon} />
            <span>{it.label}</span>
          </button>
        ))}
      </nav>
      <div className="aiqe-sidebar-footer">
        <div className="aiqe-sidebar-status">
          <span className="aiqe-pulse" /> 14 runs in flight
        </div>
        <div className="aiqe-sidebar-foot-meta">v2.4.1 · 320ms p95</div>
      </div>
    </aside>
  );
}

// ---------- Topbar ---------------------------------------------------------
function Topbar({ title, breadcrumbs = [] }) {
  return (
    <header className="aiqe-topbar">
      <div className="aiqe-crumbs">
        {breadcrumbs.map((b, i) => (
          <React.Fragment key={i}>
            <span className="aiqe-crumb">{b}</span>
            {i < breadcrumbs.length - 1 && <span className="aiqe-crumb-sep">/</span>}
          </React.Fragment>
        ))}
        <span className="aiqe-page-title">{title}</span>
      </div>
      <div className="aiqe-topbar-actions">
        <div className="aiqe-search">
          <i data-lucide="search" />
          <input placeholder="Search runs, suites, agents…" />
          <span className="aiqe-kbd">⌘K</span>
        </div>
        <Button variant="secondary" icon="git-branch" size="sm">main</Button>
        <Button variant="primary" icon="play" size="sm">Run suite</Button>
        <div className="aiqe-avatar">JL</div>
      </div>
    </header>
  );
}

// ---------- MetricCard -----------------------------------------------------
function MetricCard({ label, value, unit, delta, deltaTone = 'up', sparkPoints }) {
  return (
    <div className="aiqe-metric-card">
      <div className="aiqe-metric-tag">{label}</div>
      <div className="aiqe-metric-value-row">
        <div className="aiqe-metric-value">{value}</div>
        {unit && <div className="aiqe-metric-unit">{unit}</div>}
      </div>
      {delta && (
        <div className={`aiqe-metric-delta is-${deltaTone}`}>
          {deltaTone === 'up' ? '↑' : '↓'} {delta}
        </div>
      )}
      {sparkPoints && (
        <svg className="aiqe-spark" viewBox="0 0 200 32" preserveAspectRatio="none">
          <polyline points={sparkPoints} fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
}

// ---------- AgentCard ------------------------------------------------------
function AgentCard({ name, role, status, signal, eta }) {
  return (
    <div className={`aiqe-agent-card${status === 'live' ? ' is-live' : ''}`}>
      <div className="aiqe-agent-head">
        <div className="aiqe-agent-icon"><i data-lucide="brain-circuit" /></div>
        <div className="aiqe-agent-meta">
          <div className="aiqe-agent-name">{name}</div>
          <div className="aiqe-agent-role">{role}</div>
        </div>
        <div className="aiqe-agent-status">
          <span className="aiqe-pulse" />
          {status === 'live' ? 'LIVE' : 'IDLE'}
        </div>
      </div>
      <div className="aiqe-agent-signal">{signal}</div>
      <div className="aiqe-agent-foot">
        <span className="aiqe-mono-fg">eta {eta}</span>
        <button className="aiqe-link">Inspect →</button>
      </div>
    </div>
  );
}

// ---------- RunRow ---------------------------------------------------------
function RunRow({ run, onClick, selected }) {
  return (
    <button className={`aiqe-run-row${selected ? ' is-selected' : ''}`} onClick={onClick}>
      <div className="aiqe-run-status">
        <Badge status={run.statusTone} live={run.status === 'running'}>{run.status.toUpperCase()}</Badge>
      </div>
      <div className="aiqe-run-name">
        <div className="aiqe-run-name-main">{run.name}</div>
        <div className="aiqe-run-name-sub"><i data-lucide="git-commit" /> {run.commit} · {run.branch}</div>
      </div>
      <div className="aiqe-run-stat">
        <div className="aiqe-run-stat-v">{run.pass}</div>
        <div className="aiqe-run-stat-l">passed</div>
      </div>
      <div className="aiqe-run-stat">
        <div className="aiqe-run-stat-v aiqe-run-stat-fail">{run.fail}</div>
        <div className="aiqe-run-stat-l">failed</div>
      </div>
      <div className="aiqe-run-stat">
        <div className="aiqe-run-stat-v aiqe-mono-fg">{run.duration}</div>
        <div className="aiqe-run-stat-l">duration</div>
      </div>
      <div className="aiqe-run-time">{run.when}</div>
    </button>
  );
}

Object.assign(window, { Button, Badge, Sidebar, Topbar, MetricCard, AgentCard, RunRow });
