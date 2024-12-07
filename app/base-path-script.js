const basePath = process.env.NODE_ENV === 'production' ? '/ww' : '';
document.documentElement.style.setProperty('--bg-image', `url('${basePath}/images/bg-stars.png')`); 