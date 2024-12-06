import { type Metric as WebVitalMetric } from 'web-vitals';

type MetricName = 'CLS' | 'FID' | 'LCP' | 'TTFB' | 'FCP';

interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

const thresholds = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
  FCP: { good: 1800, poor: 3000 }
};

const getRating = (name: MetricName, value: number): PerformanceMetric['rating'] => {
  const threshold = thresholds[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

const createMetric = (name: MetricName, value: number): PerformanceMetric => ({
  name,
  value,
  rating: getRating(name, value),
  timestamp: Date.now()
});

export const measureWebVitals = (onPerfEntry: (metric: PerformanceMetric) => void) => {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getLCP, getTTFB, getFCP }) => {
    getCLS((metric: WebVitalMetric) => {
      onPerfEntry(createMetric('CLS', metric.value));
    });
    getFID((metric: WebVitalMetric) => {
      onPerfEntry(createMetric('FID', metric.value));
    });
    getLCP((metric: WebVitalMetric) => {
      onPerfEntry(createMetric('LCP', metric.value));
    });
    getTTFB((metric: WebVitalMetric) => {
      onPerfEntry(createMetric('TTFB', metric.value));
    });
    getFCP((metric: WebVitalMetric) => {
      onPerfEntry(createMetric('FCP', metric.value));
    });
  });

  // Resource timing
  if ('performance' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Resource Timing -', entry.name + ':', {
          startTime: entry.startTime,
          duration: entry.duration,
          fetchStart: entry.fetchStart,
          responseEnd: entry.responseEnd
        });
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }
};

export const reportToAnalytics = (metric: PerformanceMetric) => {
  // Log performance metrics
  console.log('Performance Metric:', {
    ...metric,
    timestamp: new Date(metric.timestamp).toISOString()
  });

  // Implement warning for poor performance
  if (metric.rating === 'poor') {
    console.warn(`Poor ${metric.name} detected:`, metric.value);
  }
};
