// SEO Performance Monitoring and Reporting Script for LeafTok
// This script monitors Core Web Vitals, SEO metrics, and generates reports

class SEOMonitor {
    constructor(config = {}) {
        this.config = {
            apiEndpoint: config.apiEndpoint || '/api/seo-metrics',
            reportingInterval: config.reportingInterval || 24 * 60 * 60 * 1000, // 24 hours
            debug: config.debug || false,
            ...config
        };

        this.metrics = {
            coreWebVitals: {},
            seoScore: 0,
            performanceMetrics: {},
            userEngagement: {},
            searchVisibility: {}
        };

        this.init();
    }

    init() {
        this.setupWebVitalsMonitoring();
        this.setupPerformanceObserver();
        this.setupUserEngagementTracking();
        this.setupSEOHealthCheck();
        this.startReporting();

        if (this.config.debug) {
            console.log('[SEO Monitor] Initialized with config:', this.config);
        }
    }

    // Core Web Vitals Monitoring
    setupWebVitalsMonitoring() {
        if (typeof window !== 'undefined' && 'web-vitals' in window) {
            this.loadWebVitals().then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS((metric) => this.recordWebVital('CLS', metric));
                getFID((metric) => this.recordWebVital('FID', metric));
                getFCP((metric) => this.recordWebVital('FCP', metric));
                getLCP((metric) => this.recordWebVital('LCP', metric));
                getTTFB((metric) => this.recordWebVital('TTFB', metric));
            });
        } else {
            // Fallback measurement using Performance API
            this.measureWebVitalsFallback();
        }
    }

    async loadWebVitals() {
        try {
            return await import('https://unpkg.com/web-vitals@3/dist/web-vitals.js');
        } catch (error) {
            console.warn('[SEO Monitor] Failed to load web-vitals library:', error);
            return null;
        }
    }

    recordWebVital(name, metric) {
        this.metrics.coreWebVitals[name] = {
            value: metric.value,
            rating: this.getWebVitalRating(name, metric.value),
            timestamp: Date.now()
        };

        this.log(`${name}: ${metric.value} (${this.metrics.coreWebVitals[name].rating})`);

        // Report critical metrics immediately
        if (this.metrics.coreWebVitals[name].rating === 'poor') {
            this.reportCriticalMetric(name, metric);
        }
    }

    getWebVitalRating(name, value) {
        const thresholds = {
            'CLS': { good: 0.1, poor: 0.25 },
            'FID': { good: 100, poor: 300 },
            'FCP': { good: 1800, poor: 3000 },
            'LCP': { good: 2500, poor: 4000 },
            'TTFB': { good: 800, poor: 1800 }
        };

        const threshold = thresholds[name];
        if (!threshold) return 'unknown';

        if (value <= threshold.good) return 'good';
        if (value <= threshold.poor) return 'needs-improvement';
        return 'poor';
    }

    measureWebVitalsFallback() {
        // Fallback measurements using Performance API
        if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0];

            if (navigation) {
                // Approximate LCP using load event
                this.metrics.coreWebVitals.LCP = {
                    value: navigation.loadEventEnd - navigation.loadEventStart,
                    rating: this.getWebVitalRating('LCP', navigation.loadEventEnd - navigation.loadEventStart),
                    timestamp: Date.now(),
                    fallback: true
                };

                // TTFB
                this.metrics.coreWebVitals.TTFB = {
                    value: navigation.responseStart - navigation.requestStart,
                    rating: this.getWebVitalRating('TTFB', navigation.responseStart - navigation.requestStart),
                    timestamp: Date.now(),
                    fallback: true
                };
            }
        }
    }

    // Performance Observer for detailed metrics
    setupPerformanceObserver() {
        if ('PerformanceObserver' in window) {
            // Navigation timing
            const navObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach((entry) => {
                    this.metrics.performanceMetrics.navigation = {
                        domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                        loadComplete: entry.loadEventEnd - entry.loadEventStart,
                        firstByte: entry.responseStart - entry.requestStart,
                        domInteractive: entry.domInteractive - entry.fetchStart,
                        timestamp: Date.now()
                    };
                });
            });

            try {
                navObserver.observe({ entryTypes: ['navigation'] });
            } catch (e) {
                this.log('Navigation observer not supported');
            }

            // Resource timing
            const resourceObserver = new PerformanceObserver((list) => {
                const resources = list.getEntries();
                this.analyzeResourcePerformance(resources);
            });

            try {
                resourceObserver.observe({ entryTypes: ['resource'] });
            } catch (e) {
                this.log('Resource observer not supported');
            }
        }
    }

    analyzeResourcePerformance(resources) {
        const analysis = {
            totalResources: resources.length,
            slowResources: [],
            largeResources: [],
            failedResources: []
        };

        resources.forEach((resource) => {
            const duration = resource.responseEnd - resource.startTime;

            // Flag slow resources (>3s)
            if (duration > 3000) {
                analysis.slowResources.push({
                    name: resource.name,
                    duration: duration,
                    size: resource.transferSize
                });
            }

            // Flag large resources (>1MB)
            if (resource.transferSize > 1024 * 1024) {
                analysis.largeResources.push({
                    name: resource.name,
                    size: resource.transferSize,
                    duration: duration
                });
            }
        });

        this.metrics.performanceMetrics.resources = analysis;
    }

    // User Engagement Tracking
    setupUserEngagementTracking() {
        let startTime = Date.now();
        let scrollDepth = 0;
        let maxScrollDepth = 0;
        let interactions = 0;

        // Time on page
        const updateTimeOnPage = () => {
            this.metrics.userEngagement.timeOnPage = Date.now() - startTime;
        };

        // Scroll depth tracking
        const trackScrollDepth = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );

            if (scrollPercent > maxScrollDepth) {
                maxScrollDepth = scrollPercent;
                this.metrics.userEngagement.maxScrollDepth = maxScrollDepth;
            }
        };

        // Interaction tracking
        const trackInteraction = () => {
            interactions++;
            this.metrics.userEngagement.interactions = interactions;
        };

        // Event listeners
        window.addEventListener('scroll', trackScrollDepth, { passive: true });
        window.addEventListener('click', trackInteraction);
        window.addEventListener('keydown', trackInteraction);
        window.addEventListener('beforeunload', updateTimeOnPage);

        // Periodic updates
        setInterval(updateTimeOnPage, 5000);
        setInterval(trackScrollDepth, 1000);
    }

    // SEO Health Check
    setupSEOHealthCheck() {
        const seoChecks = {
            hasTitle: () => !!document.title && document.title.length > 0,
            hasMetaDescription: () => {
                const meta = document.querySelector('meta[name="description"]');
                return meta && meta.content && meta.content.length > 50;
            },
            hasStructuredData: () => {
                return document.querySelectorAll('script[type="application/ld+json"]').length > 0;
            },
            hasOpenGraph: () => {
                return document.querySelector('meta[property^="og:"]') !== null;
            },
            hasCanonical: () => {
                return document.querySelector('link[rel="canonical"]') !== null;
            },
            hasHreflang: () => {
                return document.querySelectorAll('link[hreflang]').length > 0;
            },
            hasAltTags: () => {
                const images = document.querySelectorAll('img');
                const imagesWithAlt = document.querySelectorAll('img[alt]');
                return images.length === 0 || (imagesWithAlt.length / images.length) > 0.9;
            },
            hasHeadingStructure: () => {
                const h1Count = document.querySelectorAll('h1').length;
                return h1Count === 1;
            },
            mobileViewport: () => {
                const viewport = document.querySelector('meta[name="viewport"]');
                return viewport && viewport.content.includes('width=device-width');
            },
            httpsEnabled: () => {
                return location.protocol === 'https:';
            }
        };

        let passedChecks = 0;
        const totalChecks = Object.keys(seoChecks).length;
        const results = {};

        Object.entries(seoChecks).forEach(([check, testFn]) => {
            const passed = testFn();
            results[check] = passed;
            if (passed) passedChecks++;
        });

        this.metrics.seoScore = Math.round((passedChecks / totalChecks) * 100);
        this.metrics.seoChecks = results;

        this.log(`SEO Score: ${this.metrics.seoScore}%`);
    }

    // Search Visibility Monitoring
    async checkSearchVisibility() {
        try {
            // This would typically integrate with Search Console API
            // For now, we'll simulate basic checks
            const visibility = {
                indexedPages: await this.checkIndexedPages(),
                searchConsoleData: await this.getSearchConsoleData(),
                keywordRankings: await this.checkKeywordRankings(),
                timestamp: Date.now()
            };

            this.metrics.searchVisibility = visibility;
        } catch (error) {
            this.log('Search visibility check failed:', error);
        }
    }

    async checkIndexedPages() {
        // Simulate checking if pages are indexed
        // In production, this would use Search Console API
        return {
            total: 5,
            indexed: 4,
            notIndexed: 1
        };
    }

    async getSearchConsoleData() {
        // Simulate Search Console data
        // In production, integrate with Google Search Console API
        return {
            impressions: 1250,
            clicks: 89,
            ctr: 7.1,
            position: 12.4
        };
    }

    async checkKeywordRankings() {
        // Simulate keyword ranking check
        // In production, integrate with ranking API
        return {
            'ai reading app': { position: 15, change: +3 },
            'artificial intelligence learning': { position: 28, change: -2 },
            'smart learning cards': { position: 8, change: +1 }
        };
    }

    // Reporting and Analytics
    startReporting() {
        // Initial report
        setTimeout(() => this.generateReport(), 5000);

        // Periodic reporting
        setInterval(() => {
            this.generateReport();
            this.sendReport();
        }, this.config.reportingInterval);
    }

    generateReport() {
        const report = {
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            metrics: this.metrics,
            recommendations: this.generateRecommendations()
        };

        this.latestReport = report;
        this.log('Report generated:', report);

        return report;
    }

    generateRecommendations() {
        const recommendations = [];

        // Core Web Vitals recommendations
        Object.entries(this.metrics.coreWebVitals).forEach(([metric, data]) => {
            if (data.rating === 'poor') {
                recommendations.push({
                    type: 'critical',
                    metric: metric,
                    message: this.getWebVitalRecommendation(metric, data.value),
                    priority: 'high'
                });
            }
        });

        // SEO recommendations
        if (this.metrics.seoScore < 80) {
            Object.entries(this.metrics.seoChecks || {}).forEach(([check, passed]) => {
                if (!passed) {
                    recommendations.push({
                        type: 'seo',
                        check: check,
                        message: this.getSEORecommendation(check),
                        priority: 'medium'
                    });
                }
            });
        }

        // Performance recommendations
        if (this.metrics.performanceMetrics.resources) {
            const { slowResources, largeResources } = this.metrics.performanceMetrics.resources;

            if (slowResources.length > 0) {
                recommendations.push({
                    type: 'performance',
                    message: `${slowResources.length} slow loading resources detected`,
                    details: slowResources,
                    priority: 'medium'
                });
            }

            if (largeResources.length > 0) {
                recommendations.push({
                    type: 'performance',
                    message: `${largeResources.length} large resources detected`,
                    details: largeResources,
                    priority: 'low'
                });
            }
        }

        return recommendations;
    }

    getWebVitalRecommendation(metric, value) {
        const recommendations = {
            'CLS': 'Reduce layout shifts by properly sizing images and avoiding dynamic content insertion',
            'FID': 'Reduce JavaScript execution time and optimize event handlers',
            'FCP': 'Optimize critical rendering path and reduce server response time',
            'LCP': 'Optimize largest contentful element loading and reduce server response time',
            'TTFB': 'Optimize server response time and use CDN for static assets'
        };

        return recommendations[metric] || 'Optimize this metric for better user experience';
    }

    getSEORecommendation(check) {
        const recommendations = {
            'hasTitle': 'Add a descriptive title tag to your page',
            'hasMetaDescription': 'Add a meta description of at least 50 characters',
            'hasStructuredData': 'Add structured data markup for better search visibility',
            'hasOpenGraph': 'Add Open Graph meta tags for better social media sharing',
            'hasCanonical': 'Add a canonical URL to avoid duplicate content issues',
            'hasHreflang': 'Add hreflang tags for international SEO',
            'hasAltTags': 'Add alt attributes to all images for accessibility and SEO',
            'hasHeadingStructure': 'Use exactly one H1 tag per page',
            'mobileViewport': 'Add proper viewport meta tag for mobile optimization',
            'httpsEnabled': 'Enable HTTPS for security and SEO benefits'
        };

        return recommendations[check] || 'Fix this SEO issue for better search visibility';
    }

    async sendReport() {
        if (!this.latestReport || !this.config.apiEndpoint) return;

        try {
            const response = await fetch(this.config.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.latestReport)
            });

            if (response.ok) {
                this.log('Report sent successfully');
            } else {
                this.log('Failed to send report:', response.status);
            }
        } catch (error) {
            this.log('Error sending report:', error);
        }
    }

    reportCriticalMetric(name, metric) {
        // Immediate reporting for critical performance issues
        const criticalReport = {
            type: 'critical_metric',
            timestamp: Date.now(),
            metric: name,
            value: metric.value,
            rating: 'poor',
            url: window.location.href,
            userAgent: navigator.userAgent
        };

        this.log('Critical metric detected:', criticalReport);

        // Send immediately if endpoint available
        if (this.config.apiEndpoint) {
            fetch(this.config.apiEndpoint + '/critical', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(criticalReport)
            }).catch(error => this.log('Failed to send critical report:', error));
        }
    }

    // Public API methods
    getMetrics() {
        return { ...this.metrics };
    }

    getLatestReport() {
        return this.latestReport;
    }

    exportReport(format = 'json') {
        const report = this.generateReport();

        switch (format) {
            case 'csv':
                return this.convertToCSV(report);
            case 'json':
            default:
                return JSON.stringify(report, null, 2);
        }
    }

    convertToCSV(report) {
        const rows = [];

        // Add basic info
        rows.push(['Timestamp', new Date(report.timestamp).toISOString()]);
        rows.push(['URL', report.url]);
        rows.push(['SEO Score', report.metrics.seoScore + '%']);

        // Add Core Web Vitals
        Object.entries(report.metrics.coreWebVitals).forEach(([metric, data]) => {
            rows.push([metric, data.value, data.rating]);
        });

        return rows.map(row => row.join(',')).join('\n');
    }

    log(...args) {
        if (this.config.debug) {
            console.log('[SEO Monitor]', ...args);
        }
    }

    // Cleanup
    destroy() {
        // Clean up event listeners and intervals
        this.log('SEO Monitor destroyed');
    }
}

// Auto-initialization for browser environments
if (typeof window !== 'undefined') {
    // Initialize SEO monitoring when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.seoMonitor = new SEOMonitor({
                debug: true, // Enable in development
                reportingInterval: 30 * 60 * 1000 // 30 minutes in production
            });
        });
    } else {
        window.seoMonitor = new SEOMonitor({
            debug: true,
            reportingInterval: 30 * 60 * 1000
        });
    }
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOMonitor;
}
