
async function loadComponent(elementId, componentPath, params = {}) {
  try {
    const response = await fetch(componentPath);
    let html = await response.text();
    
    // Replace any template parameters
    Object.keys(params).forEach(key => {
      html = html.replace(`{{${key}}}`, params[key]);
    });
    
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Get page title from the data attribute
  const pageTitle = document.body.getAttribute('data-page-title') || 'LJHS Sailing';
  
  // Load head components (excluding script tags)
  loadComponent('head-content', '/components/head.html', {
    PAGE_TITLE: pageTitle
  });
  
  // Load header and footer
  loadComponent('header-component', '/components/header.html');
  loadComponent('footer-component', '/components/footer.html');
});
