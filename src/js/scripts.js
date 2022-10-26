(function () {
  // @ComponentName
  const componentName = "wiloke-posts-elegant";

  async function init() {
    wiloke.loadStyle({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.css",
    });
    wiloke.loadStyle({
      file: `https://dev-magicbadges.myshopkit.app/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap`,
    });
    await wiloke.loadScript({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.js",
    });
    wiloke.loadStyle({
      file: `https://envato-element-js-core.netlify.app/main.css`,
    });


    function handleVariant5(el) {
      const tooltipEls = el.querySelectorAll(`.${componentName}-tooltip-js`);
      tooltipEls.forEach(tooltipEl => {
        const contentEl = tooltipEl.querySelector(`.${componentName}-tooltip-content-js`);
        tooltipEl.addEventListener('mousemove', event => {
          const left = event.offsetX;
          const top = event.offsetY;
          contentEl.classList.remove('op:0', 'v:hidden');
          contentEl.style.left = `${left + 15}px`;
          contentEl.style.top = `${top + 15}px`;
        });
        tooltipEl.addEventListener('mouseleave', () => {
          contentEl.classList.add('op:0', 'v:hidden');
        })
      });
    }

    wiloke.elementor(`.${componentName}-wrapper`, componentName, async (el) => {
      if (!!el) {
        wiloke.skeleton(el, componentName);
        const swiperEl = el.querySelector(".wil-swiper");
        wiloke.swiper(swiperEl);
        handleVariant5(el);
      }
    });
  }


  if (window.wiloke) {
    init();
  } else {
    const coreJs = "https://envato-element-js-core.netlify.app/main.js";
    const coreJsEl = document.createElement("script");
    coreJsEl.src = coreJs;
    document.body.appendChild(coreJsEl);
    coreJsEl.addEventListener("load", init);
  }
})();
