module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  
  await require('./clickAndHoverHelper')(page, scenario);


  // add more ready handlers here...

  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 200;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  await page.waitFor(1000);
  /*
  page.evaluate(async () => {
    document.querySelectorAll('[loading="lazy"]').forEach((elem) => {
      elem.loading = 'eager';
    });
  }); */
};
