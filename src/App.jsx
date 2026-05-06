import { useState } from 'react'
import { useTheme, themes } from './ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('explore')
  const { currentTheme, switchTheme } = useTheme()

  return (
    <div className="app-container">
      {/* Tab Navigation */}
      <nav className="tab-navigation">
        <button
          className={`tab-button ${activeTab === 'explore' ? 'active' : ''}`}
          onClick={() => setActiveTab('explore')}
        >
          去哪跑
        </button>
        <button
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          我的
        </button>
      </nav>

      {/* Content */}
      <div className="tab-content">
        {/* Explore Tab (去哪跑) */}
        {activeTab === 'explore' && (
          <section className="explore-section">
            <div className="hero">
              <h1>去哪跑</h1>
              <p>发现最好的跑步路线</p>
            </div>

            <div className="content-box">
              <h2>热门路线</h2>
              <button
                className="primary-button"
                onClick={() => setCount((count) => count + 1)}
              >
                浏览次数: {count}
              </button>
              <div className="route-list">
                <div className="route-card">
                  <h3>城市公园</h3>
                  <p>5.2 km • 中等难度</p>
                  <button className="primary-button">查看详情</button>
                </div>
                <div className="route-card">
                  <h3>河滨步道</h3>
                  <p>8.5 km • 困难</p>
                  <button className="primary-button">查看详情</button>
                </div>
                <div className="route-card">
                  <h3>山间小道</h3>
                  <p>12 km • 困难</p>
                  <button className="primary-button">查看详情</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Profile Tab (我的) */}
        {activeTab === 'profile' && (
          <section className="profile-section">
            <div className="profile-header">
              <h1>我的</h1>
              <p>个人资料和设置</p>
            </div>

            <div className="profile-content">
              <div className="profile-card">
                <h2>用户信息</h2>
                <p>用户名: Runner123</p>
                <p>总里程: 245.6 km</p>
                <p>跑步次数: 42</p>
              </div>

              <div className="theme-selector">
                <h2>主题选择</h2>
                <p>选择你喜欢的主题颜色</p>
                <div className="theme-buttons">
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      className={`theme-button ${currentTheme === key ? 'active' : ''}`}
                      style={{ backgroundColor: theme.primary }}
                      onClick={() => switchTheme(key)}
                      title={`切换到${theme.name}主题`}
                    >
                      {currentTheme === key ? '✓' : ''}
                      {theme.name === 'green' ? '绿色' : theme.name === 'blue' ? '蓝色' : '紫色'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="profile-card">
                <h2>最近活动</h2>
                <ul className="activity-list">
                  <li>
                    <strong>2024-05-06</strong> - 在河滨步道跑了 8.5 km
                  </li>
                  <li>
                    <strong>2024-05-05</strong> - 在城市公园跑了 5.2 km
                  </li>
                  <li>
                    <strong>2024-05-04</strong> - 在山间小道跑了 12 km
                  </li>
                </ul>
              </div>

              <button className="primary-button" style={{ marginTop: '20px', width: '100%' }}>
                编辑个人资料
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
