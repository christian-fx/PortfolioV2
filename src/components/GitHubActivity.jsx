import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '../hooks/useTheme';
import './GitHubActivity.css';

export default function GitHubActivity() {
  const { isDark } = useTheme();
  const [lastPush, setLastPush] = useState(null);

  const [totalCommits, setTotalCommits] = useState(0);
  const [hasError, setHasError] = useState(false);
  const username = 'christian-fx';

  useEffect(() => {

    
    async function fetchActivity() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);
        const data = await response.json();
        
        // Latest Push for the footer
        const latestPush = data.find(event => event.type === 'PushEvent');
        if (latestPush) {
          const repoName = latestPush.repo.name.split('/')[1] || latestPush.repo.name;
          
          // Rough "time ago" calculation
          const diffInMs = new Date() - new Date(latestPush.created_at);
          const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
          const timeText = diffInDays === 0 ? 'today' : (diffInDays === 1 ? 'yesterday' : `${diffInDays}d ago`);
          
          setLastPush({
            repo: repoName,
            time: timeText
          });
        }
      } catch {
        setHasError(true);
      }
    }

    fetchActivity();
  }, [username]);

  if (hasError) return null;

  return (
    <section className="github-activity-section">
      <div className="github-activity-container">
        
        {/* Header with Stats (Aligned with Image) */}
        <div className="github-stats-header">
          <p className="github-stats-label">ACTIVITY</p>
          <div className="github-stats-row">
            <span className="github-total-number">{totalCommits}</span>
            <span className="github-total-text">commits</span>
          </div>
        </div>

        {/* The Grid (Restored & Aligned) */}
        <div className="github-calendar-inner">
          <GitHubCalendar 
            username={username}
            transformData={(data) => {
              // Calculate total for the standard 1-year fetched data
              const total = data.reduce((sum, day) => sum + day.count, 0);
              setTotalCommits(total);

              // Pad future days until a perfect 52-week (364 day) span
              const targetLength = 52 * 7;
              const currentLength = data.length;
              const paddingNeeded = Math.max(0, targetLength - currentLength);
              const lastDay = new Date(data[data.length - 1].date);
              const futurePadding = [];
              for (let i = 1; i <= paddingNeeded; i++) {
                const futureDate = new Date(lastDay);
                futureDate.setDate(lastDay.getDate() + i);
                futurePadding.push({
                  date: futureDate.toISOString().split('T')[0],
                  count: 0,
                  level: 0
                });
              }
              return [...data, ...futurePadding];
            }}
            labels={{
              totalCount: '{{count}} commits in the last year',
            }}
            fontSize={9}
            blockSize={10}
            blockMargin={3}
            showWeekdayLabels={false}
            colorScheme={isDark ? 'dark' : 'light'}
            tooltips={{

              activity: {
                text: (activity) => {
                  const date = new Date(activity.date);
                  const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                  return `${activity.count} contributions on ${formatted}`;
                }
              }
            }}
          />
        </div>

        {/* Right-aligned Footer Activity (Tight) */}
        {lastPush && (
          <div className="github-activity-footer">
             <div className="activity-last-pushed">
                <span className="activity-dot"></span>
                Pushed <span className="activity-highlight">commits</span> to <span className="activity-highlight">{lastPush.repo}</span> • {lastPush.time}
             </div>
          </div>
        )}

      </div>
    </section>
  );
}
