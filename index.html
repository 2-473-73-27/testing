<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZONE Panel - Comprehensive Metric Tracking & Management Interface</title>
  <!-- Google reCAPTCHA API Script -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  <style>
    :root {
      --primary-color: #0f172a;
      --accent-color: #3b82f6;
      --accent-hover: #2563eb;
      --success-color: #10b981;
      --bg-color: #f8fafc;
      --card-bg: #ffffff;
      --text-main: #334155;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      display: flex;
      min-height: 100vh;
    }

    /* Sidebar Navigation */
    aside {
      width: 260px;
      background-color: var(--primary-color);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      padding: 24px;
    }

    aside h1 {
      font-size: 22px;
      letter-spacing: 1px;
      margin-bottom: 40px;
      color: #ffffff;
      text-transform: uppercase;
      border-bottom: 2px solid var(--accent-color);
      padding-bottom: 10px;
    }

    aside nav ul {
      list-style: none;
    }

    aside nav ul li {
      margin-bottom: 15px;
    }

    aside nav ul li a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 15px;
      display: block;
      padding: 10px 12px;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    aside nav ul li a:hover, aside nav ul li a.active {
      background-color: rgba(59, 130, 246, 0.15);
      color: #ffffff;
    }

    /* Main Content Area */
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    header {
      background-color: var(--card-bg);
      padding: 20px 40px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h2 {
      font-size: 20px;
      color: var(--primary-color);
    }

    .user-profile-badge {
      font-size: 14px;
      color: var(--text-muted);
      background: #f1f5f9;
      padding: 6px 12px;
      border-radius: 20px;
    }

    .dashboard-body {
      padding: 40px;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
    }

    /* Metric Cards Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .metric-card {
      background: var(--card-bg);
      padding: 24px;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border-color);
      position: relative;
      overflow: hidden;
    }

    .metric-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: var(--accent-color);
    }

    .metric-card h3 {
      font-size: 14px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }

    .metric-card .value {
      font-size: 28px;
      font-weight: 700;
      color: var(--primary-color);
    }

    /* Layout Sections: Panel Form and Live Telemetry Table */
    .panel-sections {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 30px;
    }

    @media (max-width: 1024px) {
      .panel-sections {
        grid-template-columns: 1fr;
      }
    }

    .panel-box {
      background: var(--card-bg);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border-color);
    }

    .panel-box h3 {
      font-size: 18px;
      margin-bottom: 20px;
      color: var(--primary-color);
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 10px;
    }

    /* Form Styles */
    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 13px;
      color: var(--text-main);
    }

    .form-group input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-group input:focus {
      border-color: var(--accent-color);
    }

    .g-recaptcha {
      margin-bottom: 20px;
    }

    .submit-btn {
      width: 100%;
      padding: 12px;
      background-color: var(--accent-color);
      border: none;
      color: white;
      font-size: 15px;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .submit-btn:hover {
      background-color: var(--accent-hover);
    }

    /* Telemetry Table */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }

    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
      font-size: 13px;
    }

    th {
      background-color: #f8fafc;
      color: var(--text-muted);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    td {
      color: var(--text-main);
    }

    tr:hover {
      background-color: #f1f5f9;
    }
  </style>
</head>
<body>

  <!-- Sidebar Navigation -->
  <aside>
    <h1>ZONE Panel</h1>
    <nav>
      <ul>
        <li><a href="#" class="active">Overview & Stats</a></li>
        <li><a href="#">User Management</a></li>
        <li><a href="#">Security & Captcha</a></li>
        <li><a href="#">Revenue Indicators</a></li>
        <li><a href="#">System Diagnostics</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Main Content Layout -->
  <main>
    <header>
      <h2>Platform Metric Tracking Dashboard</h2>
      <div class="user-profile-badge">Administrator Session Active</div>
    </header>

    <div class="dashboard-body">
      <!-- Metric Display Cards -->
      <div class="metrics-grid">
        <div class="metric-card">
          <h3>Total Registered Users</h3>
          <div class="value" id="stat-total-users">Loading...</div>
        </div>
        <div class="metric-card">
          <h3>Platform Activities</h3>
          <div class="value" id="stat-total-activities">Loading...</div>
        </div>
        <div class="metric-card">
          <h3>Tracked Revenue</h3>
          <div class="value" id="stat-total-revenue">$0.00</div>
        </div>
        <div class="metric-card">
          <h3>Active System Alerts</h3>
          <div class="value" id="stat-active-alerts">0</div>
        </div>
      </div>

      <!-- Control Panels & Logs Section -->
      <div class="panel-sections">
        <!-- Registration & reCAPTCHA Box -->
        <div class="panel-box">
          <h3>Secure User Registration</h3>
          <form action="/submit-form" method="POST">
            <div class="form-group">
              <label for="username">Username Identifier</label>
              <input type="text" id="username" name="username" placeholder="Enter unique username" required>
            </div>
            <div class="form-group">
              <label for="email">Electronic Mail</label>
              <input type="email" id="email" name="email" placeholder="name@domain.com" required>
            </div>
            
            <!-- Google reCAPTCHA v2 Widget Integration -->
            <div class="g-recaptcha" data-sitekey="6LchX3ktAAAAADEE0QdTLYyu4gqsNA2Mnrzt77f3"></div>

            <button type="submit" class="submit-btn">Authorize & Register Record</button>
          </form>
        </div>

        <!-- Live Activity Logs Telemetry Table -->
        <div class="panel-box">
          <h3>Live Platform Telemetry Logs</h3>
          <div style="overflow-x: auto;">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Action Type</th>
                  <th>Description</th>
                  <th>IP Address</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody id="logs-table-body">
                <tr>
                  <td colspan="5" style="text-align: center; color: var(--text-muted);">Fetching telemetry logs...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Frontend Dynamic Telemetry Fetcher Script -->
  <script>
    async function fetchDashboardData() {
      try {
        const response = await fetch('/api/dashboard-stats');
        const data = await response.json();
        
        if (data.success) {
          document.getElementById('stat-total-users').innerText = data.stats.totalUsers;
          document.getElementById('stat-total-activities').innerText = data.stats.totalActivities;
          document.getElementById('stat-total-revenue').innerText = '$' + parseFloat(data.stats.totalRevenue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
          document.getElementById('stat-active-alerts').innerText = data.stats.activeAlerts;
        }
      } catch (error) {
        console.error('Error fetching dashboard statistics:', error);
      }
    }

    async function fetchActivityLogs() {
      try {
        const response = await fetch('/api/activity-logs');
        const data = await response.json();
        
        if (data.success && data.logs.length > 0) {
          const tbody = document.getElementById('logs-table-body');
          tbody.innerHTML = '';
          
          data.logs.forEach(log => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>#${log.id}</td>
              <td><span style="font-weight: 600; color: var(--accent-color);">${log.action_type}</span></td>
              <td>${log.description}</td>
              <td><code>${log.ip_address || 'N/A'}</code></td>
              <td>${new Date(log.created_at).toLocaleTimeString()}</td>
            `;
            tbody.appendChild(tr);
          });
        }
      } catch (error) {
        console.error('Error fetching activity logs:', error);
      }
    }

    // Initialize data fetch on load and set polling interval
    window.addEventListener('DOMContentLoaded', () => {
      fetchDashboardData();
      fetchActivityLogs();
      
      // Auto-refresh metrics every 15 seconds
      setInterval(() => {
        fetchDashboardData();
        fetchActivityLogs();
      }, 15000);
    });
  </script>
</body>
</html>
