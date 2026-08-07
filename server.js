const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Database Connection Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'zone_panel_db'
});

db.connect((err) => {
  if (err) {
    console.error('CRITICAL ERROR: Database connection failed:', err);
    return;
  }
  console.log('Successfully connected to the MySQL Database.');
});

// Google reCAPTCHA Keys Configuration
const SITE_KEY = '6LchX3ktAAAAADEE0QdTLYyu4gqsNA2Mnrzt77f3';
const SECRET_KEY = '6LchX3ktAAAAAJnQNCCsQtUm1BkhA4QWXY2VY1mI';

// Comprehensive Dashboard Statistics API Endpoint
app.get('/api/dashboard-stats', (req, res) => {
  const statsQuery = `
    SELECT 
      (SELECT COUNT(*) FROM users) AS total_users,
      (SELECT COUNT(*) FROM activity_logs) AS total_activities,
      (SELECT SUM(revenue_amount) FROM revenue_records) AS total_revenue,
      (SELECT COUNT(*) FROM system_alerts WHERE status = 'active') AS active_alerts
  `;

  db.query(statsQuery, (err, results) => {
    if (err) {
      console.error('Error fetching dashboard statistics:', err);
      return res.status(500).json({ error: 'Internal server error while fetching statistics.' });
    }
    
    const data = results[0] || {
      total_users: 0,
      total_activities: 0,
      total_revenue: 0.00,
      active_alerts: 0
    };

    res.json({
      success: true,
      stats: {
        totalUsers: data.total_users,
        totalActivities: data.total_activities,
        totalRevenue: data.total_revenue || 0.00,
        activeAlerts: data.active_alerts,
        systemStatus: 'Optimal',
        serverUptime: '99.98%',
        lastSyncTimestamp: new Date().toISOString()
      }
    });
  });
});

// Detailed User Activity Logs API Endpoint
app.get('/api/activity-logs', (req, res) => {
  const logQuery = 'SELECT id, action_type, description, ip_address, created_at FROM activity_logs ORDER BY created_at DESC LIMIT 25';
  
  db.query(logQuery, (err, results) => {
    if (err) {
      console.error('Error fetching activity logs:', err);
      return res.status(500).json({ error: 'Failed to retrieve activity logs.' });
    }
    res.json({ success: true, logs: results });
  });
});

// Secure Form Submission with Google reCAPTCHA and Database Persistence
app.post('/submit-form', async (req, res) => {
  const { username, email, 'g-recaptcha-response': captchaResponse } = req.body;

  if (!captchaResponse) {
    return res.status(400).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Error</title></head>
      <body style="font-family: Arial; text-align: center; padding-top: 50px;">
        <h2 style="color: #dc3545;">Validation Error</h2>
        <p>Please complete the Google reCAPTCHA verification challenge.</p>
        <a href="/" style="color: #007bff; text-decoration: none;">Go Back</a>
      </body>
      </html>
    `);
  }

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captchaResponse}`;
    const response = await axios.post(verificationUrl);
    const { success, 'error-codes': errorCodes } = response.data;

    if (!success) {
      console.warn('reCAPTCHA validation failed with codes:', errorCodes);
      return res.status(400).send(`
        <!DOCTYPE html>
        <html>
        <head><title>reCAPTCHA Failed</title></head>
        <body style="font-family: Arial; text-align: center; padding-top: 50px;">
          <h2 style="color: #dc3545;">Security Verification Failed</h2>
          <p>reCAPTCHA verification failed. Please try again.</p>
          <a href="/" style="color: #007bff; text-decoration: none;">Return to Dashboard Panel</a>
        </body>
        </html>
      `);
    }

    const insertUserQuery = 'INSERT INTO users (username, email) VALUES (?, ?)';
    db.query(insertUserQuery, [username, email], (err, result) => {
      if (err) {
        console.error('Database insertion error:', err);
        return res.status(500).send('Server error during user record creation.');
      }

      const userId = result.insertId;
      const logActivityQuery = 'INSERT INTO activity_logs (action_type, description, ip_address) VALUES (?, ?, ?)';
      const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
      
      db.query(logActivityQuery, ['USER_SIGNUP', `New user registered with ID: ${userId} and username: ${username}`, clientIp], () => {
        // Proceed even if logging fails silently
      });

      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Success - ZONE Panel</title>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; max-width: 400px; width: 100%; }
            h2 { color: #28a745; margin-top: 0; }
            p { color: #555; }
            a { display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; }
            a:hover { background-color: #0056b3; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>Success!</h2>
            <p>Form submitted successfully, reCAPTCHA verified, and user data securely recorded into ZONE Panel.</p>
            <a href="/">Return to Panel</a>
          </div>
        </body>
        </html>
      `);
    });

  } catch (error) {
    console.error('Internal server error during reCAPTCHA verification workflow:', error);
    res.status(500).send('Internal server error processing security token.');
  }
});

// Start Express Application Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ZONE Panel Backend Server running successfully on http://localhost:${PORT}`);
});
