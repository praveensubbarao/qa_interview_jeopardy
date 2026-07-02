/**
 * Kills any process listening on PORT (default 3000) before the server starts.
 * Cross-platform: uses lsof on macOS/Linux, netstat on Windows.
 * Run standalone: npm run stop
 */
import { execSync } from 'child_process';

const port = process.env.PORT ?? 3000;

function killPort(port) {
  try {
    if (process.platform === 'win32') {
      const result = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' });
      const pids = [...new Set(
        result.split('\n')
          .map(l => l.trim().split(/\s+/).pop())
          .filter(p => p && /^\d+$/.test(p) && p !== '0')
      )];
      if (!pids.length) return false;
      pids.forEach(pid => execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' }));
      return true;
    } else {
      const pids = execSync(`lsof -ti:${port} 2>/dev/null || true`, { encoding: 'utf8' })
        .trim().split('\n').filter(Boolean);
      if (!pids.length) return false;
      execSync(`kill -9 ${pids.join(' ')} 2>/dev/null || true`);
      return true;
    }
  } catch {
    return false;
  }
}

const killed = killPort(port);
if (killed) {
  console.log(`Stopped process on port ${port}`);
} else {
  // Standalone stop: log. Pre-start: silent ok — nothing was running
  if (process.argv[1]?.includes('stop-port')) {
    console.log(`No process running on port ${port}`);
  }
}
