import { Metric } from 'web-vitals';

type PerfEntryHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: PerfEntryHandler): void => {
  if (typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => {
      console.error('Error loading web-vitals', error);
    });
  }
};

export default reportWebVitals;