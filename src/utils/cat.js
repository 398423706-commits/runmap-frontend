/**
 * CAT 监控工具
 * 用于应用的性能监控和错误追踪
 */

class CatMonitor {
  constructor() {
    this.initialized = false
    this.init()
  }

  init() {
    if (typeof window === 'undefined') return

    // 初始化 CAT 全局对象
    window.CAT = window.CAT || {}
    window.CAT.config = {
      appName: 'runmap-frontend',
      enabled: true,
      version: '0.0.0'
    }

    // 初始化监控对象
    window.CAT.monitor = {
      // 页面浏览事件
      logPageView: (pageName, duration = 0) => {
        console.log(`[CAT] Page View: ${pageName} (${duration}ms)`)
        this.sendMetric('page', pageName, duration)
      },

      // 事件追踪
      logEvent: (type, name, duration = 0) => {
        console.log(`[CAT] Event: ${type}.${name} (${duration}ms)`)
        this.sendMetric('event', `${type}.${name}`, duration)
      },

      // 错误追踪
      logError: (error, component = 'unknown') => {
        console.error(`[CAT] Error in ${component}:`, error)
        this.sendError(error, component)
      },

      // API 调用追踪
      logApi: (method, url, duration, status) => {
        console.log(`[CAT] API: ${method} ${url} (${duration}ms, status: ${status})`)
        this.sendMetric('api', `${method} ${url}`, duration, status)
      }
    }

    this.initialized = true
    console.log('[CAT] Monitoring initialized successfully')
  }

  sendMetric(type, name, duration, status = 200) {
    // 可以在这里集成实际的 CAT 后端上报
    try {
      const data = {
        type,
        name,
        duration,
        status,
        timestamp: new Date().toISOString(),
        url: window.location.href
      }
      // 这里可以调用实际的上报接口
      // fetch('/cat/api/metrics', { method: 'POST', body: JSON.stringify(data) })
    } catch (e) {
      console.error('[CAT] Failed to send metric:', e)
    }
  }

  sendError(error, component) {
    try {
      const data = {
        type: 'error',
        component,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href
      }
      // 这里可以调用实际的上报接口
      // fetch('/cat/api/errors', { method: 'POST', body: JSON.stringify(data) })
    } catch (e) {
      console.error('[CAT] Failed to send error:', e)
    }
  }
}

// 导出单例
export const catMonitor = new CatMonitor()

export default catMonitor
