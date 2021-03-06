const mobileBreakpoint = '56rem'; // $mobile-breakpoint

const invisibleAdId = window.matchMedia(`(max-width: ${mobileBreakpoint})`).matches
  ? 'toc-sidebar-ad'
  : 'content-ad'
document.getElementById(invisibleAdId).remove();
ethicalads.load();

if (document.monetization) {
  document.monetization.addEventListener('monetizationstart', () => {
    if (document.monetization.state === 'started') {
      console.log('Payment started, hiding ads');
      document.querySelectorAll('[data-ea-publisher]').forEach((el) => {
        el.hidden = true;
      });
    }
  });
}
