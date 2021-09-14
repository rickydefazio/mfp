import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

export function mount(el) {
  const app = createApp(Dashboard);
  app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const dashboardEl = document.querySelector('#dashboard-dev');

  if (dashboardEl) {
    mount(dashboardEl);
  }
}
