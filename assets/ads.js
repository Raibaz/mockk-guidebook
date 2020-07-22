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
